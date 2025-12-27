const products = [
  // LIGHTING PRODUCTS
  { name: "lumar arora led down light", price: 130, category: "lighting", img: "1.jpg", badge: "Popular" },
  { name: "Panasonic LED Dura 9W", price: 100, category: "lighting", img: "2.jpg" },
  { name: "Panasonic LED Dura 15W", price: 150, category: "lighting", img: "3.jpg" },
  { name: "Panasonic LED Dura 18W", price: 220, category: "lighting", img: "4.jpg" },
  { name: "Panasonic LED Dura 30W", price: 550, category: "lighting", img: "5.jpg" },
  { name: "Panasonic LED Dura 50W", price: 650, category: "lighting", img: "6.jpg" },
  { name: "Parax LED colour lamp", price: 100, category: "lighting", img: "7.jpg" },
  { name: "Panasonic LED Dubelight 20W", price: 220, category: "lighting", img: "8.jpg" },
  { name: "Orient Emergency Lamp", price: 850, category: "lighting", img: "9.jpg" },
  { name: "Orient 0.5W Lamp", price: 45, category: "lighting", img: "10.jpg" },
  { name: "Bajaj Max LED RC Torch", price: 600, category: "lighting", img: "11.jpg" },
  { name: "Bajaj Max LED Solar Torch", price: 1499, category: "lighting", img: "11.jpg" },

  // APPLIANCES
  { name: "Pantex immersion heater 1500W", price: 520, category: "appliances", img: "12.jpg" },
  { name: "Orient electric immersion heater 1500W", price: 900, category: "appliances", img: "15.jpg" },
  { name: "Axis immersion heater 1000W", price: 400, category: "appliances", img: "16.jpg" },
  { name: "Oil capacitor 2.5 (1Pc)", price: 50, category: "appliances", img: "17.jpg" },
  { name: "Dry Capacitor 2.5 (1Pc)", price: 40, category: "appliances", img: "17.jpg" },
  { name: "Derbi 5 pin socket (1pc)", price: 38, category: "appliances", img: "19.jpg" },
  { name: "Derbi 1 way swich (1pc)", price: 18, category: "appliances", img: "20.jpg" },
  { name: "Metro Universal multi plug (1pc)", price: 80, category: "appliances", img: "21.jpg" },
  { name: "GE Gent 8-5 Computer Buster", price: 850, category: "appliances", img: "21.jpg" },
  { name: "Lithe Charmy, Computer Buster", price: 170, category: "appliances", img: "22.jpg" },
  { name: "Metric 3 Pin Top 16A (1Pc)", price: 75, category: "appliances", img: "23.jpg" },
  { name: "Metric 3 Pin Top 6A (1Pc)", price: 50, category: "appliances", img: "24.jpg" },
  { name: "Maaru 3 Pin Top 6A (1Pc)", price: 30, category: "appliances", img: "25.jpg" },
  { name: "Maaru Holder", price: 20, category: "appliances", img: "26.jpg" },
  { name: "Metric Holder", price: 20, category: "appliances", img: "27.jpg" },
  { name: "Sondic Holder 6A", price: 17, category: "appliances", img: "28.jpg" },
  { name: "Maaru 6*16 Multi plug", price: 105, category: "appliances", img: "29.jpg" },
  { name: "Maaru 5 Pin International MultiPlug", price: 110, category: "appliances", img: "30.jpg" },
  { name: "Metro vega 2 Pin top", price: 25, category: "appliances", img: "33.jpg" },
  { name: "Metro Vega Male Female", price: 50, category: "appliances", img: "34.jpg" },
  { name: "Cable Clips 25 MM (1Pc) 5rs", price: 500, category: "wires", img: "35.jpg", bulk: true },
  { name: "Cable Clips 20 MM (1Pc) 3rs", price: 300, category: "wires", img: "35.jpg", bulk: true },
  { name: "Hi-Tech clip 16MM (1Pc)", price: 170, category: "wires", img: "36.jpg" },
  { name: "Hi-Fi MCB 32A-DP", price: 360, category: "switches", img: "36.jpg" },
  { name: "Anchor MCB 32A", price: 200, category: "switches", img: "38.jpg" },
  { name: "Anchor MCB C20", price: 200, category: "switches", img: "38.jpg" },
  { name: "Anchor MCB C10", price: 152, category: "switches", img: "39.jpg" },
  { name: "L.N.T Flex Box 220", price: 220, category: "switches", img: "39.jpg" },
  { name: "Metro DP 32A", price: 150, category: "switches", img: "40.jpg" },
  { name: "Maru DP 32A", price: 160, category: "switches", img: "41.jpg" },
  { name: "I.N.T Flex Box 250", price: 250, category: "switches", img: "42.jpg" },
  { name: "HyTec Flex Box 100", price: 100, category: "switches", img: "43.jpg" },
  { name: "Derbi Indicator", price: 15, category: "lighting", img: "44.jpg" },
  { name: "Awesome Fan Capacitor", price: 120, category: "appliances", img: "45.jpg" },
  { name: "Metro 2 Pin", price: 15, category: "appliances", img: "46.jpg" },
  { name: "Metro Bed swtich", price: 18, category: "appliances", img: "47.jpg" },
  { name: "Awesome nano Fan Capacitor", price: 110, category: "appliances", img: "48.jpg" },
  { name: "Metro Single Adaptor", price: 16, category: "appliances", img: "49.jpg" },
  { name: "Sypder Multi pendent holder", price: 17, category: "appliances", img: "50.jpg" },
  { name: "PGM 2 pin to 3 pin", price: 20, category: "appliances", img: "51.jpg" },
  { name: "KIA 2 Ping plug top", price: 18, category: "appliances", img: "52.jpg" },
  { name: "Metro skirt Holder", price: 26, category: "appliances", img: "53.jpg" },
  { name: "Maru Clasic 2 pin top", price: 18, category: "appliances", img: "54.jpg" },
  { name: "Maru Male female", price: 36, category: "appliances", img: "55.jpg" },
  { name: "Sheet holder", price: 18, category: "appliances", img: "56.jpg" },
  { name: "Cawik Gold Batten holder", price: 40, category: "appliances", img: "57.jpg" },
  { name: "Jyoti steel Saddle 19MM", price: 5, category: "wires", img: "58.jpg", bulk: true },
  { name: "Suprem fan plate", price: 15, category: "tools", img: "59.jpg" },
  { name: "Suprem round sheet", price: 10, category: "tools", img: "60.jpg" },
  { name: "Tee 19 MM", price: 15, category: "wires", img: "61.jpg" },
  { name: "Collar 19 MM", price: 8, category: "wires", img: "61.jpg" },
  { name: "L bow 19 MM", price: 12, category: "wires", img: "62.jpg" },
  { name: "L bow 25 MM", price: 15, category: "wires", img: "62.jpg" },
  { name: "Tee 25 MM", price: 18, category: "wires", img: "63.jpg" },
  { name: "Collar 25 MM", price: 10, category: "wires", img: "63.jpg" },
  { name: "Milap 4 way Box", price: 40, category: "switches", img: "65.jpg" },
  { name: "Suprem Fan Box", price: 75, category: "switches", img: "64.jpg" },
  { name: "Milap 5 way Box", price: 48, category: "switches", img: "67.jpg" },
  { name: "Milap 7 way Box", price: 72, category: "switches", img: "68.jpg" },
  { name: "Milap 6*8  Fancy Box", price: 120, category: "switches", img: "69.jpg" },
  { name: "Milap 2 way Box", price: 31, category: "switches", img: "70.jpg" },
  { name: "Maru Door Bell", price: 200, category: "appliances", img: "71.jpg" },
  { name: "Anchor Decor Bell", price: 180, category: "appliances", img: "73.jpg" },
  { name: "Derbi 6*16A SS Combined", price: 170, category: "switches", img: "73.jpg" },
  { name: "Metro 5 in 1", price: 280, category: "switches", img: "74.jpg" },
  { name: "Anchor Ziva 3 Pin Socket", price: 45, category: "switches", img: "75.jpg" },
  { name: "Anchor Ziva 6A 1 way switch", price: 25, category: "switches", img: "77.jpg" },
  { name: "Anchor Ziva 2 modular Plate", price: 54, category: "switches", img: "78.jpg" },
  { name: "Anchor Ziva 4 modular Plate", price: 76, category: "switches", img: "79.jpg" },
  { name: "Anchor Ziva 3 modular Plate", price: 66, category: "switches", img: "80.jpg" },
  { name: "Anchor Ziva 6 modular Plate", price: 98, category: "switches", img: "81.jpg" },
  { name: "Anchor Ziva 8 modular Plate", price: 136, category: "switches", img: "82.jpg" },
  { name: "Anchor Ziva 12 modular Plate", price: 189, category: "switches", img: "83.jpg" },
  { name: "Anchor Ziva 18 modular Plate", price: 203, category: "switches", img: "84.jpg" },
  { name: "Anchor  MCB 1 Pole", price: 245, category: "switches", img: "85.jpg" },
  { name: "Anchor  MCB 2 Pole", price: 502, category: "switches", img: "86.jpg" },
  { name: "Anchor Holder", price: 8, category: "appliances", img: "87.jpg" }
];

const BASE_IMAGE_URL = "https://rsriachoteshwaraelectricals.github.io/images/";

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product-card glass-card rounded-3xl overflow-hidden" 
         data-category="${p.category}" 
         data-name="${p.name}" 
         data-price="${p.price}" 
         onclick="toggleSelect(this)">
      ${p.bulk ? '<div class="bulk-badge">Bulk Discount</div>' : ''}
      ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
      <div class="product-img-container">
        <img src="${BASE_IMAGE_URL}${p.img}" alt="${p.name}" class="product-img" onload="imageLoaded(this)" onerror="this.style.display='none'">
        <div class="img-fallback"><i class="fas fa-${getCategoryIcon(p.category)}"></i></div>
      </div>
      <div class="p-4">
        <h3 class="font-bold mb-1">${p.name}</h3>
        <p class="text-gray-600 text-xs sm:text-sm mb-3">${getCategoryLabel(p.category)}</p>
        <p class="price-placeholder text-lg sm:text-2xl font-bold text-gray-400">Click to see price</p>
        <p class="product-price text-2xl sm:text-3xl font-bold text-orange-600">₹${p.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  `).join('');
}

function getCategoryIcon(cat) {
  const icons = {
    lighting: 'lightbulb',
    appliances: 'plug',
    switches: 'toggle-on',
    wires: 'stream',
    tools: 'tools'
  };
  return icons[cat] || 'box';
}

function getCategoryLabel(cat) {
  const labels = {
    lighting: 'Energy Efficient',
    appliances: 'Premium Quality',
    switches: 'ISI Certified',
    wires: 'Durable',
    tools: 'Professional Grade'
  };
  return labels[cat] || 'Quality Product';
}

window.addEventListener('DOMContentLoaded', renderProducts);
