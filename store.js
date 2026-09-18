(() => {
  'use strict';

  const PRODUCTS = [
    {
      id: 'p1',
      slug: 'galaxy-blaster-x',
      name: 'Galaxy Blaster X',
      category: 'electronic',
      categoryLabel: 'Electronic Toys',
      price: 39.99,
      oldPrice: 49.99,
      rating: 4.9,
      reviews: 312,
      icon: '🔫',
      badge: 'Best seller',
      status: 'In stock',
      image: '/assets/galaxy-blaster-x.jpg?v=1',
      images: [
        '/assets/galaxy-blaster-x.jpg?v=1',
        '/assets/galaxy-blaster-x.jpg?v=1',
        '/assets/galaxy-blaster-x.jpg?v=1',
        '/assets/galaxy-blaster-x.jpg?v=1'
      ],
      description: 'A bright, action-packed blaster designed for active indoor play and creative mission-based fun.',
      longDescription: 'Galaxy Blaster X turns everyday play into a fast-paced adventure. It brings together safe indoor play, fun sounds, and imaginative pretend scenarios without overwhelming your space. The design is sturdy enough for repeated use and the easy-grip shape makes it perfect for children who love a little extra excitement in every game.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Electronic Toys',
        age: '8+',
        material: 'ABS Plastic',
        dimensions: '25 × 15 × 12 cm',
        weight: '1.2 kg',
        battery: 'Requires 3 AA Batteries'
      },
      included: ['1 × Galaxy Blaster X', 'Instruction Manual', 'Accessory Pack', 'Battery Compartment Cover']
    },
    {
      id: 'p2',
      slug: 'robobot-mini',
      name: 'RoboBot Mini',
      category: 'electronic',
      categoryLabel: 'Electronic Toys',
      price: 29.99,
      oldPrice: null,
      rating: 4.7,
      reviews: 188,
      icon: '🤖',
      badge: null,
      status: 'In stock',
      image: '/assets/robobot-mini.jpg?v=1',
      images: [
        '/assets/robobot-mini.jpg?v=1',
        '/assets/robobot-mini-family.jpg?v=1',
        '/assets/robobot-mini.jpg?v=1',
        '/assets/robobot-mini-family.jpg?v=1'
      ],
      description: 'A small robot companion that lights up, moves, and responds to touch with playful personality.',
      longDescription: 'RoboBot Mini is designed to feel like a friendly sidekick for curious kids. It lights up, responds to motion, and offers a simple, engaging play pattern that keeps little inventors entertained without feeling too complicated. The compact frame makes it easy to carry around, while the cheerful sounds bring a playful sense of motion to any room.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Electronic Toys',
        age: '6+',
        material: 'ABS Plastic',
        dimensions: '18 × 12 × 14 cm',
        weight: '0.7 kg',
        battery: 'Requires 2 AAA Batteries'
      },
      included: ['1 × RoboBot Mini', 'Charging Cable', 'Instruction Guide', 'Mini Play Mat']
    },
    {
      id: 'p3',
      slug: 'speed-racer-rc',
      name: 'Speed Racer RC',
      category: 'rc-cars',
      categoryLabel: 'RC Cars',
      price: 49.99,
      oldPrice: null,
      rating: 4.8,
      reviews: 241,
      icon: '🏎️',
      badge: 'Best seller',
      status: 'In stock',
      image: '/assets/speed-racer-rc.jpg?v=1',
      images: [
        '/assets/speed-racer-rc.jpg?v=1',
        '/assets/speed-racer-rc.jpg?v=1',
        '/assets/speed-racer-rc.jpg?v=1',
        '/assets/speed-racer-rc.jpg?v=1'
      ],
      description: 'A fast little race car that is easy to control and built for indoor sprint challenges alike.',
      longDescription: 'Speed Racer RC delivers the thrill of quick turns and smooth speed in a toy that is simple enough for younger drivers to enjoy. It is built for easy steering, steady traction, and repeatable play without complicated setup. Perfect for family challenges or a fun after-school burst of energy.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'RC Cars',
        age: '6+',
        material: 'Plastic and Rubber',
        dimensions: '22 × 12 × 8 cm',
        weight: '0.9 kg',
        battery: 'Rechargeable Battery Included'
      },
      included: ['1 × Speed Racer RC', 'USB Charging Cable', 'Instruction Sheet', 'Spare Wheel Set']
    },
    {
      id: 'p4',
      slug: 'dino-explorer-set',
      name: 'Dino Explorer Set',
      category: 'collectibles',
      categoryLabel: 'Collectibles',
      price: 34.99,
      oldPrice: null,
      rating: 4.6,
      reviews: 97,
      icon: '🦖',
      badge: null,
      status: 'In stock',
      image: '/assets/dino-explorer-set.jpg?v=1',
      images: [
        '/assets/dino-explorer-set.jpg?v=1',
        '/assets/dino-explorer-set-box.jpg?v=1',
        '/assets/dino-explorer-set.jpg?v=1',
        '/assets/dino-explorer-set-box.jpg?v=1'
      ],
      description: 'A dino-themed collection set that invites storytelling, creature play, and imaginative adventures.',
      longDescription: 'Dino Explorer Set gives children a playful way to build tiny adventures around discovery, survival, and wonder. The detail-rich figures and terrain pieces help spark storytelling while encouraging hands-on play. It is a strong pick for kids who like role-play, collecting, and building small scenes.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Collectibles',
        age: '5+',
        material: 'PVC and ABS Plastic',
        dimensions: '30 × 20 × 12 cm',
        weight: '0.8 kg',
        battery: 'No batteries required'
      },
      included: ['1 × Dino Explorer Set', '2 Dinosaur Figures', 'Mini Explorer Tools', 'Story Guide']
    },
    {
      id: 'p5',
      slug: 'magic-build-blocks',
      name: 'Magic Build Blocks',
      category: 'building',
      categoryLabel: 'Building Sets',
      price: 24.99,
      oldPrice: null,
      rating: 4.5,
      reviews: 156,
      icon: '🧱',
      badge: null,
      status: 'In stock',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=85',
      images: [
        'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85'
      ],
      description: 'A colorful block set built for creative building, stacking, and imaginative design play.',
      longDescription: 'Magic Build Blocks is all about open-ended creativity. The pieces click together comfortably and are easy for little hands to manage, making it a very approachable building set for growing designers. It encourages patience, problem-solving, and story-building as children turn the pieces into towers, spaceships, or their own invented creations.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Building Sets',
        age: '4+',
        material: 'Plastic',
        dimensions: '20 × 20 × 10 cm',
        weight: '0.6 kg',
        battery: 'No batteries required'
      },
      included: ['1 × Magic Build Blocks Set', 'Color Guide Card', 'Storage Bin', 'Instruction Sheet']
    },
    {
      id: 'p6',
      slug: 'mega-plush-bear',
      name: 'Mega Plush Bear',
      category: 'plush',
      categoryLabel: 'Plush Toys',
      price: 44.99,
      oldPrice: 54.99,
      rating: 4.9,
      reviews: 273,
      icon: '🧸',
      badge: 'Family favorite',
      status: 'In stock',
      image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=85',
      images: [
        'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85'
      ],
      description: 'A cuddly plush bear made for comfort, bedtime routines, and affectionate playtime.',
      longDescription: 'Mega Plush Bear brings the comfort of a classic companion into a size that feels instantly comforting. It has soft textures, a durable construction, and a friendly character that makes it a natural fit for bedtime routines, gentle play, and imaginative storytelling. It is a companion for calm moments as much as energetic play.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Plush Toys',
        age: '3+',
        material: 'Soft Fabric and Stuffed Filling',
        dimensions: '38 × 27 × 25 cm',
        weight: '0.9 kg',
        battery: 'No batteries required'
      },
      included: ['1 × Mega Plush Bear', 'Comfort Care Tag', 'Gift Ready Box', 'Brush for Plush Fur']
    },
    {
      id: 'p7',
      slug: 'battle-hero-figure',
      name: 'Battle Hero Figure',
      category: 'action-figures',
      categoryLabel: 'Action Figures',
      price: 19.99,
      oldPrice: null,
      rating: 4.4,
      reviews: 84,
      icon: '🦸',
      badge: null,
      status: 'In stock',
      image: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=700&q=85',
      images: [
        'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1617469763507-7d0d5c4a2ef9?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=700&q=85'
      ],
      description: 'A detailed action figure made for brave missions, make-believe stories, and collectible display.',
      longDescription: 'Battle Hero Figure gives kids a strong little character to build adventures around. It is designed with expressive details, durable joints, and flexible pose options that make imaginative play feel richer and more dynamic. Whether the mission is saving the day or creating an original storyline, it is ready for action.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Action Figures',
        age: '6+',
        material: 'PVC and ABS Plastic',
        dimensions: '15 × 8 × 20 cm',
        weight: '0.5 kg',
        battery: 'No batteries required'
      },
      included: ['1 × Battle Hero Figure', 'Display Stand', 'Mini Accessory Set', 'Collector Card']
    },
    {
      id: 'p8',
      slug: 'puzzle-quest-1000',
      name: 'Puzzle Quest 1000',
      category: 'puzzles',
      categoryLabel: 'Puzzles & Games',
      price: 21.99,
      oldPrice: 27.99,
      rating: 4.7,
      reviews: 133,
      icon: '🧩',
      badge: null,
      status: 'In stock',
      image: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=700&q=85',
      images: [
        'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=85',
        'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=85'
      ],
      description: 'A challenge-driven puzzle with layered detail and satisfying finish lines for curious players.',
      longDescription: 'Puzzle Quest 1000 turns quiet time into a focused challenge with bold shapes, layered visuals, and rewarding completion moments. It is a good fit for family game nights, independent play, and skill-building sessions that value patience, focus, and satisfaction. The large-piece format is comfortable for children and provides a satisfying finish once the final piece locks in.',
      specifications: {
        brand: 'Seaman Toy Store',
        category: 'Puzzles & Games',
        age: '7+',
        material: 'Cardboard and Printed Board',
        dimensions: '28 × 28 × 4 cm',
        weight: '0.8 kg',
        battery: 'No batteries required'
      },
      included: ['1 × Puzzle Quest 1000', 'Storage Sleeve', 'Challenge Card', 'Reference Guide']
    }
  ];

  const CATEGORIES = [
    { key: 'plush', name: 'Plush toys', icon: '🧸', description: 'Soft companions for every adventure.' },
    { key: 'action-figures', name: 'Action figures', icon: '🦸', description: 'Heroes, characters, and story starters.' },
    { key: 'rc-cars', name: 'RC cars', icon: '🏎️', description: 'High-speed fun for indoor and outdoor play.' },
    { key: 'puzzles', name: 'Puzzles and games', icon: '🧩', description: 'Screen-free challenges for curious minds.' },
    { key: 'building', name: 'Building sets', icon: '🧱', description: 'Create, rebuild, and imagine new worlds.' },
    { key: 'electronic', name: 'Electronic toys', icon: '🎮', description: 'Interactive play with a spark of tech.' },
    { key: 'collectibles', name: 'Collectibles', icon: '🦖', description: 'Small treasures with big personality.' },
  ];

  const CART_KEY = 'seaman_toy_store_cart';
  const categoryName = key => (CATEGORIES.find(category => category.key === key) || {}).name || key;
  const money = value => `$${value.toFixed(2)}`;
  const stars = rating => '★★★★★'.slice(0, Math.round(rating)) + '☆☆☆☆☆'.slice(0, 5 - Math.round(rating));

  function buildProductUrl(product) {
    return `/products/${product.slug}/`;
  }

  function getProductBySlug(slug) {
    return PRODUCTS.find(product => product.slug === slug) || PRODUCTS[0];
  }

  function loadCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
  }

  function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

  function updateCartCount() {
    const count = loadCart().reduce((total, item) => total + item.qty, 0);
    document.querySelectorAll('[data-cart-count]').forEach(element => { element.textContent = count; });
  }

  function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(item => item.id === productId);
    if (!product) return;
    const cart = loadCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty += quantity;
    else cart.push({ id: product.id, slug: product.slug, name: product.name, icon: product.icon, price: product.price, qty: quantity });
    saveCart(cart);
    updateCartCount();
    showToast(`${product.name} added to cart`);
  }

  function showToast(message) {
    const toast = document.querySelector('[data-toast]');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
  }

  function productCard(product) {
    return `<article class="product-card" data-product-id="${product.id}" tabindex="0" role="button" aria-label="View ${product.name}">
      <div class="product-image" role="img" aria-label="${product.name}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
        <span class="product-fallback" aria-hidden="true" hidden>${product.icon}</span>
      </div>
      <div class="product-meta"><span>${categoryName(product.category)}</span><span>${product.reviews} reviews</span></div>
      <h3>${product.name}</h3>
      <div class="product-rating" aria-label="${product.rating} out of 5 stars"><span>${stars(product.rating)}</span> ${product.rating}</div>
      <div class="product-buy"><div><strong>${money(product.price)}</strong>${product.oldPrice ? `<del>${money(product.oldPrice)}</del>` : ''}</div><button type="button" class="button button-dark button-small add-to-cart-btn" data-add-product="${product.id}">Add to cart</button></div>
    </article>`;
  }

  function bindProductInteractions() {
    document.querySelectorAll('.product-card').forEach((card) => {
      const onNavigate = (event) => {
        if (event.target.closest('[data-add-product]') || event.target.closest('[data-quickview]')) {
          return;
        }
        const product = PRODUCTS.find(item => item.id === card.dataset.productId);
        if (product) {
          window.location.href = buildProductUrl(product);
        }
      };
      card.addEventListener('click', onNavigate);
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const product = PRODUCTS.find(item => item.id === card.dataset.productId);
          if (product) {
            window.location.href = buildProductUrl(product);
          }
        }
      });
    });
  }

  function renderFeatured() {
    const grid = document.querySelector('[data-featured-products]');
    if (grid) {
      grid.innerHTML = PRODUCTS.slice(0, 4).map(productCard).join('');
      bindProductInteractions();
    }
  }

  function renderCategories(target = '[data-category-grid]') {
    const grid = document.querySelector(target);
    if (!grid) return;
    grid.innerHTML = CATEGORIES.map(category => `<a class="category-tile" href="products.html?category=${category.key}"><span class="category-icon">${category.icon}</span><div><h3>${category.name}</h3><p>${category.description}</p></div><span class="arrow">↗</span></a>`).join('');
  }

  function renderProducts() {
    const grid = document.querySelector('[data-products-grid]');
    if (!grid) return;
    const search = document.querySelector('[data-product-search]');
    const filter = document.querySelector('[data-category-filter]');
    const sort = document.querySelector('[data-sort]');
    const params = new URLSearchParams(window.location.search);
    let category = filter?.value || params.get('category') || 'all';
    if (filter) filter.value = category;
    let term = search?.value.trim().toLowerCase() || '';
    let visible = PRODUCTS.filter(product => (category === 'all' || product.category === category) && (!term || product.name.toLowerCase().includes(term)));
    if (sort?.value === 'price-low') visible.sort((a, b) => a.price - b.price);
    if (sort?.value === 'price-high') visible.sort((a, b) => b.price - a.price);
    if (sort?.value === 'rating') visible.sort((a, b) => b.rating - a.rating);
    grid.innerHTML = visible.map(productCard).join('');
    bindProductInteractions();
    const result = document.querySelector('[data-result-count]');
    if (result) result.textContent = `${visible.length} ${visible.length === 1 ? 'product' : 'products'}`;
    const empty = document.querySelector('[data-empty-products]');
    if (empty) empty.hidden = visible.length > 0;
  }

  function renderCartPage() {
    const list = document.querySelector('[data-cart-list]');
    if (!list) return;
    const cart = loadCart();
    const empty = document.querySelector('[data-cart-empty]');
    list.innerHTML = cart.map(item => `<article class="cart-line"><div class="cart-line-art">${item.icon}</div><div class="cart-line-info"><h3>${item.name}</h3><p>${money(item.price)} each</p><div class="cart-line-actions"><div class="quantity"><button type="button" data-cart-dec="${item.id}" aria-label="Decrease ${item.name}">−</button><span>${item.qty}</span><button type="button" data-cart-inc="${item.id}" aria-label="Increase ${item.name}">+</button></div><button type="button" class="text-button" data-cart-remove="${item.id}">Remove</button></div></div><strong>${money(item.price * item.qty)}</strong></article>`).join('');
    if (empty) empty.hidden = cart.length > 0;
    const subtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);
    const shipping = subtotal === 0 || subtotal >= 60 ? 0 : 5;
    const total = subtotal + shipping;
    const set = (selector, value) => { const element = document.querySelector(selector); if (element) element.textContent = value; };
    set('[data-cart-subtotal]', money(subtotal)); set('[data-cart-shipping]', shipping ? money(shipping) : 'Free'); set('[data-cart-total]', money(total));
  }

  function bindCartActions() {
    document.addEventListener('click', event => {
      const add = event.target.closest('[data-add-product]');
      if (add) {
        event.stopPropagation();
        addToCart(add.dataset.addProduct, Number(add.dataset.quantity || 1));
      }

      const inc = event.target.closest('[data-cart-inc]');
      const dec = event.target.closest('[data-cart-dec]');
      const remove = event.target.closest('[data-cart-remove]');
      if (inc || dec || remove) {
        const id = (inc || dec || remove).dataset.cartInc || (inc || dec || remove).dataset.cartDec || (inc || dec || remove).dataset.cartRemove;
        const cart = loadCart();
        const item = cart.find(entry => entry.id === id);
        if (remove) {
          saveCart(cart.filter(entry => entry.id !== id));
        } else if (item) {
          item.qty = Math.max(1, item.qty + (inc ? 1 : -1));
          saveCart(cart);
        }
        renderCartPage();
        updateCartCount();
      }
      const buyNow = event.target.closest('[data-buy-now]');
      if (buyNow) {
        event.preventDefault();
        event.stopPropagation();
        const quantity = Number(buyNow.dataset.quantity || 1);
        addToCart(buyNow.dataset.buyNow, quantity);
        window.location.href = 'cart.html';
      }
    });
  }

  function bindProductControls() {
    const search = document.querySelector('[data-product-search]');
    const filter = document.querySelector('[data-category-filter]');
    const sort = document.querySelector('[data-sort]');
    [search, filter, sort].forEach(control => control?.addEventListener(control === search ? 'input' : 'change', renderProducts));
  }

  function bindMobileMenu() {
    const button = document.querySelector('[data-menu-toggle]');
    const nav = document.querySelector('[data-site-nav]');
    button?.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); button.setAttribute('aria-expanded', String(open)); });
  }

  function bindForms() {
    document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); form.reset(); showToast('Thanks. We will be in touch soon.'); }));
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    bindMobileMenu();
    bindCartActions();
    bindProductControls();
    bindForms();
    renderFeatured();
    renderCategories();
    renderProducts();
    renderCartPage();
    document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
  });

  window.SeamanStore = {
    PRODUCTS,
    CATEGORIES,
    money,
    stars,
    buildProductUrl,
    getProductBySlug,
    addToCart,
    loadCart,
    saveCart,
    updateCartCount,
    showToast,
    categoryName
  };
})();
