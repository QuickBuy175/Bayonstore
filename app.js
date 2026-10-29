// Exchange rate USD to KHR
const KHR_RATE = 4000;

// Dynamic Store & Website Information
let storeInfo = {
    name: 'BayonStore',
    tagline: "Cambodia's Trusted Marketplace",
    announcement: 'Fast Express Shipping across Phnom Penh & all Cambodian Provinces!',
    heroTitle: 'Shop Local & Global Tech Products',
    heroDesc: 'Pay seamlessly with ABA PAY, Bakong KHQR, Wing, ACLEDA, or order directly via Telegram and Messenger!',
    telegramUser: 'Loka175',
    messengerUser: '1222704867600930',
    merchantName: 'BAYON EXPRESS ONLINE STORE',
    abaAccount: '000 648 592',
    wingAccount: '098 765 432',
    acledaAccount: '1234 5678 90'
};

// App State
let currentLang = 'en'; // 'en' or 'km'
let currency = 'USD'; // 'USD' or 'KHR'
let isOwnerMode = false;
let currentUser = null; 
let activeCategory = 'All';
let searchQuery = '';

// Dynamic Product Categories List (Admin Managed)
let categories = [
    { id: 'cat-all', name: 'All', icon: '🛍️', labelKh: 'ទំនិញទាំងអស់' },
    { id: 'cat-elec', name: 'Electronics', icon: '📱', labelKh: 'អេឡិចត្រូនិក' },
    { id: 'cat-fash', name: 'Fashion', icon: '👕', labelKh: 'សម្លៀកបំពាក់' },
    { id: 'cat-local', name: 'Cambodian Local', icon: '🇰🇭', labelKh: 'ផលិតផលក្នុងស្រុក' },
    { id: 'cat-beauty', name: 'Beauty & Health', icon: '✨', labelKh: 'សម្រស់ និងសុខភាព' }
];

// Store Owner Account (Editable Password)
let ownerAccount = { 
    name: 'Admin', 
    email: 'Prasith1980@gmail.com', 
    password: '@1234567', 
    role: 'owner', 
    shopName: 'Bayon Express Store', 
    phone: '010 789 175' 
};

// UI Translation Dictionary for Khmer/English Toggle
const i18n = {
    en: {
        freeDel: "Free Delivery",
        searchPlaceholder: "Search phones, fashion, snacks, local crafts...",
        cartBtn: "Cart",
        ownerPortal: "Owner Portal",
        adminAccess: "Admin Access",
        logout: "Log Out",
        heroBadge: "Special Express Delivery",
        explore: "Explore Products",
        khqrGuide: "KHQR Payment Guide",
        categoriesTitle: "Categories",
        manageCats: "Manage Categories",
        editStore: "Edit Store Info",
        addProd: "Add New Product",
        ordersHeader: "My Orders & Tracking",
        ordersSub: "Track delivery status and view KHQR payment slips.",
        backShop: "Back to Shop",
        cartDrawerTitle: "Your Shopping Cart",
        subtotal: "Subtotal",
        delivery: "Est. Delivery (Phnom Penh / Express)",
        total: "Total Amount",
        orderTg: "Order Cart via Telegram",
        orderMsg: "Order Cart via Messenger",
        payKhqr: "Pay via KHQR Direct",
        checkoutTitle: "Checkout & Payment",
        step1Title: "1. Delivery Destination",
        scanKhqr: "Scan Bakong KHQR Code",
        merchantNameTitle: "Merchant Account Name:",
        trxRef: "Payment Ref / Transaction ID (Optional):",
        msgConfirmTitle: "⚡ Want to confirm or send slip via Messenger or Telegram?",
        sendTg: "Send Order to Telegram",
        sendMsg: "Send Order to Messenger",
        cancel: "Cancel",
        submitPay: "Confirm & Submit Payment",
        authTitle: "Shop Owner Portal",
        authSub: "Log in to manage store, categories, and update password",
        authEmail: "Owner Username / Email",
        authPass: "Password",
        authLoginBtn: "Log In as Shop Owner",
        changePassTrigger: "Change Admin Password",
        modalLogout: "Log Out Admin Session",
        authClose: "Close",
        pwModalTitle: "Update Admin Password",
        currPass: "Current Password",
        newPass: "New Password",
        confirmPass: "Confirm New Password",
        savePw: "Update Password",
        catManageTitle: "Manage Product Categories",
        addCatSub: "Add New Category",
        btnAddCat: "Add",
        catDoneBtn: "Done",
        pdAdd: "Add to Cart",
        pemName: "Product Title",
        pemCat: "Category",
        pemPrice: "Price ($ USD)",
        pemImg: "Image URL",
        pemDesc: "Description",
        pemCancel: "Cancel",
        ssModalTitle: "Edit Store & Website Information",
        khqrInfoTitle: "How to Pay with Bakong KHQR",
        khqrInfoDesc: "Bakong KHQR is Cambodia's national universal payment standard. You can scan our KHQR using any Cambodian bank app:",
        gotIt: "Got It"
    },
    km: {
        freeDel: "ដឹកជញ្ជូនឥតគិតថ្លៃ",
        searchPlaceholder: "ស្វែងរកទូរស័ព្ទ, សម្លៀកបំពាក់, ម្ហូបអាហារ...",
        cartBtn: "កន្ត្រក",
        ownerPortal: "ច្រកម្ចាស់ហាង",
        adminAccess: "សិទ្ធិគ្រប់គ្រង",
        logout: "ចាកចេញ",
        heroBadge: "សេវាកម្មដឹកជញ្ជូនរហ័ស",
        explore: "ទស្សនាទំនិញ",
        khqrGuide: "មគ្គុទ្ទេសក៍ទូទាត់ KHQR",
        categoriesTitle: "ប្រភេទទំនិញ",
        manageCats: "គ្រប់គ្រងប្រភេទទំនិញ",
        editStore: "កែប្រែព័ត៌មានហាង",
        addProd: "បន្ថែមទំនិញថ្មី",
        ordersHeader: "ការបញ្ជាទិញ & តាមដាន",
        ordersSub: "តាមដានស្ថានភាពដឹកជញ្ជូន និងមើលវិក្កយបត្រទូទាត់ KHQR",
        backShop: "ត្រឡប់ទៅហាង",
        cartDrawerTitle: "កន្ត្រកទំនិញរបស់អ្នក",
        subtotal: "សរុបរង",
        delivery: "ថ្លៃដឹកជញ្ជូន (ភ្នំពេញ / ខេត្ត)",
        total: "ទឹកប្រាក់សរុប",
        orderTg: "កម៉្មង់តាម Telegram",
        orderMsg: "កម៉្មង់តាម Messenger",
        payKhqr: "ទូទាត់ផ្ទាល់តាម KHQR",
        checkoutTitle: "ការគិតលុយ & ទូទាត់",
        step1Title: "១. ទីតាំងដឹកជញ្ជូន",
        scanKhqr: "ស្កែនកូដ Bakong KHQR",
        merchantNameTitle: "ឈ្មោះគណនីអាជីវករ:",
        trxRef: "លេខយោងទូទាត់ / Transaction ID (ជម្រើស):",
        msgConfirmTitle: "⚡ ចង់បញ្ជាក់ ឬផ្ញើចុងសន្លឹកតាម Messenger ឬ Telegram?",
        sendTg: "ផ្ញើការបញ្ជាទិញទៅ Telegram",
        sendMsg: "ផ្ញើការបញ្ជាទិញទៅ Messenger",
        cancel: "បោះបង់",
        submitPay: "បញ្ជាក់ និងផ្ញើការទូទាត់",
        authTitle: "ច្រកចូលសម្រាប់ម្ចាស់ហាង",
        authSub: "ចូលដើម្បីគ្រប់គ្រងហាង, ប្រភេទទំនិញ និងប្តូរលេខសម្ងាត់",
        authEmail: "ឈ្មោះអ្នកប្រើ ឬ អ៊ីមែល",
        authPass: "លេខសម្ងាត់",
        authLoginBtn: "ចូលជាម្ចាស់ហាង",
        changePassTrigger: "ប្តូរលេខសម្ងាត់អ្នកគ្រប់គ្រង",
        modalLogout: "ចាកចេញពីសេសសិនអ្នកគ្រប់គ្រង",
        authClose: "បិទ",
        pwModalTitle: "ប្តូរលេខសម្ងាត់អ្នកគ្រប់គ្រង",
        currPass: "លេខសម្ងាត់បច្ចុប្បន្ន",
        newPass: "លេខសម្ងាត់ថ្មី",
        confirmPass: "បញ្ជាក់លេខសម្ងាត់ថ្មី",
        savePw: "រក្សាទុកលេខសម្ងាត់",
        catManageTitle: "គ្រប់គ្រងប្រភេទទំនិញ",
        addCatSub: "បន្ថែមប្រភេទទំនិញថ្មី",
        btnAddCat: "បន្ថែម",
        catDoneBtn: "រួចរាល់",
        pdAdd: "បន្ថែមទៅកន្ត្រក",
        pemName: "ឈ្មោះទំនិញ",
        pemCat: "ប្រភេទទំនិញ",
        pemPrice: "តម្លៃ ($ USD)",
        pemImg: "តំណភ្ជាប់រូបភាព (URL)",
        pemDesc: "ការពិពណ៌នា",
        pemCancel: "បោះបង់",
        ssModalTitle: "កែប្រែព័ត៌មានហាង និងគេហទំព័រ",
        khqrInfoTitle: "របៀបទូទាត់ប្រាក់ជាមួយ Bakong KHQR",
        khqrInfoDesc: "Bakong KHQR គឺជាប្រព័ន្ធទូទាត់ប្រាក់ស្តង់ដារជាតិកម្ពុជា។ អ្នកអាចស្កែនទូទាត់តាមកម្មវិធីធនាគារក្នុងស្រុកទាំងអស់:",
        gotIt: "យល់ព្រម"
    }
};

let cart = [];
let orders = [
    {
        id: 'ORD-9821',
        date: '2026-08-20',
        items: [{ title: 'Kampot Black Pepper (Organic 250g)', qty: 2, priceUSD: 6.50 }],
        totalUSD: 14.50,
        paymentMethod: 'Bakong KHQR',
        status: 'Delivered',
        trxRef: 'TRX-882194'
    }
];

let chatHistory = [
    { sender: 'merchant', text: 'Choum Reab Suor! Welcome to Angkor Store. Tap "Buy via Telegram" or "Buy via Messenger" to order directly!', time: '10:00 AM' }
];

let products = [
    {
        id: 'p1',
        title: 'សាប៊ូលាងចាន LOKA (380 ml)',
        category: 'Cambodian Local',
        priceUSD: 0.50,
        image: 'https://github.com/QuickBuy175/QB1/blob/main/images/22.jpg?raw=true?auto=format&fit=crop&w=600&q=80',
        description: 'World-renowned GI certified Kampot Organic Pepper harvested from farms in Kampot, Cambodia. Rich aroma and exquisite spiciness.',
        rating: 4.9
    },
    {
        id: 'p2',
        title: 'Phnom Penh Wireless Earbuds Pro',
        category: 'Electronics',
        priceUSD: 29.00,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
        description: 'Active Noise Cancellation, 24-hour battery life, sweat resistance. Perfect for daily commute and workouts.',
        rating: 4.7
    },
    {
        id: 'p3',
        title: 'Handwoven Khmer Golden Silk Scarf',
        category: 'Fashion',
        priceUSD: 35.00,
        image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
        description: 'Authentic 100% Cambodian handwoven silk scarf crafted by artisan weavers in Takeo province. Elegant traditional patterns.',
        rating: 5.0
    },
    {
        id: 'p4',
        title: 'Ultra-Slim Fast PowerBank 20000mAh',
        category: 'Electronics',
        priceUSD: 22.50,
        image: 'https://images.unsplash.com/photo-1609592424009-2180093a0279?auto=format&fit=crop&w=600&q=80',
        description: 'Dual Type-C Fast Charging, charges smartphones up to 5 times. Certified safe for travel and local delivery.',
        rating: 4.8
    },
    {
        id: 'p5',
        title: 'Mondulkiri Roasted Whole Coffee Beans (500g)',
        category: 'Cambodian Local',
        priceUSD: 9.80,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80',
        description: 'Rich, aromatic organic Robusta and Arabica coffee blend grown in the highland soil of Mondulkiri province.',
        rating: 4.9
    },
    {
        id: 'p6',
        title: 'Smartwatch Fitness Tracker (Khmer Language)',
        category: 'Electronics',
        priceUSD: 45.00,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        description: 'Heart rate monitor, step counter, full Khmer font notifications support, 7-day battery endurance.',
        rating: 4.6
    },
    {
        id: 'p7',
        title: 'Natural Coconut Body Lotion & Oil',
        category: 'Beauty & Health',
        priceUSD: 12.00,
        image: 'https://images.unsplash.com/photo-1608248597261-83324467911b?auto=format&fit=crop&w=600&q=80',
        description: 'Pure cold-pressed virgin coconut oil lotion for smooth, hydrated skin. 100% natural Cambodian ingredients.',
        rating: 4.8
    },
    {
        id: 'p8',
        title: 'Casual Linen Summer Shirt',
        category: 'Fashion',
        priceUSD: 18.00,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
        description: 'Breathable lightweight linen shirt designed for tropical Cambodian climate. Available in M, L, XL sizes.',
        rating: 4.5
    }
];

function toggleLanguage() {
    currentLang = (currentLang === 'en') ? 'km' : 'en';
    
    document.getElementById('lang-en').className = currentLang === 'en' ? 'text-emerald-400 font-bold' : 'text-slate-400 font-normal';
    document.getElementById('lang-km').className = currentLang === 'km' ? 'text-emerald-400 font-bold' : 'text-slate-400 font-normal';

    applyLanguageUI();
    renderCategoryFilterBar();
    renderProducts();
    showToast(currentLang === 'km' ? 'បានប្តូរភាសាទៅជា ភាសាខ្មែរ 🇰🇭' : 'Language switched to English 🇬🇧');
}

function applyLanguageUI() {
    const dictionary = i18n[currentLang];
    for (const key in dictionary) {
        const elId = `lbl-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        const element = document.getElementById(elId) || document.getElementById(`badge-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`);
        if (element) {
            element.textContent = dictionary[key];
        }
    }
    document.getElementById('search-input').placeholder = dictionary.searchPlaceholder;
    document.getElementById('mobile-search-input').placeholder = dictionary.searchPlaceholder;
    
    if (currentLang === 'km') {
        document.body.classList.add('kh-font');
    } else {
        document.body.classList.remove('kh-font');
    }
}

function formatPrice(usdPrice) {
    if (currency === 'KHR') {
        const khrAmount = Math.round(usdPrice * KHR_RATE);
        return `${khrAmount.toLocaleString('en-US')} ៛`;
    }
    return `$${usdPrice.toFixed(2)}`;
}

function toggleCurrency() {
    currency = (currency === 'USD') ? 'KHR' : 'USD';
    document.getElementById('curr-usd').className = currency === 'USD' ? 'text-emerald-400 font-bold' : 'text-slate-400';
    document.getElementById('curr-khr').className = currency === 'KHR' ? 'text-emerald-400 font-bold' : 'text-slate-400';
    
    renderProducts();
    renderCart();
    renderOrders();
    showToast(`Switched currency to ${currency}`);
}

function showTab(tabName) {
    document.getElementById('tab-shop').classList.add('hidden');
    document.getElementById('tab-orders').classList.add('hidden');
    
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    if (tabName === 'orders') {
        renderOrders();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCategoryFilterBar() {
    const container = document.getElementById('category-filter-bar');
    container.innerHTML = '';

    categories.forEach(cat => {
        const label = (currentLang === 'km' && cat.labelKh) ? cat.labelKh : cat.name;
        const isSelected = activeCategory === cat.name;

        const btn = document.createElement('button');
        btn.onclick = () => filterCategory(cat.name);
        btn.className = isSelected 
            ? 'cat-btn active bg-brand-600 text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition shadow-sm flex items-center space-x-1.5'
            : 'cat-btn bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap border border-slate-200 transition flex items-center space-x-1.5';
        
        btn.innerHTML = `<span>${cat.icon}</span> <span>${label}</span>`;
        container.appendChild(btn);
    });

    populateCategoryDropdown();
}

function populateCategoryDropdown() {
    const select = document.getElementById('pem-category');
    if (!select) return;
    select.innerHTML = '';

    categories.filter(c => c.name !== 'All').forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.name;
        opt.textContent = `${cat.icon} ${cat.name}`;
        select.appendChild(opt);
    });
}

function filterCategory(catName) {
    activeCategory = catName;
    renderCategoryFilterBar();
    renderProducts();
}

function handleSearch(type = 'desktop') {
    const inputId = type === 'mobile' ? 'mobile-search-input' : 'search-input';
    searchQuery = document.getElementById(inputId).value.toLowerCase().trim();
    renderProducts();
}

function openCategoryManageModal() {
    renderCategoryManageList();
    document.getElementById('category-manage-modal').classList.remove('hidden');
}

function closeCategoryManageModal() {
    document.getElementById('category-manage-modal').classList.add('hidden');
}

function renderCategoryManageList() {
    const list = document.getElementById('categories-manage-list');
    list.innerHTML = '';

    categories.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs';

        if (cat.name === 'All') {
            item.innerHTML = `
                <div class="flex items-center space-x-2 font-bold text-slate-700">
                    <span>${cat.icon}</span>
                    <span>${cat.name} (Default System Category)</span>
                </div>
                <span class="text-[10px] text-slate-400 italic">Protected</span>
            `;
        } else {
            item.innerHTML = `
                <div class="flex items-center space-x-2 font-semibold text-slate-800">
                    <span class="text-base">${cat.icon}</span>
                    <span>${cat.name}</span>
                    ${cat.labelKh ? `<span class="text-slate-400 text-[11px]">(\${cat.labelKh})</span>` : ''}
                </div>
                <button onclick="deleteCategory('${cat.id}')" class="text-rose-600 hover:text-rose-800 p-1.5 bg-rose-50 hover:bg-rose-100 rounded-lg transition" title="Delete Category">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
        }
        list.appendChild(item);
    });
}

function handleCategoryAddSubmit(e) {
    e.preventDefault();
    const icon = document.getElementById('cat-icon-input').value.trim() || '📦';
    const name = document.getElementById('cat-name-input').value.trim();

    if (!name) return;

    if (categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        showToast("⚠️ Category already exists!");
        return;
    }

    const newId = 'cat-' + Date.now();
    categories.push({ id: newId, name: name, icon: icon, labelKh: name });

    document.getElementById('cat-icon-input').value = '';
    document.getElementById('cat-name-input').value = '';

    renderCategoryManageList();
    renderCategoryFilterBar();
    showToast(`✅ Category "${name}" added!`);
}

function deleteCategory(catId) {
    const target = categories.find(c => c.id === catId);
    if (!target) return;

    categories = categories.filter(c => c.id !== catId);

    if (activeCategory === target.name) {
        activeCategory = 'All';
    }

    renderCategoryManageList();
    renderCategoryFilterBar();
    renderProducts();
    showToast(`🗑️ Removed category "${target.name}"`);
}

function openPasswordUpdateModal() {
    document.getElementById('password-update-form').reset();
    document.getElementById('password-modal').classList.remove('hidden');
}

function closePasswordUpdateModal() {
    document.getElementById('password-modal').classList.add('hidden');
}

function handlePasswordUpdateSubmit(e) {
    e.preventDefault();
    const currentPw = document.getElementById('pw-current').value;
    const newPw = document.getElementById('pw-new').value;
    const confirmPw = document.getElementById('pw-confirm').value;

    if (currentPw !== ownerAccount.password) {
        showToast("❌ Incorrect current password!");
        return;
    }

    if (newPw !== confirmPw) {
        showToast("⚠️ New passwords do not match!");
        return;
    }

    ownerAccount.password = newPw;
    closePasswordUpdateModal();
    showToast("🔑 Admin password updated successfully!");
}

function orderViaTelegram(productId = null, isCart = false) {
    let message = "";

    if (isCart) {
        if (cart.length === 0) {
            showToast("Your cart is empty! Add items first.");
            return;
        }
        const name = document.getElementById('ship-name')?.value.trim() || "Customer";
        const phone = document.getElementById('ship-phone')?.value.trim() || "N/A";
        const province = document.getElementById('ship-province')?.value || "Phnom Penh";
        const address = document.getElementById('ship-address')?.value.trim() || "Phnom Penh";
        let subtotal = cart.reduce((acc, item) => acc + (item.priceUSD * item.qty), 0);
        let totalUSD = subtotal + 1.50;

        message = `🛒 *NEW ORDER FROM ${storeInfo.name.toUpperCase()}*\n\n` +
                  `👤 *Customer:* ${name}\n` +
                  `📞 *Phone:* ${phone}\n` +
                  `📍 *Location:* ${province}, ${address}\n\n` +
                  `📦 *Ordered Items:*\n` +
                  cart.map(i => `• ${i.qty}x ${i.title} - $${(i.priceUSD * i.qty).toFixed(2)}`).join('\n') +
                  `\n\n💵 *Total Amount:* $${totalUSD.toFixed(2)} (${Math.round(totalUSD * KHR_RATE).toLocaleString()} ៛)\n\n` +
                  `Please confirm my order and send payment details!`;
    } else {
        const p = products.find(item => item.id === productId);
        if (!p) return;
        message = `👋 Hello ${storeInfo.name}!\n\nI want to buy:\n📦 *${p.title}*\n💰 *Price:* $${p.priceUSD.toFixed(2)} (${Math.round(p.priceUSD * KHR_RATE).toLocaleString()} ៛)\n\nPlease check stock and delivery details for Phnom Penh / Provinces. Orkun!`;
    }

    const telegramUrl = `https://t.me/${storeInfo.telegramUser}?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    showToast('📱 Opening Telegram Chat with Seller...');
}

function orderViaMessenger(productId = null, isCart = false) {
    let message = "";

    if (isCart) {
        if (cart.length === 0) {
            showToast("Your cart is empty! Add items first.");
            return;
        }
        const name = document.getElementById('ship-name')?.value.trim() || "Customer";
        const phone = document.getElementById('ship-phone')?.value.trim() || "N/A";
        const province = document.getElementById('ship-province')?.value || "Phnom Penh";
        const address = document.getElementById('ship-address')?.value.trim() || "Phnom Penh";
        let subtotal = cart.reduce((acc, item) => acc + (item.priceUSD * item.qty), 0);
        let totalUSD = subtotal + 1.50;

        message = `🛒 NEW ORDER FROM ${storeInfo.name.toUpperCase()}\n` +
                  `Customer: ${name} (${phone})\n` +
                  `Delivery: ${province}, ${address}\n\n` +
                  `Items:\n` +
                  cart.map(i => `- ${i.qty}x ${i.title}`).join('\n') +
                  `\nTotal: $${totalUSD.toFixed(2)} (${Math.round(totalUSD * KHR_RATE).toLocaleString()} KHR)`;
    } else {
        const p = products.find(item => item.id === productId);
        if (!p) return;
        message = `Hello! I would like to buy "${p.title}" for $${p.priceUSD.toFixed(2)}. Is it in stock?`;
    }

    try {
        const textarea = document.createElement('textarea');
        textarea.value = message;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('📋 Order details copied! Opening Messenger...');
    } catch (err) {}

    setTimeout(() => {
        window.open(`https://m.me/${storeInfo.messengerUser}`, '_blank');
    }, 500);
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesCat = (activeCategory === 'All') || (p.category === activeCategory);
        const matchesSearch = p.title.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    document.getElementById('catalog-title').textContent = activeCategory === 'All' ? (currentLang === 'km' ? 'ទំនិញឆ្នើមៗ' : 'Featured Products') : `${activeCategory} Items`;
    document.getElementById('product-count').textContent = `Showing ${filtered.length} products`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white rounded-2xl border border-slate-200">
                <i class="fa-solid fa-box-open text-4xl text-slate-300 mb-2"></i>
                <p class="text-slate-600 font-medium text-sm">No products found matching your search.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between group relative";
        
        card.innerHTML = `
            <div>
                <div class="relative h-44 overflow-hidden bg-slate-100 cursor-pointer" onclick="openProductDetailModal('${p.id}')">
                    <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.src='https://placehold.co/400x300/f1f5f9/475569?text=Product+Image'">
                    <span class="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">
                        ${p.category}
                    </span>
                    
                    ${isOwnerMode ? `
                        <div class="absolute top-2.5 right-2.5 flex space-x-1" onclick="event.stopPropagation()">
                            <button onclick="openEditProductModal('\${p.id}')" class="bg-amber-500 hover:bg-amber-600 text-slate-950 p-1.5 rounded-lg shadow text-xs font-bold transition" title="Edit Product">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="deleteProduct('\${p.id}')" class="bg-rose-600 hover:bg-rose-700 text-white p-1.5 rounded-lg shadow text-xs font-bold transition" title="Delete Product">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    ` : ''}
                </div>

                <div class="p-4">
                    <div class="flex items-center space-x-1 text-amber-400 text-xs mb-1">
                        <i class="fa-solid fa-star"></i>
                        <span class="text-slate-600 font-semibold text-xs ml-0.5">${p.rating}</span>
                    </div>
                    <h4 class="font-bold text-slate-900 text-sm leading-tight line-clamp-1 hover:text-brand-600 cursor-pointer" onclick="openProductDetailModal('${p.id}')">${p.title}</h4>
                    <p class="text-xs text-slate-500 mt-1 line-clamp-2">${p.description}</p>
                </div>
            </div>

            <div class="p-4 pt-0 space-y-3">
                <div class="flex items-baseline justify-between border-t border-slate-100 pt-3">
                    <div>
                        <span class="text-base font-extrabold text-brand-600">${formatPrice(p.priceUSD)}</span>
                        <span class="text-[10px] text-slate-400 block font-normal">${currency === 'USD' ? Math.round(p.priceUSD * KHR_RATE).toLocaleString() + ' ៛' : '$' + p.priceUSD.toFixed(2)}</span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-1.5">
                    <button onclick="orderViaTelegram('${p.id}')" class="bg-[#229ED9] hover:bg-[#1e8dbf] text-white py-1.5 rounded-xl text-[11px] font-bold transition flex items-center justify-center space-x-1 shadow-sm">
                        <i class="fa-brands fa-telegram"></i>
                        <span>Telegram</span>
                    </button>
                    <button onclick="orderViaMessenger('${p.id}')" class="bg-[#0084FF] hover:bg-[#0073e6] text-white py-1.5 rounded-xl text-[11px] font-bold transition flex items-center justify-center space-x-1 shadow-sm">
                        <i class="fa-brands fa-facebook-messenger"></i>
                        <span>Messenger</span>
                    </button>
                </div>

                <button onclick="addToCart('${p.id}')" class="w-full bg-slate-900 hover:bg-brand-600 text-white py-2 rounded-xl text-xs font-semibold transition flex items-center justify-center space-x-1.5">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>${i18n[currentLang].pdAdd}</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openProductDetailModal(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    document.getElementById('pd-image').src = p.image;
    document.getElementById('pd-category').textContent = p.category;
    document.getElementById('pd-title').textContent = p.title;
    document.getElementById('pd-price-usd').textContent = formatPrice(p.priceUSD);
    document.getElementById('pd-price-khr').textContent = currency === 'USD' ? `${Math.round(p.priceUSD * KHR_RATE).toLocaleString()} ៛` : `$${p.priceUSD.toFixed(2)}`;
    document.getElementById('pd-desc').textContent = p.description;

    document.getElementById('pd-add-btn').onclick = function() {
        addToCart(p.id);
        closeProductDetailModal();
    };
    document.getElementById('pd-telegram-btn').onclick = function() {
        orderViaTelegram(p.id);
    };
    document.getElementById('pd-messenger-btn').onclick = function() {
        orderViaMessenger(p.id);
    };

    document.getElementById('product-detail-modal').classList.remove('hidden');
}

function closeProductDetailModal() {
    document.getElementById('product-detail-modal').classList.add('hidden');
}

function applyStoreInfoUI() {
    const name = storeInfo.name || 'AngkorStore';
    const splitIdx = Math.max(1, Math.floor(name.length / 2));
    const part1 = name.substring(0, splitIdx);
    const part2 = name.substring(splitIdx);

    document.getElementById('brand-name').innerHTML = `${part1}<span class="text-brand-600">${part2}</span>`;
    document.getElementById('brand-tagline').textContent = storeInfo.tagline;
    document.getElementById('announcement-text').textContent = storeInfo.announcement;
    document.getElementById('announcement-text-mobile').textContent = storeInfo.announcement;
    document.getElementById('hero-title').textContent = storeInfo.heroTitle;
    document.getElementById('hero-desc').textContent = storeInfo.heroDesc;

    document.getElementById('khqr-merchant-name').textContent = storeInfo.merchantName;
    document.getElementById('khqr-aba-acc').textContent = storeInfo.abaAccount;
    document.getElementById('khqr-wing-acc').textContent = storeInfo.wingAccount;
    document.getElementById('khqr-acleda-acc').textContent = storeInfo.acledaAccount;
}

function openStoreSettingsModal() {
    document.getElementById('ss-name').value = storeInfo.name;
    document.getElementById('ss-tagline').value = storeInfo.tagline;
    document.getElementById('ss-announcement').value = storeInfo.announcement;
    document.getElementById('ss-hero-title').value = storeInfo.heroTitle;
    document.getElementById('ss-hero-desc').value = storeInfo.heroDesc;
    document.getElementById('ss-telegram').value = storeInfo.telegramUser;
    document.getElementById('ss-messenger').value = storeInfo.messengerUser;
    document.getElementById('ss-merchant-name').value = storeInfo.merchantName;
    document.getElementById('ss-aba-acc').value = storeInfo.abaAccount;
    document.getElementById('ss-wing-acc').value = storeInfo.wingAccount;
    document.getElementById('ss-acleda-acc').value = storeInfo.acledaAccount;

    document.getElementById('store-settings-modal').classList.remove('hidden');
}

function closeStoreSettingsModal() {
    document.getElementById('store-settings-modal').classList.add('hidden');
}

function handleStoreSettingsSubmit(e) {
    e.preventDefault();
    storeInfo.name = document.getElementById('ss-name').value.trim();
    storeInfo.tagline = document.getElementById('ss-tagline').value.trim();
    storeInfo.announcement = document.getElementById('ss-announcement').value.trim();
    storeInfo.heroTitle = document.getElementById('ss-hero-title').value.trim();
    storeInfo.heroDesc = document.getElementById('ss-hero-desc').value.trim();
    storeInfo.telegramUser = document.getElementById('ss-telegram').value.trim();
    storeInfo.messengerUser = document.getElementById('ss-messenger').value.trim();
    storeInfo.merchantName = document.getElementById('ss-merchant-name').value.trim();
    storeInfo.abaAccount = document.getElementById('ss-aba-acc').value.trim();
    storeInfo.wingAccount = document.getElementById('ss-wing-acc').value.trim();
    storeInfo.acledaAccount = document.getElementById('ss-acleda-acc').value.trim();

    applyStoreInfoUI();
    closeStoreSettingsModal();
    showToast('✅ Store & Website details updated successfully!');
}

function openAddProductModal() {
    populateCategoryDropdown();
    document.getElementById('pem-title').textContent = 'Add New Product to Shop';
    document.getElementById('pem-submit-label').textContent = 'Add Product';
    document.getElementById('pem-id').value = '';
    document.getElementById('product-edit-form').reset();
    document.getElementById('product-edit-modal').classList.remove('hidden');
}

function openEditProductModal(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    populateCategoryDropdown();
    document.getElementById('pem-title').textContent = 'Edit Product Details';
    document.getElementById('pem-submit-label').textContent = 'Save Changes';
    document.getElementById('pem-id').value = p.id;
    document.getElementById('pem-name').value = p.title;
    document.getElementById('pem-category').value = p.category;
    document.getElementById('pem-price').value = p.priceUSD;
    document.getElementById('pem-image').value = p.image;
    document.getElementById('pem-desc').value = p.description;

    document.getElementById('product-edit-modal').classList.remove('hidden');
}

function closeProductEditModal() {
    document.getElementById('product-edit-modal').classList.add('hidden');
}

function handleProductFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('pem-id').value;
    const title = document.getElementById('pem-name').value.trim();
    const category = document.getElementById('pem-category').value;
    const priceUSD = parseFloat(document.getElementById('pem-price').value);
    const image = document.getElementById('pem-image').value.trim();
    const description = document.getElementById('pem-desc').value.trim();

    if (id) {
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], title, category, priceUSD, image, description };
            showToast('✅ Product updated successfully!');
        }
    } else {
        const newId = 'p' + (Date.now());
        products.unshift({
            id: newId,
            title,
            category,
            priceUSD,
            image,
            description,
            rating: 5.0
        });
        showToast('🎉 New Product added to catalog!');
    }

    closeProductEditModal();
    renderProducts();
}

function deleteProduct(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    products = products.filter(item => item.id !== id);
    renderProducts();
    showToast(`🗑️ Removed "${p.title}"`);
}

function toggleCartDrawer() {
    document.getElementById('cart-drawer').classList.toggle('hidden');
}

function addToCart(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...p, qty: 1 });
    }

    renderCart();
    showToast(`Added ${p.title} to Cart!`);
}

function updateCartQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const countEl = document.getElementById('cart-count');
    container.innerHTML = '';

    let totalQty = 0;
    let subtotalUSD = 0;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16 text-slate-400">
                <i class="fa-solid fa-basket-shopping text-5xl mb-3 text-slate-300"></i>
                <p class="font-medium text-slate-600 text-sm">Your cart is currently empty.</p>
                <button onclick="toggleCartDrawer()" class="mt-4 text-xs font-bold text-brand-600 hover:underline">Start Shopping</button>
            </div>
        `;
    } else {
        cart.forEach(item => {
            totalQty += item.qty;
            const itemTotal = item.priceUSD * item.qty;
            subtotalUSD += itemTotal;

            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'flex items-center space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-200';
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg shrink-0" onerror="this.src='https://placehold.co/100?text=Item'">
                <div class="flex-1 min-w-0">
                    <h5 class="font-bold text-xs text-slate-900 truncate">${item.title}</h5>
                    <span class="text-xs font-extrabold text-brand-600">${formatPrice(item.priceUSD)}</span>
                    
                    <div class="flex items-center space-x-2 mt-1">
                        <button onclick="updateCartQty('${item.id}', -1)" class="w-5 h-5 rounded bg-white border border-slate-300 flex items-center justify-center text-xs text-slate-600 hover:bg-slate-100">-</button>
                        <span class="text-xs font-bold text-slate-800">${item.qty}</span>
                        <button onclick="updateCartQty('${item.id}', 1)" class="w-5 h-5 rounded bg-white border border-slate-300 flex items-center justify-center text-xs text-slate-600 hover:bg-slate-100">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-rose-500 p-1">
                    <i class="fa-solid fa-trash-can text-sm"></i>
                </button>
            `;
            container.appendChild(cartItemEl);
        });
    }

    countEl.textContent = totalQty;
    document.getElementById('cart-subtotal').textContent = `$${subtotalUSD.toFixed(2)}`;
    
    const totalUSD = subtotalUSD + (cart.length > 0 ? 1.50 : 0);
    document.getElementById('cart-total-usd').textContent = `$${totalUSD.toFixed(2)}`;
    document.getElementById('cart-total-khr').textContent = `${Math.round(totalUSD * KHR_RATE).toLocaleString()} ៛`;
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Your cart is empty! Add products first.");
        return;
    }
    toggleCartDrawer();
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function confirmOrderPayment() {
    const name = document.getElementById('ship-name').value.trim();
    const phone = document.getElementById('ship-phone').value.trim();
    const trxRef = document.getElementById('trx-ref-input').value.trim();

    if (!name || !phone) {
        showToast("⚠️ Please enter your name and phone number.");
        return;
    }

    let subtotal = cart.reduce((acc, item) => acc + (item.priceUSD * item.qty), 0);
    let totalUSD = subtotal + 1.50;

    const newOrder = {
        id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
        date: new Date().toISOString().split('T')[0],
        items: [...cart],
        totalUSD: totalUSD,
        paymentMethod: 'Bakong KHQR',
        status: 'Processing',
        trxRef: trxRef || 'KHQR-DIRECT'
    };

    orders.unshift(newOrder);
    cart = [];
    renderCart();
    closeCheckoutModal();
    showTab('orders');
    showToast("🎉 Order Submitted! We will contact you via phone shortly.");
}

function openKHQRInfoModal() {
    document.getElementById('khqr-info-modal').classList.remove('hidden');
}

function closeKHQRInfoModal() {
    document.getElementById('khqr-info-modal').classList.add('hidden');
}

function toggleChatModal() {
    document.getElementById('chat-modal').classList.toggle('hidden');
    renderChat();
}

function renderChat() {
    const box = document.getElementById('chat-messages');
    const templatesContainer = document.getElementById('chat-templates');
    box.innerHTML = '';
    
    chatHistory.forEach(msg => {
        const el = document.createElement('div');
        const isMe = msg.sender === (isOwnerMode ? 'merchant' : 'user');
        el.className = `flex flex-col ${isMe ? 'items-end' : 'items-start'}`;
        el.innerHTML = `
            <div class="${isMe ? 'bg-brand-600 text-white rounded-tr-none' : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'} max-w-[80%] p-3 rounded-2xl shadow-sm">
                <p class="text-xs leading-relaxed">${msg.text}</p>
            </div>
            <span class="text-[9px] text-slate-400 mt-1 px-1">${msg.time}</span>
        `;
        box.appendChild(el);
    });
    box.scrollTop = box.scrollHeight;

    templatesContainer.innerHTML = '';
    const templates = isOwnerMode ? [
        "Hello! How can we help you today?",
        "Yes, item is in stock for express delivery!",
        "Please scan Bakong KHQR for payment."
    ] : [
        "Is delivery available to Siem Reap?",
        "How long does express shipping take in Phnom Penh?",
        "Do you accept ABA PAY / Wing?"
    ];

    templates.forEach(t => {
        const btn = document.createElement('button');
        btn.className = "bg-white hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium whitespace-nowrap shadow-sm";
        btn.textContent = t;
        btn.onclick = () => sendQuickMessage(t);
        templatesContainer.appendChild(btn);
    });
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    chatHistory.push({
        sender: isOwnerMode ? 'merchant' : 'user',
        text: text,
        time: time
    });

    input.value = '';
    renderChat();

    if (!isOwnerMode) {
        setTimeout(() => {
            chatHistory.push({
                sender: 'merchant',
                text: "Orkun! Thanks for messaging Angkor Store. Tap 'Order via Telegram' or 'Order via Messenger' for fastest response!",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
            renderChat();
        }, 1000);
    }
}

function sendQuickMessage(msgText) {
    document.getElementById('chat-input').value = msgText;
    sendMessage();
}

function toggleAuthModal() {
    document.getElementById('auth-modal').classList.toggle('hidden');
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const inputUser = document.getElementById('auth-email').value.trim();
    const inputPass = document.getElementById('auth-password').value;

    const isUserValid = (inputUser.toLowerCase() === 'admin' || inputUser.toLowerCase() === 'prasith1980@gmail.com');
    const isPassValid = (inputPass === ownerAccount.password);

    if (isUserValid && isPassValid) {
        currentUser = ownerAccount;
        applyUserRoleState();
        toggleAuthModal();
        showToast('👑 Logged in as Admin!');
    } else {
        showToast('❌ Invalid Username or Password!');
    }
}

function handleLogout() {
    currentUser = null;
    isOwnerMode = false;
    applyUserRoleState();
    if (!document.getElementById('auth-modal').classList.contains('hidden')) {
        toggleAuthModal();
    }
    showToast('🚪 Logged out from Admin Portal');
}

function applyUserRoleState() {
    const addBtn = document.getElementById('add-product-btn');
    const editStoreBtn = document.getElementById('edit-store-btn');
    const manageCatsBtn = document.getElementById('manage-cats-btn');
    const userNameEl = document.getElementById('user-name');
    const userRoleBadgeEl = document.getElementById('user-role-badge');
    const userAvatarEl = document.getElementById('user-avatar');
    const logoutBtn = document.getElementById('logout-btn');
    const modalLogoutBtn = document.getElementById('modal-logout-btn');
    const modalChangePassBtn = document.getElementById('modal-change-pass-btn');
    const authForm = document.getElementById('auth-form');

    if (currentUser && currentUser.role === 'owner') {
        isOwnerMode = true;
        userNameEl.textContent = 'Shop Owner';
        userRoleBadgeEl.textContent = '👑 Admin Active';
        userRoleBadgeEl.className = 'text-[9px] text-amber-600 font-bold block leading-none';
        userAvatarEl.className = 'w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold';
        userAvatarEl.innerHTML = '<i class="fa-solid fa-store"></i>';
        
        if (addBtn) addBtn.classList.remove('hidden');
        if (editStoreBtn) editStoreBtn.classList.remove('hidden');
        if (manageCatsBtn) manageCatsBtn.classList.remove('hidden');
        if (logoutBtn) logoutBtn.classList.remove('hidden');
        if (modalLogoutBtn) modalLogoutBtn.classList.remove('hidden');
        if (modalChangePassBtn) modalChangePassBtn.classList.remove('hidden');
        if (authForm) authForm.classList.add('hidden');
    } else {
        isOwnerMode = false;
        userNameEl.textContent = i18n[currentLang].ownerPortal;
        userRoleBadgeEl.textContent = i18n[currentLang].adminAccess;
        userRoleBadgeEl.className = 'text-[9px] text-amber-700 font-semibold block leading-none';
        userAvatarEl.className = 'w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-bold';
        userAvatarEl.innerHTML = '<i class="fa-solid fa-store"></i>';

        if (addBtn) addBtn.classList.add('hidden');
        if (editStoreBtn) editStoreBtn.classList.add('hidden');
        if (manageCatsBtn) manageCatsBtn.classList.add('hidden');
        if (logoutBtn) logoutBtn.classList.add('hidden');
        if (modalLogoutBtn) modalLogoutBtn.classList.add('hidden');
        if (modalChangePassBtn) modalChangePassBtn.classList.add('hidden');
        if (authForm) authForm.classList.remove('hidden');
    }

    renderProducts();
}

function renderOrders() {
    const container = document.getElementById('orders-list');
    container.innerHTML = '';

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 bg-white rounded-2xl border border-slate-200">
                <i class="fa-regular fa-rectangle-list text-4xl text-slate-300 mb-2"></i>
                <p class="text-slate-600 font-medium text-sm">No orders placed yet.</p>
            </div>
        `;
        return;
    }

    orders.forEach(ord => {
        const el = document.createElement('div');
        el.className = 'bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-sm';
        el.innerHTML = `
            <div class="flex justify-between items-center border-b border-slate-100 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-900">${ord.id}</span>
                    <span class="text-xs text-slate-400 block">${ord.date} • ${ord.paymentMethod}</span>
                </div>
                <span class="px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">${ord.status}</span>
            </div>
            <div class="space-y-1 text-xs text-slate-600">
                ${ord.items.map(i => `<div class="flex justify-between"><span>${i.qty}x${i.title}</span><span class="font-bold text-slate-800">\${formatPrice(i.priceUSD * i.qty)}</span></div>`).join('')}
            </div>
            <div class="flex justify-between items-center pt-2 border-t border-slate-100 font-bold text-sm">
                <span>Total Paid:</span>
                <span class="text-brand-600">${formatPrice(ord.totalUSD)}</span>
            </div>
        `;
        container.appendChild(el);
    });
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold flex items-center space-x-2 animate-in fade-in slide-in-from-bottom duration-200';
    toast.innerHTML = `<span>${msg}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'transition', 'duration-300');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

window.onload = function() {
    applyStoreInfoUI();
    applyLanguageUI();
    renderCategoryFilterBar();
    applyUserRoleState();
    renderCart();
};
