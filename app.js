const INITIAL_PRODUCTS = [
    {
        id: 'p1',
        title: 'Kampot Black Pepper Premium 250g',
        titleKm: 'ម្រេចកំពតខ្មៅ គុណភាពខ្ពស់ ២៥០ក្រាម',
        price: 7.50,
        category: 'Local Goods',
        categoryKm: 'ទំនិញក្នុងស្រុក',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80',
        desc: 'Authentic GI certified Kampot Pepper, renowned globally for its unique aromatic flavor and strong spiciness.',
        descKm: 'ម្រេចកំពតពិតៗ មានទទួលស្គាល់ម៉ាកសម្គាល់ភូមិសាស្ត្រទំនិញ (GI) ក្លិនឈ្ងុយ និងហិរឆ្ងាញ់'
    },
    {
        id: 'p2',
        title: 'Wireless Noise Canceling Headphones',
        titleKm: 'កាសស្តាប់ត្រចៀកឥតខ្សែ បំបាត់សំឡេងរំខាន',
        price: 49.00,
        category: 'Electronics',
        categoryKm: 'អេឡិចត្រូនិក',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        desc: 'High-fidelity audio with active noise cancellation, 30-hour battery life, and ergonomic ear cushions.',
        descKm: 'សំឡេងច្បាស់ល្អ បច្ចេកវិទ្យាកាត់បន្ថយសំឡេងរំខាន ថ្មប្រើបានរហូតដល់ ៣០ម៉ោង'
    },
    {
        id: 'p3',
        title: 'Handwoven Khmer Silk Krama',
        titleKm: 'ក្រមាខ្មែរសូត្រត្បាញដោយដៃ',
        price: 12.00,
        category: 'Fashion',
        categoryKm: 'សម្លៀកបំពាក់',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd850d97f1d?auto=format&fit=crop&w=600&q=80',
        desc: 'Traditional Cambodian handcrafted silk scarf, woven by local artisans in Takeo province.',
        descKm: 'ក្រមាខ្មែរសូត្រត្បាញដោយដៃយ៉ាងស្អាតប្រណិត ផលិតដោយជាងត្បាញខេត្តតាកែវ'
    },
    {
        id: 'p4',
        title: 'Smart Fitness Watch Series 7',
        titleKm: 'នាឡិកាឆ្លាតវៃហាត់ប្រាណ',
        price: 35.50,
        category: 'Electronics',
        categoryKm: 'អេឡិចត្រូនិក',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        desc: 'Track heart rate, blood oxygen, steps, sleep pattern and daily workout routines with water resistance.',
        descKm: 'វាស់ចលនាបេះដូង កម្រិតអុកស៊ីសែន ជំហានដើរ និងការគេង ការពារជម្រាបទឹក'
    },
    {
        id: 'p5',
        title: 'Organic Jasmine Rice (Phka Rumduol) 5kg',
        titleKm: 'អង្ករផ្ការំដួលសរីរាង្គ ៥គីឡូ',
        price: 6.80,
        category: 'Local Goods',
        categoryKm: 'ទំនិញក្នុងស្រុក',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        desc: 'Award-winning Cambodian fragrant jasmine rice. Soft texture with natural pleasant aroma.',
        descKm: 'អង្ករផ្ការំដួលប្រណិត ទទួលបានពានរង្វាន់អង្ករល្អបំផុតពិភពលោក ទន់ឈ្ងុយឆ្ងាញ់'
    },
    {
        id: 'p6',
        title: 'Minimalist Leather Backpack',
        titleKm: 'កាបូបស្ពាយក្រោយស្បែក',
        price: 28.00,
        category: 'Fashion',
        categoryKm: 'សម្លៀកបំពាក់',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
        desc: 'Durable PU leather backpack with dedicated 15-inch laptop compartment and anti-theft pocket.',
        descKm: 'កាបូបស្បែកធន់ល្អ មានថតដាក់កុំព្យូទ័រ 15 អ៊ីញ និងថតសុវត្ថិភាព'
    },
    {
        id: 'p7',
        title: 'Stainless Steel Insulated Water Bottle',
        titleKm: 'ដបទឹកក្តៅត្រជាក់ដែកថែប',
        price: 11.50,
        category: 'Home & Living',
        categoryKm: 'គេហដ្ឋាន',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
        desc: 'Keeps beverages ice-cold for 24 hours or hot for 12 hours. Leak-proof BPA-free design.',
        descKm: 'រក្សាភាពត្រជាក់បាន ២៤ម៉ោង និងកម្តៅបាន ១២ម៉ោង មិនលេចធ្លាយ'
    },
    {
        id: 'p8',
        title: 'Cambodian Cashew Nuts Roasted 300g',
        titleKm: 'គ្រាប់ស្វាយចន្ទីលីង ៣០០ក្រាម',
        price: 5.20,
        category: 'Local Goods',
        categoryKm: 'ទំនិញក្នុងស្រុក',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        desc: 'Crunchy roasted whole cashew nuts directly sourced from Kampong Cham farms.',
        descKm: 'គ្រាប់ស្វាយចន្ទីលីងស្រស់ៗ ស្រួយឆ្ងាញ់ ចេញផ្ទាល់ពីចម្ការខេត្តកំពង់ចាម'
    }
];

const state = {
    lang: localStorage.getItem('angkor_lang') || 'en',
    currency: localStorage.getItem('angkor_curr') || 'USD',
    exchangeRate: 4100,
    activeCategory: 'All',
    searchQuery: '',
    cart: JSON.parse(localStorage.getItem('angkor_cart') || '[]'),
    orders: JSON.parse(localStorage.getItem('angkor_orders') || '[]'),
    products: JSON.parse(localStorage.getItem('angkor_products') || JSON.stringify(INITIAL_PRODUCTS)),
    categories: JSON.parse(localStorage.getItem('angkor_categories') || '["All", "Local Goods", "Electronics", "Fashion", "Home & Living"]'),
    settings: JSON.parse(localStorage.getItem('angkor_settings') || JSON.stringify({
        storeName: 'AngkorStore Express',
        telegram: 'Loka175',
        messenger: 'AngkorStoreOfficial',
        aba: '000 648592 (AngkorStore Co., Ltd)',
        bakong: '012345678@aba',
        exchangeRate: 4000
    })),
    isAdminLoggedIn: localStorage.getItem('angkor_admin_logged') === 'true',
    currentModalProductId: null,
    uploadedImageDataUrl: null,
    pendingTotals: null
};

const i18n = {
    en: {
        announcement: "Fast Delivery across Phnom Penh & Provinces | Express Payment via Bakong KHQR",
        storeTagline: "Express Shopping Cambodia",
        ordersNav: "Orders",
        adminNav: "Admin Portal",
        shopNow: "Shop Now",
        bannerTitle: "Welcome to AngkorStore Express!",
        bannerDesc: "Discover authentic Cambodian products & trending electronics delivered directly to your door in Phnom Penh and all 25 provinces.",
        categories: "Categories",
        productsHeader: "All Products",
        cartTitle: "Your Shopping Cart",
        subtotal: "Subtotal",
        delivery: "Delivery (Phnom Penh)",
        total: "Total",
        checkoutBtn: "Proceed to Checkout",
        addToCart: "Add to Cart",
        backToShop: "Back to Shop",
        orderHistoryTitle: "My Order History",
        orderHistorySub: "Track your active and previous store purchases",
        shippingDetails: "Shipping Details",
        chooseMethod: "Choose Order & Payment Method",
        footerAbout: "Your premier online store in Cambodia. Delivering high quality electronics, fashion, and local specialty goods straight to your doorstep."
    },
    km: {
        announcement: "សេវាដឹកជញ្ជូនរហ័សភ្នំពេញ និងគ្រប់ខេត្តក្រុង | ទូទាត់រហ័សតាម Bakong KHQR",
        storeTagline: "ផ្សារទំនិញអនឡាញកម្ពុជា",
        ordersNav: "ការទិញរបស់ខ្ញុំ",
        adminNav: "គ្រប់គ្រងហាង",
        shopNow: "ទិញឥឡូវនេះ",
        bannerTitle: "ស្វាគមន៍មកកាន់ AngkorStore Express!",
        bannerDesc: "ស្វែងរកផលិតផលក្នុងស្រុក និងអេឡិចត្រូនិកទំនើបៗ ដឹកជញ្ជូនផ្ទាល់ដល់គេហដ្ឋានអ្នកនៅភ្នំពេញ និង ២៥ ខេត្តក្រុង។",
        categories: "ប្រភេទទំនិញ",
        productsHeader: "ទំនិញទាំងអស់",
        cartTitle: "កន្ត្រកទំនិញរបស់អ្នក",
        subtotal: "សរុបរង",
        delivery: "ថ្លៃដឹកជញ្ជូន (ភ្នំពេញ)",
        total: "សរុបចុងក្រោយ",
        checkoutBtn: "បន្តទៅការទូទាត់ប្រាក់",
        addToCart: "បញ្ជូលក្នុងកន្ត្រក",
        backToShop: "ត្រឡប់ទៅហាង",
        orderHistoryTitle: "ប្រវត្តិបញ្ជាទិញរបស់ខ្ញុំ",
        orderHistorySub: "តាមដានស្ថានភាពទំនិញដែលបានបញ្ជាទិញ",
        shippingDetails: "ព័ត៌មានអ្នកទទួលទំនិញ",
        chooseMethod: "ជ្រើសរើសវិធីសាស្ត្របញ្ជាទិញ និងទូទាត់",
        footerAbout: "ហាងទំនិញអនឡាញឈានមុខនៅកម្ពុជា។ ផ្តល់ជូនទំនិញអេឡិចត្រូនិក សម្លៀកបំពាក់ និងទំនិញក្នុងស្រុក ដឹកជូនដល់ផ្ទះ។"
    }
};

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    let bg = 'bg-gray-900 text-white';
    if (type === 'success') bg = 'bg-emerald-600 text-white';
    if (type === 'error') bg = 'bg-red-600 text-white';

    toast.className = `${bg} px-4 py-3 rounded-xl shadow-xl text-xs font-semibold flex items-center space-x-2 transition-all transform translate-y-2 opacity-0 pointer-events-auto max-w-xs`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-circle-info'}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    setTimeout(() => { toast.classList.remove('translate-y-2', 'opacity-0'); }, 10);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function formatPrice(amountInUSD) {
    if (state.currency === 'KHR') {
        const khr = Math.round(amountInUSD * state.settings.exchangeRate);
        return `${khr.toLocaleString()} ៛`;
    }
    return `$${amountInUSD.toFixed(2)}`;
}

function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); } catch (err) { console.error('Copy failed', err); }
    document.body.removeChild(textarea);
}

function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'km' : 'en';
    localStorage.setItem('angkor_lang', state.lang);
    updateTranslations();
    renderCategories();
    renderProducts();
    renderCart();
}

function toggleCurrency() {
    state.currency = state.currency === 'USD' ? 'KHR' : 'USD';
    localStorage.setItem('angkor_curr', state.currency);
    document.getElementById('curr-btn-label').innerText = state.currency === 'USD' ? '\$ USD' : '៛ KHR';
    renderProducts();
    renderCart();
    if (state.currentModalProductId) {
        openProductModal(state.currentModalProductId);
    }
}

function updateTranslations() {
    const t = i18n[state.lang];
    document.getElementById('lang-btn-label').innerText = state.lang === 'en' ? 'ខ្មែរ' : 'English';
    document.getElementById('txt-top-announcement').innerText = t.announcement;
    document.getElementById('store-tagline').innerText = t.storeTagline;
    document.getElementById('txt-nav-orders').innerText = t.ordersNav;
    document.getElementById('txt-nav-admin').innerText = t.adminNav;
    document.getElementById('txt-shop-now').innerText = t.shopNow;
    document.getElementById('banner-title').innerText = t.bannerTitle;
    document.getElementById('banner-desc').innerText = t.bannerDesc;
    document.getElementById('txt-categories').innerText = t.categories;
    document.getElementById('txt-products-header').innerText = t.productsHeader;
    document.getElementById('txt-cart-title').innerText = t.cartTitle;
    document.getElementById('txt-subtotal').innerText = t.subtotal;
    document.getElementById('txt-delivery').innerText = t.delivery;
    document.getElementById('txt-grand-total').innerText = t.total;
    document.getElementById('txt-btn-checkout').innerText = t.checkoutBtn;
    document.getElementById('txt-modal-add').innerText = t.addToCart;
    document.getElementById('txt-back-store').innerText = t.backToShop;
    document.getElementById('txt-orders-title').innerText = t.orderHistoryTitle;
    document.getElementById('txt-orders-sub').innerText = t.orderHistorySub;
    document.getElementById('txt-shipping-info').innerText = t.shippingDetails;
    document.getElementById('txt-select-channel').innerText = t.chooseMethod;
    document.getElementById('txt-footer-about').innerText = t.footerAbout;

    if (state.lang === 'km') {
        document.body.classList.add('khmer-font');
    } else {
        document.body.classList.remove('khmer-font');
    }
}

function showView(viewName) {
    document.getElementById('view-store').classList.add('hidden');
    document.getElementById('view-orders').classList.add('hidden');
    document.getElementById('view-admin').classList.add('hidden');

    if (viewName === 'store') {
        document.getElementById('view-store').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'orders') {
        document.getElementById('view-orders').classList.remove('hidden');
        renderOrdersList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'admin') {
        if (!state.isAdminLoggedIn) {
            openAdminModal();
            document.getElementById('view-store').classList.remove('hidden');
            return;
        }
        document.getElementById('view-admin').classList.remove('hidden');
        renderAdminProductsTable();
        renderAdminCategoriesList();
        loadStoreSettingsForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function scrollToProducts() {
    document.getElementById('products-heading').scrollIntoView({ behavior: 'smooth' });
}

function handleSearchInput(e) {
    state.searchQuery = e.target.value.toLowerCase().trim();
    document.getElementById('search-input-mobile').value = e.target.value;
    renderProducts();
}

function syncMobileSearch(e) {
    state.searchQuery = e.target.value.toLowerCase().trim();
    document.getElementById('search-input').value = e.target.value;
    renderProducts();
}

function renderCategories() {
    const bar = document.getElementById('category-bar');
    bar.innerHTML = '';

    state.categories.forEach(cat => {
        const btn = document.createElement('button');
        const isActive = state.activeCategory === cat;
        btn.className = `px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition transform active:scale-95 ${
            isActive 
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
        }`;
        btn.innerText = cat === 'All' && state.lang === 'km' ? 'ទាំងអស់' : cat;
        btn.onclick = () => {
            state.activeCategory = cat;
            renderCategories();
            renderProducts();
        };
        bar.appendChild(btn);
    });
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = state.products.filter(p => {
        const matchesCat = state.activeCategory === 'All' || p.category === state.activeCategory;
        const matchesSearch = !state.searchQuery || 
            p.title.toLowerCase().includes(state.searchQuery) || 
            (p.titleKm && p.titleKm.toLowerCase().includes(state.searchQuery));
        return matchesCat && matchesSearch;
    });

    document.getElementById('product-count-badge').innerText = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-gray-400 space-y-3">
                <i class="fa-solid fa-box-open text-4xl"></i>
                <p class="text-sm font-semibold">No products found matching your criteria</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const title = state.lang === 'km' && p.titleKm ? p.titleKm : p.title;
        const price = formatPrice(p.price);

        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group";
        card.innerHTML = `
            <div>
                <div class="relative w-full h-44 bg-gray-50 flex items-center justify-center overflow-hidden cursor-pointer" onclick="openProductModal('${p.id}')">
                    <img src="${p.image}" alt="${p.title}" class="h-full w-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/400x400/e2e8f0/475569?text=Product+Image'">
                    <span class="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm border border-indigo-100">
                        ${p.category}
                    </span>
                </div>
                <div class="p-3.5 space-y-1.5">
                    <h4 class="text-xs font-bold text-gray-800 line-clamp-2 cursor-pointer hover:text-indigo-600 transition" onclick="openProductModal('${p.id}')">${title}</h4>
                    <p class="text-sm font-black text-indigo-600">${price}</p>
                </div>
            </div>
            <div class="p-3.5 pt-0 space-y-2">
                <button onclick="addToCart('${p.id}')" class="w-full py-2 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 border border-indigo-100 hover:border-transparent">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>${i18n[state.lang].addToCart}</span>
                </button>
                <div class="grid grid-cols-2 gap-1.5">
                    <button onclick="buySingleProductDirect('${p.id}', 'Telegram')" class="py-1.5 px-2 bg-sky-50 hover:bg-sky-500 text-sky-700 hover:text-white rounded-lg text-[11px] font-bold transition flex items-center justify-center space-x-1 border border-sky-100 group/tg" title="Order via Telegram">
                        <i class="fa-brands fa-telegram text-sm text-sky-500 group-hover/tg:text-white"></i>
                        <span>Telegram</span>
                    </button>
                    <button onclick="buySingleProductDirect('${p.id}', 'Messenger')" class="py-1.5 px-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-lg text-[11px] font-bold transition flex items-center justify-center space-x-1 border border-blue-100 group/msg" title="Order via Messenger">
                        <i class="fa-brands fa-facebook-messenger text-sm text-blue-600 group-hover/msg:text-white"></i>
                        <span>Messenger</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ id: productId, qty: 1 });
    }

    saveCart();
    renderCart();
    showToast(`Added "${state.lang === 'km' && product.titleKm ? product.titleKm : product.title}" to cart`, 'success');
}

function updateCartQty(productId, delta) {
    const itemIndex = state.cart.findIndex(i => i.id === productId);
    if (itemIndex > -1) {
        state.cart[itemIndex].qty += delta;
        if (state.cart[itemIndex].qty <= 0) {
            state.cart.splice(itemIndex, 1);
        }
    }
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('angkor_cart', JSON.stringify(state.cart));
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById('cart-drawer');
    if (open) {
        renderCart();
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

function renderCart() {
    const countBadge = document.getElementById('cart-count');
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    countBadge.innerText = totalQty;

    const list = document.getElementById('cart-items-list');
    list.innerHTML = '';

    if (state.cart.length === 0) {
        list.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-gray-400 space-y-3 py-12">
                <i class="fa-solid fa-cart-flatbed text-4xl"></i>
                <p class="text-sm font-semibold">Your cart is empty</p>
            </div>
        `;
        document.getElementById('cart-subtotal').innerText = formatPrice(0);
        document.getElementById('cart-delivery').innerText = formatPrice(1.5);
        document.getElementById('cart-total').innerText = formatPrice(1.5);
        return;
    }

    let subtotalUSD = 0;
    state.cart.forEach(item => {
        const product = state.products.find(p => p.id === item.id);
        if (!product) return;

        subtotalUSD += product.price * item.qty;
        const title = state.lang === 'km' && product.titleKm ? product.titleKm : product.title;

        const row = document.createElement('div');
        row.className = "flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-100";
        row.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-14 h-14 object-cover rounded-lg bg-white border">
            <div class="flex-1 min-w-0">
                <h5 class="text-xs font-bold text-gray-800 truncate">${title}</h5>
                <p class="text-xs font-semibold text-indigo-600">${formatPrice(product.price)}</p>
            </div>
            <div class="flex items-center space-x-1.5 bg-white border rounded-lg px-2 py-1">
                <button onclick="updateCartQty('${product.id}', -1)" class="text-gray-500 hover:text-indigo-600 px-1 font-bold text-xs">-</button>
                <span class="text-xs font-extrabold text-gray-800 w-4 text-center">${item.qty}</span>
                <button onclick="updateCartQty('${product.id}', 1)" class="text-gray-500 hover:text-indigo-600 px-1 font-bold text-xs">+</button>
            </div>
        `;
        list.appendChild(row);
    });

    const deliveryUSD = 1.50;
    const totalUSD = subtotalUSD + deliveryUSD;

    document.getElementById('cart-subtotal').innerText = formatPrice(subtotalUSD);
    document.getElementById('cart-delivery').innerText = formatPrice(deliveryUSD);
    document.getElementById('cart-total').innerText = formatPrice(totalUSD);
}

function openProductModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.currentModalProductId = productId;
    const modal = document.getElementById('product-modal');

    document.getElementById('modal-product-img').src = product.image;
    document.getElementById('modal-product-cat').innerText = product.category;
    document.getElementById('modal-product-title').innerText = state.lang === 'km' && product.titleKm ? product.titleKm : product.title;
    document.getElementById('modal-product-price').innerText = formatPrice(product.price);
    document.getElementById('modal-product-desc').innerText = state.lang === 'km' && product.descKm ? product.descKm : product.desc;

    document.getElementById('modal-add-cart-btn').onclick = () => {
        addToCart(product.id);
        closeProductModal();
    };

    document.getElementById('modal-tg-buy-btn').onclick = () => {
        buySingleProductDirect(product.id, 'Telegram');
    };

    document.getElementById('modal-msg-buy-btn').onclick = () => {
        buySingleProductDirect(product.id, 'Messenger');
    };

    modal.classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    state.currentModalProductId = null;
}

function openTelegramChat(text) {
    let rawHandle = (state.settings.telegram || 'Loka175').trim();
    let cleanHandle = rawHandle.replace('https://t.me/', '').replace('@', '').trim();
    const encoded = encodeURIComponent(text);
    window.open(`https://t.me/${cleanHandle}?text=${encoded}`, '_blank');
    showToast('Opening Telegram with product details...', 'success');
}

function openMessengerChat(text) {
    let rawHandle = (state.settings.messenger || 'AngkorStoreOfficial').trim();
    let cleanHandle = rawHandle.replace('https://m.me/', '').replace('https://facebook.com/', '').replace('@', '').trim();
    copyTextToClipboard(text);
    window.open(`https://m.me/${cleanHandle}`, '_blank');
    showToast('Product details copied! Paste in Messenger chat.', 'success');
}

function buySingleProductDirect(productId, channel) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    const title = state.lang === 'km' && product.titleKm ? product.titleKm : product.title;
    const priceUSD = product.price;
    const priceKHR = Math.round(priceUSD * state.settings.exchangeRate);
    const totalUSD = priceUSD + 1.50;
    const totalKHR = Math.round(totalUSD * state.settings.exchangeRate);

    const msgText = `🛍️ *PRODUCT INQUIRY / ORDER*\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `📌 *Item:* ${title}\n` +
        `🆔 *Product Code:* ${product.id}\n` +
        `🏷️ *Category:* ${product.category}\n` +
        `💵 *Price:* $${priceUSD.toFixed(2)} (${priceKHR.toLocaleString()} KHR)\n` +
        `🚚 *Delivery:* $1.50\n` +
        `💰 *Total Amount:* $${totalUSD.toFixed(2)} (${totalKHR.toLocaleString()} KHR)\n` +
        `🖼️ *Image:* ${product.image}\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `Hello ${state.settings.storeName}! I would like to order this item. Please confirm availability and delivery!`;

    closeProductModal();

    if (channel === 'Telegram') {
        openTelegramChat(msgText);
    } else {
        openMessengerChat(msgText);
    }
}

function openCheckoutModal() {
    if (state.cart.length === 0) {
        showToast('Your cart is empty! Add items first.', 'error');
        return;
    }
    toggleCartDrawer(false);
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function getOrderTotals() {
    let subtotalUSD = 0;
    state.cart.forEach(item => {
        const p = state.products.find(prod => prod.id === item.id);
        if (p) subtotalUSD += p.price * item.qty;
    });
    const deliveryUSD = 1.50;
    const totalUSD = subtotalUSD + deliveryUSD;
    const totalKHR = Math.round(totalUSD * state.settings.exchangeRate);
    return { subtotalUSD, deliveryUSD, totalUSD, totalKHR };
}

function validateCustomerDetails() {
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();

    if (!name || !phone || !address) {
        showToast('Please fill in Name, Phone, and Address.', 'error');
        return null;
    }
    return {
        name,
        phone,
        address,
        notes: document.getElementById('cust-notes').value.trim()
    };
}

function processOrder(method) {
    const customer = validateCustomerDetails();
    if (!customer) return;

    const totals = getOrderTotals();

    if (method === 'khqr') {
        closeCheckoutModal();
        openKhqrModal(totals, customer);
    } else if (method === 'telegram') {
        submitDirectChannelOrder('Telegram', customer, totals);
    } else if (method === 'messenger') {
        submitDirectChannelOrder('Messenger', customer, totals);
    }
}

function submitDirectChannelOrder(channel, customer, totals) {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    let itemsSummary = "";
    state.cart.forEach(item => {
        const p = state.products.find(prod => prod.id === item.id);
        if (p) {
            const title = state.lang === 'km' && p.titleKm ? p.titleKm : p.title;
            itemsSummary += `• ${title} x${item.qty} - $${(p.price * item.qty).toFixed(2)}\n`;
        }
    });

    const newOrder = {
        id: orderId,
        date: new Date().toLocaleString(),
        items: [...state.cart],
        subtotalUSD: totals.subtotalUSD,
        totalUSD: totals.totalUSD,
        totalKHR: totals.totalKHR,
        status: 'Processing',
        paymentMethod: channel,
        customer: customer
    };

    state.orders.unshift(newOrder);
    localStorage.setItem('angkor_orders', JSON.stringify(state.orders));

    const msgText = `🛒 *NEW STORE ORDER #${orderId}*\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `👤 *Customer:* ${customer.name}\n` +
        `📞 *Phone:* ${customer.phone}\n` +
        `📍 *Address:* ${customer.address}\n` +
        `📝 *Notes:* ${customer.notes || 'N/A'}\n` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `📦 *Ordered Items:*\n${itemsSummary}` +
        `━━━━━━━━━━━━━━━━━━\n` +
        `💵 *Subtotal:* $${totals.subtotalUSD.toFixed(2)}\n` +
        `🚚 *Delivery:* $${totals.deliveryUSD.toFixed(2)}\n` +
        `💰 *GRAND TOTAL:* $${totals.totalUSD.toFixed(2)} (${totals.totalKHR.toLocaleString()} KHR)`;

    state.cart = [];
    saveCart();
    renderCart();
    closeCheckoutModal();

    if (channel === 'Telegram') {
        openTelegramChat(msgText);
    } else {
        openMessengerChat(msgText);
    }
    showView('orders');
}

function openKhqrModal(totals, customer) {
    state.pendingTotals = { totals, customer };
    document.getElementById('khqr-amount-display').innerText = formatPrice(totals.totalUSD);
    document.getElementById('khqr-modal').classList.remove('hidden');
}

function closeKhqrModal() {
    document.getElementById('khqr-modal').classList.add('hidden');
    state.pendingTotals = null;
}

function confirmKhqrPayment() {
    if (!state.pendingTotals) return;
    const { totals, customer } = state.pendingTotals;
    const refCode = document.getElementById('khqr-ref-code').value.trim();
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    const newOrder = {
        id: orderId,
        date: new Date().toLocaleString(),
        items: [...state.cart],
        subtotalUSD: totals.subtotalUSD,
        totalUSD: totals.totalUSD,
        totalKHR: totals.totalKHR,
        status: 'Paid (KHQR)',
        paymentMethod: 'KHQR',
        refCode: refCode || 'N/A',
        customer: customer
    };

    state.orders.unshift(newOrder);
    localStorage.setItem('angkor_orders', JSON.stringify(state.orders));
    state.cart = [];
    saveCart();
    renderCart();
    closeKhqrModal();
    showToast('Payment confirmed! Order received.', 'success');
    showView('orders');
}

function renderOrdersList() {
    const container = document.getElementById('orders-list-container');
    container.innerHTML = '';

    if (state.orders.length === 0) {
        container.innerHTML = `
            <div class="py-12 text-center text-gray-400 space-y-3 bg-white rounded-2xl border border-gray-100">
                <i class="fa-solid fa-receipt text-4xl"></i>
                <p class="text-sm font-semibold">You haven't placed any orders yet</p>
            </div>
        `;
        return;
    }

    state.orders.forEach(order => {
        const div = document.createElement('div');
        div.className = "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3";
        
        let itemsListHtml = '';
        order.items.forEach(item => {
            const product = state.products.find(p => p.id === item.id);
            if (product) {
                itemsListHtml += `<li class="text-xs text-gray-600 flex justify-between py-1 border-b border-gray-50">
                    <span>${product.title} x${item.qty}</span>
                    <span class="font-bold">$${(product.price * item.qty).toFixed(2)}</span>
                </li>`;
            }
        });

        div.innerHTML = `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-100 gap-2">
                <div>
                    <div class="flex items-center space-x-2">
                        <span class="font-extrabold text-sm text-gray-900">${order.id}</span>
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${order.status.includes('Paid') ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">${order.status}</span>
                    </div>
                    <span class="text-[11px] text-gray-400">${order.date}</span>
                </div>
                <div class="text-right">
                    <span class="text-xs text-gray-400 block">Total Paid (${order.paymentMethod})</span>
                    <span class="text-base font-black text-indigo-600">${formatPrice(order.totalUSD)}</span>
                </div>
            </div>
            <ul class="space-y-1">${itemsListHtml}</ul>
            <div class="pt-2 text-[11px] text-gray-500 flex justify-between">
                <span>Customer: <strong>${order.customer.name}</strong> (${order.customer.phone})</span>
                <span>Deliver to: ${order.customer.address}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function openAdminModal() {
    if (state.isAdminLoggedIn) {
        showView('admin');
    } else {
        document.getElementById('admin-login-modal').classList.remove('hidden');
    }
}

function closeAdminModal() {
    document.getElementById('admin-login-modal').classList.add('hidden');
}

function handleAdminLogin(e) {
    e.preventDefault();
    const user = document.getElementById('admin-user').value.trim();
    const pass = document.getElementById('admin-pass').value.trim();

    if ((user === 'Admin' || user === 'admin@angkorstore.com') && pass === '@1234567') {
        state.isAdminLoggedIn = true;
        localStorage.setItem('angkor_admin_logged', 'true');
        closeAdminModal();
        showToast('Welcome Admin!', 'success');
        showView('admin');
    } else {
        document.getElementById('admin-login-err').classList.remove('hidden');
    }
}

function logoutAdmin() {
    state.isAdminLoggedIn = false;
    localStorage.setItem('angkor_admin_logged', 'false');
    showToast('Logged out of Admin Portal', 'info');
    showView('store');
}

function switchAdminTab(tab) {
    document.getElementById('admin-tab-products').classList.add('hidden');
    document.getElementById('admin-tab-categories').classList.add('hidden');
    document.getElementById('admin-tab-settings').classList.add('hidden');

    document.getElementById('tab-btn-products').className = "py-2.5 px-4 text-sm font-bold border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition";
    document.getElementById('tab-btn-categories').className = "py-2.5 px-4 text-sm font-bold border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition";
    document.getElementById('tab-btn-settings').className = "py-2.5 px-4 text-sm font-bold border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition";

    if (tab === 'products') {
        document.getElementById('admin-tab-products').classList.remove('hidden');
        document.getElementById('tab-btn-products').className = "py-2.5 px-4 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 transition";
    } else if (tab === 'categories') {
        document.getElementById('admin-tab-categories').classList.remove('hidden');
        document.getElementById('tab-btn-categories').className = "py-2.5 px-4 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 transition";
    } else if (tab === 'settings') {
        document.getElementById('admin-tab-settings').classList.remove('hidden');
        document.getElementById('tab-btn-settings').className = "py-2.5 px-4 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600 transition";
    }
}

function renderAdminProductsTable() {
    const tbody = document.getElementById('admin-products-table');
    tbody.innerHTML = '';

    state.products.forEach(p => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50/50 transition";
        tr.innerHTML = `
            <td class="p-4 flex items-center space-x-3">
                <img src="${p.image}" class="w-10 h-10 object-cover rounded-lg border bg-white">
                <div>
                    <span class="font-bold text-gray-800 block">${p.title}</span>
                    <span class="text-xs text-gray-400 block">${p.titleKm || ''}</span>
                </div>
            </td>
            <td class="p-4"><span class="bg-gray-100 text-gray-700 font-semibold px-2.5 py-1 rounded-md text-xs">${p.category}</span></td>
            <td class="p-4 font-bold text-gray-800">$${p.price.toFixed(2)}</td>
            <td class="p-4 text-gray-500">${Math.round(p.price * state.settings.exchangeRate).toLocaleString()} ៛</td>
            <td class="p-4 text-right space-x-2">
                <button onclick="editProduct('${p.id}')" class="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition" title="Edit">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button onclick="deleteProduct('${p.id}')" class="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition" title="Delete">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openProductFormModal(productId = null) {
    const form = document.getElementById('product-crud-form');
    form.reset();
    state.uploadedImageDataUrl = null;
    document.getElementById('crud-img-preview-box').classList.add('hidden');

    const catSelect = document.getElementById('crud-category');
    catSelect.innerHTML = '';
    state.categories.filter(c => c !== 'All').forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.innerText = c;
        catSelect.appendChild(opt);
    });

    if (productId) {
        const p = state.products.find(prod => prod.id === productId);
        if (p) {
            document.getElementById('product-form-title').innerText = "Edit Product";
            document.getElementById('crud-product-id').value = p.id;
            document.getElementById('crud-title').value = p.title;
            document.getElementById('crud-title-km').value = p.titleKm || '';
            document.getElementById('crud-price').value = p.price;
            document.getElementById('crud-category').value = p.category;
            document.getElementById('crud-image-url').value = p.image;
            document.getElementById('crud-desc').value = p.desc || '';
            document.getElementById('crud-desc-km').value = p.descKm || '';

            document.getElementById('crud-img-preview').src = p.image;
            document.getElementById('crud-img-preview-box').classList.remove('hidden');
        }
    } else {
        document.getElementById('product-form-title').innerText = "Add New Product";
        document.getElementById('crud-product-id').value = '';
    }

    document.getElementById('product-form-modal').classList.remove('hidden');
}

function closeProductFormModal() {
    document.getElementById('product-form-modal').classList.add('hidden');
}

function handleImageFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            state.uploadedImageDataUrl = event.target.result;
            document.getElementById('crud-img-preview').src = event.target.result;
            document.getElementById('crud-img-preview-box').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function saveProductForm(e) {
    e.preventDefault();
    const id = document.getElementById('crud-product-id').value;
    const title = document.getElementById('crud-title').value.trim();
    const titleKm = document.getElementById('crud-title-km').value.trim();
    const price = parseFloat(document.getElementById('crud-price').value);
    const category = document.getElementById('crud-category').value;
    const urlImg = document.getElementById('crud-image-url').value.trim();
    const desc = document.getElementById('crud-desc').value.trim();
    const descKm = document.getElementById('crud-desc-km').value.trim();

    const image = state.uploadedImageDataUrl || urlImg || 'https://placehold.co/400x400/e2e8f0/475569?text=Product';

    if (id) {
        const index = state.products.findIndex(p => p.id === id);
        if (index > -1) {
            state.products[index] = { id, title, titleKm, price, category, image, desc, descKm };
        }
    } else {
        const newId = 'prod-' + Date.now();
        state.products.push({ id: newId, title, titleKm, price, category, image, desc, descKm });
    }

    localStorage.setItem('angkor_products', JSON.stringify(state.products));
    renderAdminProductsTable();
    renderProducts();
    closeProductFormModal();
    showToast('Product saved successfully!', 'success');
}

function editProduct(id) {
    openProductFormModal(id);
}

function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        state.products = state.products.filter(p => p.id !== id);
        localStorage.setItem('angkor_products', JSON.stringify(state.products));
        renderAdminProductsTable();
        renderProducts();
        showToast('Product deleted', 'info');
    }
}

function renderAdminCategoriesList() {
    const list = document.getElementById('admin-category-list');
    list.innerHTML = '';

    state.categories.forEach(cat => {
        const item = document.createElement('div');
        item.className = "flex justify-between items-center p-3 bg-gray-50 rounded-lg border text-sm font-semibold text-gray-700";
        item.innerHTML = `
            <span>${cat}</span>
            ${cat !== 'All' ? `<button onclick="deleteCategory('\${cat}')" class="text-red-500 hover:text-red-700 text-xs"><i class="fa-solid fa-trash-can"></i></button>` : '<span class="text-xs text-gray-400">Default</span>'}
        `;
        list.appendChild(item);
    });
}

function addNewCategory() {
    const name = document.getElementById('new-category-name').value.trim();
    if (name && !state.categories.includes(name)) {
        state.categories.push(name);
        localStorage.setItem('angkor_categories', JSON.stringify(state.categories));
        document.getElementById('new-category-name').value = '';
        renderAdminCategoriesList();
        renderCategories();
        showToast('Category added', 'success');
    }
}

function deleteCategory(name) {
    state.categories = state.categories.filter(c => c !== name);
    localStorage.setItem('angkor_categories', JSON.stringify(state.categories));
    renderAdminCategoriesList();
    renderCategories();
    showToast('Category removed', 'info');
}

function loadStoreSettingsForm() {
    document.getElementById('setting-store-name').value = state.settings.storeName;
    document.getElementById('setting-telegram').value = state.settings.telegram;
    document.getElementById('setting-messenger').value = state.settings.messenger;
    document.getElementById('setting-aba').value = state.settings.aba;
    document.getElementById('setting-bakong').value = state.settings.bakong;
    document.getElementById('setting-exchange-rate').value = state.settings.exchangeRate;
}

function saveStoreSettings(e) {
    e.preventDefault();
    state.settings = {
        storeName: document.getElementById('setting-store-name').value.trim(),
        telegram: document.getElementById('setting-telegram').value.trim(),
        messenger: document.getElementById('setting-messenger').value.trim(),
        aba: document.getElementById('setting-aba').value.trim(),
        bakong: document.getElementById('setting-bakong').value.trim(),
        exchangeRate: parseFloat(document.getElementById('setting-exchange-rate').value) || 4100
    };

    localStorage.setItem('angkor_settings', JSON.stringify(state.settings));
    document.getElementById('footer-tg-display').innerText = '@' + state.settings.telegram.replace('@', '');
    showToast('Store settings updated!', 'success');
}

window.onload = function() {
    updateTranslations();
    renderCategories();
    renderProducts();
    renderCart();

    if (state.settings.telegram) {
        document.getElementById('footer-tg-display').innerText = '@' + state.settings.telegram.replace('@', '');
    }
};
