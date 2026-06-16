/**
 * SVG-иконки для каждого магазина.
 * Стилизованные буквенные логотипы с фирменными цветами.
 */

const STORE_ICONS = {
  // ── Маркетплейсы ──
  wildberries: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#CB11AB"/>
    <path d="M8 12L12 28L16.5 18L20 28L24.5 18L28 28L32 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  ozon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#005BFF"/>
    <circle cx="20" cy="20" r="9" stroke="white" stroke-width="2.5"/>
    <circle cx="20" cy="20" r="3" fill="white"/>
  </svg>`,

  yandex_market: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FFCC00"/>
    <text x="20" y="27" text-anchor="middle" fill="#000" font-size="18" font-weight="bold" font-family="Arial">Я</text>
  </svg>`,

  aliexpress: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF4747"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="16" font-weight="bold" font-family="Arial">Ae</text>
  </svg>`,

  avito: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#00AAFF"/>
    <circle cx="14" cy="16" r="5" fill="#97CF26"/>
    <circle cx="26" cy="16" r="5" fill="#FF6163"/>
    <circle cx="20" cy="26" r="5" fill="#965EEB"/>
  </svg>`,

  // ── Электроника ──
  dns: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF6600"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">DNS</text>
  </svg>`,

  citilink: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#F26322"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="Arial">CL</text>
  </svg>`,

  mvideo: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#E21A1A"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">M.В</text>
  </svg>`,

  eldorado: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#009FE3"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">ЭД</text>
  </svg>`,

  // ── Продукты ──
  magnit: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#D81F26"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="Arial">М</text>
  </svg>`,

  pyaterochka: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#E3342F"/>
    <text x="20" y="28" text-anchor="middle" fill="white" font-size="20" font-weight="bold" font-family="Arial">5</text>
  </svg>`,

  lenta: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#003DA6"/>
    <text x="20" y="27" text-anchor="middle" fill="#FFD600" font-size="14" font-weight="bold" font-family="Arial">ЛН</text>
  </svg>`,

  perekrestok: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#47A23F"/>
    <line x1="12" y1="12" x2="28" y2="28" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <line x1="28" y1="12" x2="12" y2="28" stroke="white" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  vkusvill: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#7AB648"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">ВВ</text>
  </svg>`,

  // ── Одежда ──
  lamoda: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#1A1A1A"/>
    <text x="20" y="27" text-anchor="middle" fill="#FF69B4" font-size="13" font-weight="bold" font-family="Arial">LM</text>
  </svg>`,

  asos: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#2D2D2D"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Arial">ASOS</text>
  </svg>`,

  sportmaster: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF0000"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">СМ</text>
  </svg>`,

  // ── Авто ──
  autoru: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#E53935"/>
    <path d="M10 24 L14 16 L26 16 L30 24 Z" stroke="white" stroke-width="2" fill="none"/>
    <circle cx="15" cy="26" r="2.5" fill="white"/>
    <circle cx="25" cy="26" r="2.5" fill="white"/>
  </svg>`,

  drom: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#1976D2"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Arial">Drom</text>
  </svg>`,

  exist: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF9800"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Arial">Exist</text>
  </svg>`,

  // ── Стройматериалы ──
  leroymerlin: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#67B437"/>
    <path d="M20 10 L30 28 L10 28 Z" stroke="white" stroke-width="2" fill="none"/>
    <line x1="20" y1="18" x2="20" y2="28" stroke="white" stroke-width="2"/>
  </svg>`,

  petrovich: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FFD600"/>
    <text x="20" y="27" text-anchor="middle" fill="#333" font-size="13" font-weight="bold" font-family="Arial">ПТ</text>
  </svg>`,

  vseinstrumenti: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#E64A19"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">ВИ</text>
  </svg>`,

  // ── Спорт ──
  decathlon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#0066CC"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">ДК</text>
  </svg>`,

  // ── Красота ──
  goldapple: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#1A1A1A"/>
    <circle cx="20" cy="20" r="8" fill="#C8A962"/>
    <path d="M20 12 Q22 14 20 16" stroke="#1A1A1A" stroke-width="1.5" fill="none"/>
  </svg>`,

  letoile: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#8B1A62"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">ЛЭ</text>
  </svg>`,

  // ── Книги ──
  labirint: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#D32F2F"/>
    <rect x="12" y="12" width="16" height="18" rx="2" stroke="white" stroke-width="2" fill="none"/>
    <line x1="17" y1="12" x2="17" y2="30" stroke="white" stroke-width="2"/>
  </svg>`,

  bookvoed: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#4CAF50"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">БВ</text>
  </svg>`,

  // ── Зоотовары ──
  petshop: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#4DB6AC"/>
    <circle cx="15" cy="16" r="3" fill="white"/>
    <circle cx="25" cy="16" r="3" fill="white"/>
    <circle cx="12" cy="24" r="3" fill="white"/>
    <circle cx="20" cy="26" r="4" fill="white"/>
    <circle cx="28" cy="24" r="3" fill="white"/>
  </svg>`,

  bethoven: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#8D6E63"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">БХ</text>
  </svg>`,

  // ── Детские товары ──
  detmir: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF6F00"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">ДМ</text>
  </svg>`,

  // ── Мебель ──
  ikea_replacement: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#FF5722"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="Arial">Hoff</text>
  </svg>`,

  askona: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#1A237E"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">АС</text>
  </svg>`,
};

/**
 * Возвращает SVG-иконку магазина по его ID.
 */
function getStoreIcon(storeId) {
  return STORE_ICONS[storeId] || getDefaultIcon(storeId);
}

/**
 * Генерирует дефолтную иконку с первыми двумя буквами.
 */
function getDefaultIcon(storeId) {
  const label = storeId.substring(0, 2).toUpperCase();
  return `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#6B7280"/>
    <text x="20" y="27" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="Arial">${label}</text>
  </svg>`;
}
