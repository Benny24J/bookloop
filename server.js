const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const KORA_API_BASE = 'https://api.korapay.com/merchant/api/v1';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const orders = new Map();
const customListings = [];

function isKoraConfigured() {
  const key = process.env.KORAPAY_SECRET_KEY;
  return Boolean(key && key.trim() !== '' && !key.includes('placeholder'));
}

app.get('/api/config', (req, res) => {
  const configured = isKoraConfigured();
  res.json({
    status: 'ok',
    appName: 'BookLoop',
    currency: 'NGN',
    currencySymbol: '₦',
    koraConfigured: configured,
    publicKey: configured ? (process.env.KORAPAY_PUBLIC_KEY || 'Configured on server') : null,
    message: configured
      ? 'Kora payment gateway is connected and ready.'
      : 'Kora API credentials are not set. Add KORAPAY_SECRET_KEY to your .env file to enable live/test checkout.'
  });
});

app.post('/api/checkout/initialize', async (req, res) => {
  try {
    const { bookId, bookTitle, amount, buyerName, buyerEmail, sellerName } = req.body;

    if (!bookTitle || !amount || !buyerEmail) {
      return res.status(400).json({
        success: false,
        message: 'Missing required checkout details: bookTitle, amount, and buyerEmail are required.'
      });
    }

    if (!isKoraConfigured()) {
      return res.status(503).json({
        success: false,
        configured: false,
        code: 'KORA_CREDENTIALS_REQUIRED',
        message: 'Kora payment gateway is not yet configured. Please set KORAPAY_SECRET_KEY in the .env file.',
        setupGuide: {
          step1: 'Obtain test keys from https://dashboard.korapay.com/ (Settings > API & Webhooks)',
          step2: 'Add KORAPAY_SECRET_KEY=sk_test_... to your .env file',
          step3: 'Restart the BookLoop server'
        }
      });
    }

    const secretKey = process.env.KORAPAY_SECRET_KEY.trim();
    const appBaseUrl = process.env.APP_BASE_URL || `http://localhost:${PORT}`;
    const reference = `BOOKLOOP-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const payload = {
      amount: Number(amount),
      currency: 'NGN',
      reference: reference,
      narration: `BookLoop purchase: ${bookTitle} from ${sellerName || 'Reader'}`,
      notification_url: `${appBaseUrl}/api/checkout/webhook`,
      redirect_url: `${appBaseUrl}/?payment=verify&reference=${encodeURIComponent(reference)}&bookId=${encodeURIComponent(bookId || '')}`,
      customer: {
        name: buyerName || 'BookLoop Reader',
        email: buyerEmail
      },
      channels: ['card', 'bank_transfer', 'mobile_money']
    };

    console.log(`[Kora API] Initializing charge for reference ${reference}, amount NGN ${amount}...`);

    const response = await fetch(`${KORA_API_BASE}/charges/initialize`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      console.error('[Kora API Error]', data);
      return res.status(response.status || 500).json({
        success: false,
        message: data.message || 'Kora API returned an error during initialization.',
        koraResponse: data
      });
    }

    orders.set(reference, {
      reference,
      bookId,
      bookTitle,
      amount,
      buyerName,
      buyerEmail,
      sellerName,
      status: 'pending',
      createdAt: new Date().toISOString()
    });

    res.json({
      success: true,
      reference: reference,
      checkoutUrl: data.data.checkout_url,
      message: 'Checkout initialized successfully with Kora.'
    });

  } catch (err) {
    console.error('[Server Checkout Error]', err);
    res.status(500).json({
      success: false,
      message: 'Failed to initialize payment with Kora API due to an internal server error.',
      error: err.message
    });
  }
});

app.get('/api/checkout/verify/:reference', async (req, res) => {
  try {
    const { reference } = req.params;

    if (!reference) {
      return res.status(400).json({ success: false, message: 'Transaction reference is required.' });
    }

    if (!isKoraConfigured()) {
      return res.status(503).json({
        success: false,
        configured: false,
        code: 'KORA_CREDENTIALS_REQUIRED',
        message: 'Kora API keys are not configured. Cannot verify live payment without credentials.'
      });
    }

    const secretKey = process.env.KORAPAY_SECRET_KEY.trim();

    console.log(`[Kora API] Querying charge status for reference: ${reference}...`);

    const response = await fetch(`${KORA_API_BASE}/charges/${encodeURIComponent(reference)}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (!response.ok || !data.status) {
      return res.status(response.status || 500).json({
        success: false,
        message: data.message || 'Unable to retrieve transaction status from Kora.',
        koraResponse: data
      });
    }

    const txData = data.data;
    const isPaid = txData.status === 'success';

    if (orders.has(reference)) {
      const order = orders.get(reference);
      order.status = txData.status;
      order.paidAt = new Date().toISOString();
      order.koraData = txData;
      orders.set(reference, order);
    }

    res.json({
      success: true,
      paid: isPaid,
      status: txData.status,
      reference: txData.reference,
      amount: txData.amount,
      amountPaid: txData.amount_paid,
      currency: txData.currency,
      customer: txData.customer,
      message: isPaid ? 'Payment successfully verified by Kora.' : `Payment status is ${txData.status}.`
    });

  } catch (err) {
    console.error('[Server Verify Error]', err);
    res.status(500).json({
      success: false,
      message: 'Failed to verify transaction with Kora API.',
      error: err.message
    });
  }
});

app.post('/api/checkout/webhook', (req, res) => {
  try {
    const event = req.body;
    console.log('[Kora Webhook Received]', event ? event.event : 'empty payload');

    if (event && event.data && event.data.reference) {
      const ref = event.data.reference;
      if (orders.has(ref)) {
        const order = orders.get(ref);
        order.status = event.data.status;
        order.webhookReceivedAt = new Date().toISOString();
      }
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error('[Kora Webhook Error]', err);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

app.get('/api/listings', (req, res) => {
  res.json({ listings: customListings });
});

app.post('/api/listings', (req, res) => {
  const { title, author, price, category, condition, description, sellerName, sellerEmail, coverUrl, location } = req.body;
  if (!title || !price || !sellerName) {
    return res.status(400).json({ error: 'Title, price, and seller name are required' });
  }
  const newBook = {
    id: `custom-${Date.now()}`,
    title,
    author: author || 'Unknown Author',
    price: Number(price),
    category: category || 'General',
    condition: condition || 'Gently Used',
    description: description || 'Pre-loved book in great reading condition.',
    seller: {
      name: sellerName,
      email: sellerEmail || 'seller@bookloop.com',
      location: location || 'Lagos, Nigeria',
      rating: 5.0,
      trades: 1
    },
    coverUrl: coverUrl || '',
    isUserListing: true,
    createdAt: new Date().toISOString()
  };
  customListings.unshift(newBook);
  res.status(201).json({ success: true, book: newBook });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`  BookLoop Server running at http://localhost:${PORT}`);
  console.log(`  Kora Gateway Status: ${isKoraConfigured() ? 'CONFIGURED (Active)' : 'NOT CONFIGURED (Action Required)'}`);
  console.log(`===============================================`);
});
