/**
 * Ohlala Apps - Portfolio & Quick Launcher
 * Data-driven architecture for effortless extensibility
 */

const APPS_DATA = [
  {
    id: 'purescan-qr',
    title: 'QR Code 簡單掃',
    englishTitle: 'PureScan QR',
    category: 'tools',
    categoryName: '實用工具',
    badge: 'Google ML Kit',
    iconText: 'QR',
    iconImage: 'assets/images/purescan-icon.png',
    previewImage: 'assets/images/purescan-qr.png',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
    url: 'https://play.google.com/apps/testing/com.purescan.qr',
    status: 'beta',
    statusText: 'Google Play 封測中',
    statusClass: 'status-beta',
    actionText: '前往 Play 商店測試',
    shortDesc: '極速毫秒掃描，純淨無廣告，極簡輕量 Material 3 設計。',
    longDesc: '專為追求極致掃描速度與乾淨體驗打造的原生 Android QR Code 掃描器。基於 Google ML Kit 與 CameraX 底層技術，支援毫秒級即時對焦解碼、一鍵複製與網址安全跳轉。堅持 100% 無廣告、不收集任何使用者隱私資料。',
    techStack: ['Android Jetpack Compose', 'CameraX', 'Google ML Kit', 'Material 3'],
    highlights: ['Google ML Kit 毫秒辨識', '完全零廣告零干擾', '原生 Material 3 設計', '安全網址跳轉防護'],
    privacyBadge: '100% 離線掃描 • 零數據收集'
  },
  {
    id: 'finevolume',
    title: 'FineVolume 極限音量微調',
    englishTitle: 'FineVolume Audio Boost',
    category: 'tools',
    categoryName: '實用工具',
    badge: '雙引擎調音',
    iconText: 'VOL',
    iconImage: null,
    iconEmoji: '🔊',
    previewImage: 'assets/images/finevolume.png',
    gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
    url: 'https://aiohlala.github.io/volume-site/',
    status: 'online',
    statusText: '線上官網',
    statusClass: 'status-online',
    actionText: '開啟官方網站',
    shortDesc: '突破硬體音量階梯限制，10% 微音靜音至 200% 震撼音量放大。',
    longDesc: '打破 Android 系統預設 15 段音量跳階限制的精密音訊工具。夜間就寢提供「10% 微音靜音 (-27 dB)」呵護雙耳；戶外吵雜環境可開啟「200% 震撼放大 (+30 dB)」釋放硬體潛能。內建 DynamicsProcessing 靜音喚醒雙引擎，並整合 Solana Web3 錢包打賞贊助。',
    techStack: ['Android DynamicsProcessing', 'Jetpack Compose', 'Solana Web3', 'Lossless Audio'],
    highlights: ['10% 微音靜音 (-27 dB)', '200% 震撼放大 (+30 dB)', '雙引擎無損音質架構', '支援 Solana 錢包打賞'],
    privacyBadge: '系統底層調音 • 本機處理'
  },
  {
    id: 'ai-imaging',
    title: 'AI 智慧影像處理',
    englishTitle: 'AI Imaging Studio',
    category: 'ai',
    categoryName: 'AI & 影像',
    badge: 'MediaPipe WebAssembly',
    iconText: 'AI',
    iconImage: null,
    iconEmoji: '✨',
    previewImage: 'assets/images/ai-imaging.png',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #3730A3 100%)',
    url: 'https://bluechoco.github.io/AI_imaging/',
    status: 'online',
    statusText: 'Web 線上版',
    statusClass: 'status-online',
    actionText: '立即開啟使用',
    shortDesc: 'AI 人像去背、浮水印清除、人像膚色調和，全本機高隱私運算。',
    longDesc: '以 Google MediaPipe 神經網絡模型為核心的高效瀏覽器影像處理套裝。提供毫秒級自動精準人像去背、透明 PNG 輸出、證件照純色替換（白底/藍底/紅底），並支援浮水印塗抹消除與膚色自動調和。藉由 WebAssembly 與 WebGPU 技術進行 100% 本機硬體加速，相片完全不上傳伺服器。',
    techStack: ['Google MediaPipe', 'WebAssembly', 'WebGPU', 'HTML5 Canvas'],
    highlights: ['毫秒級精準 AI 人像去背', '證件照多色換底支援', '浮水印消除與膚色調和', '100% 本機運算不上傳'],
    privacyBadge: '100% 瀏覽器本機運算 • 零上傳'
  },
  {
    id: 'send2me',
    title: '跨平台互傳',
    englishTitle: 'Send2Me P2P Transfer',
    category: 'tools',
    categoryName: '實用工具',
    badge: 'P2P 端對端',
    iconText: 'P2P',
    iconImage: null,
    iconEmoji: '⇄',
    previewImage: 'assets/images/send2me.png',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    url: 'https://bluechoco.github.io/send2me/',
    status: 'online',
    statusText: 'Web 線上版',
    statusClass: 'status-online',
    actionText: '立即開啟使用',
    shortDesc: '跨裝置 P2P 傳送文字與檔案，免註冊、檔案不經伺服器。',
    longDesc: '利用 WebRTC 點對點傳輸技術打造的跨裝置即時傳訊與檔案互傳工具。無論是手機傳電腦、電腦傳手機，或兩台手機之間，只需輸入 6 碼動態房間代碼即可秒速配對連線。傳輸通道直接建立於雙方裝置之間，檔案與訊息不經過任何第三方伺服器儲存，確保絕對資料隱私。',
    techStack: ['WebRTC P2P', 'WebSocket Signaling', 'DataChannel', 'Zero-Knowledge'],
    highlights: ['6 碼代碼即刻配對連線', '檔案直接點對點直傳', '免註冊免安裝隨開隨用', '無檔案大小伺服器限制'],
    privacyBadge: 'WebRTC P2P 直傳 • 零伺服器暫存'
  },
  {
    id: 'watermark-remover',
    title: '極簡浮水印去除',
    englishTitle: 'Fast Watermark Inpaint',
    category: 'ai',
    categoryName: 'AI & 影像',
    badge: 'OpenCV Telea',
    iconText: 'CV',
    iconImage: null,
    iconEmoji: '🧽',
    previewImage: 'assets/images/watermark-remover.png',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    url: 'https://bluechoco.github.io/remove_watermark/',
    status: 'online',
    statusText: 'Web 線上版',
    statusClass: 'status-online',
    actionText: '立即開啟使用',
    shortDesc: '純前端 OpenCV 演算法修補浮水印，秒開無等待延遲。',
    longDesc: '基於 OpenCV Telea 影像修補演算法的極速浮水印清除工具。專門針對去除照片角落浮水印、路人瑕疵、日期戳記進行演算法最佳化。無需載入數十 MB 的龐大 AI 模型，在網頁打開瞬間即可在瀏覽器本機完成演算法修復，輕巧、敏捷且可靠。',
    techStack: ['OpenCV.js', 'Telea Inpainting', 'Client-side Canvas', 'Pure Frontend'],
    highlights: ['秒開秒修無模型等待期', 'Telea 智慧結構修補', '支援塗抹自訂選區', '圖片完全保存在本機端'],
    privacyBadge: '純前端 OpenCV • 本機修補'
  },
  {
    id: 'meow-battle',
    title: '喵喵大戰',
    englishTitle: 'Meow Battle Arena',
    category: 'games',
    categoryName: '遊戲娛樂',
    badge: '多人即時連線',
    iconText: 'MEOW',
    iconImage: null,
    iconEmoji: '🐱',
    previewImage: 'assets/images/meow-battle.png',
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
    url: null,
    status: 'coming_soon',
    statusText: '即將登場',
    statusClass: 'status-soon',
    actionText: '即將開放連線',
    shortDesc: '選擇你的萌貓，保護罐罐！多人即時射擊對戰休閒遊戲。',
    longDesc: '治癒又刺激的多人即時連線競技遊戲。選擇你的專屬萌貓外型，與線上同伴一起在戰場上勇敢保衛美味罐罐！支援電腦鍵盤 WASD 移動配合滑鼠精準瞄準，手機瀏覽器則客製化了流暢的雙虛擬搖桿手感，隨時隨地展開歡樂喵星對決。',
    techStack: ['WebSocket Multiplayer', 'HTML5 2D Canvas', 'Dual Virtual Joysticks', 'Responsive Game Loop'],
    highlights: ['多人即時連線房間對局', '電腦/手機雙搖桿手感適配', '多款可愛貓咪外觀切換', '隨開即玩的休閒對戰節奏'],
    privacyBadge: '即將推出 • 敬請期待'
  }
];

// App State
let currentFilter = 'all';
let searchQuery = '';

// DOM Elements
const swipeDeckEl = document.getElementById('swipeDeck');
const appGridEl = document.getElementById('appGrid');
const showcaseListEl = document.getElementById('showcaseList');
const searchInputEl = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const filterTabs = document.querySelectorAll('.filter-tab');
const appCountBadge = document.getElementById('appCountBadge');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const prevSwipeBtn = document.getElementById('prevSwipeBtn');
const nextSwipeBtn = document.getElementById('nextSwipeBtn');
const emptyStateEl = document.getElementById('emptyState');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderAppCount();
  renderAll();
  setupEventListeners();
  setupSwipeControls();
});

function initTheme() {
  const savedTheme = localStorage.getItem('ohlala_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('ohlala_theme', newTheme);
}

function renderAppCount() {
  if (appCountBadge) {
    appCountBadge.textContent = `${APPS_DATA.length} 款應用`;
  }
}

function getFilteredApps() {
  return APPS_DATA.filter(app => {
    const matchesFilter = currentFilter === 'all' || app.category === currentFilter;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesFilter;

    const matchesSearch = 
      app.title.toLowerCase().includes(query) ||
      app.englishTitle.toLowerCase().includes(query) ||
      app.shortDesc.toLowerCase().includes(query) ||
      app.badge.toLowerCase().includes(query) ||
      app.techStack.some(t => t.toLowerCase().includes(query));

    return matchesFilter && matchesSearch;
  });
}

function renderAll() {
  const filtered = getFilteredApps();
  
  if (filtered.length === 0) {
    if (emptyStateEl) emptyStateEl.style.display = 'block';
    if (swipeDeckEl) swipeDeckEl.style.display = 'none';
    if (appGridEl) appGridEl.innerHTML = '';
    if (showcaseListEl) showcaseListEl.innerHTML = '';
    return;
  }

  if (emptyStateEl) emptyStateEl.style.display = 'none';
  if (swipeDeckEl) swipeDeckEl.style.display = 'flex';

  renderSwipeDeck(filtered);
  renderAppGrid(filtered);
  renderShowcase(filtered);
}

// 1. Render Swipe Deck (Horizontal Carousel for Mobile & Fast Launcher)
function renderSwipeDeck(apps) {
  if (!swipeDeckEl) return;
  swipeDeckEl.innerHTML = apps.map((app, index) => {
    const isExternal = Boolean(app.url);
    const linkAttr = isExternal 
      ? `href="${app.url}" target="_blank" rel="noopener noreferrer"` 
      : `href="javascript:void(0)" class="disabled-link"`;

    const iconContent = app.iconImage 
      ? `<img src="${app.iconImage}" alt="${app.title} icon" class="swipe-icon-img" />`
      : `<span class="swipe-icon-emoji">${app.iconEmoji || app.iconText}</span>`;

    return `
      <div class="swipe-card" style="--card-gradient: ${app.gradient};" data-id="${app.id}">
        <div class="swipe-card-top">
          <div class="swipe-icon-wrap" style="background: ${app.gradient};">
            ${iconContent}
          </div>
          <span class="status-pill ${app.statusClass}">
            <span class="status-dot"></span>
            ${app.statusText}
          </span>
        </div>
        <div class="swipe-card-body">
          <span class="swipe-badge">${app.badge}</span>
          <h3 class="swipe-title">${app.title}</h3>
          <p class="swipe-desc">${app.shortDesc}</p>
        </div>
        <div class="swipe-card-action">
          <a ${linkAttr} class="swipe-btn ${app.url ? 'btn-primary' : 'btn-soon'}">
            <span>${app.actionText}</span>
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <button class="swipe-detail-btn" onclick="scrollToShowcase('${app.id}')" title="查看詳細介紹">
            詳細
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// 2. Render Compact App Grid (Overview Matrix)
function renderAppGrid(apps) {
  if (!appGridEl) return;
  appGridEl.innerHTML = apps.map(app => {
    const isExternal = Boolean(app.url);
    const linkAttr = isExternal 
      ? `href="${app.url}" target="_blank" rel="noopener noreferrer"` 
      : `href="javascript:void(0)" class="disabled-link"`;

    const iconContent = app.iconImage 
      ? `<img src="${app.iconImage}" alt="${app.title} icon" class="grid-icon-img" />`
      : `<span class="grid-icon-emoji">${app.iconEmoji || app.iconText}</span>`;

    return `
      <div class="grid-card" data-id="${app.id}">
        <a ${linkAttr} class="grid-card-inner">
          <div class="grid-icon-box" style="background: ${app.gradient};">
            ${iconContent}
          </div>
          <div class="grid-card-info">
            <div class="grid-card-head">
              <h4 class="grid-card-title">${app.title}</h4>
              <span class="status-pill-mini ${app.statusClass}"></span>
            </div>
            <p class="grid-card-desc">${app.shortDesc}</p>
            <div class="grid-card-meta">
              <span class="grid-tag">${app.badge}</span>
              <span class="grid-category">${app.categoryName}</span>
            </div>
          </div>
        </a>
      </div>
    `;
  }).join('');
}

// 3. Render Detailed Showcase Section
function renderShowcase(apps) {
  if (!showcaseListEl) return;
  showcaseListEl.innerHTML = apps.map(app => {
    const isExternal = Boolean(app.url);
    const linkAttr = isExternal 
      ? `href="${app.url}" target="_blank" rel="noopener noreferrer"` 
      : `href="javascript:void(0)" class="disabled-link"`;

    const techBadges = app.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('');
    const highlightItems = app.highlights.map(h => `
      <li class="highlight-item">
        <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${h}</span>
      </li>
    `).join('');

    return `
      <article class="showcase-card" id="showcase-${app.id}">
        <div class="showcase-preview-col">
          <div class="showcase-img-container">
            <img src="${app.previewImage}" alt="${app.title} 介面預覽" class="showcase-img" loading="lazy" />
            <div class="showcase-overlay-badge">${app.privacyBadge}</div>
          </div>
        </div>
        <div class="showcase-info-col">
          <div class="showcase-header">
            <div class="showcase-title-row">
              <span class="category-pill">${app.categoryName}</span>
              <span class="status-pill ${app.statusClass}">
                <span class="status-dot"></span>
                ${app.statusText}
              </span>
            </div>
            <h3 class="showcase-title">${app.title}</h3>
            <span class="showcase-en-title">${app.englishTitle}</span>
          </div>

          <p class="showcase-desc">${app.longDesc}</p>

          <div class="showcase-section-block">
            <h5 class="showcase-block-label">核心技術特色</h5>
            <ul class="highlight-list">
              ${highlightItems}
            </ul>
          </div>

          <div class="showcase-section-block">
            <h5 class="showcase-block-label">技術架構</h5>
            <div class="tech-stack-row">
              ${techBadges}
            </div>
          </div>

          <div class="showcase-action-row">
            <a ${linkAttr} class="showcase-cta-btn ${app.url ? 'btn-primary' : 'btn-soon'}">
              <span>${app.actionText}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Event Listeners
function setupEventListeners() {
  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Filter Tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter || 'all';
      renderAll();
    });
  });

  // Search Input
  if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
      }
      renderAll();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInputEl) {
        searchInputEl.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInputEl.focus();
        renderAll();
      }
    });
  }
}

// Smooth Horizontal Swipe Carousel Controls
function setupSwipeControls() {
  if (!swipeDeckEl) return;

  if (prevSwipeBtn) {
    prevSwipeBtn.addEventListener('click', () => {
      const cardWidth = swipeDeckEl.querySelector('.swipe-card')?.offsetWidth || 300;
      swipeDeckEl.scrollBy({ left: -cardWidth * 1.1, behavior: 'smooth' });
    });
  }

  if (nextSwipeBtn) {
    nextSwipeBtn.addEventListener('click', () => {
      const cardWidth = swipeDeckEl.querySelector('.swipe-card')?.offsetWidth || 300;
      swipeDeckEl.scrollBy({ left: cardWidth * 1.1, behavior: 'smooth' });
    });
  }

  // Allow horizontal scroll via mouse wheel
  swipeDeckEl.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0 && Math.abs(e.deltaX) < 10) {
      if (Math.abs(e.deltaY) > 20) {
        swipeDeckEl.scrollLeft += e.deltaY;
      }
    }
  }, { passive: true });
}

// Scroll into Showcase Card from Quick Launch Deck
window.scrollToShowcase = function(id) {
  const target = document.getElementById(`showcase-${id}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.classList.add('highlight-target');
    setTimeout(() => {
      target.classList.remove('highlight-target');
    }, 1800);
  }
};
