/* =========================================================
 SEAMAN ONLINE STORE — script.js
   Sections:
   1. Product Data
   2. Category & Content Data
   3. Rendering (categories, products, testimonials, FAQ)
   4. Product Customizer
   5. Cart Management
   6. Quantity Controls
   7. Local Storage
   8. FAQ Accordion
   9. Countdown Timer
   10. Search & Filtering
   11. Mobile Navigation
   12. Button Animations (ripple, sound, toast)
   13. Newsletter Validation
   14. Navbar scroll state
   15. Init
========================================================= */

(function () {
  'use strict';

  /* =========================================================
     1. Product Data
  ========================================================= */
  const PRODUCTS = [
    { id: 'p1', name: 'Galaxy Blaster X', category: 'electronic', icon: '🔫',
      price: 39.99, originalPrice: 49.99, rating: 4.9, reviews: 312, badge: 'Best Seller',
      artGrad: 'linear-gradient(135deg, rgba(166,93,251,.35), rgba(255,93,162,.25))' },
    { id: 'p2', name: 'RoboBot Mini', category: 'electronic', icon: '🤖',
      price: 29.99, originalPrice: null, rating: 4.7, reviews: 188, badge: null,
      artGrad: 'linear-gradient(135deg, rgba(78,161,255,.35), rgba(47,230,214,.22))' },
    { id: 'p3', name: 'Speed Racer RC', category: 'rc-cars', icon: '🏎️',
      price: 49.99, originalPrice: null, rating: 4.8, reviews: 241, badge: 'Best Seller',
      artGrad: 'linear-gradient(135deg, rgba(255,138,61,.35), rgba(255,210,63,.22))' },
    { id: 'p4', name: 'Dino Explorer Set', category: 'collectibles', icon: '🦖',
      price: 34.99, originalPrice: null, rating: 4.6, reviews: 97, badge: null,
      artGrad: 'linear-gradient(135deg, rgba(47,230,214,.3), rgba(166,93,251,.22))' },
    { id: 'p5', name: 'Magic Build Blocks', category: 'building', icon: '🧱',
      price: 24.99, originalPrice: null, rating: 4.5, reviews: 156, badge: null,
      artGrad: 'linear-gradient(135deg, rgba(255,93,162,.3), rgba(255,210,63,.22))' },
    { id: 'p6', name: 'Mega Plush Bear', category: 'plush', icon: '🧸',
      price: 44.99, originalPrice: 54.99, rating: 4.9, reviews: 273, badge: 'Best Seller',
      artGrad: 'linear-gradient(135deg, rgba(255,210,63,.32), rgba(255,138,61,.24))' },
    { id: 'p7', name: 'Battle Hero Figure', category: 'action-figures', icon: '🦸',
      price: 19.99, originalPrice: null, rating: 4.4, reviews: 84, badge: null,
      artGrad: 'linear-gradient(135deg, rgba(166,93,251,.32), rgba(78,161,255,.22))' },
    { id: 'p8', name: 'Puzzle Quest 1000', category: 'puzzles', icon: '🧩',
      price: 21.99, originalPrice: 27.99, rating: 4.7, reviews: 133, badge: null,
      artGrad: 'linear-gradient(135deg, rgba(47,230,214,.3), rgba(78,161,255,.22))' },
  ];

  /* =========================================================
     2. Category & Content Data
  ========================================================= */
  const CATEGORIES = [
    { key: 'plush', name: 'Plush Toys', icon: '🧸' },
    { key: 'action-figures', name: 'Action Figures', icon: '🤖' },
    { key: 'rc-cars', name: 'RC Cars', icon: '🚗' },
    { key: 'puzzles', name: 'Puzzles & Games', icon: '🧩' },
    { key: 'building', name: 'Building Sets', icon: '🧱' },
    { key: 'creative', name: 'Creative Toys', icon: '🎨' },
    { key: 'electronic', name: 'Electronic Toys', icon: '🎮' },
    { key: 'collectibles', name: 'Collectibles', icon: '🦖' },
  ];

  const TESTIMONIALS = [
    { name: 'Sarah M.', product: 'RoboBot Mini', quote: 'My son absolutely loves the RoboBot! The lights and sounds are amazing.', color: 'var(--purple)' },
    { name: 'James K.', product: 'Galaxy Blaster X', quote: 'Great build quality and the soft darts mean I don\u2019t worry about my kids playing indoors.', color: 'var(--pink)' },
    { name: 'Priya R.', product: 'Mega Plush Bear', quote: 'So soft and well made. It arrived faster than I expected too.', color: 'var(--cyan)' },
    { name: 'Daniel O.', product: 'Speed Racer RC', quote: 'Fast, durable, and easy to charge. Best birthday gift we\u2019ve bought this year.', color: 'var(--orange)' },
  ];

  const FAQS = [
    { q: 'What age ranges are your toys suitable for?', a: 'Every product page lists a recommended age range. Most of our toys are designed for ages 3 and up, with electronic and building sets typically suited for 6+.' },
    { q: 'How long does delivery take?', a: 'Standard delivery takes 3\u20135 business days. Express shipping options are available at checkout for faster delivery.' },
    { q: 'Do you offer returns?', a: 'Yes \u2014 unused items in original packaging can be returned within 30 days for a full refund.' },
    { q: 'Are your toys safety tested?', a: 'All Seaman Online Store products go through independent safety testing and meet relevant toy safety standards before they reach our shelves.' },
    { q: 'Can I buy toys as gifts?', a: 'Absolutely. You can add a gift message at checkout, and we offer gift-ready packaging on request.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and popular digital wallets.' },
    { q: 'How can I track my order?', a: 'Once your order ships, you\u2019ll receive a tracking link by email so you can follow it every step of the way.' },
  ];

  const CUSTOMIZER = {
    name: 'RoboBot Mini',
    colors: [
      { key: 'blue', label: 'Blue', hex: '#4EA1FF', icon: '🤖' },
      { key: 'red', label: 'Red', hex: '#FF5D5D', icon: '🤖' },
      { key: 'purple', label: 'Purple', hex: '#A65DFB', icon: '🤖' },
      { key: 'green', label: 'Green', hex: '#3FE0A5', icon: '🤖' },
    ],
    sizes: [
      { key: 'mini', label: 'Mini', delta: 0 },
      { key: 'standard', label: 'Standard', delta: 8 },
      { key: 'xl', label: 'XL', delta: 18 },
    ],
    bundles: [
      { key: 'toy', label: 'Toy Only', price: 29.99, desc: 'Just the RoboBot \u2014 light-up eyes and three walking modes.' },
      { key: 'accessories', label: 'Toy + Accessories', price: 39.99, desc: 'RoboBot plus a charging dock and two interchangeable arm sets.' },
      { key: 'ultimate', label: 'Ultimate Bundle', price: 49.99, desc: 'RoboBot, charging dock, arm sets, and a carry case for adventures anywhere.' },
    ],
  };

  /* =========================================================
     State
  ========================================================= */
  const state = {
    cart: loadCart(),
    activeCategory: 'all',
    searchTerm: '',
    wishlist: new Set(),
    customizer: { color: 'blue', size: 'mini', bundle: 'toy' },
    showcaseQty: 1,
  };

  /* =========================================================
     3. Rendering
  ========================================================= */
  function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = CATEGORIES.map(c => `
      <button class="category-card" data-cat="${c.key}" type="button">
        <span class="cat-icon">${c.icon}</span>
        <h3>${c.name}</h3>
      </button>
    `).join('');

    grid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        state.activeCategory = card.dataset.cat;
        syncFilterChipsToCategory();
        renderProducts();
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function renderFilterChips() {
    const chipBar = document.getElementById('filterChips');
    const extra = CATEGORIES.map(c => `<button class="chip" data-filter="${c.key}">${c.name}</button>`).join('');
    chipBar.insertAdjacentHTML('beforeend', extra);

    chipBar.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.activeCategory = chip.dataset.filter;
        chipBar.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        renderProducts();
      });
    });
  }

  function syncFilterChipsToCategory() {
    document.querySelectorAll('.chip').forEach(chip => {
      chip.classList.toggle('is-active', chip.dataset.filter === state.activeCategory);
    });
  }

  function renderProducts() {
    const grid = document.getElementById('productGrid');
    const empty = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');

    const term = state.searchTerm.trim().toLowerCase();
    const filtered = PRODUCTS.filter(p => {
      const matchesCat = state.activeCategory === 'all' || p.category === state.activeCategory;
      const matchesTerm = !term || p.name.toLowerCase().includes(term);
      return matchesCat && matchesTerm;
    });

    resultsCount.textContent = `${filtered.length} toy${filtered.length === 1 ? '' : 's'}`;
    empty.hidden = filtered.length !== 0;

    grid.innerHTML = filtered.map(p => `
      <article class="product-card">
        <div class="product-art" style="background:${p.artGrad}">
          ${p.badge ? `<span class="badge badge-best">${p.badge}</span>` : ''}
          <button class="wishlist-btn ${state.wishlist.has(p.id) ? 'is-active' : ''}" data-wishlist="${p.id}" aria-label="Add ${p.name} to wishlist">${state.wishlist.has(p.id) ? '♥' : '♡'}</button>
          <span aria-hidden="true">${p.icon}</span>
        </div>
        <p class="product-cat">${categoryName(p.category)}</p>
        <h3>${p.name}</h3>
        <div class="rating"><span class="stars-txt">${starString(p.rating)}</span><span class="rating-num">${p.rating}</span><span class="rating-count">(${p.reviews})</span></div>
        <div class="price-row">
          <span class="price">$${p.price.toFixed(2)}</span>
          ${p.originalPrice ? `<span class="price-strike">$${p.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-card-foot">
          <button class="btn btn-ghost btn-small ripple" data-quickview="${p.id}">Quick View</button>
          <button class="btn btn-primary btn-small ripple add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        addToCart(btn.dataset.id, {}, 1);
        attachRipple(e);
      });
    });
    grid.querySelectorAll('[data-wishlist]').forEach(btn => {
      btn.addEventListener('click', () => toggleWishlist(btn.dataset.wishlist));
    });
    grid.querySelectorAll('[data-quickview]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = PRODUCTS.find(x => x.id === btn.dataset.quickview);
        showToast(`${p.icon} ${p.name} — $${p.price.toFixed(2)} · ${p.rating}★ (${p.reviews} reviews)`);
      });
    });
  }

  function toggleWishlist(id) {
    if (state.wishlist.has(id)) state.wishlist.delete(id);
    else state.wishlist.add(id);
    renderProducts();
  }

  function renderTestimonials() {
    const grid = document.getElementById('testimonialGrid');
    grid.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-top">
          <span class="avatar" style="background:${t.color}">${t.name.charAt(0)}</span>
          <div>
            <p class="testimonial-name">${t.name}</p>
            <p class="testimonial-product">Purchased: ${t.product}</p>
          </div>
        </div>
        <p class="testimonial-stars">★★★★★</p>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
    `).join('');
  }

  function renderFaq() {
    const list = document.getElementById('faqList');
    list.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-question" aria-expanded="false">
          <span>${f.q}</span><span class="plus" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer"><p>${f.a}</p></div>
      </div>
    `).join('');
    initFaqAccordion();
  }

  function categoryName(key) {
    const c = CATEGORIES.find(c => c.key === key);
    return c ? c.name : key;
  }
  function starString(rating) {
    const full = Math.round(rating);
    return '★★★★★'.slice(0, full) + '☆☆☆☆☆'.slice(0, 5 - full);
  }

  /* =========================================================
     4. Product Customizer
  ========================================================= */
  function initCustomizer() {
    const colorWrap = document.getElementById('colorOptions');
    const sizeWrap = document.getElementById('sizeOptions');
    const bundleWrap = document.getElementById('bundleOptions');

    colorWrap.innerHTML = CUSTOMIZER.colors.map(c => `
      <button type="button" class="swatch ${state.customizer.color === c.key ? 'is-selected' : ''}"
        style="background:${c.hex}" data-color="${c.key}" role="radio"
        aria-checked="${state.customizer.color === c.key}" aria-label="${c.label}"></button>
    `).join('');

    sizeWrap.innerHTML = CUSTOMIZER.sizes.map(s => `
      <button type="button" class="pill-option ${state.customizer.size === s.key ? 'is-selected' : ''}"
        data-size="${s.key}" role="radio" aria-checked="${state.customizer.size === s.key}">${s.label}</button>
    `).join('');

    bundleWrap.innerHTML = CUSTOMIZER.bundles.map(b => `
      <button type="button" class="pill-option ${state.customizer.bundle === b.key ? 'is-selected' : ''}"
        data-bundle="${b.key}" role="radio" aria-checked="${state.customizer.bundle === b.key}">${b.label}</button>
    `).join('');

    colorWrap.querySelectorAll('[data-color]').forEach(btn => {
      btn.addEventListener('click', () => { state.customizer.color = btn.dataset.color; refreshCustomizer(); });
    });
    sizeWrap.querySelectorAll('[data-size]').forEach(btn => {
      btn.addEventListener('click', () => { state.customizer.size = btn.dataset.size; refreshCustomizer(); });
    });
    bundleWrap.querySelectorAll('[data-bundle]').forEach(btn => {
      btn.addEventListener('click', () => { state.customizer.bundle = btn.dataset.bundle; refreshCustomizer(); });
    });

    document.getElementById('customizerAddBtn').addEventListener('click', (e) => {
      const bundle = CUSTOMIZER.bundles.find(b => b.key === state.customizer.bundle);
      const size = CUSTOMIZER.sizes.find(s => s.key === state.customizer.size);
      const color = CUSTOMIZER.colors.find(c => c.key === state.customizer.color);
      const total = bundle.price + size.delta;
      addToCart('p2', { variant: `${color.label} · ${size.label} · ${bundle.label}`, priceOverride: total }, 1);
      attachRipple(e);
    });

    refreshCustomizer();
  }

  function refreshCustomizer() {
    const color = CUSTOMIZER.colors.find(c => c.key === state.customizer.color);
    const size = CUSTOMIZER.sizes.find(s => s.key === state.customizer.size);
    const bundle = CUSTOMIZER.bundles.find(b => b.key === state.customizer.bundle);
    const total = bundle.price + size.delta;

    document.getElementById('customizerPrice').textContent = `$${total.toFixed(2)}`;
    document.getElementById('customizerDesc').textContent = bundle.desc;
    document.getElementById('customizerColorDot').style.background = color.hex;
    document.getElementById('customizerArt').style.filter = `drop-shadow(0 20px 30px ${color.hex}55) hue-rotate(0deg)`;

    document.querySelectorAll('#colorOptions .swatch').forEach(b => {
      const on = b.dataset.color === state.customizer.color;
      b.classList.toggle('is-selected', on);
      b.setAttribute('aria-checked', on);
    });
    document.querySelectorAll('#sizeOptions .pill-option').forEach(b => {
      const on = b.dataset.size === state.customizer.size;
      b.classList.toggle('is-selected', on);
      b.setAttribute('aria-checked', on);
    });
    document.querySelectorAll('#bundleOptions .pill-option').forEach(b => {
      const on = b.dataset.bundle === state.customizer.bundle;
      b.classList.toggle('is-selected', on);
      b.setAttribute('aria-checked', on);
    });
  }

  /* =========================================================
     5. Cart Management
  ========================================================= */
  function addToCart(productId, options, qty) {
    const product = PRODUCTS.find(p => p.id === productId) || { id: productId, name: CUSTOMIZER.name, icon: '🤖', price: options.priceOverride };
    const unitPrice = typeof options.priceOverride === 'number' ? options.priceOverride : product.price;
    const variant = options.variant || null;
    const lineId = productId + '::' + (variant || 'default');

    const existing = state.cart.find(item => item.lineId === lineId);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({
        lineId, id: productId, name: product.name, icon: product.icon,
        price: unitPrice, variant, qty,
      });
    }
    saveCart();
    renderCart();
    bumpCartCount();
    playAddSound();
    showToast(`${product.icon || '🧸'} Added ${product.name} to cart`);
  }

  function removeFromCart(lineId) {
    state.cart = state.cart.filter(item => item.lineId !== lineId);
    saveCart();
    renderCart();
  }

  function changeCartQty(lineId, delta) {
    const item = state.cart.find(i => i.lineId === lineId);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    renderCart();
  }

  function cartSubtotal() {
    return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function renderCart() {
    const itemsWrap = document.getElementById('cartItems');
    const emptyMsg = document.getElementById('cartEmpty');
    const countEl = document.getElementById('cartCount');
    const totalItems = state.cart.reduce((s, i) => s + i.qty, 0);
    countEl.textContent = totalItems;

    if (state.cart.length === 0) {
      itemsWrap.innerHTML = '';
      emptyMsg.style.display = 'block';
    } else {
      emptyMsg.style.display = 'none';
      itemsWrap.innerHTML = state.cart.map(item => `
        <div class="cart-item" data-line="${item.lineId}">
          <div class="cart-item-art">${item.icon || '🧸'}</div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            ${item.variant ? `<p class="cart-item-variant">${item.variant}</p>` : ''}
            <div class="cart-item-foot">
              <div class="qty-control">
                <button class="qty-btn" data-dec="${item.lineId}" aria-label="Decrease quantity">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" data-inc="${item.lineId}" aria-label="Increase quantity">+</button>
              </div>
              <span class="price">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
            <button class="cart-item-remove" data-remove="${item.lineId}">Remove</button>
          </div>
        </div>
      `).join('');

      itemsWrap.querySelectorAll('[data-inc]').forEach(b => b.addEventListener('click', () => changeCartQty(b.dataset.inc, 1)));
      itemsWrap.querySelectorAll('[data-dec]').forEach(b => b.addEventListener('click', () => changeCartQty(b.dataset.dec, -1)));
      itemsWrap.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.remove)));
    }

    const subtotal = cartSubtotal();
    const shipping = subtotal === 0 ? 0 : (subtotal > 60 ? 0 : 5);
    const total = subtotal + shipping;
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartShipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
  }

  function bumpCartCount() {
    const countEl = document.getElementById('cartCount');
    countEl.classList.remove('is-bumped');
    void countEl.offsetWidth;
    countEl.classList.add('is-bumped');
  }

  function openCart() {
    document.getElementById('cartDrawer').classList.add('is-open');
    document.getElementById('cartOverlay').classList.add('is-open');
    document.getElementById('cartDrawer').setAttribute('aria-hidden', 'false');
    document.getElementById('cartToggle').setAttribute('aria-expanded', 'true');
  }
  function closeCart() {
    document.getElementById('cartDrawer').classList.remove('is-open');
    document.getElementById('cartOverlay').classList.remove('is-open');
    document.getElementById('cartDrawer').setAttribute('aria-hidden', 'true');
    document.getElementById('cartToggle').setAttribute('aria-expanded', 'false');
  }

  /* =========================================================
     6. Quantity Controls (showcase)
  ========================================================= */
  function initShowcaseQty() {
    const control = document.querySelector('[data-qty-for="showcase"]');
    control.querySelector('[data-action="dec"]').addEventListener('click', () => {
      state.showcaseQty = Math.max(1, state.showcaseQty - 1);
      document.getElementById('showcaseQty').textContent = state.showcaseQty;
    });
    control.querySelector('[data-action="inc"]').addEventListener('click', () => {
      state.showcaseQty = Math.min(14, state.showcaseQty + 1);
      document.getElementById('showcaseQty').textContent = state.showcaseQty;
    });

    const addShowcase = (e) => {
      addToCart('p1', {}, state.showcaseQty);
      attachRipple(e);
    };
    document.getElementById('showcaseAddBtn').addEventListener('click', addShowcase);
    document.getElementById('showcaseBuyBtn').addEventListener('click', (e) => {
      addToCart('p1', {}, state.showcaseQty);
      attachRipple(e);
      openCart();
    });
  }

  /* =========================================================
     7. Local Storage
  ========================================================= */
  function loadCart() {
    try {
      const raw = localStorage.getItem('seaman_toy_store_cart');
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }
  function saveCart() {
    try {
      localStorage.setItem('seaman_toy_store_cart', JSON.stringify(state.cart));
    } catch (err) { /* storage unavailable — cart still works for this session */ }
  }

  function getDealDeadline() {
    const key = 'seaman_toy_store_deal_deadline';
    try {
      const stored = localStorage.getItem(key);
      const now = Date.now();
      if (stored && parseInt(stored, 10) > now) return parseInt(stored, 10);
      const deadline = now + 1000 * 60 * 60 * 63; // ~2.6 days from first visit
      localStorage.setItem(key, String(deadline));
      return deadline;
    } catch (err) {
      return Date.now() + 1000 * 60 * 60 * 63;
    }
  }

  /* =========================================================
     8. FAQ Accordion
  ========================================================= */
  function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        items.forEach(other => {
          other.classList.remove('is-open');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add('is-open');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* =========================================================
     9. Countdown Timer
  ========================================================= */
  function initCountdown() {
    const deadline = getDealDeadline();
    const els = {
      d: document.getElementById('cdDays'),
      h: document.getElementById('cdHours'),
      m: document.getElementById('cdMins'),
      s: document.getElementById('cdSecs'),
    };
    function tick() {
      const diff = Math.max(0, deadline - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      els.d.textContent = String(days).padStart(2, '0');
      els.h.textContent = String(hours).padStart(2, '0');
      els.m.textContent = String(mins).padStart(2, '0');
      els.s.textContent = String(secs).padStart(2, '0');
      if (diff <= 0) clearInterval(timer);
    }
    tick();
    const timer = setInterval(tick, 1000);
  }

  /* =========================================================
     10. Search & Filtering
  ========================================================= */
  function initSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('input', () => {
      state.searchTerm = input.value;
      state.activeCategory = 'all';
      syncFilterChipsToCategory();
      document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c.dataset.filter === 'all'));
      renderProducts();
    });
  }

  /* =========================================================
     11. Mobile Navigation
  ========================================================= */
  function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    hamburger.addEventListener('click', () => {
      const open = navbar.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.getElementById('navLinks').querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navbar.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================
     12. Button Animations (ripple, sound, toast)
  ========================================================= */
  function initRippleDelegation() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.ripple');
      if (!btn) return;
      attachRipple(e, btn);
    });
  }

  function attachRipple(e, targetBtn) {
    const btn = targetBtn || e.currentTarget || e.target.closest('.ripple');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ripple-el';
    ripple.style.width = ripple.style.height = size + 'px';
    const x = (e.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2;
    const y = (e.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  }

  let audioCtx = null;
  function playAddSound() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(990, audioCtx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (err) { /* Web Audio unavailable — silently skip */ }
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  }

  /* =========================================================
     13. Newsletter Validation
  ========================================================= */
  function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const msg = document.getElementById('newsletterMsg');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      const value = input.value.trim();
      if (!emailRe.test(value)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.style.color = '#FFD23F';
        return;
      }
      msg.textContent = `You're in! A 10% discount code is on its way to ${value}.`;
      msg.style.color = '#fff';
      input.value = '';
    });
  }

  /* =========================================================
     14. Navbar scroll state
  ========================================================= */
  function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* =========================================================
     15. Init
  ========================================================= */
  function init() {
    renderCategories();
    renderFilterChips();
    renderProducts();
    renderTestimonials();
    renderFaq();
    initCustomizer();
    initShowcaseQty();
    initCountdown();
    initSearch();
    initMobileNav();
    initRippleDelegation();
    initNewsletter();
    initNavbarScroll();
    renderCart();

    document.getElementById('cartToggle').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', () => {
      if (state.cart.length === 0) { showToast('Your cart is empty.'); return; }
      showToast('This is a demo — checkout isn\u2019t connected to a real payment system.');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCart();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
