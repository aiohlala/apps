/**
 * Ohlala Apps - Portfolio & Quick Launcher
 * Data-driven architecture with complete Bilingual (ZH / EN) support
 */

const I18N = {
  zh: {
    appCount: '款應用',
    heroTag: 'Portfolio & Fast Launcher',
    heroTitlePrefix: '極簡純粹，',
    heroTitleHighlight: '一鍵即用',
    heroDesc: '專為速度、直覺與本機隱私打造的應用集合。點擊即時開啟，手機電腦隨處可得。',
    searchPlaceholder: '快速搜尋 App 名稱、關鍵字或技術（例如：互傳, 去背, 音量）...',
    filterAll: '全部 (All)',
    filterAi: 'AI & 影像',
    filterTools: '實用工具',
    filterGames: '遊戲娛樂',
    quickLauncherTag: 'Quick Launcher',
    quickLauncherTitle: '快速左右滑動選單',
    allAppsTag: 'All Applications',
    allAppsTitle: '全工具快速矩陣',
    showcaseTag: 'Detailed Showcase',
    showcaseTitle: '深度作品展示與架構介紹',
    detailsBtn: '詳細',
    featuresLabel: '核心技術特色',
    techStackLabel: '技術架構',
    emptyTitle: '找不到符合的應用',
    emptyDesc: '請嘗試其他關鍵字或切換分類標籤。',
    footerCopyright: '© 2026 Ohlala.apps • 專注隱私、效能與極簡美學。',
    footerSub: '持續擴充中 • 所有前端運算皆以保障使用者本機資料隱私為最高準則'
  },
  en: {
    appCount: 'Apps',
    heroTag: 'Portfolio & Fast Launcher',
    heroTitlePrefix: 'Simple, Clean & ',
    heroTitleHighlight: 'Instant Access',
    heroDesc: 'A curated collection of web apps and Android native tools focused on local-first privacy, zero ads, and instant performance.',
    searchPlaceholder: 'Search apps, keywords, or tech stack (e.g. P2P, AI, Volume)...',
    filterAll: 'All',
    filterAi: 'AI & Imaging',
    filterTools: 'Utilities',
    filterGames: 'Games',
    quickLauncherTag: 'Quick Launcher',
    quickLauncherTitle: 'Quick Swipe Deck',
    allAppsTag: 'All Applications',
    allAppsTitle: 'App Matrix',
    showcaseTag: 'Detailed Showcase',
    showcaseTitle: 'Project Architecture & Specs',
    detailsBtn: 'Details',
    featuresLabel: 'Key Features',
    techStackLabel: 'Tech Stack',
    emptyTitle: 'No Applications Found',
    emptyDesc: 'Try adjusting your search query or switching categories.',
    footerCopyright: '© 2026 Ohlala.apps • Focused on privacy, performance & minimalism.',
    footerSub: 'Continuously expanding • All client-side computing adheres strictly to user privacy.'
  }
};

const APPS_DATA = [
  {
    id: 'send2me',
    title: { zh: '跨平台互傳', en: 'Send2Me P2P Transfer' },
    category: 'tools',
    categoryName: { zh: '實用工具', en: 'Utilities' },
    badge: { zh: 'P2P 直傳 • 零伺服器', en: 'P2P Direct • Zero Server' },
    iconText: 'P2P',
    iconImage: null,
    iconEmoji: '⇄',
    previewImage: 'assets/images/send2me.png',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    url: 'https://bluechoco.github.io/send2me/',
    status: 'online',
    statusText: { zh: 'Web 線上版', en: 'Live Web' },
    statusClass: 'status-online',
    actionText: { zh: '立即開啟使用', en: 'Launch App' },
    shortDesc: {
      zh: '跨裝置 P2P 傳送文字與檔案，免註冊、檔案絕對隱私不經伺服器。',
      en: 'Cross-platform P2P text & file transfer. Zero sign-up, zero server storage.'
    },
    longDesc: {
      zh: '利用 WebRTC 點對點傳輸技術打造的跨裝置即時傳訊與檔案互傳工具。無論是手機傳電腦、電腦傳手機，只需輸入 6 碼動態房間代碼即可秒速配對連線。傳輸通道直接建立於雙方裝置之間，檔案與訊息不經過任何第三方伺服器儲存，確保絕對資料隱私。',
      en: 'Cross-device instant messaging and file sharing built with WebRTC peer-to-peer technology. Transfer files between phones and laptops simply by entering a 6-digit room code. Data flows directly between client devices without touching any intermediary servers, ensuring complete privacy.'
    },
    techStack: ['WebRTC P2P', 'WebSocket Signaling', 'DataChannel', 'Zero-Knowledge'],
    highlights: {
      zh: ['6 碼代碼即刻配對連線', '檔案直接點對點直傳', '免註冊免安裝隨開隨用', '無檔案大小伺服器限制'],
      en: ['Instant 6-digit room code pairing', 'Direct peer-to-peer data channel', 'No sign-up or installation required', 'Zero file size server limits']
    },
    privacyBadge: { zh: 'WebRTC P2P 直傳 • 零伺服器暫存', en: 'WebRTC P2P • Zero Server Storage' }
  },
  {
    id: 'ai-imaging',
    title: { zh: 'AI 影像處理', en: 'AI Imaging Studio' },
    category: 'ai',
    categoryName: { zh: 'AI & 影像', en: 'AI & Imaging' },
    badge: { zh: 'MediaPipe AI 本機運算', en: 'MediaPipe AI • On-device' },
    iconText: 'AI',
    iconImage: null,
    iconEmoji: '✨',
    previewImage: 'assets/images/ai-imaging.png',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #3730A3 100%)',
    url: 'https://bluechoco.github.io/AI_imaging/',
    status: 'online',
    statusText: { zh: 'Web 線上版', en: 'Live Web' },
    statusClass: 'status-online',
    actionText: { zh: '立即開啟使用', en: 'Launch App' },
    shortDesc: {
      zh: 'AI 去除背景、去除浮水印、膚色調和，全本機高隱私離線處理。',
      en: 'AI background removal, watermark erasing & skin blending, 100% on-device.'
    },
    longDesc: {
      zh: '以 Google MediaPipe 神經網絡模型為核心的高效瀏覽器影像處理套裝。提供毫秒級自動精準人像去背、透明 PNG 輸出、證件照純色替換（白底/藍底/紅底），並支援浮水印塗抹消除與膚色自動調和。藉由 WebAssembly 與 WebGPU 技術進行 100% 本機硬體加速，相片完全不上傳伺服器。',
      en: 'High-performance browser-based image suite powered by Google MediaPipe neural models. Features millisecond-level portrait background removal, transparent PNG export, ID photo solid background replacement, watermark erasing, and skin tone harmonization. Accelerated locally via WebAssembly and WebGPU without uploading images.'
    },
    techStack: ['Google MediaPipe', 'WebAssembly', 'WebGPU', 'HTML5 Canvas'],
    highlights: {
      zh: ['毫秒級精準 AI 人像去背', '證件照多色換底支援', '浮水印消除與膚色調和', '100% 本機運算不上傳'],
      en: ['Precision AI portrait cutout in ms', 'Multi-color ID photo backgrounds', 'Inpaint brush & skin tone blend', '100% local processing, zero upload']
    },
    privacyBadge: { zh: '100% 瀏覽器本機運算 • 零上傳', en: '100% On-Device WASM • Zero Upload' }
  },
  {
    id: 'watermark-remover',
    title: { zh: '簡易影像處理', en: 'Fast Image Inpaint' },
    category: 'ai',
    categoryName: { zh: 'AI & 影像', en: 'AI & Imaging' },
    badge: { zh: '去除浮水印 • 膚色調和', en: 'Watermark Removal & Touchup' },
    iconText: 'CV',
    iconImage: null,
    iconEmoji: '🧽',
    previewImage: 'assets/images/watermark-remover.png',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    url: 'https://bluechoco.github.io/remove_watermark/',
    status: 'online',
    statusText: { zh: 'Web 線上版', en: 'Live Web' },
    statusClass: 'status-online',
    actionText: { zh: '立即開啟使用', en: 'Launch App' },
    shortDesc: {
      zh: '純前端 OpenCV 演算法修補浮水印與膚色，秒開無等待延遲。',
      en: 'Instant client-side OpenCV inpainting for watermarks and touchups.'
    },
    longDesc: {
      zh: '基於 OpenCV Telea 影像修補演算法的極速修圖工具。專門針對去除照片角落浮水印、路人瑕疵、日期戳記進行演算法最佳化。無需載入數十 MB 的龐大 AI 模型，在網頁打開瞬間即可在瀏覽器本機完成演算法修復，輕巧、敏捷且可靠。',
      en: 'Lightweight inpainting utility built on the OpenCV Telea algorithm. Specifically optimized for erasing photo corner watermarks, timestamps, and small artifacts. Requires zero heavy model downloads—runs instantaneously in the browser with high fidelity.'
    },
    techStack: ['OpenCV.js', 'Telea Inpainting', 'Client-side Canvas', 'Pure Frontend'],
    highlights: {
      zh: ['秒開秒修無模型等待期', 'Telea 智慧結構修補', '支援塗抹自訂選區', '圖片完全保存在本機端'],
      en: ['Instant launch, no model download lag', 'Telea structure-aware inpainting', 'Interactive brush selection tool', 'Images never leave your device']
    },
    privacyBadge: { zh: '純前端 OpenCV • 本機修補', en: 'Pure Client-side OpenCV' }
  },
  {
    id: 'finevolume',
    title: { zh: 'FineVolume 極限音量微調', en: 'FineVolume Audio Boost' },
    category: 'tools',
    categoryName: { zh: '實用工具', en: 'Utilities' },
    badge: { zh: '雙引擎調音', en: 'Dual Boost Engine' },
    iconText: 'VOL',
    iconImage: null,
    iconEmoji: '🔊',
    previewImage: 'assets/images/finevolume.png',
    gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
    url: 'https://aiohlala.github.io/volume-site/',
    status: 'online',
    statusText: { zh: '線上官網', en: 'Live Site' },
    statusClass: 'status-online',
    actionText: { zh: '開啟官方網站', en: 'Visit Website' },
    shortDesc: {
      zh: '突破硬體音量階梯限制，10% 微音靜音至 200% 震撼音量放大。',
      en: 'Break system volume step limits: 10% ultra-quiet to 200% dynamic boost.'
    },
    longDesc: {
      zh: '打破 Android 系統預設 15 段音量跳階限制的精密音訊工具。夜間就寢提供「10% 微音靜音 (-27 dB)」呵護雙耳；戶外吵雜環境可開啟「200% 震撼放大 (+30 dB)」釋放硬體潛能。內建 DynamicsProcessing 靜音喚醒雙引擎，並整合 Solana Web3 錢包打賞贊助。',
      en: 'Precision audio controller transcending Android’s native 15-step volume scale. Features "10% Ultra Quiet (-27 dB)" for night listening and "200% Dynamic Boost (+30 dB)" for outdoor environments. Powered by dual DynamicsProcessing engines with Solana Web3 tipping integration.'
    },
    techStack: ['Android DynamicsProcessing', 'Jetpack Compose', 'Solana Web3', 'Lossless Audio'],
    highlights: {
      zh: ['10% 微音靜音 (-27 dB)', '200% 震撼放大 (+30 dB)', '雙引擎無損音質架構', '支援 Solana 錢包打賞'],
      en: ['10% Ultra-quiet attenuation (-27 dB)', '200% Dynamic loudness boost (+30 dB)', 'Dual-engine lossless architecture', 'Solana Web3 tip jar integration']
    },
    privacyBadge: { zh: '系統底層調音 • 本機處理', en: 'System Audio Level • On-device' }
  },
  {
    id: 'purescan-qr',
    title: { zh: 'QR Code 簡單掃', en: 'PureScan QR' },
    category: 'tools',
    categoryName: { zh: '實用工具', en: 'Utilities' },
    badge: { zh: 'Google ML Kit', en: 'Google ML Kit' },
    iconText: 'QR',
    iconImage: 'assets/images/purescan-icon.png',
    previewImage: 'assets/images/purescan-qr.png',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
    url: 'https://play.google.com/apps/testing/com.purescan.qr',
    status: 'beta',
    statusText: { zh: 'Google Play 封測中', en: 'Google Play Beta' },
    statusClass: 'status-beta',
    actionText: { zh: '前往 Play 商店測試', en: 'Join Play Beta' },
    shortDesc: {
      zh: '極速毫秒掃描，純淨無廣告，極簡輕量 Material 3 設計。',
      en: 'Instant camera QR scanner. 100% ad-free, lightweight Material 3.'
    },
    longDesc: {
      zh: '專為追求極致掃描速度與乾淨體驗打造的原生 Android QR Code 掃描器。基於 Google ML Kit 與 CameraX 底層技術，支援毫秒級即時對焦解碼、一鍵複製與網址安全跳轉。堅持 100% 無廣告、不收集任何使用者隱私資料。',
      en: 'Native Android QR Code scanner built for pure speed and clean UX. Powered by CameraX and Google ML Kit for sub-second barcode detection, one-tap clipboard copy, and safe URL navigation. Completely ad-free and tracking-free.'
    },
    techStack: ['Android Jetpack Compose', 'CameraX', 'Google ML Kit', 'Material 3'],
    highlights: {
      zh: ['Google ML Kit 毫秒辨識', '完全零廣告零干擾', '原生 Material 3 設計', '安全網址跳轉防護'],
      en: ['Sub-second ML Kit detection', 'Completely ad-free & zero tracking', 'Clean Material 3 Android UI', 'Safe URL intent handling']
    },
    privacyBadge: { zh: '100% 離線掃描 • 零數據收集', en: '100% Offline • Zero Data Collection' }
  },
  {
    id: 'meow-battle',
    title: { zh: '喵喵大戰', en: 'Meow Battle Arena' },
    category: 'games',
    categoryName: { zh: '遊戲娛樂', en: 'Games' },
    badge: { zh: '多人即時連線', en: 'Multiplayer Real-time' },
    iconText: 'MEOW',
    iconImage: null,
    iconEmoji: '🐱',
    previewImage: 'assets/images/meow-battle.png',
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
    url: null,
    status: 'coming_soon',
    statusText: { zh: '即將登場', en: 'Coming Soon' },
    statusClass: 'status-soon',
    actionText: { zh: '即將開放連線', en: 'Coming Soon' },
    shortDesc: {
      zh: '選擇你的萌貓，保護罐罐！多人即時射擊對戰休閒遊戲。',
      en: 'Protect the food cans! Real-time multiplayer cat arena battle game.'
    },
    longDesc: {
      zh: '治癒又刺激的多人即時連線競技遊戲。選擇你的專屬萌貓外型，與線上同伴一起在戰場上勇敢保衛美味罐罐！支援電腦鍵盤 WASD 移動配合滑鼠精準瞄準，手機瀏覽器則客製化了流暢的雙虛擬搖桿手感，隨時隨地展開歡樂喵星對決。',
      en: 'Real-time multiplayer casual battle arena. Pick your custom cat skin and protect the sacred food cans with friends online. Supports keyboard WASD + mouse aim on desktop and responsive dual virtual touch joysticks on mobile browsers.'
    },
    techStack: ['WebSocket Multiplayer', 'HTML5 2D Canvas', 'Dual Virtual Joysticks', 'Responsive Game Loop'],
    highlights: {
      zh: ['多人即時連線房間對局', '電腦/手機雙搖桿手感適配', '多款可愛貓咪外觀切換', '隨開即玩的休閒對戰節奏'],
      en: ['Instant multiplayer room matchmaking', 'Dual touch joysticks for mobile', 'Custom adorable cat avatars', 'Fast-paced casual arcade battles']
    },
    privacyBadge: { zh: '即將推出 • 敬請期待', en: 'Coming Soon' }
  }
];

// App State
let currentLang = 'zh';
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
const langZhBtn = document.getElementById('langZhBtn');
const langEnBtn = document.getElementById('langEnBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  updateStaticTexts();
  renderAll();
  setupEventListeners();
  setupSwipeControls();
});

// Language Management
function initLanguage() {
  const savedLang = localStorage.getItem('ohlala_lang');
  if (savedLang === 'en' || savedLang === 'zh') {
    currentLang = savedLang;
  } else {
    currentLang = 'zh'; // Default Chinese
  }
  updateLangButtons();
}

window.setLanguage = function(lang) {
  if (lang !== 'zh' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem('ohlala_lang', lang);
  document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-TW' : 'en');
  updateLangButtons();
  updateStaticTexts();
  renderAll();
};

function updateLangButtons() {
  if (langZhBtn && langEnBtn) {
    if (currentLang === 'zh') {
      langZhBtn.classList.add('active');
      langEnBtn.classList.remove('active');
    } else {
      langEnBtn.classList.add('active');
      langZhBtn.classList.remove('active');
    }
  }
}

function updateStaticTexts() {
  const t = I18N[currentLang];

  // App count badge
  if (appCountBadge) {
    appCountBadge.textContent = currentLang === 'zh' ? `${APPS_DATA.length} ${t.appCount}` : `${APPS_DATA.length} ${t.appCount}`;
  }

  // Hero Texts
  const heroSubtitleEl = document.querySelector('.hero-subtitle-tag');
  if (heroSubtitleEl) heroSubtitleEl.textContent = t.heroTag;

  const heroTitleEl = document.querySelector('.hero-title');
  if (heroTitleEl) {
    heroTitleEl.innerHTML = `${t.heroTitlePrefix}<span class="hero-title-highlight">${t.heroTitleHighlight}</span>。`;
  }

  const heroDescEl = document.querySelector('.hero-desc');
  if (heroDescEl) heroDescEl.textContent = t.heroDesc;

  // Search Placeholder
  if (searchInputEl) {
    searchInputEl.placeholder = t.searchPlaceholder;
  }

  // Filter Tabs
  const filterAll = document.querySelector('[data-filter="all"]');
  const filterAi = document.querySelector('[data-filter="ai"]');
  const filterTools = document.querySelector('[data-filter="tools"]');
  const filterGames = document.querySelector('[data-filter="games"]');
  if (filterAll) filterAll.textContent = t.filterAll;
  if (filterAi) filterAi.textContent = t.filterAi;
  if (filterTools) filterTools.textContent = t.filterTools;
  if (filterGames) filterGames.textContent = t.filterGames;

  // Section Headers
  const swipeDeckSection = document.querySelector('.swipe-deck-section');
  if (swipeDeckSection) {
    const tag = swipeDeckSection.querySelector('.section-tagline');
    const title = swipeDeckSection.querySelector('.section-title');
    if (tag) tag.textContent = t.quickLauncherTag;
    if (title) title.textContent = t.quickLauncherTitle;
  }

  const appGridSection = document.querySelector('.app-grid-section');
  if (appGridSection) {
    const tag = appGridSection.querySelector('.section-tagline');
    const title = appGridSection.querySelector('.section-title');
    if (tag) tag.textContent = t.allAppsTag;
    if (title) title.textContent = t.allAppsTitle;
  }

  const showcaseSection = document.querySelector('.showcase-section');
  if (showcaseSection) {
    const tag = showcaseSection.querySelector('.section-tagline');
    const title = showcaseSection.querySelector('.section-title');
    if (tag) tag.textContent = t.showcaseTag;
    if (title) title.textContent = t.showcaseTitle;
  }

  // Empty State
  if (emptyStateEl) {
    const title = emptyStateEl.querySelector('.empty-title');
    const desc = emptyStateEl.querySelector('.empty-desc');
    if (title) title.textContent = t.emptyTitle;
    if (desc) desc.textContent = t.emptyDesc;
  }

  // Footer
  const footerContent = document.querySelector('.footer-content');
  if (footerContent) {
    const p1 = footerContent.querySelector('p:first-child');
    const p2 = footerContent.querySelector('.footer-sub');
    if (p1) p1.textContent = t.footerCopyright;
    if (p2) p2.textContent = t.footerSub;
  }
}

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

function getFilteredApps() {
  return APPS_DATA.filter(app => {
    const matchesFilter = currentFilter === 'all' || app.category === currentFilter;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesFilter;

    const titleStr = (app.title[currentLang] || '').toLowerCase();
    const descStr = (app.shortDesc[currentLang] || '').toLowerCase();
    const badgeStr = (app.badge[currentLang] || '').toLowerCase();
    const techStr = app.techStack.join(' ').toLowerCase();

    return matchesFilter && (
      titleStr.includes(query) ||
      descStr.includes(query) ||
      badgeStr.includes(query) ||
      techStr.includes(query)
    );
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
  const t = I18N[currentLang];

  swipeDeckEl.innerHTML = apps.map((app) => {
    const isExternal = Boolean(app.url);
    const linkAttr = isExternal 
      ? `href="${app.url}" target="_blank" rel="noopener noreferrer"` 
      : `href="javascript:void(0)" class="disabled-link"`;

    const iconContent = app.iconImage 
      ? `<img src="${app.iconImage}" alt="${app.title[currentLang]} icon" class="swipe-icon-img" />`
      : `<span class="swipe-icon-emoji">${app.iconEmoji || app.iconText}</span>`;

    return `
      <div class="swipe-card" style="--card-gradient: ${app.gradient};" data-id="${app.id}">
        <div class="swipe-card-top">
          <div class="swipe-icon-wrap" style="background: ${app.gradient};">
            ${iconContent}
          </div>
          <span class="status-pill ${app.statusClass}">
            <span class="status-dot"></span>
            ${app.statusText[currentLang]}
          </span>
        </div>
        <div class="swipe-card-body">
          <span class="swipe-badge">${app.badge[currentLang]}</span>
          <h3 class="swipe-title">${app.title[currentLang]}</h3>
          <p class="swipe-desc">${app.shortDesc[currentLang]}</p>
        </div>
        <div class="swipe-card-action">
          <a ${linkAttr} class="swipe-btn ${app.url ? 'btn-primary' : 'btn-soon'}">
            <span>${app.actionText[currentLang]}</span>
            <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
          <button class="swipe-detail-btn" onclick="scrollToShowcase('${app.id}')" title="${t.detailsBtn}">
            ${t.detailsBtn}
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
      ? `<img src="${app.iconImage}" alt="${app.title[currentLang]} icon" class="grid-icon-img" />`
      : `<span class="grid-icon-emoji">${app.iconEmoji || app.iconText}</span>`;

    return `
      <div class="grid-card" data-id="${app.id}">
        <a ${linkAttr} class="grid-card-inner">
          <div class="grid-icon-box" style="background: ${app.gradient};">
            ${iconContent}
          </div>
          <div class="grid-card-info">
            <div class="grid-card-head">
              <h4 class="grid-card-title">${app.title[currentLang]}</h4>
              <span class="status-pill-mini ${app.statusClass}"></span>
            </div>
            <p class="grid-card-desc">${app.shortDesc[currentLang]}</p>
            <div class="grid-card-meta">
              <span class="grid-tag">${app.badge[currentLang]}</span>
              <span class="grid-category">${app.categoryName[currentLang]}</span>
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
  const t = I18N[currentLang];

  showcaseListEl.innerHTML = apps.map(app => {
    const isExternal = Boolean(app.url);
    const linkAttr = isExternal 
      ? `href="${app.url}" target="_blank" rel="noopener noreferrer"` 
      : `href="javascript:void(0)" class="disabled-link"`;

    const techBadges = app.techStack.map(tech => `<span class="tech-pill">${tech}</span>`).join('');
    const highlightItems = app.highlights[currentLang].map(item => `
      <li class="highlight-item">
        <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${item}</span>
      </li>
    `).join('');

    return `
      <article class="showcase-card" id="showcase-${app.id}">
        <div class="showcase-preview-col">
          <div class="showcase-img-container">
            <img src="${app.previewImage}" alt="${app.title[currentLang]} preview" class="showcase-img" loading="lazy" />
            <div class="showcase-overlay-badge">${app.privacyBadge[currentLang]}</div>
          </div>
        </div>
        <div class="showcase-info-col">
          <div class="showcase-header">
            <div class="showcase-title-row">
              <span class="category-pill">${app.categoryName[currentLang]}</span>
              <span class="status-pill ${app.statusClass}">
                <span class="status-dot"></span>
                ${app.statusText[currentLang]}
              </span>
            </div>
            <h3 class="showcase-title">${app.title[currentLang]}</h3>
            <span class="showcase-en-title">${currentLang === 'zh' ? app.title.en : app.title.zh}</span>
          </div>

          <p class="showcase-desc">${app.longDesc[currentLang]}</p>

          <div class="showcase-section-block">
            <h5 class="showcase-block-label">${t.featuresLabel}</h5>
            <ul class="highlight-list">
              ${highlightItems}
            </ul>
          </div>

          <div class="showcase-section-block">
            <h5 class="showcase-block-label">${t.techStackLabel}</h5>
            <div class="tech-stack-row">
              ${techBadges}
            </div>
          </div>

          <div class="showcase-action-row">
            <a ${linkAttr} class="showcase-cta-btn ${app.url ? 'btn-primary' : 'btn-soon'}">
              <span>${app.actionText[currentLang]}</span>
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
    tab.addEventListener('click', () => {
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
