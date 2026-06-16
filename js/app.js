/**
 * ОХОТНИК ЗА ЦЕНАМИ — Главная логика приложения
 */

// ══════════════════════════════════
// CONSTANTS
// ══════════════════════════════════
const HISTORY_KEY = 'priceHunter_history';
const MAX_HISTORY = 20;

// ══════════════════════════════════
// STATE
// ══════════════════════════════════
let currentQuery = '';
let currentCategory = null;
let isManualCategory = false;

// ══════════════════════════════════
// DOM ELEMENTS
// ══════════════════════════════════
const DOM = {};

function cacheDom() {
  DOM.searchInput = document.getElementById('search-input');
  DOM.searchBtn = document.getElementById('search-btn');
  DOM.searchForm = document.getElementById('search-form');
  DOM.categoryArea = document.getElementById('category-area');
  DOM.categorySelect = document.getElementById('category-select');
  DOM.categoryBadge = document.getElementById('category-badge');
  DOM.storeCount = document.getElementById('store-count');
  DOM.historySection = document.getElementById('history-section');
  DOM.historyList = document.getElementById('history-list');
  DOM.resultsSection = document.getElementById('results-section');
  DOM.resultsContent = document.getElementById('results-content');
  DOM.emptyState = document.getElementById('empty-state');
  DOM.popup = document.getElementById('popup');
}

// ══════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  initEventListeners();
  renderHistory();
  initParticles();
  DOM.searchInput.focus();
});

function initEventListeners() {
  // Search form submission
  DOM.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch();
  });

  // Real-time category detection while typing
  let debounceTimer;
  DOM.searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (!isManualCategory) {
        const query = DOM.searchInput.value.trim();
        if (query.length >= 2) {
          const detected = detectCategory(query);
          updateCategoryDisplay(detected);
        } else {
          hideCategoryDisplay();
        }
      }
    }, 300);
  });

  // Category manual selection
  DOM.categorySelect.addEventListener('change', () => {
    const selectedId = DOM.categorySelect.value;
    if (selectedId === 'auto') {
      isManualCategory = false;
      const query = DOM.searchInput.value.trim();
      const detected = detectCategory(query);
      updateCategoryDisplay(detected);
    } else {
      isManualCategory = true;
      // Map 'auto_vehicles' back to 'auto' category id
      const categoryId = selectedId === 'auto_vehicles' ? 'auto' : selectedId;
      currentCategory = getCategoryById(categoryId);
      updateCategoryBadge(currentCategory);
      // If there are results, re-render
      if (currentQuery) {
        renderResults(currentQuery, currentCategory);
      }
    }
  });

  // Keyboard shortcut: Ctrl+K to focus search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      DOM.searchInput.focus();
      DOM.searchInput.select();
    }
  });
}

// ══════════════════════════════════
// SEARCH
// ══════════════════════════════════
function performSearch() {
  const query = DOM.searchInput.value.trim();

  if (!query) {
    showPopup('⚠️ Введите название товара', 'warning');
    DOM.searchInput.focus();
    return;
  }

  currentQuery = query;

  // Detect category if not manually set
  if (!isManualCategory) {
    currentCategory = detectCategory(query);
    updateCategoryDisplay(currentCategory);
  }

  // Save to history
  saveToHistory(query);

  // Show loading then results
  showLoading();
  setTimeout(() => {
    renderResults(query, currentCategory);
    renderHistory();
  }, 600); // Small delay for visual effect
}

// ══════════════════════════════════
// RESULTS RENDERING
// ══════════════════════════════════
function renderResults(query, category) {
  const stores = getStoresForCategory(category ? category.id : null);
  const grouped = groupStores(stores);

  // Update store count
  DOM.storeCount.textContent = `${stores.length} ${pluralize(stores.length, 'магазин', 'магазина', 'магазинов')}`;
  DOM.storeCount.style.display = 'inline';

  // Build results HTML
  let html = `
    <div class="results__header">
      <div class="results__query">
        🔍 <span class="results__query-text">«${escapeHtml(query)}»</span>
        <span class="results__region">📍 г. Казань</span>
      </div>
      <button class="results__open-all" id="open-all-btn" title="Открыть все магазины в новых вкладках">
        🚀 Открыть все (${stores.length})
      </button>
    </div>
    <div class="results__sort-note">💡 Товары на каждом сайте откроются с сортировкой по цене — от дешёвых к дорогим</div>
  `;

  const groupIcons = {
    marketplace: '🛒',
    electronics: '💻',
    food: '🥛',
    clothing: '👗',
    auto: '🚗',
    construction: '🔨',
    sports: '⚽',
    beauty: '💄',
    books: '📚',
    pets: '🐾',
    kids: '🧸',
    furniture: '🛋️',
  };

  for (const group of grouped) {
    html += `
      <div class="store-group">
        <div class="store-group__title">
          <span class="store-group__icon">${groupIcons[group.id] || '📦'}</span>
          ${group.name}
          <span class="store-group__count">${group.stores.length}</span>
        </div>
        <div class="store-group__grid">
    `;

    for (const store of group.stores) {
      const url = store.buildUrl(query);
      const icon = getStoreIcon(store.id);

      const priceBadge = renderPriceLevel(store.priceLevel);

      html += `
        <a href="${url}" target="_blank" rel="noopener noreferrer"
           class="store-card" style="--store-color: ${store.color}"
           data-url="${escapeHtml(url)}" data-store="${escapeHtml(store.name)}">
          <div class="store-card__icon">${icon}</div>
          <div class="store-card__info">
            <div class="store-card__name">
              ${store.name}
              <span class="store-card__price-badge store-card__price-badge--${store.priceLevel}">${priceBadge}</span>
            </div>
            <div class="store-card__price-hint">${store.priceHint}</div>
            <div class="store-card__details">
              <span class="store-card__delivery">⏱ ${store.delivery}</span>
              <span class="store-card__rating">⭐ ${store.rating}</span>
            </div>
            <div class="store-card__note">${store.note}</div>
          </div>
          <span class="store-card__arrow">→</span>
        </a>
      `;
    }

    html += `
        </div>
      </div>
    `;
  }

  DOM.resultsContent.innerHTML = html;
  DOM.resultsSection.style.display = 'block';
  DOM.emptyState.style.display = 'none';

  // Open all button
  const openAllBtn = document.getElementById('open-all-btn');
  openAllBtn.addEventListener('click', () => {
    openAllStores(query, stores);
  });
}

function openAllStores(query, stores) {
  const urls = stores.map(s => s.buildUrl(query));
  let opened = 0;

  for (const url of urls) {
    const win = window.open(url, '_blank');
    if (win) {
      opened++;
    } else {
      break;
    }
  }

  if (opened < urls.length) {
    showPopup(`⚠️ Открыто ${opened} из ${urls.length}. Разрешите всплывающие окна в браузере.`, 'warning');
  } else {
    showPopup(`✅ Открыто ${opened} ${pluralize(opened, 'вкладка', 'вкладки', 'вкладок')}`, 'success');
  }
}

function showLoading() {
  DOM.resultsContent.innerHTML = `
    <div class="loading">
      <div class="loading__spinner"></div>
      <div class="loading__text">Подбираем магазины...</div>
    </div>
  `;
  DOM.resultsSection.style.display = 'block';
  DOM.emptyState.style.display = 'none';
}

// ══════════════════════════════════
// CATEGORY DISPLAY
// ══════════════════════════════════
function updateCategoryDisplay(category) {
  currentCategory = category;
  if (category) {
    updateCategoryBadge(category);
    // Update store count preview
    const stores = getStoresForCategory(category.id);
    DOM.storeCount.textContent = `${stores.length} ${pluralize(stores.length, 'магазин', 'магазина', 'магазинов')}`;
    DOM.storeCount.style.display = 'inline';
  } else {
    hideCategoryBadge();
    const stores = getStoresForCategory(null);
    DOM.storeCount.textContent = `${stores.length} ${pluralize(stores.length, 'магазин', 'магазина', 'магазинов')}`;
    DOM.storeCount.style.display = 'inline';
  }
  DOM.categoryArea.style.display = 'flex';
}

function hideCategoryDisplay() {
  DOM.categoryArea.style.display = 'none';
  DOM.storeCount.style.display = 'none';
}

function updateCategoryBadge(category) {
  if (category) {
    DOM.categoryBadge.innerHTML = `${category.icon} ${category.name}`;
    DOM.categoryBadge.style.display = 'inline-flex';
  }
}

function hideCategoryBadge() {
  DOM.categoryBadge.style.display = 'none';
}

// ══════════════════════════════════
// HISTORY
// ══════════════════════════════════
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveToHistory(query) {
  let history = getHistory();
  // Remove duplicate
  history = history.filter(item => item.toLowerCase() !== query.toLowerCase());
  // Add to beginning
  history.unshift(query);
  // Trim to max
  if (history.length > MAX_HISTORY) {
    history = history.slice(0, MAX_HISTORY);
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
  showPopup('🗑️ История очищена', 'success');
}

function renderHistory() {
  const history = getHistory();

  if (history.length === 0) {
    DOM.historySection.style.display = 'none';
    return;
  }

  DOM.historySection.style.display = 'block';

  let html = '';
  for (const item of history) {
    html += `<button class="history__item" onclick="searchFromHistory('${escapeHtml(item)}')">${escapeHtml(item)}</button>`;
  }
  html += `<button class="history__clear" onclick="clearHistory()">✕ Очистить</button>`;

  DOM.historyList.innerHTML = html;
}

function searchFromHistory(query) {
  DOM.searchInput.value = query;
  isManualCategory = false;
  DOM.categorySelect.value = 'auto';
  performSearch();
}

// ══════════════════════════════════
// POPUP NOTIFICATIONS
// ══════════════════════════════════
let popupTimeout;

function showPopup(message, type = 'success') {
  clearTimeout(popupTimeout);

  DOM.popup.innerHTML = message;
  DOM.popup.className = `popup popup--${type} popup--visible`;

  popupTimeout = setTimeout(() => {
    DOM.popup.classList.remove('popup--visible');
  }, 3000);
}

// ══════════════════════════════════
// PARTICLES BACKGROUND
// ══════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 50;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
      hue: 260 + Math.random() * 40, // purple range
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`;
      ctx.fill();
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `hsla(270, 70%, 60%, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  init();
  animate();
}

// ══════════════════════════════════
// UTILITIES
// ══════════════════════════════════
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function pluralize(count, one, two, five) {
  const abs = Math.abs(count) % 100;
  const lastDigit = abs % 10;
  if (abs > 10 && abs < 20) return five;
  if (lastDigit > 1 && lastDigit < 5) return two;
  if (lastDigit === 1) return one;
  return five;
}

/**
 * Отображает уровень цен символами ₽
 * 1 = ₽ (самые дешёвые), 2 = ₽₽, 3 = ₽₽₽
 */
function renderPriceLevel(level) {
  const labels = {
    1: '₽',
    2: '₽₽',
    3: '₽₽₽',
    4: '₽₽₽₽',
    5: '₽₽₽₽₽',
  };
  return labels[level] || '₽₽';
}
