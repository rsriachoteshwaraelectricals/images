let selectedItems = [];

// ================== INITIALISATION ==================
window.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    loadSavedCart();
    setupFiltersAndSearch();
    setupBackToTop();
});

function imageLoaded(img) {
    img.closest('.product-card')?.classList.add('img-loaded');
}

function initHeroAnimation() {
    setTimeout(() => {
        const house = document.getElementById('house');
        const glow = document.getElementById('glow');
        if (house) house.classList.add('lit');
        if (glow) glow.classList.add('on');
    }, 800);
}

// ================== CART SYSTEM ==================
function toggleSelect(card) {
    if (card.style.cursor === 'not-allowed') return;
    const name = card.getAttribute('data-name');
    const price = parseInt(card.getAttribute('data-price')) || 0;
    const idx = selectedItems.findIndex(i => i.name === name);

    if (idx > -1) {
        selectedItems.splice(idx, 1);
        card.classList.remove('selected');
    } else {
        selectedItems.push({ name, price, quantity: 1 });
        card.classList.add('selected');
    }
    updateCart();
}

function updateCart() {
    const totalQty = selectedItems.reduce((s, i) => s + i.quantity, 0);
    const countEl = document.getElementById('count');
    const counterEl = document.getElementById('cartCounter');

    if (countEl) countEl.textContent = totalQty;
    if (counterEl) {
        counterEl.innerHTML = `<i class="fas fa-shopping-cart mr-1"></i> ${totalQty} item${totalQty !== 1 ? 's' : ''}`;
    }

    localStorage.setItem('sre_cart', JSON.stringify(selectedItems));
}

function loadSavedCart() {
    try {
        const saved = localStorage.getItem('sre_cart');
        if (saved) {
            selectedItems = JSON.parse(saved);
            selectedItems.forEach(item => {
                const card = document.querySelector(`[data-name="${item.name.replace(/"/g, '\\"')}"]`);
                if (card) card.classList.add('selected');
            });
            updateCart();
        }
    } catch (e) {
        console.log('Error loading cart:', e);
    }
}

// ================== CART MODAL ==================
function openCartModal() {
    renderCartModal();
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function renderCartModal() {
    const list = document.getElementById('cartItemsList');
    const modalCount = document.getElementById('modalCount');
    const cartTotal = document.getElementById('cartTotal');

    if (!list) return;

    const totalQty = selectedItems.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = selectedItems.reduce((s, i) => s + i.price * i.quantity, 0);

    if (modalCount) modalCount.textContent = totalQty;
    if (cartTotal) cartTotal.textContent = totalPrice.toLocaleString('en-IN');

    if (selectedItems.length === 0) {
        list.innerHTML = '<p class="text-center text-gray-500 py-8 text-lg">Your cart is empty</p>';
        return;
    }

    list.innerHTML = selectedItems.map((item, idx) => `
    <div class="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
      <div class="flex-1">
        <h4 class="font-bold text-lg">${item.name}</h4>
        <p class="text-sm text-gray-600">₹${item.price.toLocaleString('en-IN')} each</p>
      </div>
      <div class="flex items-center gap-3">
        <button onclick="changeQuantity(${idx},-1)" class="qty-btn-small">-</button>
        <span class="w-16 text-center font-bold text-xl">${item.quantity}</span>
        <button onclick="changeQuantity(${idx},1)" class="qty-btn-small">+</button>
      </div>
      <button onclick="removeFromCart(${idx})" class="ml-4 text-red-600 hover:text-red-800 text-2xl">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `).join('');
}

function changeQuantity(idx, delta) {
    if (selectedItems[idx]) {
        selectedItems[idx].quantity = Math.max(1, selectedItems[idx].quantity + delta);
        updateCart();
        renderCartModal();
    }
}

function removeFromCart(idx) {
    if (selectedItems[idx]) {
        const name = selectedItems[idx].name;
        selectedItems.splice(idx, 1);
        const card = document.querySelector(`[data-name="${name.replace(/"/g, '\\"')}"]`);
        if (card) card.classList.remove('selected');
        updateCart();
        renderCartModal();
    }
}

function sendCartToWhatsApp() {
    if (selectedItems.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let message = "Namaste! 🙏\n\n*My Cart – Sri Rachoteshwara Electricals*\n\n━━━━━━━━━━━━━━━━━━━━\n\n";
    let total = 0;

    selectedItems.forEach((item, i) => {
        const lineTotal = item.price * item.quantity;
        total += lineTotal;
        message += (i + 1) + ". *" + item.name + "*\n";
        message += "   Qty: " + item.quantity + " × ₹" + item.price.toLocaleString('en-IN') + " = ₹" + lineTotal.toLocaleString('en-IN') + "\n\n";
    });

    message += "━━━━━━━━━━━━━━━━━━━━\n";
    message += "*Total Estimate*: ₹" + total.toLocaleString('en-IN') + "\n\n";
    message += "Please share final quotation with best discount 🙏\nThank you!";

    window.open("https://wa.me/917899577774?text=" + encodeURIComponent(message), "_blank");

    // Clear cart after sending
    document.querySelectorAll('.product-card.selected').forEach(card => {
        card.classList.remove('selected');
    });
    selectedItems = [];
    localStorage.removeItem('sre_cart');
    updateCart();
    closeCartModal();
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target.id === 'cartModal') closeCartModal();
        });
    }
});

// ================== SEARCH & FILTER ==================
function setupFiltersAndSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.toLowerCase().trim();
            if (clearBtn) clearBtn.style.display = term ? 'block' : 'none';

            let visible = 0;
            document.querySelectorAll('.product-card').forEach(card => {
                const show = card.textContent.toLowerCase().includes(term);
                card.style.display = show ? '' : 'none';
                if (show) visible++;
            });

            const noRes = document.getElementById('noResults');
            if (noRes) noRes.classList.toggle('hidden', visible > 0);
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active-tab');
                if (b.dataset.category !== 'all') {
                    b.classList.add('bg-white', 'shadow-lg');
                } else {
                    b.classList.remove('bg-white', 'shadow-lg');
                }
            });

            btn.classList.add('active-tab');
            if (btn.dataset.category !== 'all') {
                btn.classList.add('bg-white', 'shadow-lg');
            } else {
                btn.classList.remove('bg-white', 'shadow-lg');
            }

            const cat = btn.dataset.category;
            let visible = 0;

            document.querySelectorAll('.product-card').forEach(card => {
                const show = cat === 'all' || card.dataset.category === cat;
                card.style.display = show ? '' : 'none';
                if (show) {
                    card.classList.add('visible');
                    visible++;
                } else {
                    card.classList.remove('visible');
                }
            });

            const noRes = document.getElementById('noResults');
            if (noRes) noRes.classList.toggle('hidden', visible > 0);
        });
    });

    // Activate "All" filter by default
    const allBtn = document.querySelector('[data-category="all"]');
    if (allBtn) {
        allBtn.classList.add('active-tab');
        allBtn.click();
    }
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = '';
    });

    const noRes = document.getElementById('noResults');
    if (noRes) noRes.classList.add('hidden');
}

function setupBackToTop() {
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('backToTop');
        if (btn) {
            btn.classList.toggle('show', window.scrollY > 300);
        }
    });
}
