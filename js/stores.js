/**
 * Конфигурация всех магазинов.
 * Регион: г. Казань
 * Каждый магазин привязан к категориям, в которых он актуален.
 * priceLevel: 1 = самые низкие цены, 5 = самые высокие
 */

const REGION = 'Казань';
const REGION_YANDEX_LR = 43; // Яндекс geo ID для Казани

const STORES = [
  // ═══════════════════════════════════
  // 🛒 МАРКЕТПЛЕЙСЫ (показываются всегда)
  // ═══════════════════════════════════
  {
    id: 'aliexpress',
    name: 'AliExpress',
    shortName: 'AE',
    group: 'marketplace',
    groupName: 'Маркетплейсы',
    categories: ['all'],
    buildUrl: (query) => `https://aliexpress.ru/wholesale?SearchText=${encodeURIComponent(query)}`,
    delivery: '7-30 дней (из Китая), 3-7 дней (со склада РФ)',
    rating: 4.3,
    priceLevel: 1,
    priceHint: 'Самые низкие цены',
    note: 'Часто самые низкие цены, доставка из Китая или со складов в РФ',
    color: '#FF4747',
  },
  {
    id: 'avito',
    name: 'Авито',
    shortName: 'AV',
    group: 'marketplace',
    groupName: 'Маркетплейсы',
    categories: ['all'],
    buildUrl: (query) => `https://www.avito.ru/kazan?q=${encodeURIComponent(query)}`,
    delivery: 'Самовывоз в Казани / Авито Доставка 3-7 дней',
    rating: 4.4,
    priceLevel: 1,
    priceHint: 'Б/у — дешевле, новые — по рынку',
    note: 'Новые и б/у товары, г. Казань. Торг уместен!',
    color: '#00AAFF',
  },
  {
    id: 'wildberries',
    name: 'Wildberries',
    shortName: 'WB',
    group: 'marketplace',
    groupName: 'Маркетплейсы',
    categories: ['all'],
    buildUrl: (query) => `https://www.wildberries.ru/catalog/0/search.aspx?search=${encodeURIComponent(query)}&sort=priceup`,
    delivery: '1-5 дней в пункт выдачи Казань',
    rating: 4.7,
    priceLevel: 2,
    priceHint: 'Низкие цены, частые скидки',
    note: 'Бесплатная доставка в ПВЗ Казани. Сортировка по возрастанию цены',
    color: '#CB11AB',
  },
  {
    id: 'ozon',
    name: 'Ozon',
    shortName: 'OZ',
    group: 'marketplace',
    groupName: 'Маркетплейсы',
    categories: ['all'],
    buildUrl: (query) => `https://www.ozon.ru/search/?text=${encodeURIComponent(query)}&sorting=price`,
    delivery: '1-5 дней в ПВЗ / постамат Казань',
    rating: 4.6,
    priceLevel: 2,
    priceHint: 'Конкурентные цены, Ozon Card скидки',
    note: 'Ozon Premium — бесплатная доставка. Сортировка по цене',
    color: '#005BFF',
  },
  {
    id: 'yandex_market',
    name: 'Яндекс Маркет',
    shortName: 'ЯМ',
    group: 'marketplace',
    groupName: 'Маркетплейсы',
    categories: ['all'],
    buildUrl: (query) => `https://market.yandex.ru/search?text=${encodeURIComponent(query)}&lr=${REGION_YANDEX_LR}&how=aprice`,
    delivery: '1-5 дней, экспресс от 1 часа (Казань)',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Средние цены, кэшбэк Яндекс Плюс',
    note: 'Регион: Казань, сортировка по цене. Сплит — оплата частями',
    color: '#FFCC00',
  },

  // ═══════════════════════════════════
  // 💻 ЭЛЕКТРОНИКА
  // ═══════════════════════════════════
  {
    id: 'dns',
    name: 'DNS',
    shortName: 'DNS',
    group: 'electronics',
    groupName: 'Электроника',
    categories: ['electronics'],
    buildUrl: (query) => `https://www.dns-shop.ru/search/?q=${encodeURIComponent(query)}&order=price-asc&city=kazan`,
    delivery: 'Самовывоз сегодня (Казань) / доставка 1-5 дней',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Конкурентные цены на технику',
    note: 'Крупнейшая сеть электроники. Много точек самовывоза в Казани',
    color: '#FF6600',
  },
  {
    id: 'citilink',
    name: 'Ситилинк',
    shortName: 'CL',
    group: 'electronics',
    groupName: 'Электроника',
    categories: ['electronics'],
    buildUrl: (query) => `https://www.citilink.ru/search/?text=${encodeURIComponent(query)}&sorting=price_asc`,
    delivery: 'Самовывоз сегодня / доставка 1-7 дней в Казань',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Часто дешевле М.Видео',
    note: 'Электроника и бытовая техника. Сортировка по цене',
    color: '#F26322',
  },
  {
    id: 'mvideo',
    name: 'М.Видео',
    shortName: 'МВ',
    group: 'electronics',
    groupName: 'Электроника',
    categories: ['electronics'],
    buildUrl: (query) => `https://www.mvideo.ru/product-list-page?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз сегодня (Казань) / доставка 1-7 дней',
    rating: 4.3,
    priceLevel: 3,
    priceHint: 'Средние цены, бонусная программа',
    note: 'Экспресс-доставка в Казани. Рассрочка без переплаты',
    color: '#E21A1A',
  },
  {
    id: 'eldorado',
    name: 'Эльдорадо',
    shortName: 'ЭД',
    group: 'electronics',
    groupName: 'Электроника',
    categories: ['electronics'],
    buildUrl: (query) => `https://www.eldorado.ru/search/catalog.php?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз / доставка 1-7 дней (Казань)',
    rating: 4.2,
    priceLevel: 3,
    priceHint: 'Средние цены, акции',
    note: 'Часть группы М.Видео-Эльдорадо. Рассрочка 0%',
    color: '#009FE3',
  },

  // ═══════════════════════════════════
  // 🥛 ПРОДУКТЫ
  // ═══════════════════════════════════
  {
    id: 'pyaterochka',
    name: 'Пятёрочка',
    shortName: '5К',
    group: 'food',
    groupName: 'Продукты',
    categories: ['food'],
    buildUrl: (query) => `https://5ka.ru/special_offers/?search=${encodeURIComponent(query)}`,
    delivery: 'Доставка от 1 часа / Самовывоз (Казань)',
    rating: 4.1,
    priceLevel: 1,
    priceHint: 'Низкие цены, акции «Пятёрочка выручает»',
    note: 'Доступные цены, карта лояльности. Казань',
    color: '#E3342F',
  },
  {
    id: 'magnit',
    name: 'Магнит Доставка',
    shortName: 'МГ',
    group: 'food',
    groupName: 'Продукты',
    categories: ['food'],
    buildUrl: (query) => `https://magnit.ru/catalog/?q=${encodeURIComponent(query)}`,
    delivery: 'Доставка от 1 часа (Казань)',
    rating: 4.2,
    priceLevel: 1,
    priceHint: 'Низкие цены, «Магнит Плюс»',
    note: 'Доставка из ближайшего магазина в Казани',
    color: '#D81F26',
  },
  {
    id: 'lenta',
    name: 'Лента',
    shortName: 'ЛН',
    group: 'food',
    groupName: 'Продукты',
    categories: ['food'],
    buildUrl: (query) => `https://lenta.com/search/?searchText=${encodeURIComponent(query)}`,
    delivery: 'Доставка 1-3 дня / Самовывоз (Казань)',
    rating: 4.3,
    priceLevel: 1,
    priceHint: 'Оптовые цены, дешевле за объём',
    note: 'Гипермаркет — выгоднее покупать больше. Казань',
    color: '#003DA6',
  },
  {
    id: 'perekrestok',
    name: 'Перекрёсток',
    shortName: 'ПК',
    group: 'food',
    groupName: 'Продукты',
    categories: ['food'],
    buildUrl: (query) => `https://www.perekrestok.ru/cat/search?search=${encodeURIComponent(query)}`,
    delivery: 'Доставка от 2 часов (Казань)',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Средние цены, хороший выбор',
    note: 'Онлайн-доставка продуктов. Казань',
    color: '#47A23F',
  },
  {
    id: 'vkusvill',
    name: 'ВкусВилл',
    shortName: 'ВВ',
    group: 'food',
    groupName: 'Продукты',
    categories: ['food'],
    buildUrl: (query) => `https://vkusvill.ru/search/?query=${encodeURIComponent(query)}`,
    delivery: 'Доставка от 1 часа / Самовывоз (Казань)',
    rating: 4.6,
    priceLevel: 3,
    priceHint: 'Выше средних, но натуральные продукты',
    note: 'Натуральные продукты без добавок. Казань',
    color: '#7AB648',
  },

  // ═══════════════════════════════════
  // 👗 ОДЕЖДА
  // ═══════════════════════════════════
  {
    id: 'sportmaster',
    name: 'Спортмастер',
    shortName: 'СМ',
    group: 'clothing',
    groupName: 'Одежда и обувь',
    categories: ['clothing', 'sports'],
    buildUrl: (query) => `https://www.sportmaster.ru/search/?query=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз сегодня (Казань) / доставка 1-7 дней',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Средние цены, частые распродажи',
    note: 'Спортивная одежда и обувь. Магазины в Казани',
    color: '#FF0000',
  },
  {
    id: 'lamoda',
    name: 'Lamoda',
    shortName: 'LM',
    group: 'clothing',
    groupName: 'Одежда и обувь',
    categories: ['clothing'],
    buildUrl: (query) => `https://www.lamoda.ru/catalogsearch/result/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Доставка 2-7 дней в Казань',
    rating: 4.6,
    priceLevel: 3,
    priceHint: 'Средние-высокие цены, бренды',
    note: 'Примерка перед покупкой. Доставка в Казань',
    color: '#000000',
  },
  {
    id: 'asos',
    name: 'ASOS',
    shortName: 'AS',
    group: 'clothing',
    groupName: 'Одежда и обувь',
    categories: ['clothing'],
    buildUrl: (query) => `https://www.asos.com/ru/search/?q=${encodeURIComponent(query)}&sort=priceasc`,
    delivery: 'Доставка 7-21 день в Казань',
    rating: 4.3,
    priceLevel: 3,
    priceHint: 'Средние цены, международные бренды',
    note: 'Международный магазин моды. Доставка в Казань',
    color: '#2D2D2D',
  },

  // ═══════════════════════════════════
  // 🚗 АВТО
  // ═══════════════════════════════════
  {
    id: 'autoru',
    name: 'Auto.ru',
    shortName: 'AR',
    group: 'auto',
    groupName: 'Авто',
    categories: ['auto'],
    buildUrl: (query) => `https://auto.ru/tatarstan/cars/all/?query=${encodeURIComponent(query)}&sort=price-asc`,
    delivery: 'Осмотр/самовывоз в Казани и Татарстане',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Рыночные цены, торг',
    note: 'Площадка Яндекса. Регион: Татарстан/Казань',
    color: '#E53935',
  },
  {
    id: 'drom',
    name: 'Drom.ru',
    shortName: 'DR',
    group: 'auto',
    groupName: 'Авто',
    categories: ['auto'],
    buildUrl: (query) => `https://www.drom.ru/catalog/?q=${encodeURIComponent(query)}&region=kazan`,
    delivery: 'Осмотр в Казани / доставка по договорённости',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Рыночные цены, много вариантов',
    note: 'Автомобили, отзывы, запчасти. Казань',
    color: '#1976D2',
  },
  {
    id: 'exist',
    name: 'Exist.ru',
    shortName: 'EX',
    group: 'auto',
    groupName: 'Авто',
    categories: ['auto'],
    buildUrl: (query) => `https://www.exist.ru/Price/?pcode=${encodeURIComponent(query)}`,
    delivery: 'Доставка 1-14 дней в Казань',
    rating: 4.3,
    priceLevel: 2,
    priceHint: 'Сравнение цен от разных поставщиков',
    note: 'Автозапчасти по каталожным номерам. Доставка в Казань',
    color: '#FF9800',
  },

  // ═══════════════════════════════════
  // 🔨 СТРОЙМАТЕРИАЛЫ
  // ═══════════════════════════════════
  {
    id: 'leroymerlin',
    name: 'Леруа Мерлен',
    shortName: 'ЛМ',
    group: 'construction',
    groupName: 'Стройматериалы',
    categories: ['construction'],
    buildUrl: (query) => `https://leroymerlin.ru/search/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз сегодня (Казань) / доставка 1-7 дней',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Конкурентные цены, широкий выбор',
    note: 'Всё для строительства и ремонта. Магазины в Казани',
    color: '#67B437',
  },
  {
    id: 'petrovich',
    name: 'Петрович',
    shortName: 'ПТ',
    group: 'construction',
    groupName: 'Стройматериалы',
    categories: ['construction'],
    buildUrl: (query) => `https://petrovich.ru/catalog/search/?q=${encodeURIComponent(query)}`,
    delivery: 'Доставка 1-5 дней в Казань',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Средние цены, профессиональные материалы',
    note: 'Строительные и отделочные материалы. Доставка в Казань',
    color: '#FFD600',
  },
  {
    id: 'vseinstrumenti',
    name: 'ВсеИнструменты',
    shortName: 'ВИ',
    group: 'construction',
    groupName: 'Стройматериалы',
    categories: ['construction'],
    buildUrl: (query) => `https://www.vseinstrumenti.ru/search/${encodeURIComponent(query)}/?sort=price_asc`,
    delivery: 'Самовывоз / доставка 1-7 дней в Казань',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Хорошие цены на инструмент',
    note: 'Инструменты и оборудование. Доставка в Казань',
    color: '#E64A19',
  },

  // ═══════════════════════════════════
  // ⚽ СПОРТ
  // ═══════════════════════════════════
  {
    id: 'decathlon',
    name: 'Декатлон',
    shortName: 'ДК',
    group: 'sports',
    groupName: 'Спорт',
    categories: ['sports'],
    buildUrl: (query) => `https://www.decathlon.ru/search?Ntt=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз (Казань) / доставка 1-10 дней',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Доступные цены, своё производство',
    note: 'Спортивные товары для всех. Магазин в Казани',
    color: '#0066CC',
  },

  // ═══════════════════════════════════
  // 💄 КРАСОТА
  // ═══════════════════════════════════
  {
    id: 'goldapple',
    name: 'Золотое Яблоко',
    shortName: 'ЗЯ',
    group: 'beauty',
    groupName: 'Красота и здоровье',
    categories: ['beauty'],
    buildUrl: (query) => `https://goldapple.ru/catalogsearch/result/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз (Казань) / доставка 1-5 дней',
    rating: 4.5,
    priceLevel: 3,
    priceHint: 'Средние-высокие, премиум бренды',
    note: 'Премиум-косметика и парфюмерия. Казань',
    color: '#C8A962',
  },
  {
    id: 'letoile',
    name: 'Л\'Этуаль',
    shortName: 'ЛЭ',
    group: 'beauty',
    groupName: 'Красота и здоровье',
    categories: ['beauty'],
    buildUrl: (query) => `https://www.letu.ru/search?searchTerm=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз (Казань) / доставка 1-7 дней',
    rating: 4.3,
    priceLevel: 2,
    priceHint: 'Средние цены, много акций',
    note: 'Косметика, парфюмерия. Магазины в Казани',
    color: '#8B1A62',
  },

  // ═══════════════════════════════════
  // 📚 КНИГИ
  // ═══════════════════════════════════
  {
    id: 'labirint',
    name: 'Лабиринт',
    shortName: 'ЛБ',
    group: 'books',
    groupName: 'Книги и хобби',
    categories: ['books'],
    buildUrl: (query) => `https://www.labirint.ru/search/${encodeURIComponent(query)}/?order=price_asc`,
    delivery: 'Доставка 3-10 дней в Казань',
    rating: 4.7,
    priceLevel: 2,
    priceHint: 'Средние цены, бонусы до 10%',
    note: 'Крупнейший книжный магазин. Доставка в Казань',
    color: '#D32F2F',
  },
  {
    id: 'bookvoed',
    name: 'Буквоед',
    shortName: 'БВ',
    group: 'books',
    groupName: 'Книги и хобби',
    categories: ['books'],
    buildUrl: (query) => `https://www.bookvoed.ru/search?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Доставка 3-14 дней в Казань',
    rating: 4.4,
    priceLevel: 2,
    priceHint: 'Средние цены',
    note: 'Книги и канцтовары. Доставка в Казань',
    color: '#4CAF50',
  },

  // ═══════════════════════════════════
  // 🐾 ЗООТОВАРЫ
  // ═══════════════════════════════════
  {
    id: 'petshop',
    name: 'PetShop.ru',
    shortName: 'PS',
    group: 'pets',
    groupName: 'Зоотовары',
    categories: ['pets'],
    buildUrl: (query) => `https://www.petshop.ru/search/?text=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Доставка 2-7 дней в Казань',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Средние цены, подписка дешевле',
    note: 'Всё для домашних животных. Доставка в Казань',
    color: '#4DB6AC',
  },
  {
    id: 'bethoven',
    name: 'Бетховен',
    shortName: 'БХ',
    group: 'pets',
    groupName: 'Зоотовары',
    categories: ['pets'],
    buildUrl: (query) => `https://www.bethowen.ru/search/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз (Казань) / доставка 2-7 дней',
    rating: 4.3,
    priceLevel: 2,
    priceHint: 'Средние цены',
    note: 'Зоомагазин. Магазины в Казани',
    color: '#8D6E63',
  },

  // ═══════════════════════════════════
  // 🧸 ДЕТСКИЕ ТОВАРЫ
  // ═══════════════════════════════════
  {
    id: 'detmir',
    name: 'Детский мир',
    shortName: 'ДМ',
    group: 'kids',
    groupName: 'Детские товары',
    categories: ['kids'],
    buildUrl: (query) => `https://www.detmir.ru/search/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз сегодня (Казань) / доставка 1-7 дней',
    rating: 4.5,
    priceLevel: 2,
    priceHint: 'Средние цены, бонусная программа',
    note: 'Крупнейший детский магазин. Магазины в Казани',
    color: '#FF6F00',
  },

  // ═══════════════════════════════════
  // 🛋️ МЕБЕЛЬ
  // ═══════════════════════════════════
  {
    id: 'ikea_replacement',
    name: 'Hoff',
    shortName: 'HF',
    group: 'furniture',
    groupName: 'Мебель и интерьер',
    categories: ['furniture'],
    buildUrl: (query) => `https://hoff.ru/search/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз (Казань) / доставка 3-14 дней',
    rating: 4.3,
    priceLevel: 2,
    priceHint: 'Средние цены',
    note: 'Мебель и товары для дома. Казань',
    color: '#FF5722',
  },
  {
    id: 'askona',
    name: 'Аскона',
    shortName: 'АС',
    group: 'furniture',
    groupName: 'Мебель и интерьер',
    categories: ['furniture'],
    buildUrl: (query) => `https://askona.ru/search/?q=${encodeURIComponent(query)}&sort=price_asc`,
    delivery: 'Самовывоз (Казань) / доставка 3-14 дней',
    rating: 4.4,
    priceLevel: 3,
    priceHint: 'Средние-высокие цены, качество',
    note: 'Матрасы, кровати, подушки. Магазин в Казани',
    color: '#1A237E',
  },
];

/**
 * Возвращает магазины, подходящие для данной категории.
 * Маркетплейсы показываются всегда.
 * Сортировка: от дешёвых к дорогим (по priceLevel).
 */
function getStoresForCategory(categoryId) {
  let stores;
  if (!categoryId) {
    stores = STORES.filter(s => s.categories.includes('all'));
  } else {
    stores = STORES.filter(s =>
      s.categories.includes('all') || s.categories.includes(categoryId)
    );
  }

  // Сортировка по priceLevel (от дешёвых к дорогим)
  stores.sort((a, b) => a.priceLevel - b.priceLevel);

  return stores;
}

/**
 * Группирует магазины по группам для отображения.
 * Внутри каждой группы — сортировка по priceLevel.
 */
function groupStores(stores) {
  const groups = {};
  const groupOrder = [];

  for (const store of stores) {
    if (!groups[store.group]) {
      groups[store.group] = {
        id: store.group,
        name: store.groupName,
        stores: [],
      };
      groupOrder.push(store.group);
    }
    groups[store.group].stores.push(store);
  }

  // Сортировка внутри каждой группы по priceLevel
  for (const group of Object.values(groups)) {
    group.stores.sort((a, b) => a.priceLevel - b.priceLevel);
  }

  // Маркетплейсы всегда первые
  const result = [];
  if (groups['marketplace']) {
    result.push(groups['marketplace']);
  }
  for (const groupId of groupOrder) {
    if (groupId !== 'marketplace') {
      result.push(groups[groupId]);
    }
  }

  return result;
}
