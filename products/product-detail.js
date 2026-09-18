(function () {
  'use strict';

  const root = document.querySelector('[data-product-detail]');
  if (!root) return;

  const store = window.SeamanStore || {};
  const products = store.PRODUCTS || [];
  const money = store.money || ((value) => `$${Number(value).toFixed(2)}`);

  function getProductFromPath() {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const slug = segments[segments.length - 1] || '';
    return store.getProductBySlug ? store.getProductBySlug(slug) : products.find((product) => product.slug === slug) || products[0];
  }

  function updateGallery(product) {
    const current = root.querySelector('[data-main-image]');
    if (current) current.src = product.images[0];
    root.querySelectorAll('[data-thumb-image]').forEach((button) => {
      const isActive = button.dataset.thumbImage === product.images[0];
      button.classList.toggle('is-active', isActive);
    });
  }

  function renderRelatedProducts(product) {
    const related = products.filter((item) => item.id !== product.id).slice(0, 4);
    return related.map((item) => `
      <article class="product-card related-product-card" data-product-id="${item.id}" tabindex="0" role="button" aria-label="View ${item.name}">
        <div class="product-image" role="img" aria-label="${item.name}">
          ${item.badge ? `<span class="product-badge">${item.badge}</span>` : ''}
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="product-meta"><span>${store.categoryName ? store.categoryName(item.category) : item.categoryLabel}</span><span>${item.reviews} reviews</span></div>
        <h3>${item.name}</h3>
        <div class="product-rating" aria-label="${item.rating} out of 5 stars"><span>${store.stars ? store.stars(item.rating) : '★★★★★'}</span> ${item.rating}</div>
        <div class="product-buy"><div><strong>${money(item.price)}</strong>${item.oldPrice ? `<del>${money(item.oldPrice)}</del>` : ''}</div><button type="button" class="button button-dark button-small related-add" data-add-product="${item.id}">Add to cart</button></div>
      </article>
    `).join('');
  }

  function bindRelatedNavigation() {
    root.querySelectorAll('.related-product-card').forEach((card) => {
      const navigate = (event) => {
        if (event.target.closest('[data-add-product]')) return;
        const product = products.find((item) => item.id === card.dataset.productId);
        if (product) {
          window.location.href = store.buildProductUrl ? store.buildProductUrl(product) : `../${product.slug}/`;
        }
      };
      card.addEventListener('click', navigate);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const product = products.find((item) => item.id === card.dataset.productId);
          if (product) {
            window.location.href = store.buildProductUrl ? store.buildProductUrl(product) : `../${product.slug}/`;
          }
        }
      });
    });
  }

  function render() {
    const product = getProductFromPath();
    if (!product) return;

    document.title = `${product.name} | Seaman Toy Store`;
    const breadcrumbName = document.querySelector('[data-product-name]');
    if (breadcrumbName) breadcrumbName.textContent = product.name;

    const specificationEntries = Object.entries(product.specifications || {}).map(([key, value]) => `
      <div class="spec-row">
        <dt>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</dt>
        <dd>${value}</dd>
      </div>
    `).join('');

    root.innerHTML = `
      <div class="product-detail-layout">
        <div class="product-gallery" aria-label="${product.name} gallery">
          <div class="product-gallery-main">
            <img src="${product.images[0]}" alt="${product.name}" data-main-image />
          </div>
          <div class="product-thumb-row">
            ${product.images.map((image, index) => `
              <button type="button" class="product-thumb ${index === 0 ? 'is-active' : ''}" data-thumb-image="${image}" aria-label="Show product image ${index + 1}">
                <img src="${image}" alt="${product.name} view ${index + 1}" loading="lazy" />
              </button>
            `).join('')}
          </div>
        </div>

        <div class="product-info-panel">
          <p class="kicker product-category">${product.categoryLabel}</p>
          <h1>${product.name}</h1>
          <div class="product-meta-inline">
            <span class="star-rating">${store.stars ? store.stars(product.rating) : '★★★★★'}</span>
            <span>${product.rating}</span>
            <a href="#reviews">${product.reviews} reviews</a>
          </div>
          <div class="product-price-row">
            <span class="product-price">${money(product.price)}</span>
            ${product.oldPrice ? `<span class="product-old-price">${money(product.oldPrice)}</span>` : ''}
          </div>
          <p class="product-summary">${product.description}</p>
          <div class="product-status-row">
            <span class="status-pill">${product.status}</span>
            <span>Free delivery over $60</span>
          </div>

          <div class="quantity-row-detail">
            <span>Quantity</span>
            <div class="quantity quantity-detail">
              <button type="button" data-qty-dec aria-label="Decrease quantity">−</button>
              <span data-detail-qty>1</span>
              <button type="button" data-qty-inc aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div class="detail-action-row">
            <button type="button" class="button button-dark" data-add-product="${product.id}">Add to cart</button>
            <button type="button" class="button button-coral" data-buy-now="${product.id}">Buy now</button>
          </div>
        </div>
      </div>

      <section class="detail-content-section" aria-label="Product information">
        <div class="detail-copy-block">
          <p class="kicker">About this product</p>
          <h2>${product.name}</h2>
          <p>${product.longDescription}</p>
        </div>

        <div class="spec-block">
          <p class="kicker">Product specifications</p>
          <dl class="spec-list">
            ${specificationEntries}
          </dl>
        </div>
      </section>

      <section class="include-section">
        <p class="kicker">What’s included</p>
        <div class="included-grid">
          ${product.included.map((item) => `<div class="included-item"><span>✓</span><p>${item}</p></div>`).join('')}
        </div>
      </section>

      <section class="explore-more-section">
        <div class="section-heading">
          <div>
            <p class="kicker">Recommended</p>
            <h2>Explore more products</h2>
          </div>
        </div>
        <div class="product-grid product-grid-wide related-grid">
          ${renderRelatedProducts(product)}
        </div>
      </section>
    `;

    const thumbButtons = root.querySelectorAll('[data-thumb-image]');
    thumbButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const mainImage = root.querySelector('[data-main-image]');
        const selected = button.dataset.thumbImage;
        mainImage.src = selected;
        thumbButtons.forEach((thumb) => thumb.classList.toggle('is-active', thumb === button));
      });
    });

    const qtyValue = root.querySelector('[data-detail-qty]');
    const setQty = (value) => {
      const qty = Math.max(1, Number(value) || 1);
      if (qtyValue) qtyValue.textContent = qty;
    };

    root.querySelector('[data-qty-dec]')?.addEventListener('click', () => setQty((Number(qtyValue?.textContent || 1) || 1) - 1));
    root.querySelector('[data-qty-inc]')?.addEventListener('click', () => setQty((Number(qtyValue?.textContent || 1) || 1) + 1));

    const addButton = root.querySelector('[data-add-product]');
    addButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      const quantity = Number(qtyValue?.textContent || 1);
      store.addToCart(product.id, quantity);
    });

    const buyButton = root.querySelector('[data-buy-now]');
    buyButton?.addEventListener('click', (event) => {
      event.stopPropagation();
      const quantity = Number(qtyValue?.textContent || 1);
      store.addToCart(product.id, quantity);
      window.location.href = '../../cart.html';
    });

    bindRelatedNavigation();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
