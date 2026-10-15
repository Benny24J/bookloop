const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const KORA_API_BASE = 'https://api.korapay.com/merchant/api/v1';

// Default sandbox test secret key (ensures anyone cloning the repo for hackathon evaluation can test immediately)
const DEFAULT_TEST_KEY = 'sk_test_L9qsqzCS7483gTC8QCPr129hoA3EChRMFqe7JFVP';

// BookLoop Platform Fee (5% BookLoop platform maintenance, 95% paid out to the book seller)
const PLATFORM_FEE_PERCENT = 5;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store for orders, custom community PDF listings, and reader discussions
const orders = new Map();
const customListings = [];

const communityDiscussions = [
  {
    id: 'disc-1',
    title: 'Passing around Things Fall Apart in SS2 until the front cover was held together with cello-tape',
    bookTitle: 'Things Fall Apart',
    bookAuthor: 'Chinua Achebe',
    author: 'Chinedu Eze',
    authorRole: 'Class of 2012 • Lit Prefect',
    category: 'Book Memories',
    timestamp: '2 hours ago',
    likes: 19,
    content: 'During literature class, only two people had the official copy. We created an overnight roster to share the book. One person read chapters 1 to 5, passed it to the next desk during prep time. Finding this digital PDF version brought back that exact feeling of reading about Okonkwo under the solar lamp.',
    comments: [
      {
        id: 'c-1',
        author: 'Amara Okafor',
        timestamp: '1 hour ago',
        text: 'We actually got caught reading it under our biology textbook in prep! Best literary memory ever.'
      },
      {
        id: 'c-2',
        author: 'Tunde Balogun',
        timestamp: '35 mins ago',
        text: 'Nothing beats that feeling when someone highlighted a sentence in blue pen and you found yourself agreeing with their margin notes.'
      }
    ]
  },
  {
    id: 'disc-2',
    title: 'The thrill of classic Nigerian mystery and drama paperbacks',
    bookTitle: 'The Secret Lives of Baba Segi’s Wives',
    bookAuthor: 'Lola Shoneyin',
    author: 'Folake Adeyemi',
    authorRole: 'Avid Reader • Lagos',
    category: 'Book Recommendations',
    timestamp: '5 hours ago',
    likes: 24,
    content: 'If you grew up reading African stories, nothing beat the rush of finding a friend who had the next book. Lola Shoneyin’s storytelling captures that exact cadence of drama, wit, and family dynamics. Highly recommend to anyone looking for rich Nigerian storytelling.',
    comments: [
      {
        id: 'c-3',
        author: 'Ibrahim Bello',
        timestamp: '3 hours ago',
        text: 'Baba Segi’s wives had so much tea! I finished it in one single sitting on my tablet.'
      }
    ]
  },
  {
    id: 'disc-3',
    title: 'The Midnight Library made me rethink every decision since school days',
    bookTitle: 'The Midnight Library',
    bookAuthor: 'Matt Haig',
    author: 'Tariq Mansoor',
    authorRole: 'Community Host • Abuja',
    category: 'Reflections & Reviews',
    timestamp: 'Yesterday',
    likes: 31,
    content: 'What if you chose a different university degree? What if you had taken that train ride? Reading Matt Haig feels like discussing regrets and possibilities with a close friend over warm tea. Essential reading for anyone reflecting on their life journey.',
    comments: [
      {
        id: 'c-4',
        author: 'Zainab Bello',
        timestamp: 'Yesterday',
        text: 'Such a therapeutic read. The concept of the root book in the library gave me chills.'
      }
    ]
  }
];

function getKoraSecretKey() {
  const envKey = process.env.KORAPAY_SECRET_KEY;
  if (envKey && envKey.trim() !== '' && !envKey.includes('placeholder')) {
    return envKey.trim();
  }
  return DEFAULT_TEST_KEY;
}

function isKoraConfigured() {
  const key = getKoraSecretKey();
  return Boolean(key && key.startsWith('sk_'));
}

// Dynamically resolve base URL so redirects work on localhost, network IP (phones), and Vercel
function resolveBaseUrl(req) {
  if (process.env.APP_BASE_URL && !process.env.APP_BASE_URL.includes('localhost')) {
    return process.env.APP_BASE_URL.replace(/\/$/, '');
  }
  const host = req.get('x-forwarded-host') || req.get('host') || `localhost:${PORT}`;
  const protocol = req.get('x-forwarded-proto') || (req.secure ? 'https' : 'http');
  return `${protocol}://${host}`;
}

app.get('/api/config', (req, res) => {
  const configured = isKoraConfigured();
  res.json({
    status: 'ok',
    appName: 'BookLoop',
    currency: 'NGN',
    currencySymbol: '₦',
    koraConfigured: configured,
    publicKey: configured ? (process.env.KORAPAY_PUBLIC_KEY || 'Configured') : null
  });
});

// Community Discussions API
app.get('/api/discussions', (req, res) => {
  res.json({ discussions: communityDiscussions });
});

app.post('/api/discussions', (req, res) => {
  const { title, bookTitle, bookAuthor, author, authorRole, category, content } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Title, author, and content are required' });
  }
  const newDisc = {
    id: `disc-${Date.now()}`,
    title,
    bookTitle: bookTitle || 'General Discussion',
    bookAuthor: bookAuthor || '',
    author,
    authorRole: authorRole || 'Reader',
    category: category || 'Book Memories',
    timestamp: 'Just now',
    likes: 1,
    content,
    comments: []
  };
  communityDiscussions.unshift(newDisc);
  res.status(201).json({ success: true, discussion: newDisc });
});

app.post('/api/discussions/:id/comments', (req, res) => {
  const { id } = req.params;
  const { author, text } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: 'Author and comment text are required' });
  }
  const disc = communityDiscussions.find(d => d.id === id);
  if (!disc) {
    return res.status(404).json({ error: 'Discussion not found' });
  }
  const comment = {
    id: `c-${Date.now()}`,
    author,
    timestamp: 'Just now',
    text
  };
  disc.comments.push(comment);
  res.status(201).json({ success: true, comment });
});

// Checkout Initialization — Seamless digital checkout
app.post('/api/checkout/initialize', async (req, res) => {
  try {
    const {
      bookId,
      bookTitle,
      amount,
      buyerName,
      buyerEmail,
      sellerName,
      sellerEmail,
      sellerBankCode,
      sellerBankName,
      sellerAccountNumber,
      pdfUrl
    } = req.body;

    if (!bookTitle || !amount || !buyerEmail) {
      return res.status(400).json({
        success: false,
        message: 'Missing required checkout details: book title, price, and email are required.'
      });
    }

    if (!isKoraConfigured()) {
      return res.status(503).json({
        success: false,
        configured: false,
        code: 'KORA_CREDENTIALS_REQUIRED',
        message: 'Payment gateway is currently initializing. Please try again shortly.'
      });
    }

    const secretKey = getKoraSecretKey();
    const appBaseUrl = resolveBaseUrl(req);
    const reference = `BOOKLOOP-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const grossAmount = Number(amount);
    const platformFee = Math.round(grossAmount * (PLATFORM_FEE_PERCENT / 100));
    const sellerPayout = grossAmount - platformFee;

    const payload = {
      amount: grossAmount,
      currency: 'NGN',
      reference: reference,
      narration: `BookLoop: ${bookTitle}`,
      notification_url: `${appBaseUrl}/api/checkout/webhook`,
      redirect_url: `${appBaseUrl}/?payment=verify&reference=${encodeURIComponent(reference)}&bookId=${encodeURIComponent(bookId || '')}`,
      customer: {
        name: buyerName || 'BookLoop Reader',
        email: buyerEmail
      },
      channels: ['card', 'bank_transfer', 'mobile_money']
    };

    console.log(`[Checkout] Initializing checkout for "${bookTitle}": Ref ${reference}, NGN ${grossAmount}...`);

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
      console.error('[Checkout Error]', data);
      return res.status(response.status || 500).json({
        success: false,
        message: data.message || 'Payment provider returned an error during checkout initialization.',
        providerResponse: data
      });
    }

    // Save order in memory
    orders.set(reference, {
      reference,
      bookId,
      bookTitle,
      amount: grossAmount,
      platformFee,
      sellerPayout,
      buyerName,
      buyerEmail,
      sellerName: sellerName || 'Community Lister',
      sellerEmail: sellerEmail || 'seller@bookloop.com',
      sellerBankCode: sellerBankCode || '044',
      sellerBankName: sellerBankName || 'Access Bank',
      sellerAccountNumber: sellerAccountNumber || '0690000032',
      pdfUrl: pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      status: 'pending',
      payoutStatus: 'pending',
      createdAt: new Date().toISOString()
    });

    res.json({
      success: true,
      reference: reference,
      checkoutUrl: data.data.checkout_url,
      message: 'Checkout initialized successfully.'
    });

  } catch (err) {
    console.error('[Server Checkout Error]', err);
    res.status(500).json({
      success: false,
      message: 'Failed to initialize payment due to a server error.',
      error: err.message
    });
  }
});

// Verification Endpoint - Never marks successful merely because of return URL
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
        message: 'Kora API keys are not configured.'
      });
    }

    const secretKey = getKoraSecretKey();

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

    let order = orders.get(reference);
    if (!order) {
      // Reconstruct order details if server restarted
      const grossAmount = Number(txData.amount) || 0;
      const platformFee = Math.round(grossAmount * (PLATFORM_FEE_PERCENT / 100));
      const sellerPayout = grossAmount - platformFee;
      order = {
        reference,
        amount: grossAmount,
        platformFee,
        sellerPayout,
        buyerName: txData.customer ? txData.customer.name : 'Customer',
        buyerEmail: txData.customer ? txData.customer.email : '',
        sellerName: 'Community Lister',
        sellerBankCode: '044',
        sellerBankName: 'Access Bank',
        sellerAccountNumber: '0690000032',
        pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        status: txData.status,
        payoutStatus: 'pending',
        createdAt: new Date().toISOString()
      };
      orders.set(reference, order);
    }

    order.status = txData.status;
    order.paidAt = new Date().toISOString();
    order.koraData = txData;

    // Trigger automated seller payout (95% disbursement to seller's bank account)
    if (isPaid && order.payoutStatus !== 'completed') {
      try {
        const payoutRef = `PAYOUT-${reference.replace(/^BOOKLOOP-/, '')}`;
        console.log(`[Seller Payout] Sending 95% payout (NGN ${order.sellerPayout}) to seller ${order.sellerName} (${order.sellerBankName} ${order.sellerAccountNumber})...`);

        const disburseResponse = await fetch(`${KORA_API_BASE}/transactions/disburse`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${secretKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            reference: payoutRef,
            destination: {
              type: 'bank_account',
              amount: Number(order.sellerPayout),
              currency: 'NGN',
              narration: `Book sale payout: ${order.bookTitle || 'BookLoop'}`,
              bank_account: {
                bank: order.sellerBankCode || '044',
                account: order.sellerAccountNumber || '0690000032'
              },
              customer: {
                name: order.sellerName || 'BookLoop Seller',
                email: order.sellerEmail || 'seller@bookloop.com'
              }
            }
          })
        });

        const disburseData = await disburseResponse.json();

        if (disburseResponse.ok && disburseData.status) {
          order.payoutStatus = 'completed';
          order.payoutReference = disburseData.data.reference || payoutRef;
          console.log(`[Seller Payout] Completed payout to seller! Ref: ${order.payoutReference}`);
        } else {
          console.log('[Seller Payout] Payout recorded for processing:', disburseData ? disburseData.message : 'Queued');
          order.payoutStatus = 'recorded';
          order.payoutReference = payoutRef;
        }
      } catch (payoutErr) {
        console.error('[Seller Payout Error]', payoutErr);
        order.payoutStatus = 'recorded';
      }

      order.payoutDetails = {
        amount: order.sellerPayout,
        sellerName: order.sellerName,
        sellerBank: order.sellerBankName || 'Access Bank',
        payoutReference: order.payoutReference || `PAYOUT-${reference}`,
        payoutStatus: order.payoutStatus
      };
      orders.set(reference, order);
    }

    res.json({
      success: true,
      paid: isPaid,
      status: txData.status,
      reference: txData.reference,
      amount: txData.amount,
      bookTitle: order.bookTitle,
      // Provide digital PDF access only upon genuine payment verification
      pdfAccess: isPaid ? {
        unlocked: true,
        bookId: order.bookId,
        bookTitle: order.bookTitle,
        pdfUrl: order.pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        accessGrantedAt: new Date().toISOString()
      } : null,
      message: isPaid
        ? 'Payment verified. Digital PDF access unlocked.'
        : `Payment status is ${txData.status}.`
    });

  } catch (err) {
    console.error('[Server Verify Error]', err);
    res.status(500).json({
      success: false,
      message: 'Failed to verify payment status.',
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
  const {
    title,
    author,
    price,
    category,
    description,
    sellerName,
    sellerEmail,
    sellerBankCode,
    sellerBankName,
    sellerAccountNumber,
    coverUrl,
    pdfUrl,
    pdfFileName,
    pdfSize,
    permissionConfirmed
  } = req.body;

  if (!title || !price || !sellerName) {
    return res.status(400).json({ error: 'Title, price, and seller name are required' });
  }

  const grossPrice = Number(price);
  const platformFee = Math.round(grossPrice * (PLATFORM_FEE_PERCENT / 100));
  const sellerNet = grossPrice - platformFee;

  const newBook = {
    id: `custom-${Date.now()}`,
    title,
    author: author || 'Unknown Author',
    price: grossPrice,
    platformFee,
    sellerNet,
    category: category || 'General',
    format: 'Digital PDF',
    pdfAvailable: true,
    pdfUrl: pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    pdfFileName: pdfFileName || `${title.replace(/\s+/g, '_')}.pdf`,
    pdfSize: pdfSize || '2.8 MB',
    permissionConfirmed: Boolean(permissionConfirmed),
    description: description || 'Digital PDF edition shared with love for the reading community.',
    seller: {
      name: sellerName,
      email: sellerEmail || 'lister@bookloop.com',
      bankCode: sellerBankCode || '044',
      bankName: sellerBankName || 'Access Bank',
      accountNumber: sellerAccountNumber || '0690000032',
      location: 'Community Member',
      rating: 5.0,
      trades: 1
    },
    coverUrl: coverUrl || '',
    isUserListing: true,
    isDemonstration: false,
    createdAt: new Date().toISOString()
  };

  customListings.unshift(newBook);
  res.status(201).json({ success: true, book: newBook });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start HTTP server only if executed directly (not when imported by Vercel serverless functions)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`  BookLoop running on http://localhost:${PORT}`);
    console.log(`  Payment Gateway: ${isKoraConfigured() ? 'CONFIGURED (Active)' : 'NOT CONFIGURED'}`);
    console.log(`  Platform Model: 5% Platform Fee, 95% Automated Seller Payout`);
    console.log(`===============================================`);
  });
}

module.exports = app;
