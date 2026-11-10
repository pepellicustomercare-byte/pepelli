/**
 * PEPELLI AI STYLIST & FASHION INTELLIGENCE SUITE
 * 1. AI Fashion Stylist Chat Assistant (Domain-trained for Indian Ethnic Wear)
 * 2. AI Virtual Try-On Studio (Interactive Canvas & Model Overlay)
 * 3. AI Smart Size & Fit Predictor
 * 4. AI Visual Search & Image Matcher
 */

// AI Stylist Knowledge Base & Responses
const aiResponses = [
  {
    keywords: ['wedding', 'sangeet', 'mehendi', 'festive', 'party', 'reception', 'function'],
    answer: "For wedding and festive occasions, rich royal tones and celebratory gold accents look stunning! I highly recommend our <b>Imperial 3-Piece Silk Suit Set (3PC-201)</b> with Chanderi silk and delicate Gota Patti, or our bestselling <b>Royal Rani Pink Kurti (DS-001)</b> paired with gold jhumkas and an organza dupatta.",
    recommendedCodes: ['3PC-201', 'DS-001', '3PC-202']
  },
  {
    keywords: ['office', 'work', 'daily', 'college', 'casual', 'everyday', 'comfortable', 'routine'],
    answer: "For active workdays and daily comfort, nothing beats 100% breathable Jaipuri cotton. Our <b>DS-003 Royal Purple Floral Kurti</b> or the <b>2PC-101 Co-ord Kurti & Cigarette Pant Set</b> offer supreme breathable elegance with all-day skin-friendly comfort.",
    recommendedCodes: ['DS-003', '2PC-101', '2PC-102']
  },
  {
    keywords: ['cotton', 'summer', 'breathable', 'fabric', 'heat', 'sweat'],
    answer: "All our cotton kurtis are crafted from pre-shrunk, 60x60 combed cotton with natural dyes that feel light and breezy even during peak summer! Take a look at our pure cotton selections:",
    recommendedCodes: ['DS-003', 'LK-302', 'TP-401']
  },
  {
    keywords: ['budget', 'under 800', '799', 'cheap', 'affordable', 'offer', 'discount'],
    answer: "You are in luck! Our New Arrivals feature our flagship designer collection at an exclusive price of just <b>₹799</b> (flat 60% OFF MRP ₹1,999) including DS-001 through DS-005!",
    recommendedCodes: ['DS-001', 'DS-002', 'DS-004', 'DS-005']
  },
  {
    keywords: ['black', 'ds-002', 'ds002', 'dark', 'evening'],
    answer: "The <b>DS-002 Midnight Black Kurti</b> is sheer royalty! Pair it with oxidized silver jhumkas or statement gold chaandbaalis, metallic mojaris, and a pop of ruby red lipstick for a breathtaking evening ensemble.",
    recommendedCodes: ['DS-002']
  },
  {
    keywords: ['pink', 'ds-001', 'rani', 'rose'],
    answer: "The <b>DS-001 Royal Rani Pink</b> is our most loved piece. It complements Indian skin tones with vibrant warmth. Pair it with cream palazzos or golden leggings and traditional kolhapuri flats.",
    recommendedCodes: ['DS-001']
  }
];

// Initialize AI Assistants
document.addEventListener('DOMContentLoaded', () => {
  setupTryOnCanvas();
});

// -----------------------------------------------------------------------------
// 1. AI CHAT STYLIST ASSISTANT
// -----------------------------------------------------------------------------
function openAIStylistDrawer() {
  const drawer = document.getElementById('ai-stylist-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
  }
}

function closeAIStylistDrawer() {
  const drawer = document.getElementById('ai-stylist-drawer');
  const backdrop = document.getElementById('modal-backdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

function sendAIStylistMessage(prefilledText = null) {
  const input = document.getElementById('ai-stylist-input');
  const msgList = document.getElementById('ai-chat-messages');
  if (!msgList) return;

  const query = prefilledText || (input ? input.value.trim() : '');
  if (!query) return;

  if (input) input.value = '';

  // Append User message
  const userBubble = document.createElement('div');
  userBubble.className = 'flex justify-end mb-3';
  userBubble.innerHTML = `
    <div class="bg-[#051d2d] text-white text-xs px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
      ${query}
    </div>
  `;
  msgList.appendChild(userBubble);
  msgList.scrollTop = msgList.scrollHeight;

  // Show typing indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'flex gap-2 items-center mb-3 text-slate-400 text-xs';
  typingIndicator.id = 'ai-typing-indicator';
  typingIndicator.innerHTML = `
    <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-white text-[11px] font-bold">
      AI
    </div>
    <div class="bg-slate-100 px-3 py-2 rounded-xl flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 bg-[#00c2cb] rounded-full animate-bounce"></span>
      <span class="w-1.5 h-1.5 bg-[#00c2cb] rounded-full animate-bounce" style="animation-delay: 0.15s"></span>
      <span class="w-1.5 h-1.5 bg-[#00c2cb] rounded-full animate-bounce" style="animation-delay: 0.3s"></span>
      <span class="text-slate-500 font-medium ml-1">Stylist is curating...</span>
    </div>
  `;
  msgList.appendChild(typingIndicator);
  msgList.scrollTop = msgList.scrollHeight;

  // Process Query after short delay
  setTimeout(() => {
    typingIndicator.remove();

    const lower = query.toLowerCase();
    let match = aiResponses.find(r => r.keywords.some(k => lower.includes(k)));
    if (!match) {
      match = {
        answer: `I love your fashion curiosity! For "${query}", our stylists recommend versatile pieces that combine comfort, festive charm, and vibrant Indian aesthetics. Here are top handpicked styles for you:`,
        recommendedCodes: ['DS-001', 'DS-003', '3PC-201']
      };
    }

    const matchedProducts = productsData.filter(p => match.recommendedCodes.includes(p.code));

    const aiBubble = document.createElement('div');
    aiBubble.className = 'flex gap-2 items-start mb-4';
    aiBubble.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0 mt-0.5 shadow">
        ✨
      </div>
      <div class="bg-slate-50 border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
        <p class="leading-relaxed mb-2.5">${match.answer}</p>
        <div class="space-y-2 mt-2">
          ${matchedProducts.map(p => `
            <div class="bg-white border border-teal-100 rounded-xl p-2 flex items-center gap-2.5 shadow-sm hover:border-[#00c2cb] transition">
              <img src="${p.image}" class="w-12 h-14 object-cover rounded-lg border border-slate-100" />
              <div class="flex-1 min-w-0">
                <div class="font-bold text-slate-900 text-xs truncate">${p.code} - ${p.name}</div>
                <div class="text-[11px] font-semibold text-[#008f97]">₹${p.price} <span class="line-through text-slate-400 font-normal">₹${p.originalPrice}</span></div>
                <div class="flex gap-2 mt-1">
                  <button onclick="quickAddToCart('${p.id}')" class="text-[10px] bg-[#00c2cb] text-slate-900 px-2.5 py-0.5 rounded-full font-bold hover:bg-[#00e5ff]">
                    + Add to Cart
                  </button>
                  <button onclick="openTryOnModal('${p.id}')" class="text-[10px] bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-semibold hover:bg-purple-100">
                    ✨ Virtual Try-On
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    msgList.appendChild(aiBubble);
    msgList.scrollTop = msgList.scrollHeight;
  }, 700);
}

// -----------------------------------------------------------------------------
// 2. AI VIRTUAL TRY-ON STUDIO (AI MIRROR)
// -----------------------------------------------------------------------------
let tryOnState = {
  selectedProduct: null,
  modelType: 'model1',
  scale: 1,
  offsetX: 0,
  offsetY: 0,
  opacity: 0.95
};

function openTryOnModal(productId = null) {
  const modal = document.getElementById('ai-tryon-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !backdrop) return;

  // Set default product if none provided
  const prod = productId ? productsData.find(p => p.id === productId) : (state.activeProductModal || productsData[0]);
  tryOnState.selectedProduct = prod;

  // Update product selector
  const selectEl = document.getElementById('tryon-product-select');
  if (selectEl) {
    selectEl.innerHTML = productsData.map(p => `
      <option value="${p.id}" ${p.id === prod.id ? 'selected' : ''}>${p.code} - ${p.name} (₹${p.price})</option>
    `).join('');
  }

  updateTryOnDisplay();
  backdrop.classList.add('open');
  modal.style.display = 'block';
}

function closeTryOnModal() {
  const modal = document.getElementById('ai-tryon-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.classList.remove('open');
}

function setupTryOnCanvas() {
  const canvas = document.getElementById('tryon-canvas');
  if (!canvas) return;

  // Sliders listeners
  const scaleSlider = document.getElementById('tryon-scale-slider');
  if (scaleSlider) {
    scaleSlider.addEventListener('input', (e) => {
      tryOnState.scale = parseFloat(e.target.value);
      renderTryOnCanvas();
    });
  }

  const opacitySlider = document.getElementById('tryon-opacity-slider');
  if (opacitySlider) {
    opacitySlider.addEventListener('input', (e) => {
      tryOnState.opacity = parseFloat(e.target.value);
      renderTryOnCanvas();
    });
  }

  // Model silhouette switcher
  document.querySelectorAll('.tryon-model-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.tryon-model-chip').forEach(c => c.classList.remove('active', 'border-[#00c2cb]', 'bg-teal-50'));
      chip.classList.add('active', 'border-[#00c2cb]', 'bg-teal-50');
      tryOnState.modelType = chip.dataset.model;
      renderTryOnCanvas();
    });
  });

  // Garment select change
  const selectEl = document.getElementById('tryon-product-select');
  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      const prod = productsData.find(p => p.id === e.target.value);
      if (prod) {
        tryOnState.selectedProduct = prod;
        updateTryOnDisplay();
      }
    });
  }
}

function updateTryOnDisplay() {
  const p = tryOnState.selectedProduct;
  if (!p) return;

  const titleEl = document.getElementById('tryon-product-name');
  const priceEl = document.getElementById('tryon-product-price');
  const matchEl = document.getElementById('tryon-match-score');
  const descEl = document.getElementById('tryon-style-tip');

  if (titleEl) titleEl.textContent = `${p.code} - ${p.name}`;
  if (priceEl) priceEl.textContent = `₹${p.price}`;
  if (matchEl) matchEl.textContent = `98% Flattering Fit Score`;
  if (descEl) descEl.textContent = `The ${p.fabric} accentuates natural contours with fluid drape and radiant tone harmony.`;

  renderTryOnCanvas();
}

function renderTryOnCanvas() {
  const canvas = document.getElementById('tryon-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // 1. Draw elegant model mannequin background
  const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
  bgGrad.addColorStop(0, '#f1f5f9');
  bgGrad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Draw studio pedestal
  ctx.fillStyle = '#cbd5e1';
  ctx.beginPath();
  ctx.ellipse(w / 2, h - 30, 110, 25, 0, 0, Math.PI * 2);
  ctx.fill();

  // Model Mannequin Silhouette
  ctx.fillStyle = tryOnState.modelType === 'dusky' ? '#A06B4D' : (tryOnState.modelType === 'wheatish' ? '#C69472' : '#DEB887');
  
  // Head & Neck
  ctx.beginPath();
  ctx.ellipse(w / 2, 70, 28, 36, 0, 0, Math.PI * 2);
  ctx.fill();
  // Neck
  ctx.fillRect((w / 2) - 12, 100, 24, 25);

  // Shoulders & Torso
  ctx.beginPath();
  ctx.moveTo((w / 2) - 65, 125);
  ctx.quadraticCurveTo(w / 2, 120, (w / 2) + 65, 125);
  ctx.lineTo((w / 2) + 50, 230);
  ctx.lineTo((w / 2) + 65, 340);
  ctx.lineTo((w / 2) - 65, 340);
  ctx.lineTo((w / 2) - 50, 230);
  ctx.closePath();
  ctx.fill();

  // Arms
  ctx.fillRect((w / 2) - 80, 130, 18, 170);
  ctx.fillRect((w / 2) + 62, 130, 18, 170);

  // 2. Draw Garment Overlay
  const prod = tryOnState.selectedProduct;
  if (!prod) return;

  const garmentImg = new Image();
  garmentImg.crossOrigin = 'anonymous';
  garmentImg.src = prod.image;
  garmentImg.onload = () => {
    ctx.save();
    ctx.globalAlpha = tryOnState.opacity;
    
    // Position garment fitted on torso
    const gw = 190 * tryOnState.scale;
    const gh = 250 * tryOnState.scale;
    const gx = (w - gw) / 2 + tryOnState.offsetX;
    const gy = 115 + tryOnState.offsetY;

    // Soft clip around neckline
    ctx.beginPath();
    ctx.roundRect(gx, gy, gw, gh, 12);
    ctx.clip();

    ctx.drawImage(garmentImg, gx, gy, gw, gh);
    ctx.restore();

    // Draw AI Sparkle indicator
    ctx.fillStyle = 'rgba(0, 229, 255, 0.9)';
    ctx.font = 'bold 12px Outfit, sans-serif';
    ctx.fillText('✨ AI Silhouette Alignment Active', 15, 25);
  };
}

// -----------------------------------------------------------------------------
// 3. AI SMART SIZE & FIT PREDICTOR
// -----------------------------------------------------------------------------
function openFitAdvisorModal(productId = null) {
  const modal = document.getElementById('ai-fit-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !backdrop) return;

  const prod = productId ? productsData.find(p => p.id === productId) : (state.activeProductModal || productsData[0]);
  document.getElementById('fit-modal-product-title').textContent = `${prod.code} - ${prod.name}`;

  document.getElementById('fit-advisor-result').style.display = 'none';
  document.getElementById('fit-advisor-form').style.display = 'block';

  backdrop.classList.add('open');
  modal.style.display = 'block';
}

function closeFitAdvisorModal() {
  const modal = document.getElementById('ai-fit-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.style.display = 'none';
  if (backdrop) backdrop.classList.remove('open');
}

function calculateAIFit(e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('fit-height').value) || 160;
  const weight = parseInt(document.getElementById('fit-weight').value) || 60;
  const fitPref = document.getElementById('fit-preference').value;
  const bust = parseInt(document.getElementById('fit-bust').value) || 36;

  // AI Sizing Formula for Indian Ethnic Garments
  let recommendedSize = 'M';
  let confidence = 95;

  if (bust <= 34 || weight < 52) recommendedSize = 'S';
  else if (bust <= 37 && weight <= 63) recommendedSize = 'M';
  else if (bust <= 40 && weight <= 72) recommendedSize = 'L';
  else if (bust <= 43 && weight <= 82) recommendedSize = 'XL';
  else recommendedSize = 'XXL';

  // Adjust for fit preference
  if (fitPref === 'relaxed' && recommendedSize !== 'XXL') {
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    recommendedSize = sizes[Math.min(sizes.length - 1, sizes.indexOf(recommendedSize) + 1)];
  }

  // Display Result
  const form = document.getElementById('fit-advisor-form');
  const result = document.getElementById('fit-advisor-result');
  form.style.display = 'none';
  result.style.display = 'block';

  document.getElementById('fit-result-size').textContent = recommendedSize;
  document.getElementById('fit-result-confidence').textContent = `${confidence}% Match Confidence`;
  document.getElementById('fit-result-details').innerHTML = `
    Based on your height <b>${height} cm</b>, weight <b>${weight} kg</b>, and bust measurement <b>${bust}"</b>, 
    <b>Size ${recommendedSize}</b> will provide an elegant, flattering fit with 2.5 inches of comfortable ease across the bust and hips.
  `;
}

function applyPredictedSize() {
  const size = document.getElementById('fit-result-size').textContent;
  if (size) {
    selectedModalSize = size;
    // update modal UI if open
    document.querySelectorAll('.size-select-btn').forEach(btn => {
      if (btn.dataset.size === size) {
        btn.classList.add('bg-[#00c2cb]', 'text-slate-900', 'border-[#00c2cb]');
        btn.classList.remove('bg-white', 'text-slate-700');
      } else {
        btn.classList.remove('bg-[#00c2cb]', 'text-slate-900', 'border-[#00c2cb]');
        btn.classList.add('bg-white', 'text-slate-700');
      }
    });
    showToast(`Size ${size} selected based on AI Recommendation!`);
  }
  closeFitAdvisorModal();
}

// -----------------------------------------------------------------------------
// 4. AI VISUAL SEARCH & IMAGE MATCHER
// -----------------------------------------------------------------------------
function triggerVisualSearchUpload() {
  const fileInput = document.getElementById('visual-search-file-input');
  if (fileInput) fileInput.click();
}

function handleVisualSearchFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  showToast('🔍 AI analyzing uploaded image pattern & colors...');

  const reader = new FileReader();
  reader.onload = (e) => {
    // Simulate AI Feature Extraction: Color & Pattern Match
    setTimeout(() => {
      // Pick top matches (DS-001, DS-003, DS-005)
      state.activeCategory = 'all';
      state.searchQuery = 'DS-00';
      renderFullCatalog();

      const catalogSec = document.getElementById('explore-catalog');
      if (catalogSec) catalogSec.scrollIntoView({ behavior: 'smooth' });

      showToast('✨ Found 5 closest matching styles in Pepelli catalog!');
    }, 1000);
  };
  reader.readAsDataURL(file);
}

// Expose functions globally to window
window.openAIStylistDrawer = openAIStylistDrawer;
window.closeAIStylistDrawer = closeAIStylistDrawer;
window.sendAIStylistMessage = sendAIStylistMessage;
window.openTryOnModal = openTryOnModal;
window.closeTryOnModal = closeTryOnModal;
window.openFitAdvisorModal = openFitAdvisorModal;
window.closeFitAdvisorModal = closeFitAdvisorModal;
window.calculateAIFit = calculateAIFit;
window.applyPredictedSize = applyPredictedSize;
window.triggerVisualSearchUpload = triggerVisualSearchUpload;
window.handleVisualSearchFile = handleVisualSearchFile;
