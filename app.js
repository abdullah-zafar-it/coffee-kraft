const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwl36eeuh5SfH1K7GsjoeqrWtEy682vklfSSt_g1iGyWAd8x3PEAsggGutaeVl8Ms-5/exec';

// 100% Fixed, Independent, High-Quality Asset Mapping Engine (Strict Matrix Execution)
const products = [
    // Signature Selection
    { cat: 'signature', n: 'House Special Roast', p: 850, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80' },
    { cat: 'signature', n: 'Iced Vanilla Brew', p: 920, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80' },
    { cat: 'signature', n: 'Caramel Cloud Latte', p: 780, img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80' },
    { cat: 'signature', n: 'Premium Gold Drip', p: 1100, img: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80' },
    { cat: 'signature', n: 'Special Mocha', p: 890, img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80' },
    { cat: 'signature', n: 'Espresso', p: 450, img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80' },
    { cat: 'signature', n: 'Karak Chai', p: 380, img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80' },
    { cat: 'signature', n: 'Club Sandwich', p: 750, img: 'https://charlotteslivelykitchen.com/wp-content/uploads/2016/10/Club-Sandwich-1.jpg' },

    // Hot Brews
    { cat: 'hot', n: 'Spanish Latte', p: 650, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' },
    { cat: 'hot', n: 'Classic Cortado', p: 580, img: 'https://coffeefactz.com/wp-content/uploads/2024/11/perfect-cortado-coffee-layers-gibraltar-glass-768x431.png' },
    { cat: 'hot', n: 'Flat White', p: 620, img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=600&q=80' },
    { cat: 'hot', n: 'Dark Roast Drip', p: 550, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80' },
    { cat: 'hot', n: 'Americano Black', p: 480, img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80' },
    { cat: 'hot', n: 'Classic Cappuccino', p: 600, img: 'https://assets.afcdn.com/recipe/20160919/20976_w3072h2304c1cx2624cy1749.jpg' },
    { cat: 'hot', n: 'Café Latte', p: 590, img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
    { cat: 'hot', n: 'Irish Cream Brew', p: 690, img: 'https://lulucopycats.com/wp-content/uploads/2025/06/Irish-Cream-Cold-Brew-Recipe-683x1024.png' },

    // Chill Shakes
    { cat: 'shakes', n: 'Biscoff Shake', p: 950, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80' },
    { cat: 'shakes', n: 'Dark Choco Shake', p: 820, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80' },
    { cat: 'shakes', n: 'Oreo Blast Shake', p: 880, img: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80' },
    { cat: 'shakes', n: 'Peanut Butter Shake', p: 990, img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80' },
    { cat: 'shakes', n: 'Vanilla Velvet Shake', p: 790, img: 'https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-vanilla-milkshake.jpg' },
    { cat: 'shakes', n: 'Mango Alphonso Craze', p: 850, img: 'https://thatyummy.com/wp-content/uploads/2025/12/mango-smoothie-recipe-featured-1.png' },
    { cat: 'shakes', n: 'Strawberry Fusion', p: 840, img: 'https://foodwithfeeling.com/wp-content/uploads/2021/06/strawberry-milkshake-6-680x1020.jpg' },
    { cat: 'shakes', n: 'Nutella Loaded Malt', p: 980, img: 'https://tse1.mm.bing.net/th/id/OIP.kJZBAj4yQ1eewgFVuZ-YwwHaHa?pid=Api&h=220&P=0' },

    // Bakery
    { cat: 'bakery', n: 'Nutella Croissant', p: 450, img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' },
    { cat: 'bakery', n: 'Double Choco Brownie', p: 480, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80' },
    { cat: 'bakery', n: 'Tiramisu Slice', p: 750, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' },
    { cat: 'bakery', n: 'Blueberry Muffin', p: 420, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80' },
    { cat: 'bakery', n: 'Lotus Cheesecake', p: 850, img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_683/https://scottishscran.com/wp-content/uploads/2022/03/Lotus-Biscoff-Cheesecake-Recipe-10-1024x683.jpg' },
    { cat: 'bakery', n: 'Almond Biscotti Crust', p: 350, img: 'https://thumbs.dreamstime.com/b/sliced-almond-studded-biscotti-dough-second-bake-created-generative-ai-286637659.jpg?w=992' },
    { cat: 'bakery', n: 'Cinnamon Roll Bun', p: 390, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
    { cat: 'bakery', n: 'Red Velvet Pastry', p: 490, img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=600&q=80' }
];

let stock = {};
let curUser = JSON.parse(sessionStorage.getItem('kActive')) || null;
let savedDetails = JSON.parse(localStorage.getItem('kDetails')) || {};
let bag = [];
let currentActiveCategory = 'all';
let searchQueryGlobal = '';

async function loadInventory() {
    try {
        const response = await fetch('/api/inventory');
        const result = await response.json();
        if (result.success) {
            stock = result.inventory;
        }
    } catch (err) {
        console.error("Failed to load inventory from server:", err);
    }
    checkAuthStatus();
}

async function updateDbStock(productName, quantity) {
    try {
        await fetch('/api/inventory/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productName, quantity })
        });
    } catch (err) {
        console.error("Failed to update stock in database:", err);
    }
}

function switchGateTab(tab) {
    if (tab === 'signin') {
        document.getElementById('tab-signin-btn').classList.add('active');
        document.getElementById('tab-signup-btn').classList.remove('active');
        document.getElementById('gate-signin-form').style.display = 'block';
        document.getElementById('gate-signup-form').style.display = 'none';
    } else {
        document.getElementById('tab-signup-btn').classList.add('active');
        document.getElementById('tab-signin-btn').classList.remove('active');
        document.getElementById('gate-signin-form').style.display = 'none';
        document.getElementById('gate-signup-form').style.display = 'block';
    }
}

async function handleGateSignIn() {
    let u = document.getElementById('gate_li_u').value.trim(), p = document.getElementById('gate_li_p').value;
    if (!u || !p) return alert("Fields cannot be empty!");

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: u, pass: p })
        });
        const result = await response.json();
        if (result.success) {
            curUser = result.user;
            sessionStorage.setItem('kActive', JSON.stringify(result.user));
            checkAuthStatus();
        } else {
            alert(result.error || "Invalid Login!");
        }
    } catch (err) {
        alert("Server connection failed during login!");
    }
}

async function handleGateSignUp() {
    let u = document.getElementById('gate_su_u').value.trim(), p = document.getElementById('gate_su_p').value, a = document.getElementById('gate_su_addr').value;
    if (!u || !p) return alert("Fields cannot be empty!");
    if (p.length < 6) return alert("Password must be at least 6 characters!");

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: u, pass: p, addr: a })
        });
        const result = await response.json();
        if (result.success) {
            alert("Registration Successful! Please Sign In.");
            document.getElementById('gate_su_u').value = '';
            document.getElementById('gate_su_p').value = '';
            document.getElementById('gate_su_addr').value = '';

            switchGateTab('signin');
            document.getElementById('gate_li_u').value = u;
            document.getElementById('gate_li_p').value = '';
        } else {
            alert(result.error || "Username already taken!");
        }
    } catch (err) {
        alert("Server connection failed during registration!");
    }
}

function checkAuthStatus() {
    curUser = JSON.parse(sessionStorage.getItem('kActive'));
    if (curUser) {
        document.getElementById('welcome-gate').style.display = 'none';
        render();
        ui();
    } else {
        document.getElementById('welcome-gate').style.display = 'flex';
        document.getElementById('product-display').innerHTML = '';
    }
}

function openTrackOrderModal(e) {
    e.preventDefault();
    if (!curUser) return alert("Please Login first!");

    const riders = ["Sameer ", "Ammad ", "Faisal ", "Ali Moaz "];
    const randomRider = riders[Math.floor(Math.random() * riders.length)];
    const randomPhone = "+92 3" + Math.floor(100000000 + Math.random() * 900000000);

    document.getElementById('rider-name').innerText = randomRider;
    document.getElementById('rider-phone').innerText = randomPhone;

    const itemsDisplay = document.getElementById('track-order-items');
    if (bag.length > 0) {
        itemsDisplay.innerHTML = bag.map(i => `<div>• ${i.qty}x ${i.name}</div>`).join('');
    } else if (savedDetails && savedDetails.name) {
        itemsDisplay.innerHTML = `<div>Last order placed by ${savedDetails.name}. Preparing fresh signature blend!</div>`;
    } else {
        itemsDisplay.innerHTML = `<div>No active items in the bag. Add items to track delivery!</div>`;
    }

    new bootstrap.Modal(document.getElementById('trackOrderModal')).show();
}

function changeCategory(categoryName) {
    if (!curUser) return checkAuthStatus();
    currentActiveCategory = categoryName;

    document.querySelectorAll('.category-scroll button').forEach(btn => {
        btn.classList.remove('active-nav');
    });

    const trackerId = (categoryName === 'all') ? 'all' : categoryName;
    const activeBtn = document.getElementById(`nav-${trackerId}`);
    if (activeBtn) activeBtn.classList.add('active-nav');

    render();
}

function render() {
    const display = document.getElementById('product-display');
    display.innerHTML = '';
    if (!curUser) return;

    const cats = { signature: 'SIGNATURE SELECTION', hot: 'HOT BREWS', shakes: 'CHILL SHAKES', bakery: 'FRESH BAKERY' };
    let visibleCardsCount = 0;

    for (let k in cats) {
        if (currentActiveCategory === 'all' || currentActiveCategory === k) {
            let filteredProducts = products.filter(p => {
                const matchesCategory = p.cat === k;
                const matchesSearch = p.n.toLowerCase().includes(searchQueryGlobal);
                return matchesCategory && matchesSearch;
            });

            if (filteredProducts.length > 0) {
                display.innerHTML += `<div class="col-12"><h2 id="${k}" class="section-title">${cats[k]}</h2></div>`;

                filteredProducts.forEach(p => {
                    let out = stock[p.n] <= 0;
                    visibleCardsCount++;
                    display.innerHTML += `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                        <div class="menu-card w-100">
                            ${out ? '<div class="out-label">OUT OF STOCK</div>' : ''}
                            <div class="img-wrap"><img src="${p.img}" alt="${p.n}"></div>
                            <div class="card-body">
                                <div class="product-name">${p.n}</div>
                                <div class="price-badge">Rs. ${p.p}</div>
                                <div class="stock-label small">QUANTITY: ${stock[p.n]}</div>
                                <div class="qty-group">
                                    <button class="qty-btn" onclick="q('${p.n}',-1)">-</button>
                                    <span id="q-${p.n.replace(/\s/g, '')}">1</span>
                                    <button class="qty-btn" onclick="q('${p.n}',1)">+</button>
                                </div>
                                <button class="btn-bag" ${out ? 'disabled' : ''} onclick="add('${p.n}',${p.p})">ADD TO BAG</button>
                            </div>
                        </div>
                    </div>`;
                });
            }
        }
    }

    if (visibleCardsCount === 0) {
        display.innerHTML = `<div class="col-12 text-center p-5 text-muted fw-bold">No items match your search: "${searchQueryGlobal}" ☕</div>`;
    }
    updateAuthUI();
}

function q(n, d) {
    let el = document.getElementById(`q-${n.replace(/\s/g, '')}`);
    let v = parseInt(el.innerText) + d;
    if (v < 1) v = 1; if (v > stock[n]) v = Math.max(1, stock[n]); el.innerText = v;
}

async function add(n, p) {
    let qVal = parseInt(document.getElementById(`q-${n.replace(/\s/g, '')}`).innerText);
    if (stock[n] < qVal) return alert("Out of Stock!");
    let item = bag.find(i => i.name === n);
    if (item) item.qty += qVal; else bag.push({ name: n, price: p, qty: qVal });
    stock[n] -= qVal;
    ui();
    render();
    await updateDbStock(n, stock[n]);
}

function ui() {
    let t = 0, c = 0; const list = document.getElementById('cart-list'); list.innerHTML = '';
    bag.forEach(i => { t += (i.price * i.qty); c += i.qty; list.innerHTML += `<div class="d-flex justify-content-between py-1 border-bottom"><span>${i.qty}x ${i.name}</span><b>Rs. ${i.price * i.qty}</b></div>`; });
    document.getElementById('cart-count').innerText = c; document.getElementById('cart-total').innerText = "Rs. " + t;

    document.getElementById('f_name').value = savedDetails.name || "";
    document.getElementById('f_phone').value = savedDetails.phone || "";
    document.getElementById('f_address').value = savedDetails.address || (curUser ? curUser.addr : "");
}

function toggleCardDetails() {
    document.getElementById('card-panel').style.display = (document.getElementById('f_pay').value === 'CARD') ? 'block' : 'none';
}

async function confirmOrder() {
    if (!curUser) return alert("Please Login first!");
    if (bag.length === 0) return alert("Bag is empty!");

    const name = document.getElementById('f_name').value;
    const phone = document.getElementById('f_phone').value;
    const addr = document.getElementById('f_address').value;
    const pay = document.getElementById('f_pay').value;

    if (!name || !phone || !addr) return alert("Fill all details!");

    if (pay === 'CARD') {
        const num = document.getElementById('cc_num').value;
        const exp = document.getElementById('cc_exp').value;
        const cvv = document.getElementById('cc_cvv').value;
        if (num.length !== 16) return alert("Card Number must be 16 digits!");
        if (!/^\d{2}\/\d{2}$/.test(exp)) return alert("Expiry format must be MM/YY!");
        if (cvv.length !== 3) return alert("CVV must be 3 digits!");
    }

    document.getElementById('order-loader').style.display = 'flex';
    localStorage.setItem('kDetails', JSON.stringify({ name, phone, address: addr }));

    const orderData = {
        name: name,
        phone: phone,
        address: addr,
        payment: pay,
        items: bag.map(i => `${i.qty}x ${i.name}`).join(', '),
        total: document.getElementById('cart-total').innerText
    };

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Order Successful! ☕ Saved to MongoDB Database.");
            bag = []; ui(); render();
            bootstrap.Modal.getInstance(document.getElementById('cartModal')).hide();
        } else {
            alert("Database Error: " + result.error);
        }
    } catch (err) {
        alert("Server Connection Failed!");
    }
    finally {
        document.getElementById('order-loader').style.display = 'none';
    }
}

function showAdminLogin() { new bootstrap.Modal(document.getElementById('adminModal')).show(); }

function handleAdminLogin() {
    if (document.getElementById('adm_u').value === 'admin' && document.getElementById('adm_p').value === 'admin123') {
        document.getElementById('admin-login-ui').style.display = 'none';
        document.getElementById('admin-dash-ui').style.display = 'block';
    } else alert("Invalid Admin Login!");
}

function loadRestockOptions() {
    const cat = document.getElementById('restock-cat').value;
    const list = document.getElementById('restock-list'); list.innerHTML = '';
    if (!cat) return list.innerHTML = 'Choose category first';
    products.filter(p => p.cat === cat).forEach(p => {
        list.innerHTML += `<label class="restock-item"><input type="radio" name="r_prod" value="${p.n}"> ${p.n} (Stock: ${stock[p.n]})</label>`;
    });
}

async function applyRestock() {
    const sel = document.querySelector('input[name="r_prod"]:checked');
    const qty = parseInt(document.getElementById('restock-qty').value);
    if (!sel || !qty) return alert("Select product and quantity!");
    stock[sel.value] += qty;
    render();
    loadRestockOptions();
    await updateDbStock(sel.value, stock[sel.value]);
    alert("Restocked successfully!");
}

function toggleSearchField() {
    const searchField = document.getElementById('menu-search-input');
    searchField.classList.toggle('expanded-search');
    if (searchField.classList.contains('expanded-search')) {
        searchField.focus();
    } else {
        searchField.value = '';
        handleMenuSearch();
    }
}

function handleMenuSearch() {
    searchQueryGlobal = document.getElementById('menu-search-input').value.toLowerCase().trim();
    render();
}

function updateAuthUI() {
    const authDiv = document.getElementById('auth-ui');
    if (curUser) authDiv.innerHTML = `<button class="cat-chip" onclick="logout()">LOGOUT (${curUser.user})</button>`;
}

function logout() {
    sessionStorage.removeItem('kActive');
    location.reload();
}

loadInventory();