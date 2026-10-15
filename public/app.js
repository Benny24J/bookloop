// BookLoop — Digital Book Community & Shared Stories
// Frontend Application Logic

const SAMPLE_BOOKS = [
  {
    id: 'book-1',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    price: 3500,
    category: 'African Literature',
    format: 'Digital PDF Edition',
    pdfPages: 209,
    pdfSize: '2.4 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'A masterpiece of African literature chronicling pre-colonial life in southeastern Nigeria and the arrival of Europeans. Re-experience the unforgettable story of Okonkwo.',
    nostalgiaNote: 'Passed around secondary school prep classes until the cover was cello-taped. Essential Nigerian reading.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Chinedu Eze',
      email: 'chinedu.eze@example.com',
      role: 'Class of 2012 • Lit Prefect',
      location: 'Enugu, Nigeria',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 4.9,
      trades: 14
    },
    isbn: '978-0385474542',
    createdAt: '2026-10-10'
  },
  {
    id: 'book-2',
    title: 'Half of a Yellow Sun',
    author: 'Chimamanda Ngozi Adichie',
    price: 4800,
    category: 'African Literature',
    format: 'Digital PDF Edition',
    pdfPages: 448,
    pdfSize: '4.1 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Epic novel depicting the Biafran War through the interwoven lives of three characters. Crisp, complete digital text with author introduction.',
    nostalgiaNote: 'Read during university strikes and passed to roommates. The emotional weight stays with you forever.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Folake Adeyemi',
      email: 'folake.reads@example.com',
      role: 'Avid Reader • Lagos',
      location: 'Ikeja, Lagos',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 5.0,
      trades: 28
    },
    isbn: '978-1400095209',
    createdAt: '2026-10-12'
  },
  {
    id: 'book-3',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 4200,
    category: 'Fiction',
    format: 'Digital PDF Edition',
    pdfPages: 304,
    pdfSize: '3.0 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'Between life and death there is a library containing books of all the lives you could have lived. Heartwarming, reflective, and deeply consoling.',
    nostalgiaNote: 'Feels like discussing regrets and fresh starts with a close friend over warm tea on a rainy afternoon.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Tariq Mansoor',
      email: 'tariq.m@example.com',
      role: 'Book Club Host • Abuja',
      location: 'Abuja, FCT',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 4.8,
      trades: 9
    },
    isbn: '978-0525559474',
    createdAt: '2026-10-11'
  },
  {
    id: 'book-4',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 2000,
    category: 'Personal Growth',
    format: 'Digital PDF Edition',
    pdfPages: 320,
    pdfSize: '3.5 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'An easy & proven way to build good habits and break bad ones. Clear actionable summaries, visual charts, and reflection prompts included in this digital copy.',
    nostalgiaNote: 'Helped me establish a consistent daily reading routine. Clear, actionable, and full of timeless wisdom.',
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Zainab Bello',
      email: 'zainab.bello@example.com',
      role: 'Community Curator • Kano',
      location: 'Kano, Nigeria',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 4.95,
      trades: 19
    },
    isbn: '978-0735211292',
    createdAt: '2026-10-09'
  },
  {
    id: 'book-5',
    title: 'Arrow of Destiny',
    author: 'Ann Ijeh',
    price: 2500,
    category: 'School Classics',
    format: 'Digital PDF Edition',
    pdfPages: 164,
    pdfSize: '2.1 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'A classic Pacesetters Series crime and suspense thriller following young characters navigating ambition, betrayal, and unforeseen destiny.',
    nostalgiaNote: 'The holy grail of Pacesetters paperbacks. We used to hide this inside our chemistry notebook during prep time.',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Emeka Nwosu',
      email: 'emeka.pace@example.com',
      role: 'Pacesetters Collector • Port Harcourt',
      location: 'Port Harcourt, Rivers',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 4.9,
      trades: 33
    },
    isbn: '978-0333285749',
    createdAt: '2026-10-08'
  },
  {
    id: 'book-6',
    title: 'Diary of a Wimpy Kid',
    author: 'Jeff Kinney',
    price: 2800,
    category: 'Fiction',
    format: 'Digital PDF Edition',
    pdfPages: 224,
    pdfSize: '4.5 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'The hilarious journal of Greg Heffley as he navigates the hazards of school. Complete illustrated digital edition with original doodles and diary entries.',
    nostalgiaNote: 'Everyone in junior secondary school had to read this. We drew our own versions of Greg and Rowley on the back of our notebooks.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Damilola Ajayi',
      email: 'damilola.reads@example.com',
      role: 'Illustrated Books • Lagos',
      location: 'Yaba, Lagos',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 5.0,
      trades: 18
    },
    isbn: '978-0141324906',
    createdAt: '2026-10-13'
  },
  {
    id: 'book-7',
    title: 'Faceless',
    author: 'Amma Darko',
    price: 3200,
    category: 'African Literature',
    format: 'Digital PDF Edition',
    pdfPages: 232,
    pdfSize: '2.6 MB',
    pdfAvailable: true,
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    description: 'A powerful, poignant portrayal of street children in Agbogbloshie, Accra, centering on fourteen-year-old Fofo as she unravels the mystery of her sister Baby T.',
    nostalgiaNote: 'The unforgettable WAEC literature text. Every literature student remembers discussing Maa Tsuru and Fofo during prep revision.',
    coverUrl: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&w=700&q=80',
    seller: {
      name: 'Kemi Sowande',
      email: 'kemi.s@example.com',
      role: 'African Literature Curator • Ibadan',
      location: 'Ibadan, Oyo',
      bankCode: '044',
      bankName: 'Access Bank',
      accountNumber: '0690000032',
      rating: 5.0,
      trades: 21
    },
    isbn: '978-9988550509',
    createdAt: '2026-10-14'
  }
];

const COMMUNITY_READERS = [
  {
    name: 'Folake Adeyemi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    location: 'Ikeja, Lagos',
    favoriteGenres: ['African Literature', 'School Classics', 'Historical Fiction'],
    bio: 'Preserving our favorite paperbacks in digital PDF format so new generations of readers can enjoy them.',
    booksExchanged: 28,
    badge: 'Shelf Curator'
  },
  {
    name: 'Emeka Nwosu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    location: 'Port Harcourt',
    favoriteGenres: ['Pacesetters Series', 'School Classics', 'African Mystery'],
    bio: 'Preserving beloved Pacesetters paperbacks and school curriculum classics for fellow bibliophiles.',
    booksExchanged: 33,
    badge: 'Pacesetters Scout'
  },
  {
    name: 'Zainab Bello',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    location: 'Kano, Nigeria',
    favoriteGenres: ['Personal Growth', 'Philosophy', 'Biographies'],
    bio: 'Reading 40 books a year. Love sharing actionable insights and connecting with readers on The Common Room.',
    booksExchanged: 19,
    badge: 'Avid Reader'
  },
  {
    name: 'Tariq Mansoor',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    location: 'Abuja, FCT',
    favoriteGenres: ['Literary Fiction', 'School Classics', 'Mystery'],
    bio: 'Host of monthly Abuja reader circles. Passionate about sustainable digital reading and community discussions.',
    booksExchanged: 14,
    badge: 'Community Host'
  }
];

// App State
let allBooks = [];
let allDiscussions = [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let selectedBook = null;

// DOM Elements
const bookGrid = document.getElementById('book-grid');
const noResultsState = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryPills = document.getElementById('category-pills');
const sortBySelect = document.getElementById('sort-by');
const resultsCount = document.getElementById('results-count');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const readersGrid = document.getElementById('readers-grid');
const discussionsContainer = document.getElementById('discussions-container');

// Modals
const bookModal = document.getElementById('book-modal');
const closeBookModal = document.getElementById('close-book-modal');
const bookModalContent = document.getElementById('book-modal-content');

const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutModal = document.getElementById('close-checkout-modal');
const cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');
const checkoutSummaryBox = document.getElementById('checkout-summary-box');
const checkoutForm = document.getElementById('checkout-form');
const submitCheckoutBtn = document.getElementById('submit-checkout-btn');

const listBookModal = document.getElementById('list-book-modal');
const openListModalBtn = document.getElementById('open-list-modal');
const closeListModalBtn = document.getElementById('close-list-modal');
const cancelListBtn = document.getElementById('cancel-list-btn');
const listBookForm = document.getElementById('list-book-form');
const ctaSellBtn = document.getElementById('cta-sell-btn');
const footerListBtn = document.getElementById('footer-list-btn');
const listPriceInput = document.getElementById('list-price');

const newDiscussionModal = document.getElementById('new-discussion-modal');
const openDiscussionModalBtn = document.getElementById('open-discussion-modal');
const closeDiscussionModalBtn = document.getElementById('close-discussion-modal');
const cancelDiscussionBtn = document.getElementById('cancel-discussion-btn');
const newDiscussionForm = document.getElementById('new-discussion-form');

const pdfAccessModal = document.getElementById('pdf-access-modal');
const closePdfModalBtn = document.getElementById('close-pdf-modal');
const closePdfAccessBtn = document.getElementById('close-pdf-access-btn');
const pdfDownloadLink = document.getElementById('pdf-download-link');
const pdfAccessDetailsBox = document.getElementById('pdf-access-details-box');

const paymentBanner = document.getElementById('payment-notification');
const notificationIcon = document.getElementById('notification-icon');
const notificationTitle = document.getElementById('notification-title');
const notificationDesc = document.getElementById('notification-desc');
const bannerActionWrap = document.getElementById('banner-action-wrap');
const closeBannerBtn = document.getElementById('close-banner');

// Purchased Books Access Control (localStorage)
function getPurchasedBookIds() {
  try {
    return JSON.parse(localStorage.getItem('bookloop_purchased_books') || '[]');
  } catch (e) {
    return [];
  }
}

function recordPurchasedBook(bookId) {
  if (!bookId) return;
  const list = getPurchasedBookIds();
  if (!list.includes(bookId)) {
    list.push(bookId);
    localStorage.setItem('bookloop_purchased_books', JSON.stringify(list));
  }
}

function isBookPurchased(bookId) {
  return getPurchasedBookIds().includes(bookId);
}

// App Initialization
document.addEventListener('DOMContentLoaded', async () => {
  initStorage();
  renderReaders();
  setupEventListeners();
  await loadDiscussions();
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

// Verified Callback Handler
async function checkUrlPaymentVerification() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentState = urlParams.get('payment');
  const reference = urlParams.get('reference');
  const bookId = urlParams.get('bookId');

  if (paymentState === 'verify' && reference) {
    showBanner('⏳', 'Verifying Purchase...', `Checking status for order #${reference}...`, 'info');

    try {
      const res = await fetch(`/api/checkout/verify/${encodeURIComponent(reference)}`);
      const result = await res.json();

      if (result.success && result.paid) {
        const targetBookId = bookId || (result.pdfAccess && result.pdfAccess.bookId) || '';
        if (targetBookId) {
          recordPurchasedBook(targetBookId);
        }

        const bookTitle = (result.pdfAccess && result.pdfAccess.bookTitle) || result.bookTitle || 'your digital book';
        showBanner('🎉', 'Purchase Confirmed!', `You now have full access to "${bookTitle}".`, 'success');
        showToast(`Purchase confirmed! Your digital edition is ready.`, 'success');

        if (bannerActionWrap) {
          const pdfUrl = (result.pdfAccess && result.pdfAccess.pdfUrl) || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
          bannerActionWrap.innerHTML = `
            <a href="${escapeHtml(pdfUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" style="margin-left:0.5rem; text-decoration:none;">
              📖 Read / Download PDF
            </a>
          `;
        }

        applyFiltersAndRender();

      } else {
        showBanner('ℹ️', 'Order Status', `Order #${reference} status: ${result.status || 'pending'}.`, 'warning');
      }
    } catch (err) {
      showBanner('⚠️', 'Order Verification', `Unable to verify order status. Please refresh in a moment.`, 'warning');
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

// Library Filtering & Rendering
function applyFiltersAndRender() {
  let filtered = [...allBooks];

  if (activeCategory === 'Community Listings') {
    filtered = filtered.filter(b => b.isUserListing);
  } else if (activeCategory === 'School Classics') {
    filtered = filtered.filter(b => b.category === 'School Classics' || (b.nostalgiaNote && b.nostalgiaNote.toLowerCase().includes('school')));
  } else if (activeCategory !== 'all') {
    filtered = filtered.filter(b => b.category.toLowerCase() === activeCategory.toLowerCase());
  }

  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(b => 
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      (b.description && b.description.toLowerCase().includes(q)) ||
      (b.nostalgiaNote && b.nostalgiaNote.toLowerCase().includes(q)) ||
      (b.seller && b.seller.name.toLowerCase().includes(q))
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

    const hasPurchased = isBookPurchased(book.id);

    let coverHtml = '';
    if (book.coverUrl && book.coverUrl.trim() !== '') {
      coverHtml = `
        <img src="${escapeHtml(book.coverUrl)}" alt="${escapeHtml(book.title)}" class="book-cover-img" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'book-cover-css-styled\\'><h4>${escapeHtml(book.title)}</h4><p>${escapeHtml(book.author)}</p><span class=\\'pdf-chip\\'>PDF Edition</span></div>';">
      `;
    } else {
      coverHtml = `
        <div class="book-cover-css-styled">
          <h4>${escapeHtml(book.title)}</h4>
          <p>${escapeHtml(book.author)}</p>
          <span class="pdf-chip">PDF Edition</span>
        </div>
      `;
    }

    const actionButtonHtml = hasPurchased
      ? `<button class="btn btn-sm btn-purchased" data-action="read-pdf" data-id="${book.id}">
           📖 Read PDF
         </button>`
      : `<button class="btn btn-sm btn-primary" data-action="buy-now" data-id="${book.id}">
           Get PDF
         </button>`;

    card.innerHTML = `
      <div class="book-cover-wrap" data-action="view-details" data-id="${book.id}">
        ${coverHtml}
        <span class="pdf-format-badge">📄 Digital PDF</span>
      </div>

      <div class="book-meta">
        <span class="book-genre">${escapeHtml(book.category)}</span>
        <h3 class="book-title" data-action="view-details" data-id="${book.id}">${escapeHtml(book.title)}</h3>
        <p class="book-author">by ${escapeHtml(book.author)}</p>

        <p class="book-snippet">${escapeHtml(book.nostalgiaNote || book.description || '')}</p>

        <div class="book-seller-row">
          <div class="seller-info">
            <span class="seller-avatar">${book.seller ? book.seller.name.charAt(0) : 'R'}</span>
            <span>${escapeHtml(book.seller ? book.seller.name : 'Community Reader')}</span>
          </div>
          <span class="seller-rating">★ ${book.seller ? book.seller.rating || 5.0 : 5.0}</span>
        </div>

        <div class="book-footer-action">
          <div class="book-price">
            <span class="price-val">₦${Number(book.price).toLocaleString()}</span>
          </div>

          <div class="book-actions-group">
            <button class="btn btn-sm btn-secondary" data-action="view-details" data-id="${book.id}">
              Details
            </button>
            ${actionButtonHtml}
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

      <span class="reader-genres-label">Favorite Shelves</span>
      <div class="reader-genre-tags">
        ${tagsHtml}
      </div>

      <div class="reader-footer">
        <span>📖 ${reader.booksExchanged} books shared</span>
        <span>${escapeHtml(reader.badge)}</span>
      </div>
    `;

    readersGrid.appendChild(card);
  });
}

// Community Discussions ("The Common Room") Logic
async function loadDiscussions() {
  try {
    const res = await fetch('/api/discussions');
    const data = await res.json();
    allDiscussions = data.discussions || [];
    renderDiscussions();
  } catch (err) {
    console.warn('Could not load discussions from server, using local fallback:', err);
    renderDiscussions();
  }
}

function renderDiscussions() {
  if (!discussionsContainer) return;
  discussionsContainer.innerHTML = '';

  if (allDiscussions.length === 0) {
    discussionsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">☕</div>
        <h3>The Common Room is quiet</h3>
        <p>Be the first to share a reading memory or review!</p>
      </div>
    `;
    return;
  }

  allDiscussions.forEach(disc => {
    const card = document.createElement('div');
    card.className = 'discussion-card';

    const commentsHtml = disc.comments && disc.comments.length > 0
      ? disc.comments.map(c => `
          <div class="comment-item">
            <strong>${escapeHtml(c.author)}</strong> <span class="comment-time">${escapeHtml(c.timestamp || 'recently')}</span>:
            <p>${escapeHtml(c.text)}</p>
          </div>
        `).join('')
      : '<p class="no-comments-text">No replies yet. Share your thoughts below!</p>';

    card.innerHTML = `
      <div class="disc-top-row">
        <span class="disc-category-badge">${escapeHtml(disc.category)}</span>
        <span class="disc-time">${escapeHtml(disc.timestamp)}</span>
      </div>

      <h3 class="disc-title">${escapeHtml(disc.title)}</h3>

      <div class="disc-book-ref">
        📖 Book: <strong>${escapeHtml(disc.bookTitle)}</strong> ${disc.bookAuthor ? `by ${escapeHtml(disc.bookAuthor)}` : ''}
      </div>

      <p class="disc-body">${escapeHtml(disc.content)}</p>

      <div class="disc-author-row">
        <div class="disc-author-info">
          <div class="disc-avatar">${disc.author.charAt(0)}</div>
          <div>
            <strong>${escapeHtml(disc.author)}</strong>
            <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(disc.authorRole || 'Reader')}</div>
          </div>
        </div>
        <span class="disc-likes">❤️ ${disc.likes || 1} readers relate</span>
      </div>

      <!-- Comment Section -->
      <div class="disc-comments-section">
        <div class="comments-heading">💬 Replies (${disc.comments ? disc.comments.length : 0})</div>
        <div class="comments-list">${commentsHtml}</div>

        <form class="inline-comment-form" data-disc-id="${disc.id}">
          <input type="text" class="comment-author-input" placeholder="Your name" required style="width:130px;">
          <input type="text" class="comment-text-input" placeholder="Reply or share a thought..." required style="flex:1;">
          <button type="submit" class="btn btn-sm btn-secondary">Reply</button>
        </form>
      </div>
    `;

    discussionsContainer.appendChild(card);
  });

  document.querySelectorAll('.inline-comment-form').forEach(form => {
    form.addEventListener('submit', handleCommentSubmit);
  });
}

async function handleCommentSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const discId = form.getAttribute('data-disc-id');
  const authorInput = form.querySelector('.comment-author-input');
  const textInput = form.querySelector('.comment-text-input');

  const author = authorInput.value.trim();
  const text = textInput.value.trim();

  if (!author || !text) return;

  const targetDisc = allDiscussions.find(d => d.id === discId);
  if (!targetDisc) return;

  const newComment = {
    id: `c-${Date.now()}`,
    author,
    timestamp: 'Just now',
    text
  };

  targetDisc.comments.push(newComment);
  renderDiscussions();
  showToast('Reply posted to The Common Room!', 'info');

  try {
    await fetch(`/api/discussions/${encodeURIComponent(discId)}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, text })
    });
  } catch (err) {
    console.warn('Comment saved locally.');
  }
}

// New Discussion Modal
function openNewDiscussionModal() {
  newDiscussionModal.classList.remove('hidden');
}

function closeNewDiscussionModal() {
  newDiscussionModal.classList.add('hidden');
}

async function handleNewDiscussionSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('disc-title').value.trim();
  const bookTitle = document.getElementById('disc-book').value.trim() || 'General Discussion';
  const category = document.getElementById('disc-category').value;
  const author = document.getElementById('disc-author-name').value.trim();
  const authorRole = document.getElementById('disc-author-role').value.trim() || 'Reader';
  const content = document.getElementById('disc-content').value.trim();

  if (!title || !author || !content) {
    showToast('Please fill in title, name, and your reflection.', 'error');
    return;
  }

  const newDisc = {
    id: `disc-${Date.now()}`,
    title,
    bookTitle,
    bookAuthor: '',
    category,
    author,
    authorRole,
    content,
    timestamp: 'Just now',
    likes: 1,
    comments: []
  };

  allDiscussions.unshift(newDisc);
  renderDiscussions();

  newDiscussionForm.reset();
  closeNewDiscussionModal();
  showToast('Your post was shared with The Common Room!', 'success');

  try {
    await fetch('/api/discussions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDisc)
    });
  } catch (err) {
    console.warn('Discussion stored locally.');
  }
}

// Book Details Modal
function openBookDetails(bookId) {
  const book = allBooks.find(b => b.id === bookId);
  if (!book) return;

  selectedBook = book;
  const hasPurchased = isBookPurchased(book.id);
  const price = Number(book.price);

  let coverHtml = '';
  if (book.coverUrl && book.coverUrl.trim() !== '') {
    coverHtml = `<img src="${escapeHtml(book.coverUrl)}" alt="${escapeHtml(book.title)}" class="modal-book-img" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'book-cover-css-styled\\' style=\\'height:300px;border-radius:12px;\\'><h4>${escapeHtml(book.title)}</h4><p>${escapeHtml(book.author)}</p></div>';">`;
  } else {
    coverHtml = `<div class="book-cover-css-styled" style="height:300px;border-radius:12px;"><h4>${escapeHtml(book.title)}</h4><p>${escapeHtml(book.author)}</p></div>`;
  }

  const actionBtnHtml = hasPurchased
    ? `<button class="btn btn-primary btn-lg" id="modal-read-now-btn" data-id="${book.id}">
         📖 Open / Read PDF Now
       </button>`
    : `<button class="btn btn-primary btn-lg" id="modal-buy-btn" data-id="${book.id}">
         Get PDF Edition &rarr;
       </button>`;

  bookModalContent.innerHTML = `
    <div class="book-modal-grid">
      <div class="modal-book-media">
        ${coverHtml}
        <div style="margin-top:0.75rem; text-align:center;">
          <span class="pdf-format-badge">📄 ${escapeHtml(book.format || 'Digital PDF Edition')}</span>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">
            ${book.pdfPages ? `${book.pdfPages} pages • ` : ''}${book.pdfSize || '2.5 MB'}
          </div>
        </div>
      </div>

      <div class="modal-book-info">
        <span class="modal-badge">${escapeHtml(book.category)}</span>
        <h2 class="modal-book-title" id="modal-book-title">${escapeHtml(book.title)}</h2>
        <p class="modal-book-author">By <strong>${escapeHtml(book.author)}</strong></p>

        <p class="modal-book-desc">${escapeHtml(book.description)}</p>

        ${book.nostalgiaNote ? `
          <div class="nostalgia-quote-box">
            <strong>Reader Note:</strong>
            <p>"${escapeHtml(book.nostalgiaNote)}"</p>
          </div>
        ` : ''}

        <div class="modal-seller-box">
          <div class="modal-seller-title">Listed by Community Reader</div>
          <div class="modal-seller-details">
            <div>
              <strong>${escapeHtml(book.seller ? book.seller.name : 'Community Member')}</strong>
              <div style="font-size:0.82rem; color:var(--text-muted);">${escapeHtml(book.seller ? book.seller.role || 'Reader' : 'Reader')} • ${escapeHtml(book.seller ? book.seller.location || 'Nigeria' : 'Nigeria')}</div>
            </div>
            <div style="text-align:right;">
              <span class="seller-rating">★ ${book.seller ? book.seller.rating || 5.0 : 5.0}</span>
              <div style="font-size:0.82rem; color:var(--text-muted);">${book.seller ? book.seller.trades || 1 : 1} books shared</div>
            </div>
          </div>
        </div>

        <div class="modal-book-price-bar">
          <div class="book-price">
            <span class="price-val">₦${price.toLocaleString()}</span>
          </div>

          ${actionBtnHtml}
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-buy-btn')?.addEventListener('click', () => {
    closeBookModalFn();
    startCheckoutFlow(book);
  });

  document.getElementById('modal-read-now-btn')?.addEventListener('click', () => {
    closeBookModalFn();
    openPdfAccessModal(book);
  });

  bookModal.classList.remove('hidden');
}

function closeBookModalFn() {
  bookModal.classList.add('hidden');
}

// PDF Reader / Download Modal
function openPdfAccessModal(book) {
  if (!book) return;
  const pdfUrl = book.pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  pdfAccessDetailsBox.innerHTML = `
    <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--color-green-deep); margin-bottom:0.25rem;">
      ${escapeHtml(book.title)}
    </h4>
    <p style="font-size:0.88rem; color:var(--text-muted); margin-bottom:0.75rem;">by ${escapeHtml(book.author)}</p>
    <div style="font-size:0.82rem; color:var(--text-main); line-height:1.5;">
      <strong>Format:</strong> Complete Digital PDF Edition (${book.pdfSize || '2.4 MB'})<br>
      <strong>Delivery:</strong> Available for instant online reading or download to your device.
    </div>
  `;

  pdfDownloadLink.setAttribute('href', pdfUrl);
  pdfAccessModal.classList.remove('hidden');
}

function closePdfAccessModalFn() {
  pdfAccessModal.classList.add('hidden');
}

// Checkout Flow — Clean, Customer-Friendly
function startCheckoutFlow(book) {
  selectedBook = book;
  const grossPrice = Number(book.price);

  checkoutSummaryBox.innerHTML = `
    <div class="summary-details">
      <h4>${escapeHtml(book.title)}</h4>
      <p>By ${escapeHtml(book.author)} • Digital PDF Edition</p>
    </div>
    <div class="summary-amount">
      ₦${grossPrice.toLocaleString()}
    </div>
  `;

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
    btnText.textContent = 'Connecting to secure checkout...';
    spinner.classList.remove('hidden');
  } else {
    submitCheckoutBtn.disabled = false;
    btnText.textContent = 'Proceed to Payment →';
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
      sellerName: selectedBook.seller ? selectedBook.seller.name : 'Community Seller',
      sellerEmail: selectedBook.seller ? selectedBook.seller.email : 'seller@bookloop.com',
      sellerBankCode: selectedBook.seller ? selectedBook.seller.bankCode : '044',
      sellerBankName: selectedBook.seller ? selectedBook.seller.bankName : 'Access Bank',
      sellerAccountNumber: selectedBook.seller ? selectedBook.seller.accountNumber : '0690000032',
      pdfUrl: selectedBook.pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    };

    const response = await fetch('/api/checkout/initialize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.success && data.checkoutUrl) {
      showToast('Opening secure checkout...', 'info');
      setTimeout(() => {
        window.location.href = data.checkoutUrl;
      }, 500);
      return;
    }

    setCheckoutLoading(false);
    showToast(data.message || 'Unable to open checkout. Please try again.', 'error');

  } catch (err) {
    setCheckoutLoading(false);
    showToast('Network error during checkout. Please try again.', 'error');
  }
}

// List a Digital Book
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
  const coverUrl = document.getElementById('list-cover').value.trim();
  const description = document.getElementById('list-desc').value.trim();
  const sellerName = document.getElementById('list-seller-name').value.trim();
  const sellerEmail = document.getElementById('list-seller-email').value.trim();

  const bankSelect = document.getElementById('list-bank-code');
  const bankCode = bankSelect ? bankSelect.value : '044';
  const bankName = bankSelect ? (bankSelect.options[bankSelect.selectedIndex].getAttribute('data-name') || 'Access Bank') : 'Access Bank';
  const accountNumber = document.getElementById('list-account-number') ? document.getElementById('list-account-number').value.trim() : '0690000032';

  const pdfUrlInput = document.getElementById('list-pdf-url').value.trim();
  const pdfFileInput = document.getElementById('list-pdf-file');
  const permissionChecked = document.getElementById('list-permission-check').checked;

  if (!title || !price || !sellerName || !sellerEmail) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  if (!permissionChecked) {
    showToast('Please confirm distribution permission.', 'error');
    return;
  }

  let finalPdfUrl = pdfUrlInput || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  let pdfFileName = `${title.replace(/\s+/g, '_')}.pdf`;
  let pdfSize = '2.8 MB';

  if (pdfFileInput && pdfFileInput.files && pdfFileInput.files[0]) {
    const file = pdfFileInput.files[0];
    pdfFileName = file.name;
    pdfSize = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    try {
      finalPdfUrl = URL.createObjectURL(file);
    } catch (err) {
      finalPdfUrl = pdfUrlInput || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    }
  }

  const newBook = {
    id: `book-${Date.now()}`,
    title,
    author: author || 'Unknown Author',
    price,
    category,
    format: 'Digital PDF Edition',
    pdfAvailable: true,
    pdfUrl: finalPdfUrl,
    pdfFileName,
    pdfSize,
    description: description || 'Digital edition shared with fellow readers.',
    nostalgiaNote: description,
    coverUrl,
    seller: {
      name: sellerName,
      email: sellerEmail,
      bankCode,
      bankName,
      accountNumber,
      role: 'Community Member',
      location: 'Community Member',
      rating: 5.0,
      trades: 1
    },
    isUserListing: true,
    permissionConfirmed: true,
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

  showToast(`"${title}" published to BookLoop library!`, 'success');
}

// Global Event Listeners
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
    } else if (action === 'read-pdf') {
      const book = allBooks.find(b => b.id === bookId);
      if (book) openPdfAccessModal(book);
    }
  });

  document.querySelector('.quick-buy-spotlight')?.addEventListener('click', (e) => {
    const bookId = e.currentTarget.getAttribute('data-id');
    const book = allBooks.find(b => b.id === bookId);
    if (book) {
      if (isBookPurchased(book.id)) {
        openPdfAccessModal(book);
      } else {
        startCheckoutFlow(book);
      }
    }
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

  openDiscussionModalBtn?.addEventListener('click', openNewDiscussionModal);
  closeDiscussionModalBtn?.addEventListener('click', closeNewDiscussionModal);
  cancelDiscussionBtn?.addEventListener('click', closeNewDiscussionModal);
  newDiscussionModal?.addEventListener('click', (e) => {
    if (e.target === newDiscussionModal) closeNewDiscussionModal();
  });
  newDiscussionForm?.addEventListener('submit', handleNewDiscussionSubmit);

  closePdfModalBtn?.addEventListener('click', closePdfAccessModalFn);
  closePdfAccessBtn?.addEventListener('click', closePdfAccessModalFn);
  pdfAccessModal?.addEventListener('click', (e) => {
    if (e.target === pdfAccessModal) closePdfAccessModalFn();
  });

  closeBannerBtn.addEventListener('click', () => {
    paymentBanner.classList.add('hidden');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookModalFn();
      closeCheckoutModalFn();
      closeListBookModal();
      closeNewDiscussionModal();
      closePdfAccessModalFn();
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
