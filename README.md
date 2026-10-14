# 📚 BookLoop — Peer-to-Peer Book Community & Marketplace

> **Give beloved stories a second life.** BookLoop connects passionate readers to discover books, connect over shared genres, and securely buy and sell pre-loved books directly from one another using **Kora Payment Gateway**.

---

## 🚀 Problem & Solution

### The Problem
* **Idle Shelves & Waste:** Millions of good books sit dormant on personal shelves after a single read, while other readers struggle to find affordable copies or rare editions.
* **Complex Retail Layers:** Traditional second-hand retail involves heavy middleman markups and high shipping hurdles for informal book lovers.
* **Unsafe Informal Transactions:** Selling books peer-to-peer over social media or forums often leads to payment anxiety, lack of escrow/tracking, and failed transfers.

### The Solution: BookLoop
* **Direct Reader-to-Reader Marketplace:** Readers can list pre-loved books in under 60 seconds with condition tags, photos, and descriptions.
* **Integrated Kora Checkout:** Buyers complete purchases with one click through Kora's official charge initialization API, supporting Cards, Bank Transfers, and Mobile Money without exposing financial information.
* **Reader Circles & Discovery:** Real-time search, category filters (African Literature, Fiction, Sci-Fi, Philosophy, etc.), and community shelves celebrating favorite genres.

---

## ✨ Core Features

1. **Curated Library & Showcase:**
   - Display sample and community books with high-resolution covers, authors, condition ratings, and prices in Nigerian Naira (₦).
2. **Instant Search & Discovery:**
   - Real-time search across titles, authors, and synopsis.
   - Filter by categories: *African Literature, Fiction, Non-Fiction, Sci-Fi & Fantasy, Personal Growth, Philosophy, Community Listings*.
   - Sorting by Price (Low to High, High to Low) and Recently Listed.
3. **Interactive Book Details & Seller Verification:**
   - Detailed modal showing seller reputation, location, condition inspection notes, ISBN, and direct purchase action.
4. **Official Kora Payment Checkout Flow:**
   - Server-side initialization via Kora's `POST /merchant/api/v1/charges/initialize`.
   - Seamless buyer redirection to Kora's checkout page.
   - Server-side transaction verification via `GET /merchant/api/v1/charges/:reference`.
   - Clear setup feedback if API keys are pending (no fake or simulated successful transactions).
5. **List a Book for Sale:**
   - Modal form enabling any community member to list a book with title, price, condition, photo, and seller contact.
   - Persists in `localStorage` and syncs with backend API.
6. **Reader Circles Community:**
   - Reader profiles highlighting reading lists, badges (*Shelf Curator, Sci-Fi Pioneer, Avid Reader*), and books exchanged.

---

## 🛠️ Technology Stack

* **Frontend:** Clean Semantic HTML5, Vanilla JavaScript (ES6+), Vanilla CSS with CSS Custom Properties, Fraunces serif and Plus Jakarta Sans typography.
* **Backend:** Node.js, Express.js.
* **Payment Gateway:** Kora API (`https://api.korapay.com/merchant/api/v1`).
* **Environment Management:** `dotenv` (strict server-side credential isolation).

---

## 💳 Kora Payment Integration Architecture

BookLoop follows Kora's security best practices by strictly isolating secrets on the server:

```
[Buyer Browser] ──(1) Click "Buy Now"──> [BookLoop Express Server]
                                                │
                                       (2) POST /charges/initialize
                                       (Bearer sk_test_...)
                                                ▼
[Buyer Browser] <──(3) Redirect URL ──── [Kora API Gateway]
       │
   (4) Complete Payment on Kora-Hosted Checkout
       │
       ▼
[Buyer Browser] ──(5) Return to /?payment=verify&reference=XXX──> [BookLoop Server]
                                                                        │
                                                               (6) GET /charges/:ref
                                                                        ▼
[Buyer Browser] <──(7) Order Marked "PAID" Verified ──────────── [Kora API Gateway]
```

### Official Endpoints Implemented:
* **Charge Initialization:** `POST https://api.korapay.com/merchant/api/v1/charges/initialize`
* **Charge Verification:** `GET https://api.korapay.com/merchant/api/v1/charges/:reference`
* **Webhook Listener:** `POST /api/checkout/webhook`

---

## 📦 Setup & Installation Instructions

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd bookloop
npm install
```

### 2. Configure Environment Variables
Copy the example environment file:
```bash
cp .env.example .env
```

Open `.env` and configure your Kora developer credentials:
```env
PORT=3000
APP_BASE_URL=http://localhost:3000

# Obtain your test API keys from https://dashboard.korapay.com/
KORAPAY_SECRET_KEY=sk_test_your_secret_key_here
KORAPAY_PUBLIC_KEY=pk_test_your_public_key_here
```

> **Note:** If `KORAPAY_SECRET_KEY` is not provided, the application will run in **Setup Required** mode. It will clearly guide you to configure your key and will not simulate unverified transactions.

### 3. Run the Application
```bash
npm start
```
Or with auto-reload:
```bash
npm run dev
```

Open your browser at **`http://localhost:3000`**.

---

## 🔒 Security Notice
* Secret keys (`KORAPAY_SECRET_KEY`) are kept strictly on the Node.js server.
* `.env` is ignored in `.gitignore` to prevent leaking credentials to public repositories.
* All buyer transactions are verified against the Kora API before confirming order payment status.

---

## 📄 License
MIT © 2026 BookLoop
