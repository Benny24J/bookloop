const SAMPLE_BOOKS = [
  {
    id: 'book-1',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    price: 3500,
    category: 'African Literature',
    condition: 'Gently Used',
    description: 'A masterpiece of African literature chronicling pre-colonial life in southeastern Nigeria and the arrival of Europeans. Clean pages, no dog-ears.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Chinedu Eze',
      email: 'chinedu.eze@example.com',
      location: 'Enugu, Nigeria',
      rating: 4.9,
      trades: 14
    },
    isbn: '978-0385474542',
    pages: 209,
    createdAt: '2026-10-10'
  },
  {
    id: 'book-2',
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    price: 4800,
    category: 'African Literature',
    condition: 'Mint / Like New',
    description: 'Epic novel depicting the Biafran War through the interwoven lives of three characters. Pristine copy, read once and kept on a dust-free shelf.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Folake Adeyemi',
      email: 'folake.reads@example.com',
      location: 'Ikeja, Lagos',
      rating: 5.0,
      trades: 28
    },
    isbn: '978-1400095209',
    pages: 448,
    createdAt: '2026-10-12'
  },
  {
    id: 'book-3',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 4200,
    category: 'Fiction',
    condition: 'Gently Used',
    description: 'Between life and death there is a library containing books of all the lives you could have lived. Heartwarming and reflective.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Tariq Mansoor',
      email: 'tariq.m@example.com',
      location: 'Abuja, FCT',
      rating: 4.8,
      trades: 9
    },
    isbn: '978-0525559474',
    pages: 304,
    createdAt: '2026-10-11'
  },
  {
    id: 'book-4',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 5500,
    category: 'Personal Growth',
    condition: 'Mint / Like New',
    description: 'An easy & proven way to build good habits and break bad ones. Hardcover edition with bookmark ribbon included.',
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Zainab Bello',
      email: 'zainab.bello@example.com',
      location: 'Kano, Nigeria',
      rating: 4.95,
      trades: 19
    },
    isbn: '978-0735211292',
    pages: 320,
    createdAt: '2026-10-09'
  },
  {
    id: 'book-5',
    title: 'Dune',
    author: 'Frank Herbert',
    price: 5000,
    category: 'Sci-Fi & Fantasy',
    condition: 'Well-Loved',
    description: 'The monumental sci-fi saga of Paul Atreides and the desert planet Arrakis. Minor spine creases, but pages intact and wonderful to hold.',
    coverUrl: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Emeka Nwosu',
      email: 'emeka.sci@example.com',
      location: 'Port Harcourt, Rivers',
      rating: 4.7,
      trades: 33
    },
    isbn: '978-0441172719',
    pages: 688,
    createdAt: '2026-10-08'
  },
  {
    id: 'book-6',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    price: 2900,
    category: 'Philosophy',
    condition: 'Gently Used',
    description: 'Gregory Hays translation. Personal reflections of the Roman Emperor on Stoic philosophy, resilience, and living purposefully.',
    coverUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Damilola Ajayi',
      email: 'damilola.a@example.com',
      location: 'Yaba, Lagos',
      rating: 5.0,
      trades: 12
    },
    isbn: '978-0812968255',
    pages: 256,
    createdAt: '2026-10-13'
  },
  {
    id: 'book-7',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    price: 5200,
    category: 'Non-Fiction',
    condition: 'Gently Used',
    description: 'Explores how biology and history defined us and enhanced our understanding of what it means to be human.',
    coverUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Amina Idris',
      email: 'amina.reads@example.com',
      location: 'Kaduna, Nigeria',
      rating: 4.85,
      trades: 17
    },
    isbn: '978-0062316097',
    pages: 464,
    createdAt: '2026-10-05'
  },
  {
    id: 'book-8',
    title: 'The Secret Lives of Baba Segi’s Wives',
    author: 'Lola Shoneyin',
    price: 3800,
    category: 'African Literature',
    condition: 'Mint / Like New',
    description: 'A rich and absorbing tale of modern polygamy, deceit, and secrets in contemporary Ibadan. Outstanding storytelling.',
    coverUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Kemi Sowande',
      email: 'kemi.s@example.com',
      location: 'Ibadan, Oyo',
      rating: 5.0,
      trades: 21
    },
    isbn: '978-0061946370',
    pages: 288,
    createdAt: '2026-10-14'
  }
];

const COMMUNITY_READERS = [
  {
    name: 'Folake Adeyemi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    location: 'Lagos, Nigeria',
    favoriteGenres: ['African Lit', 'Contemporary Fiction'],
    bio: 'Avid collector of post-independence African fiction. Exchanging reads to keep community shelves active!',
    booksExchanged: 28,
    badge: 'Shelf Curator'
  },
  {
    name: 'Emeka Nwosu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    location: 'Port Harcourt',
    favoriteGenres: ['Sci-Fi', 'World History', 'Graphic Novels'],
    bio: 'Always seeking classic hard sci-fi and speculative fiction from around the globe.',
    booksExchanged: 33,
    badge: 'Sci-Fi Pioneer'
  },
  {
    name: 'Zainab Bello',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    location: 'Kano, Nigeria',
    favoriteGenres: ['Personal Growth', 'Business', 'Philosophy'],
    bio: 'Reading 40 books a year. Love sharing actionable insights and well-cared paperbacks.',
    booksExchanged: 19,
    badge: 'Avid Reader'
  },
  {
    name: 'Tariq Mansoor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    location: 'Abuja, FCT',
    favoriteGenres: ['Literary Fiction', 'Biographies', 'Mystery'],
    bio: 'Book club organizer in Garki. Passionate about sustainable physical book circulation.',
    booksExchanged: 14,
    badge: 'Community Host'
  }
];

let allBooks = [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let selectedBook = null;
let koraGatewayStatus = {
  configured: false,
  message: 'Checking gateway status...'
};

const bookGrid = document.getElementById('book-grid');
const noResultsState = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryPills = document.getElementById('category-pills');
const sortBySelect = document.getElementById('sort-by');
const resultsCount = document.getElementById('results-count');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const readersGrid = document.getElementById('readers-grid');

const bookModal = document.getElementById('book-modal');
const closeBookModal = document.getElementById('close-book-modal');
const bookModalContent = document.getElementById('book-modal-content');

const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutModal = document.getElementById('close-checkout-modal');
const cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');
const checkoutSummaryBox = document.getElementById('checkout-summary-box');
const checkoutForm = document.getElementById('checkout-form');
const checkoutCredentialsAlert = document.getElementById('checkout-credentials-alert');
const submitCheckoutBtn = document.getElementById('submit-checkout-btn');

const listBookModal = document.getElementById('list-book-modal');
const openListModalBtn = document.getElementById('open-list-modal');
const closeListModalBtn = document.getElementById('close-list-modal');
const cancelListBtn = document.getElementById('cancel-list-btn');
const listBookForm = document.getElementById('list-book-form');
const ctaSellBtn = document.getElementById('cta-sell-btn');
const footerListBtn = document.getElementById('footer-list-btn');

const koraSetupModal = document.getElementById('kora-setup-modal');
const closeKoraModalBtn = document.getElementById('close-kora-modal');
const closeKoraInfoBtn = document.getElementById('close-kora-info-btn');
const gatewayStatusPill = document.getElementById('gateway-status-pill');
const gatewayStatusDetail = document.getElementById('gateway-status-detail');

const paymentBanner = document.getElementById('payment-notification');
const notificationIcon = document.getElementById('notification-icon');
const notificationTitle = document.getElementById('notification-title');
const notificationDesc = document.getElementById('notification-desc');
const closeBannerBtn = document.getElementById('close-banner');

document.addEventListener('DOMContentLoaded', async () => {
  initStorage();
  renderReaders();
  setupEventListeners();
  await checkGatewayStatus();
  checkUrlPaymentVerification();
  applyFiltersAndRender();
});

function initStorage() {
  const storedListings = localStorage.getItem('bookloop_custom_listings');
  let userListings = [];
  if (storedListings) {
    try {
      userListings = JSON.parse(storedListings);
    } catch (e) {
      userListings = [];
    }
  }
  allBooks = [...userListings, ...SAMPLE_BOOKS];
}

async function checkGatewayStatus() {
  try {
    const res = await fetch('/api/config');
    const data = await res.json();
    koraGatewayStatus = data;

    if (data.koraConfigured) {
      gatewayStatusPill.className = 'gateway-pill online';
      gatewayStatusPill.innerHTML = `
        <span class="status-dot"></span>
        <span class="status-label">Kora Gateway (Live/Sandbox)</span>
      `;
    } else {
      gatewayStatusPill.className = 'gateway-pill setup-required';
      gatewayStatusPill.innerHTML = `
        <span class="status-dot"></span>
        <span class="status-label">Kora Setup Required</span>
      `;
    }
  } catch (err) {
    gatewayStatusPill.className = 'gateway-pill setup-required';
    gatewayStatusPill.innerHTML = `
      <span class="status-dot"></span>
      <span class="status-label">Kora Offline</span>
    `;
  }
}

async function checkUrlPaymentVerification() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentState = urlParams.get('payment');
  const reference = urlParams.get('reference');

  if (paymentState === 'verify' && reference) {
    showBanner('⏳', 'Verifying Kora Transaction...', `Querying Kora Gateway for reference: ${reference}`, 'info');

    try {
      const res = await fetch(`/api/checkout/verify/${encodeURIComponent(reference)}`);
      const result = await res.json();

      if (result.success && result.paid) {
        showBanner('🎉', 'Payment Confirmed by Kora!', `Transaction #${reference} was verified as SUCCESSFUL. Amount: ₦${Number(result.amount).toLocaleString()}. Order marked as PAID.`, 'success');
        showToast(`Payment verified for order #${reference}!`, 'success');
      } else if (result.configured === false) {
        showBanner('⚠️', 'Kora Credentials Required for Verification', 'The server cannot verify without KORAPAY_SECRET_KEY in your .env file.', 'warning');
      } else {
        showBanner('ℹ️', 'Kora Transaction Status', `Reference #${reference} returned status: ${result.status || 'pending'}.`, 'warning');
      }
    } catch (err) {
      showBanner('⚠️', 'Verification Query Error', `Unable to verify reference #${reference}: ${err.message}`, 'warning');
    }

    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

function showBanner(icon, title, desc, type = 'info') {
  notificationIcon.textContent = icon;
  notificationTitle.textContent = title;
  notificationDesc.textContent = desc;
  paymentBanner.className = `notification-banner ${type}`;
  paymentBanner.classList.remove('hidden');
}

function applyFiltersAndRender() {
  let filtered = [...allBooks];

  if (activeCategory === 'Community Listings') {
    filtered = filtered.filter(b => b.isUserListing);
  } else if (activeCategory !== 'all') {
    filtered = filtered.filter(b => b.category.toLowerCase() === activeCategory.toLowerCase());
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.seller.name.toLowerCase().includes(q)
    );
  }

  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'newest') {
    filtered.sort((a, b) => (new Date(b.createdAt) - new Date(a.createdAt)));
  }

  renderBooks(filtered);
}

function renderBooks(books) {
  bookGrid.innerHTML = '';

  if (books.length === 0) {
    bookGrid.classList.add('hidden');
    noResultsState.classList.remove('hidden');
    resultsCount.textContent = '0 books found';
    return;
  }

  bookGrid.classList.remove('hidden');
  noResultsState.classList.add('hidden');
  resultsCount.textContent = `Showing ${books.length} ${books.length === 1 ? 'book' : 'books'}`;

  books.forEach(book => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.setAttribute('data-id', book.id);

    let coverHtml = '';
    if (book.coverUrl && book.coverUrl.trim() !== '') {
      coverHtml = `
        <img src="${escapeHtml(book.coverUrl)}" alt="${escapeHtml(book.title)}" class="book-cover-img" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'book-cover-css-styled\\'><h4>${escapeHtml(book.title)}</h4><p>${escapeHtml(book.author)}</p></div>';">
      `;
    } else {
      coverHtml = `
        <div class="book-cover-css-styled">
          <h4>${escapeHtml(book.title)}</h4>
          <p>${escapeHtml(book.author)}</p>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="book-cover-wrap" data-action="view-details" data-id="${book.id}">
        ${coverHtml}
        <span class="book-badge-condition">${escapeHtml(book.condition || 'Good')}</span>
        ${book.isUserListing ? '<span class="book-badge-user-listing">Community Listing</span>' : ''}
      </div>

      <div class="book-meta">
        <span class="book-genre">${escapeHtml(book.category)}</span>
        <h3 class="book-title" data-action="view-details" data-id="${book.id}">${escapeHtml(book.title)}</h3>
        <p class="book-author">by ${escapeHtml(book.author)}</p>

        <div class="book-seller-row">
          <div class="seller-info">
            <span class="seller-avatar">${book.seller.name.charAt(0)}</span>
            <span>${escapeHtml(book.seller.name)}</span>
          </div>
          <span class="seller-rating">★ ${book.seller.rating || 5.0}</span>
        </div>

        <div class="book-footer-action">
          <div class="book-price">
            <span class="price-val">₦${Number(book.price).toLocaleString()}</span>
            <span class="price-sub">direct price</span>
          </div>

          <div class="book-actions-group">
            <button class="btn btn-sm btn-secondary" data-action="view-details" data-id="${book.id}" title="View Details">
              Details
            </button>
            <button class="btn btn-sm btn-primary" data-action="buy-now" data-id="${book.id}">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    `;

    bookGrid.appendChild(card);
  });
}

function renderReaders() {
  readersGrid.innerHTML = '';
  COMMUNITY_READERS.forEach(reader => {
    const card = document.createElement('div');
    card.className = 'reader-card';

    const tagsHtml = reader.favoriteGenres.map(g => `<span class="genre-tag">${escapeHtml(g)}</span>`).join('');

    card.innerHTML = `
      <div class="reader-header">
        <img src="${escapeHtml(reader.avatar)}" alt="${escapeHtml(reader.name)}" class="reader-img" loading="lazy">
        <div>
          <h4 class="reader-name">${escapeHtml(reader.name)}</h4>
          <span class="reader-loc">📍 ${escapeHtml(reader.location)}</span>
        </div>
      </div>

      <p class="reader-bio">"${escapeHtml(reader.bio)}"</p>

      <span class="reader-genres-label">Favorite Genres</span>
      <div class="reader-genre-tags">
        ${tagsHtml}
      </div>

      <div class="reader-footer">
        <span>📖 ${reader.booksExchanged} books exchanged</span>
        <span>${escapeHtml(reader.badge)}</span>
      </div>
    `;

    readersGrid.appendChild(card);
  });
}

function openBookDetails(bookId) {
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  selectedBook = book;

  let coverHtml = '';
  if (book.coverUrl && book.coverUrl.trim() !== '') {
    coverHtml = `<img src="${escapeHtml(book.coverUrl)}" alt="${escapeHtml(book.title)}" class="modal-book-img" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'book-cover-css-styled\\' style=\\'height:300px;border-radius:12px;\\'><h4>${escapeHtml(book.title)}</h4><p>${escapeHtml(book.author)}</p></div>';">`;
  } else {
    coverHtml = `<div class="book-cover-css-styled" style="height:300px;border-radius:12px;"><h4>${escapeHtml(book.title)}</h4><p>${escapeHtml(book.author)}</p></div>`;
  }

  bookModalContent.innerHTML = `
    <div class="book-modal-grid">
      <div class="modal-book-media">
        ${coverHtml}
      </div>

      <div class="modal-book-info">
        <span class="modal-badge">${escapeHtml(book.category)}</span>
        <h2 class="modal-book-title" id="modal-book-title">${escapeHtml(book.title)}</h2>
        <p class="modal-book-author">By <strong>${escapeHtml(book.author)}</strong></p>

        <p class="modal-book-desc">${escapeHtml(book.description)}</p>

        <div class="modal-seller-box">
          <div class="modal-seller-title">Seller & Copy Information</div>
          <div class="modal-seller-details">
            <div>
              <strong>${escapeHtml(book.seller.name)}</strong>
              <div style="font-size:0.82rem; color:var(--text-muted);">📍 ${escapeHtml(book.seller.location || 'Nigeria')}</div>
            </div>
            <div style="text-align:right;">
              <span class="seller-rating">★ ${book.seller.rating || 5.0} Rating</span>
              <div style="font-size:0.82rem; color:var(--text-muted);">${book.seller.trades || 1} successful trades</div>
            </div>
          </div>
          <div style="margin-top:0.6rem; font-size:0.82rem; color:var(--text-muted); border-top:1px dashed var(--border-warm); padding-top:0.5rem;">
            Condition: <strong>${escapeHtml(book.condition || 'Good')}</strong> ${book.isbn ? `• ISBN: ${escapeHtml(book.isbn)}` : ''}
          </div>
        </div>

        <div class="modal-book-price-bar">
          <div class="book-price">
            <span class="price-val">₦${Number(book.price).toLocaleString()}</span>
            <span class="price-sub">Available for instant purchase</span>
          </div>

          <button class="btn btn-primary btn-lg" id="modal-buy-btn" data-id="${book.id}">
            Buy Now with Kora &rarr;
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-buy-btn').addEventListener('click', () => {
    closeBookModalFn();
    startCheckoutFlow(book);
  });

  bookModal.classList.remove('hidden');
}

function closeBookModalFn() {
  bookModal.classList.add('hidden');
}

function startCheckoutFlow(book) {
  selectedBook = book;

  checkoutSummaryBox.innerHTML = `
    <div class="summary-details">
      <h4>${escapeHtml(book.title)}</h4>
      <p>Seller: ${escapeHtml(book.seller.name)} • ${escapeHtml(book.condition || 'Good condition')}</p>
    </div>
    <div class="summary-amount">
      ₦${Number(book.price).toLocaleString()}
    </div>
  `;

  if (!koraGatewayStatus.koraConfigured) {
    checkoutCredentialsAlert.classList.remove('hidden');
  } else {
    checkoutCredentialsAlert.classList.add('hidden');
  }

  const savedEmail = localStorage.getItem('bookloop_buyer_email');
  const savedName = localStorage.getItem('bookloop_buyer_name');
  if (savedEmail) document.getElementById('buyer-email').value = savedEmail;
  if (savedName) document.getElementById('buyer-name').value = savedName;

  checkoutModal.classList.remove('hidden');
}

function closeCheckoutModalFn() {
  checkoutModal.classList.add('hidden');
  setCheckoutLoading(false);
}

function setCheckoutLoading(isLoading) {
  const btnText = submitCheckoutBtn.querySelector('.btn-text');
  const spinner = submitCheckoutBtn.querySelector('.btn-spinner');
  if (isLoading) {
    submitCheckoutBtn.disabled = true;
    btnText.textContent = 'Connecting to Kora...';
    spinner.classList.remove('hidden');
  } else {
    submitCheckoutBtn.disabled = false;
    btnText.textContent = 'Pay Now with Kora →';
    spinner.classList.add('hidden');
  }
}

async function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!selectedBook) return;

  const buyerName = document.getElementById('buyer-name').value.trim();
  const buyerEmail = document.getElementById('buyer-email').value.trim();

  if (!buyerEmail) {
    showToast('Please provide a valid email address.', 'error');
    return;
  }

  localStorage.setItem('bookloop_buyer_email', buyerEmail);
  localStorage.setItem('bookloop_buyer_name', buyerName);

  setCheckoutLoading(true);

  try {
    const payload = {
      bookId: selectedBook.id,
      bookTitle: selectedBook.title,
      amount: selectedBook.price,
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      sellerName: selectedBook.seller.name
    };

    const response = await fetch('/api/checkout/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.success && data.checkoutUrl) {
      showToast('Redirecting to Kora payment gateway...', 'info');
      setTimeout(() => {
        window.location.href = data.checkoutUrl;
      }, 700);
      return;
    }

    if (data.code === 'KORA_CREDENTIALS_REQUIRED' || !data.success) {
      setCheckoutLoading(false);
      showToast(data.message || 'Kora setup required.', 'error');
      
      checkoutCredentialsAlert.classList.remove('hidden');
      openKoraSetupModal();
      return;
    }

  } catch (err) {
    setCheckoutLoading(false);
    showToast(`Checkout initialization failed: ${err.message}`, 'error');
  }
}

function openListBookModal() {
  listBookModal.classList.remove('hidden');
}

function closeListBookModal() {
  listBookModal.classList.add('hidden');
}

async function handleListBookSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('list-title').value.trim();
  const author = document.getElementById('list-author').value.trim();
  const price = Number(document.getElementById('list-price').value);
  const category = document.getElementById('list-category').value;
  const condition = document.getElementById('list-condition').value;
  const location = document.getElementById('list-location').value.trim() || 'Nigeria';
  const coverUrl = document.getElementById('list-cover').value.trim();
  const description = document.getElementById('list-desc').value.trim() || 'Pre-loved book in great condition.';
  const sellerName = document.getElementById('list-seller-name').value.trim();
  const sellerEmail = document.getElementById('list-seller-email').value.trim();

  if (!title || !price || !sellerName || !sellerEmail) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  const newBook = {
    id: `book-${Date.now()}`,
    title,
    author: author || 'Unknown Author',
    price,
    category,
    condition,
    description,
    coverUrl,
    seller: {
      name: sellerName,
      email: sellerEmail,
      location,
      rating: 5.0,
      trades: 1
    },
    isUserListing: true,
    createdAt: new Date().toISOString()
  };

  const storedListings = localStorage.getItem('bookloop_custom_listings');
  let userListings = [];
  if (storedListings) {
    try {
      userListings = JSON.parse(storedListings);
    } catch (e) {
      userListings = [];
    }
  }
  userListings.unshift(newBook);
  localStorage.setItem('bookloop_custom_listings', JSON.stringify(userListings));

  try {
    fetch('/api/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook)
    }).catch(() => {});
  } catch (e) {}

  allBooks.unshift(newBook);
  applyFiltersAndRender();

  listBookForm.reset();
  closeListBookModal();

  showToast(`"${title}" published to BookLoop marketplace!`, 'success');
}

function openKoraSetupModal() {
  const isConfigured = koraGatewayStatus.koraConfigured;
  
  gatewayStatusDetail.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.75rem;">
      <span class="status-dot" style="width:12px; height:12px; border-radius:50%; background-color:${isConfigured ? '#1FAF63' : '#D9532B'};"></span>
      <strong style="font-size:1.1rem; color:${isConfigured ? '#1A392A' : '#A33C17'};">
        ${isConfigured ? 'Gateway Active & Ready' : 'Setup Required: Missing Secret Key'}
      </strong>
    </div>
    <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;">
      ${escapeHtml(koraGatewayStatus.message || '')}
    </p>
    <div style="margin-top:0.8rem; font-size:0.85rem; color:var(--text-main);">
      <strong>Currency Rail:</strong> NGN (Nigerian Naira ₦)<br>
      <strong>Secret Key:</strong> ${isConfigured ? '✓ Loaded securely on server' : '✗ Not set in .env'}
    </div>
  `;

  koraSetupModal.classList.remove('hidden');
}

function closeKoraSetupModal() {
  koraSetupModal.classList.add('hidden');
}

function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery.trim().length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    applyFiltersAndRender();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    applyFiltersAndRender();
  });

  categoryPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill-btn');
    if (!pill) return;

    categoryPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
    pill.classList.add('active');

    activeCategory = pill.getAttribute('data-category');
    applyFiltersAndRender();
  });

  sortBySelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    applyFiltersAndRender();
  });

  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    activeCategory = 'all';
    categoryPills.querySelectorAll('.pill-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });
    sortBySelect.value = 'featured';
    currentSort = 'featured';
    applyFiltersAndRender();
  });

  bookGrid.addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.getAttribute('data-action');
    const bookId = actionEl.getAttribute('data-id');

    if (action === 'view-details') {
      openBookDetails(bookId);
    } else if (action === 'buy-now') {
      const book = allBooks.find(b => b.id === bookId);
      if (book) startCheckoutFlow(book);
    }
  });

  document.querySelector('.quick-buy-spotlight')?.addEventListener('click', (e) => {
    const bookId = e.currentTarget.getAttribute('data-id');
    const book = allBooks.find(b => b.id === bookId);
    if (book) startCheckoutFlow(book);
  });

  closeBookModal.addEventListener('click', closeBookModalFn);
  bookModal.addEventListener('click', (e) => {
    if (e.target === bookModal) closeBookModalFn();
  });

  closeCheckoutModal.addEventListener('click', closeCheckoutModalFn);
  cancelCheckoutBtn.addEventListener('click', closeCheckoutModalFn);
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckoutModalFn();
  });

  checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  openListModalBtn.addEventListener('click', openListBookModal);
  closeListModalBtn.addEventListener('click', closeListBookModal);
  cancelListBtn.addEventListener('click', closeListBookModal);
  listBookModal.addEventListener('click', (e) => {
    if (e.target === listBookModal) closeListBookModal();
  });
  listBookForm.addEventListener('submit', handleListBookSubmit);

  ctaSellBtn.addEventListener('click', () => {
    openListBookModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  footerListBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openListBookModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  gatewayStatusPill.addEventListener('click', openKoraSetupModal);
  closeKoraModalBtn.addEventListener('click', closeKoraSetupModal);
  closeKoraInfoBtn.addEventListener('click', closeKoraSetupModal);
  koraSetupModal.addEventListener('click', (e) => {
    if (e.target === koraSetupModal) closeKoraSetupModal();
  });

  closeBannerBtn.addEventListener('click', () => {
    paymentBanner.classList.add('hidden');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookModalFn();
      closeCheckoutModalFn();
      closeListBookModal();
      closeKoraSetupModal();
    }
  });
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
