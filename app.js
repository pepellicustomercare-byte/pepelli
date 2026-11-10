/**
 * PEPELLI AI E-COMMERCE APPLICATION ENGINE
 * Full-featured interactive store with exact reference UI, cart, wishlist,
 * catalog, modals, tracking, checkout, and AI hooks.
 */

// Global State
const state = {
  cart: [],
  wishlist: [],
  activeCategory: 'all',
  searchQuery: '',
  appliedCoupon: null,
  activeProductModal: null,
  orders: [
    {
      id: 'PEP-98241',
      date: '10 Nov 2026',
      items: ['DS-001 (Size M)'],
      total: 799,
      status: 'In Transit',
      courier: 'Delhivery Express',
      awb: 'DEL938472910',
      timeline: [
        { label: 'Order Confirmed', time: '10 Nov, 08:30 AM', done: true },
        { label: 'Quality Checked & Packed', time: '10 Nov, 10:15 AM', done: true },
        { label: 'Dispatched from Jaipur Warehouse', time: '10 Nov, 12:45 PM', done: true },
        { label: 'In Transit (Hub Sorting)', time: '10 Nov, 03:20 PM', done: true },
        { label: 'Out for Delivery', time: 'Expected Tomorrow', done: false },
        { label: 'Delivered', time: 'Pending', done: false }
      ]
    }
  ]
};

// Comprehensive Catalog Data
// 1. Reference Products (DS-001 to DS-005) exactly matching the reference image!
// 2. Real Photoshoot Products from the workspace (2Pcs, 3Pcsd, Long Kurti)
const productsData = [
  {
    id: 'DS-001',
    name: 'Royal Rani Pink Embroidered Kurti',
    code: 'DS-001',
    category: 'kurtis',
    subCategory: 'Straight Kurtis',
    price: 799,
    originalPrice: 1999,
    discount: '60% OFF',
    rating: 4.9,
    reviewsCount: 142,
    image: 'assets/ref/product_ds001.jpg',
    fabric: 'Pure Cotton Slub with Zari Work',
    sleeve: '3/4 Sleeves',
    neck: 'Mandarin Round Neck with Embroidery',
    length: 'Calf Length (44 inches)',
    tag: 'Best Seller',
    stock: 4,
    description: 'Elevate your ethnic charm with this premium Rani Pink kurti crafted from breathable pure cotton slub. Features delicate gold zari neck embroidery, handcrafted wooden button accents, and straight-cut silhouette perfect for festive celebrations and office elegance.'
  },
  {
    id: 'DS-002',
    name: 'Midnight Black Regal Embroidered Kurti',
    code: 'DS-002',
    category: 'kurtis',
    subCategory: 'Straight Kurtis',
    price: 799,
    originalPrice: 1899,
    discount: '58% OFF',
    rating: 4.8,
    reviewsCount: 98,
    image: 'assets/ref/product_ds002.jpg',
    fabric: 'Premium Rayon Slub',
    sleeve: '3/4 Sleeves',
    neck: 'Placket Collar with Golden Button Accents',
    length: 'Calf Length (43 inches)',
    tag: 'Trending',
    stock: 7,
    description: 'A timeless black kurti featuring intricate golden thread work along the front placket. Crafted from ultra-soft rayon slub for a relaxed yet polished royal look. Ideal for evening gatherings and smart daily wear.'
  },
  {
    id: 'DS-003',
    name: 'Royal Purple Floral Printed Kurti',
    code: 'DS-003',
    category: 'printed',
    subCategory: 'Printed Kurtis',
    price: 799,
    originalPrice: 1799,
    discount: '55% OFF',
    rating: 4.9,
    reviewsCount: 112,
    image: 'assets/ref/product_ds003.jpg',
    fabric: '100% Breathable Jaipuri Cotton',
    sleeve: '3/4 Sleeves',
    neck: 'Round Neck with Border Detailing',
    length: 'Calf Length (44 inches)',
    tag: 'Pure Cotton',
    stock: 5,
    description: 'Immerse in the beauty of traditional Jaipuri floral prints in an enchanting royal purple hue. Breathable, skin-friendly, and pre-shrunk cotton fabric ensures all-day soothing comfort.'
  },
  {
    id: 'DS-004',
    name: 'Sunset Magenta Geometric Bias Kurti',
    code: 'DS-004',
    category: 'aline',
    subCategory: 'A-Line Dresses',
    price: 799,
    originalPrice: 1999,
    discount: '60% OFF',
    rating: 4.7,
    reviewsCount: 86,
    image: 'assets/ref/product_ds004.jpg',
    fabric: 'Georgette Silk Blend with Crepe Lining',
    sleeve: 'Sleeveless / Inner Attach Sleeves',
    neck: 'Boat Neck',
    length: 'Calf Length (45 inches)',
    tag: 'New Style',
    stock: 3,
    description: 'Featuring dynamic diagonal geometric stripes in magenta pink and azure blue. A chic A-line silhouette with fluid drape that moves gracefully with every step.'
  },
  {
    id: 'DS-005',
    name: 'Crimson Red Floral Flared Ethnic Kurti',
    code: 'DS-005',
    category: 'printed',
    subCategory: 'Printed Kurtis',
    price: 799,
    originalPrice: 1699,
    discount: '53% OFF',
    rating: 4.9,
    reviewsCount: 174,
    image: 'assets/ref/product_ds005.jpg',
    fabric: 'Soft Viscose Rayon',
    sleeve: 'Short Sleeves with Contrast Piping',
    neck: 'Scoop Neck with Floral Embroidered Border',
    length: 'Calf Length (43 inches)',
    tag: 'Hot Deal',
    stock: 6,
    description: 'Vibrant crimson red ethnic print kurti with contrasting green piping. Breathable fabric tailored for effortless everyday comfort and radiant festive warmth.'
  },

  // 2-Piece Kurti & Pant Sets (Real Photoshoot from workspace folder "2Pcs")
  {
    id: '2PC-101',
    name: 'Jaipuri Floral 2-Piece Kurti & Pant Set',
    code: '2PC-101',
    category: 'coord',
    subCategory: 'Co-ord Sets',
    price: 1099,
    originalPrice: 2499,
    discount: '56% OFF',
    rating: 4.9,
    reviewsCount: 64,
    image: 'assets/products/twopcs_1.jpg',
    fabric: '100% Pure Jaipuri Cotton (60x60)',
    sleeve: '3/4 Sleeves',
    neck: 'V-Neck with Handwork Lace',
    length: 'Kurti 44" | Pant 38"',
    tag: 'Best Seller',
    stock: 5,
    description: 'Stunning 2-piece ensemble consisting of an artisanal block-printed kurti paired with matching tailored cigarette pants with elasticated waistband and one side pocket.'
  },
  {
    id: '2PC-102',
    name: 'Pastel Mint 2-Piece Embroidered Set',
    code: '2PC-102',
    category: 'coord',
    subCategory: 'Co-ord Sets',
    price: 1149,
    originalPrice: 2599,
    discount: '55% OFF',
    rating: 4.8,
    reviewsCount: 52,
    image: 'assets/products/twopcs_2.jpg',
    fabric: 'Premium Cotton Slub',
    sleeve: '3/4 Sleeves',
    neck: 'Collar Neck with Thread Work',
    length: 'Kurti 44" | Pant 38"',
    tag: 'Trending',
    stock: 8,
    description: 'Cool and serene mint hue kurti set with exquisite thread embroidery on yoke and pant hem. Breathable cotton weave ensures supreme elegance in Indian weather.'
  },
  {
    id: '2PC-103',
    name: 'Ethnic Indigo Motif Kurti & Trouser Set',
    code: '2PC-103',
    category: 'coord',
    subCategory: 'Co-ord Sets',
    price: 1199,
    originalPrice: 2699,
    discount: '55% OFF',
    rating: 4.9,
    reviewsCount: 78,
    image: 'assets/products/twopcs_3.jpg',
    fabric: 'Pure Cotton Cambric',
    sleeve: '3/4 Sleeves',
    neck: 'Notch Neck',
    length: 'Kurti 44" | Trouser 39"',
    tag: 'Handcrafted',
    stock: 4,
    description: 'Timeless Indigo dye prints inspired by Rajasthan royal palaces. Handcrafted detailing and breathable cambric cotton weave tailored for effortless luxury.'
  },
  {
    id: '2PC-104',
    name: 'Sunset Peach Designer Co-ord Kurti Set',
    code: '2PC-104',
    category: 'coord',
    subCategory: 'Co-ord Sets',
    price: 1049,
    originalPrice: 2299,
    discount: '54% OFF',
    rating: 4.8,
    reviewsCount: 41,
    image: 'assets/products/twopcs_4.jpg',
    fabric: 'Soft Rayon Twill',
    sleeve: 'Full Sleeves with Cuffs',
    neck: 'Mandarin Collar',
    length: 'Kurti 42" | Pant 38"',
    tag: 'Designer Pick',
    stock: 6,
    description: 'Modern fusion styling meets heritage Indian aesthetics. Sunset peach hue with relaxed cigarette trousers, perfect for office chic and casual brunch dates.'
  },

  // 3-Piece Dupatta Suit Sets (Real Photoshoot from workspace folder "3Pcsd")
  {
    id: '3PC-201',
    name: 'Imperial 3-Piece Kurti Pant & Dupatta Set',
    code: '3PC-201',
    category: 'anarkali',
    subCategory: 'Anarkali',
    price: 1599,
    originalPrice: 3999,
    discount: '60% OFF',
    rating: 5.0,
    reviewsCount: 189,
    image: 'assets/products/threepcs_1.jpg',
    fabric: 'Pure Chanderi Silk with Cotton Lining',
    sleeve: '3/4 Sleeves with Gota Patti',
    neck: 'Sweetheart Neck with Zari Yoke',
    length: 'Kurti 46" | Pant 38" | Dupatta 2.25m',
    tag: 'Wedding Festive',
    stock: 3,
    description: 'An ethereal 3-piece festive suit featuring delicate Gota Patti border work, matching pants, and a feather-light organza dupatta with golden tassels. Handcrafted perfection for weddings and festive pujas.'
  },
  {
    id: '3PC-202',
    name: 'Emerald Blossom 3-Piece Festive Suit Set',
    code: '3PC-202',
    category: 'anarkali',
    subCategory: 'Anarkali',
    price: 1699,
    originalPrice: 4299,
    discount: '60% OFF',
    rating: 4.9,
    reviewsCount: 135,
    image: 'assets/products/threepcs_2.jpg',
    fabric: 'Heavy Rayon with Digital Print Dupatta',
    sleeve: '3/4 Sleeves',
    neck: 'Round Neck with Sequence Work',
    length: 'Kurti 45" | Pant 38" | Dupatta 2.2m',
    tag: 'Festive Must-Have',
    stock: 5,
    description: 'Royal Emerald Green flared kurta paired with contrast pants and a magnificent digital floral print dupatta. Accented with subtle sequence embroidery that shimmers gracefully under festive lighting.'
  },
  {
    id: '3PC-203',
    name: 'Regal Maroon Embroidered 3-Piece Suit Set',
    code: '3PC-203',
    category: 'anarkali',
    subCategory: 'Anarkali',
    price: 1799,
    originalPrice: 4499,
    discount: '60% OFF',
    rating: 4.9,
    reviewsCount: 94,
    image: 'assets/products/threepcs_3.jpg',
    fabric: 'Cotton Silk Blend with Jacquard Dupatta',
    sleeve: '3/4 Sleeves',
    neck: 'Angrakha V-Neck with Dori Latkan',
    length: 'Kurti 46" | Pant 39" | Dupatta 2.3m',
    tag: 'Premium Luxury',
    stock: 4,
    description: 'Royal Maroon angrakha silhouette with authentic Jaipur dori latkan and golden jacquard woven dupatta. A celebration of timeless heritage craftsmanship.'
  },
  {
    id: '3PC-204',
    name: 'Blush Pink Organza 3-Piece Party Set',
    code: '3PC-204',
    category: 'aline',
    subCategory: 'A-Line Dresses',
    price: 1649,
    originalPrice: 3899,
    discount: '57% OFF',
    rating: 4.8,
    reviewsCount: 76,
    image: 'assets/products/threepcs_4.jpg',
    fabric: 'Pure Cotton with Organza Dupatta',
    sleeve: '3/4 Sleeves',
    neck: 'Embroidered Scoop Neck',
    length: 'Kurti 45" | Pant 38" | Dupatta 2.2m',
    tag: 'Trending',
    stock: 6,
    description: 'Delicate pastel blush pink suit set with handcrafted pearl work along neckline and an airy organza dupatta with scalloped borders.'
  },

  // Long Kurtis (Real Photoshoot from workspace folder "Long Kurti")
  {
    id: 'LK-301',
    name: 'Azure Blue Flared Long Ethnic Gown Kurti',
    code: 'LK-301',
    category: 'kurtis',
    subCategory: 'Long Kurti',
    price: 899,
    originalPrice: 2199,
    discount: '59% OFF',
    rating: 4.9,
    reviewsCount: 110,
    image: 'assets/products/long_kurti_1.jpg',
    fabric: 'Heavy Rayon 14kg Quality',
    sleeve: '3/4 Sleeves',
    neck: 'Round Neck with Potli Button Work',
    length: 'Ankle Length (48 inches)',
    tag: 'Heavy Flair',
    stock: 5,
    description: 'Captivating deep azure blue long kurti featuring a generous 3-meter flair, potli button detailing, and graceful silhouette that can be worn standalone as a maxi dress or paired with leggings.'
  },
  {
    id: 'LK-302',
    name: 'Golden Ochre Handblock Print Long Kurti',
    code: 'LK-302',
    category: 'kurtis',
    subCategory: 'Long Kurti',
    price: 949,
    originalPrice: 2299,
    discount: '58% OFF',
    rating: 4.8,
    reviewsCount: 88,
    image: 'assets/products/long_kurti_2.jpg',
    fabric: '100% Pure Jaipuri Cotton',
    sleeve: '3/4 Sleeves',
    neck: 'Keyhole Neck with Tassels',
    length: 'Ankle Length (47 inches)',
    tag: 'Pure Cotton',
    stock: 4,
    description: 'Handcrafted golden ochre long kurti with Bagru handblock motif prints and tie-up tassels. Pure organic cotton keeps you cool, confident, and stylish all day long.'
  },
  {
    id: 'LK-303',
    name: 'Ruby Wine A-Line Flared Long Kurti',
    code: 'LK-303',
    category: 'aline',
    subCategory: 'Long Kurti',
    price: 999,
    originalPrice: 2399,
    discount: '58% OFF',
    rating: 4.9,
    reviewsCount: 97,
    image: 'assets/products/long_kurti_3.jpg',
    fabric: 'Premium Slub Rayon with Gold Foil',
    sleeve: '3/4 Sleeves with Gold Border',
    neck: 'Mandarin Collar',
    length: 'Ankle Length (48 inches)',
    tag: 'Party Wear',
    stock: 5,
    description: 'Rich wine red hue accented with fine golden foil motifs. Flattering A-line cut enhances every silhouette while providing utmost comfort.'
  },

  // Daily Chic Tops & Short Kurtis
  {
    id: 'TP-401',
    name: 'Boho Indigo Floral Short Peplum Kurti Top',
    code: 'TP-401',
    category: 'tops',
    subCategory: 'Tops',
    price: 649,
    originalPrice: 1499,
    discount: '56% OFF',
    rating: 4.7,
    reviewsCount: 63,
    image: 'assets/ref/cat_tops.jpg',
    fabric: '100% Breathable Cotton',
    sleeve: 'Elbow Sleeves with Ruffles',
    neck: 'V-Neck with Tie-up Tassels',
    length: 'Hip Length (28 inches)',
    tag: 'Casual Everyday',
    stock: 8,
    description: 'Cute, trendy peplum silhouette short kurti designed to pair effortlessly with jeans, palazzos, or trousers. Handblock floral print with playful ruffled sleeve cuffs.'
  }
];

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  loadStorage();
  renderNewArrivalsCarousel();
  renderFullCatalog();
  updateCartUI();
  updateWishlistUI();
  initEventListeners();
});

// Load localStorage
function loadStorage() {
  try {
    const savedCart = localStorage.getItem('pepelli_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
    else {
      // Default initial item as seen in mockup with "3" badge
      state.cart = [
        { product: productsData[0], size: 'M', quantity: 1 },
        { product: productsData[1], size: 'L', quantity: 1 },
        { product: productsData[2], size: 'M', quantity: 1 }
      ];
    }
    const savedWish = localStorage.getItem('pepelli_wishlist');
    if (savedWish) state.wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.error('Storage parse error:', e);
  }
}

function saveStorage() {
  localStorage.setItem('pepelli_cart', JSON.stringify(state.cart));
  localStorage.setItem('pepelli_wishlist', JSON.stringify(state.wishlist));
}

// -----------------------------------------------------------------------------
// RENDER NEW ARRIVALS CAROUSEL (The 5 items from the Reference Mockup)
// -----------------------------------------------------------------------------
function renderNewArrivalsCarousel() {
  const track = document.getElementById('new-arrivals-track');
  if (!track) return;

  const newItems = productsData.filter(p => ['DS-001', 'DS-002', 'DS-003', 'DS-004', 'DS-005'].includes(p.code));

  track.innerHTML = newItems.map(p => {
    const isWished = state.wishlist.some(w => w.id === p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-img-box" onclick="openProductModal('${p.id}')">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" />
          <button class="btn-wishlist ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')" title="Add to Wishlist">
            <i class="${isWished ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
          <div class="product-tag-pill">${p.tag}</div>
        </div>
        <div class="product-card-body">
          <div class="product-code-title">${p.code}</div>
          <div class="product-price-row">
            <span class="current-price">₹${p.price}</span>
            <span class="strike-price">₹${p.originalPrice}</span>
            <span class="discount-percent">${p.discount}</span>
          </div>
          <button class="btn-add-cart" onclick="quickAddToCart('${p.id}')">
            <i class="fa-solid fa-cart-shopping"></i> ADD TO CART
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// RENDER FULL CATALOG (Tabs & Filters)
// -----------------------------------------------------------------------------
function renderFullCatalog() {
  const container = document.getElementById('catalog-grid');
  if (!container) return;

  let filtered = productsData;

  // Filter by active category
  if (state.activeCategory && state.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeCategory || p.subCategory.toLowerCase().includes(state.activeCategory.toLowerCase()));
  }

  // Filter by search query
  if (state.searchQuery && state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.subCategory.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fa-solid fa-magnifying-glass text-4xl text-slate-300 mb-3 block"></i>
        <p class="text-slate-600 font-medium">No matching kurtis found for "${state.searchQuery}".</p>
        <button class="mt-4 px-6 py-2 bg-[#00c2cb] text-slate-900 rounded-full font-bold hover:bg-[#00e5ff]" onclick="resetFilters()">
          View All Kurtis
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isWished = state.wishlist.some(w => w.id === p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-img-box" onclick="openProductModal('${p.id}')">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" />
          <button class="btn-wishlist ${isWished ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${p.id}')" title="Wishlist">
            <i class="${isWished ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
          <div class="product-tag-pill">${p.tag}</div>
        </div>
        <div class="product-card-body">
          <div class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">${p.subCategory}</div>
          <div class="product-code-title line-clamp-1" title="${p.name}">${p.name}</div>
          <div class="flex items-center gap-1 my-1 text-amber-500 text-xs">
            <i class="fa-solid fa-star"></i>
            <span class="font-bold text-slate-800">${p.rating}</span>
            <span class="text-slate-400">(${p.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <span class="current-price">₹${p.price}</span>
            <span class="strike-price">₹${p.originalPrice}</span>
            <span class="discount-percent">${p.discount}</span>
          </div>
          <div class="flex gap-2 w-full mt-1">
            <button class="btn-add-cart flex-1" onclick="quickAddToCart('${p.id}')">
              <i class="fa-solid fa-cart-shopping"></i> ADD
            </button>
            <button class="px-3 py-2 bg-slate-100 hover:bg-[#00c2cb] hover:text-white rounded-full text-slate-700 transition" onclick="openProductModal('${p.id}')" title="Quick View & AI Advisor">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// -----------------------------------------------------------------------------
// FILTER & SEARCH HANDLERS
// -----------------------------------------------------------------------------
function setCategory(catKey) {
  state.activeCategory = catKey;
  
  // Update subnav active class
  document.querySelectorAll('.subnav-link').forEach(link => {
    if (link.dataset.cat === catKey) link.classList.add('active');
    else link.classList.remove('active');
  });

  renderFullCatalog();

  // Scroll to catalog section smoothly
  const catalogSec = document.getElementById('explore-catalog');
  if (catalogSec && catKey !== 'all') {
    catalogSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) searchInput.value = '';
  setCategory('all');
}

// -----------------------------------------------------------------------------
// CART ACTIONS & DRAWER UI
// -----------------------------------------------------------------------------
function quickAddToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  // Check if already in cart with default size M
  const existing = state.cart.find(c => c.product.id === productId && c.size === 'M');
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ product, size: 'M', quantity: 1 });
  }

  saveStorage();
  updateCartUI();
  showToast(`✨ ${product.code} added to Cart!`);
}

function updateCartQuantity(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveStorage();
  updateCartUI();
}

function removeCartItem(index) {
  if (!state.cart[index]) return;
  const item = state.cart[index];
  state.cart.splice(index, 1);
  saveStorage();
  updateCartUI();
  showToast(`Item removed from cart.`);
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update badge counters in header
  const badgeEl = document.getElementById('cart-badge');
  if (badgeEl) {
    badgeEl.textContent = totalCount;
    badgeEl.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  // Calculate financials
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const mrpTotal = state.cart.reduce((sum, item) => sum + (item.product.originalPrice * item.quantity), 0);
  const totalSavings = mrpTotal - subtotal;
  const shippingFee = subtotal >= 999 || subtotal === 0 ? 0 : 49;
  
  let couponDiscount = 0;
  if (state.appliedCoupon === 'PEPELLI10') {
    couponDiscount = Math.round(subtotal * 0.10);
  } else if (state.appliedCoupon === 'FIRST150') {
    couponDiscount = Math.min(150, subtotal);
  }

  const grandTotal = Math.max(0, subtotal - couponDiscount + shippingFee);

  // Render items in drawer
  const container = document.getElementById('cart-items-list');
  const emptyState = document.getElementById('cart-empty-state');
  const footerEl = document.getElementById('cart-footer-summary');

  if (container && emptyState && footerEl) {
    if (state.cart.length === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      footerEl.style.display = 'none';
    } else {
      emptyState.style.display = 'none';
      footerEl.style.display = 'block';

      container.innerHTML = state.cart.map((item, idx) => `
        <div class="flex gap-3 py-3 border-b border-slate-100 items-center">
          <img src="${item.product.image}" class="w-16 h-20 object-cover rounded-lg border border-slate-200" alt="${item.product.name}" />
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <h4 class="font-bold text-sm text-slate-800">${item.product.code}</h4>
              <button onclick="removeCartItem(${idx})" class="text-slate-400 hover:text-red-500 text-xs">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <p class="text-xs text-slate-500 line-clamp-1">${item.product.name}</p>
            <div class="text-xs font-semibold text-slate-700 mt-1">Size: <span class="text-[#008f97] bg-teal-50 px-2 py-0.5 rounded">${item.size}</span></div>
            <div class="flex justify-between items-center mt-2">
              <div class="flex items-center border border-slate-200 rounded-full px-2 py-0.5">
                <button onclick="updateCartQuantity(${idx}, -1)" class="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-black font-bold">-</button>
                <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
                <button onclick="updateCartQuantity(${idx}, 1)" class="w-5 h-5 flex items-center justify-center text-slate-600 hover:text-black font-bold">+</button>
              </div>
              <span class="font-bold text-slate-900 text-sm">₹${item.product.price * item.quantity}</span>
            </div>
          </div>
        </div>
      `).join('');

      // Free shipping meter
      const freeShipMeter = document.getElementById('free-shipping-progress');
      const freeShipText = document.getElementById('free-shipping-text');
      if (freeShipMeter && freeShipText) {
        if (subtotal >= 999) {
          freeShipMeter.style.width = '100%';
          freeShipText.innerHTML = `<i class="fa-solid fa-circle-check text-green-500 mr-1"></i> You have unlocked <b>FREE Express Delivery!</b>`;
        } else {
          const needed = 999 - subtotal;
          const percent = Math.min(100, Math.round((subtotal / 999) * 100));
          freeShipMeter.style.width = `${percent}%`;
          freeShipText.innerHTML = `Add <b>₹${needed}</b> more to unlock <b>FREE Delivery!</b>`;
        }
      }

      // Update Financials display
      const elSubtotal = document.getElementById('cart-subtotal-val');
      const elShipping = document.getElementById('cart-shipping-val');
      const elCoupon = document.getElementById('cart-coupon-row');
      const elCouponVal = document.getElementById('cart-coupon-val');
      const elGrand = document.getElementById('cart-grand-total');

      if (elSubtotal) elSubtotal.textContent = `₹${subtotal}`;
      if (elShipping) elShipping.textContent = shippingFee === 0 ? 'FREE' : `₹${shippingFee}`;
      if (elGrand) elGrand.textContent = `₹${grandTotal}`;

      if (elCoupon && elCouponVal) {
        if (couponDiscount > 0) {
          elCoupon.style.display = 'flex';
          elCouponVal.textContent = `-₹${couponDiscount}`;
        } else {
          elCoupon.style.display = 'none';
        }
      }
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

function applyCoupon() {
  const codeInput = document.getElementById('coupon-code-input');
  if (!codeInput) return;
  const val = codeInput.value.trim().toUpperCase();
  if (val === 'PEPELLI10') {
    state.appliedCoupon = 'PEPELLI10';
    showToast('🎉 Coupon PEPELLI10 applied! 10% OFF');
  } else if (val === 'FIRST150') {
    state.appliedCoupon = 'FIRST150';
    showToast('🎉 Coupon FIRST150 applied! ₹150 OFF');
  } else if (val === '') {
    showToast('Please enter a coupon code.');
  } else {
    showToast('⚠️ Invalid coupon. Try PEPELLI10 or FIRST150');
  }
  updateCartUI();
}

// -----------------------------------------------------------------------------
// WISHLIST ACTIONS & DRAWER
// -----------------------------------------------------------------------------
function toggleWishlist(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const idx = state.wishlist.findIndex(w => w.id === productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist`);
  } else {
    state.wishlist.push(product);
    showToast(`❤️ Added ${product.code} to Wishlist!`);
  }

  saveStorage();
  updateWishlistUI();
  renderNewArrivalsCarousel();
  renderFullCatalog();
}

function updateWishlistUI() {
  const count = state.wishlist.length;
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }

  const container = document.getElementById('wishlist-items-list');
  const empty = document.getElementById('wishlist-empty-state');
  if (container && empty) {
    if (count === 0) {
      container.innerHTML = '';
      empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      container.innerHTML = state.wishlist.map((item, idx) => `
        <div class="flex gap-3 py-3 border-b border-slate-100 items-center">
          <img src="${item.image}" class="w-16 h-20 object-cover rounded-lg border border-slate-200" alt="${item.name}" />
          <div class="flex-1">
            <h4 class="font-bold text-sm text-slate-800">${item.code}</h4>
            <p class="text-xs text-slate-500 line-clamp-1">${item.name}</p>
            <div class="font-bold text-slate-900 text-sm mt-1">₹${item.price} <span class="text-xs line-through text-slate-400">₹${item.originalPrice}</span></div>
            <div class="flex gap-2 mt-2">
              <button onclick="quickAddToCart('${item.id}'); toggleWishlist('${item.id}')" class="px-3 py-1 bg-[#00c2cb] text-slate-900 text-xs font-bold rounded-full hover:bg-[#00e5ff]">
                Move to Cart
              </button>
              <button onclick="toggleWishlist('${item.id}')" class="text-xs text-slate-400 hover:text-red-500">
                Remove
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// -----------------------------------------------------------------------------
// PRODUCT QUICK VIEW & DETAILS MODAL
// -----------------------------------------------------------------------------
let selectedModalSize = 'M';

function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  state.activeProductModal = product;
  selectedModalSize = 'M';

  const modal = document.getElementById('product-detail-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !backdrop) return;

  document.getElementById('modal-product-img').src = product.image;
  document.getElementById('modal-product-tag').textContent = product.tag;
  document.getElementById('modal-product-code').textContent = product.code;
  document.getElementById('modal-product-name').textContent = product.name;
  document.getElementById('modal-product-price').textContent = `₹${product.price}`;
  document.getElementById('modal-product-mrp').textContent = `₹${product.originalPrice}`;
  document.getElementById('modal-product-discount').textContent = product.discount;
  document.getElementById('modal-product-desc').textContent = product.description;
  document.getElementById('modal-product-fabric').textContent = product.fabric;
  document.getElementById('modal-product-sleeve').textContent = product.sleeve;
  document.getElementById('modal-product-neck').textContent = product.neck;
  document.getElementById('modal-product-length').textContent = product.length;
  document.getElementById('modal-product-stock').textContent = `🔥 Only ${product.stock} items left in stock - order soon!`;

  // Reset size buttons
  document.querySelectorAll('.size-select-btn').forEach(btn => {
    if (btn.dataset.size === 'M') {
      btn.classList.add('bg-[#00c2cb]', 'text-slate-900', 'border-[#00c2cb]');
      btn.classList.remove('bg-white', 'text-slate-700');
    } else {
      btn.classList.remove('bg-[#00c2cb]', 'text-slate-900', 'border-[#00c2cb]');
      btn.classList.add('bg-white', 'text-slate-700');
    }
  });

  backdrop.classList.add('open');
  modal.style.display = 'block';
}

function selectProductSize(size, el) {
  selectedModalSize = size;
  document.querySelectorAll('.size-select-btn').forEach(btn => {
    btn.classList.remove('bg-[#00c2cb]', 'text-slate-900', 'border-[#00c2cb]');
    btn.classList.add('bg-white', 'text-slate-700');
  });
  el.classList.add('bg-[#00c2cb]', 'text-slate-900', 'border-[#00c2cb]');
  el.classList.remove('bg-white', 'text-slate-700');
}

function addModalProductToCart() {
  if (!state.activeProductModal) return;
  const p = state.activeProductModal;

  const existing = state.cart.find(c => c.product.id === p.id && c.size === selectedModalSize);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ product: p, size: selectedModalSize, quantity: 1 });
  }

  saveStorage();
  updateCartUI();
  closeProductModal();
  showToast(`✨ ${p.code} (Size ${selectedModalSize}) added to Cart!`);
  openCartDrawer();
}

function buyModalProductNow() {
  addModalProductToCart();
  closeCartDrawer();
  openCheckoutModal();
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.classList.remove('open');
}

// -----------------------------------------------------------------------------
// WHATSAPP ORDERING ENGINE
// -----------------------------------------------------------------------------
function orderViaWhatsApp(productId = null) {
  let text = '';
  const storePhone = '919876543210'; // Pepelli WhatsApp Helpline

  if (productId) {
    const p = productsData.find(prod => prod.id === productId);
    if (!p) return;
    text = `Hello Pepelli! 🌸%0A%0AI would like to order this item:%0A- Product Code: ${p.code}%0A- Name: ${p.name}%0A- Price: ₹${p.price}%0A- Size: ${selectedModalSize || 'M'}%0A%0APlease assist me with dispatch and payment details. Thank you!`;
  } else if (state.cart.length > 0) {
    const itemsStr = state.cart.map(c => `• ${c.product.code} (${c.product.name}) - Size ${c.size} x ${c.quantity} = ₹${c.product.price * c.quantity}`).join('%0A');
    const total = state.cart.reduce((s, c) => s + (c.product.price * c.quantity), 0);
    text = `Hello Pepelli Team! 🌸%0A%0AI would like to confirm my order for:%0A${itemsStr}%0A%0A*Total Amount:* ₹${total}%0A%0APlease send payment QR / COD confirmation. Thank you!`;
  } else {
    text = `Hello Pepelli! 🌸%0A%0AI am browsing your latest kurti collection and have an enquiry regarding new arrivals.`;
  }

  window.open(`https://wa.me/${storePhone}?text=${text}`, '_blank');
}

// -----------------------------------------------------------------------------
// ORDER TRACKING MODAL
// -----------------------------------------------------------------------------
function openTrackOrderModal() {
  const modal = document.getElementById('track-order-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal && backdrop) {
    backdrop.classList.add('open');
    modal.style.display = 'block';
  }
}

function closeTrackOrderModal() {
  const modal = document.getElementById('track-order-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.classList.remove('open');
}

function searchOrderTracking() {
  const input = document.getElementById('track-order-input');
  const resultBox = document.getElementById('track-order-result');
  if (!input || !resultBox) return;

  const q = input.value.trim().toUpperCase();
  const sample = state.orders[0];

  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
      <div class="flex justify-between items-center mb-1">
        <span class="font-bold text-slate-800">Order ID: ${q || sample.id}</span>
        <span class="px-2.5 py-1 bg-[#00c2cb] text-slate-900 font-bold text-xs rounded-full">${sample.status}</span>
      </div>
      <p class="text-xs text-slate-600">Courier: <b>${sample.courier}</b> | AWB: <b>${sample.awb}</b></p>
      <p class="text-xs text-slate-500 mt-1">Expected Delivery: <b>Within 48 Hours</b></p>
    </div>

    <div class="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-teal-200">
      ${sample.timeline.map(t => `
        <div class="relative flex items-start gap-3">
          <div class="absolute -left-6 top-1 w-4 h-4 rounded-full ${t.done ? 'bg-[#00c2cb] ring-4 ring-teal-100' : 'bg-slate-300'}"></div>
          <div>
            <div class="text-xs font-bold ${t.done ? 'text-slate-900' : 'text-slate-400'}">${t.label}</div>
            <div class="text-[11px] text-slate-500">${t.time}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// -----------------------------------------------------------------------------
// CHECKOUT MODAL & CONFIRMATION
// -----------------------------------------------------------------------------
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty.');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal && backdrop) {
    backdrop.classList.add('open');
    modal.style.display = 'block';

    const subtotal = state.cart.reduce((s, c) => s + (c.product.price * c.quantity), 0);
    const ship = subtotal >= 999 ? 0 : 49;
    const total = subtotal + ship;
    document.getElementById('checkout-total-display').textContent = `₹${total}`;
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.classList.remove('open');
}

function processCheckout(e) {
  e.preventDefault();
  const orderId = `PEP-${Math.floor(10000 + Math.random() * 90000)}`;
  
  // Show celebration confetti
  triggerConfetti();

  closeCheckoutModal();

  // Create new order
  const newOrder = {
    id: orderId,
    date: 'Just Now',
    items: state.cart.map(c => `${c.product.code} (Size ${c.size})`),
    total: state.cart.reduce((s, c) => s + (c.product.price * c.quantity), 0),
    status: 'Order Placed',
    courier: 'Delhivery Express',
    awb: `DEL${Math.floor(100000000 + Math.random() * 900000000)}`,
    timeline: [
      { label: 'Order Confirmed', time: 'Just now', done: true },
      { label: 'Quality Checked & Packed', time: 'Estimated 2 hours', done: false },
      { label: 'Dispatched from Jaipur Warehouse', time: 'Pending', done: false },
      { label: 'In Transit', time: 'Pending', done: false },
      { label: 'Delivered', time: 'Pending', done: false }
    ]
  };
  state.orders.unshift(newOrder);

  // Clear cart
  state.cart = [];
  saveStorage();
  updateCartUI();

  // Open Order Success Modal
  const successModal = document.getElementById('order-success-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (successModal && backdrop) {
    document.getElementById('success-order-id').textContent = orderId;
    backdrop.classList.add('open');
    successModal.style.display = 'block';
  }
}

function closeSuccessModal() {
  const successModal = document.getElementById('order-success-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (successModal) successModal.style.display = 'none';
  if (backdrop) backdrop.classList.remove('open');
}

// -----------------------------------------------------------------------------
// TOAST NOTIFICATIONS & CONFETTI
// -----------------------------------------------------------------------------
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-[#00E5FF]"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function triggerConfetti() {
  const count = 120;
  const colors = ['#00E5FF', '#FF5722', '#E91E63', '#FFEB3B', '#4CAF50'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.left = `${Math.random() * 100}vw`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = `${Math.random() * 8 + 6}px`;
    el.style.height = `${Math.random() * 12 + 6}px`;
    el.style.animationDuration = `${Math.random() * 2 + 1.8}s`;
    el.style.animationDelay = `${Math.random() * 0.4}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

// -----------------------------------------------------------------------------
// EVENT LISTENERS INITIALIZATION
// -----------------------------------------------------------------------------
function initEventListeners() {
  // Carousel Prev & Next buttons
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const track = document.getElementById('new-arrivals-track');

  if (prevBtn && track) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -260, behavior: 'smooth' });
    });
  }
  if (nextBtn && track) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  // Live search input
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderFullCatalog();
    });
  }

  // Newsletter subscribe
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      showToast(`✨ Subscribed! Special voucher sent to ${email}`);
      newsletterForm.reset();
    });
  }

  // Close modals on clicking backdrop
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeCartDrawer();
      closeWishlistDrawer();
      closeProductModal();
      closeTrackOrderModal();
      closeCheckoutModal();
      closeSuccessModal();
      if (window.closeAIStylistDrawer) window.closeAIStylistDrawer();
      if (window.closeTryOnModal) window.closeTryOnModal();
      if (window.closeFitAdvisorModal) window.closeFitAdvisorModal();
    });
  }
}
