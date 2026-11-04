/**
 * CLOUD DISTRICT — Master Store & Data Engine
 * Gestione centralizzata prodotti, carrello, layout e ambient decor.
 * Stile naturale, non schematico, con animazioni fluide al passaggio del cursore.
 */

// --- VECTOR SVG ICON REPOSITORY ---
const CLOUD_ICONS = {
  cart: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  key: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-1.5 1.5L14 9l-1.5-1.5L11 9l1 1-3 3-1.5-1.5L6 13l1 1-1.5 1.5L7 17l-1 1-2-2-2 2 5 5 13-13z"/><circle cx="16.5" cy="7.5" r="2.5"/></svg>`,
  vape: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="8" width="10" height="14" rx="2"/><path d="M10 8V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4"/><path d="M10 13h4"/><circle cx="12" cy="17" r="1"/></svg>`,
  liquid: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  tools: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  sparkles: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/></svg>`,
  star: `<svg class="svg-icon svg-star" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  lock: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  truck: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  refresh: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  check: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  camera: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  gallery: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  send: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  qr: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3z"/><path d="M20 14v3"/><path d="M14 20h6"/></svg>`,
  box: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  layout: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  gift: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  trash: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  edit: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  save: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  grip: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>`,
  arrowUp: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  arrowDown: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
  plus: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  berry: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14" r="7"/><circle cx="9" cy="11" r="3"/><path d="M12 7V3"/><path d="M9 5c1.5-1.5 4.5-1.5 6 0"/></svg>`,
  cookie: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><circle cx="8.5" cy="8.5" r="1" fill="currentColor"/><circle cx="7" cy="15" r="1" fill="currentColor"/><circle cx="13" cy="17" r="1" fill="currentColor"/><circle cx="15.5" cy="11.5" r="1" fill="currentColor"/></svg>`,
  snowflake: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>`,
  leaf: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  tropical: `<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 8c0-2.76-2.24-5-5-5S3 5.24 3 8c0 3.31 2.69 6 6 6"/><path d="M13 8c2.76 0 5 2.24 5 5s-2.24 5-5 5c-3.31 0-6-2.69-6-6"/><path d="M13 8v14"/></svg>`
};

function getIcon(name) {
  return CLOUD_ICONS[name] || '';
}

function getBadgeIcon(badgeType) {
  switch (badgeType) {
    case 'bestseller': return CLOUD_ICONS.sparkles;
    case 'new': return CLOUD_ICONS.sparkles;
    case 'deal': return CLOUD_ICONS.sparkles;
    case 'pro': return CLOUD_ICONS.sparkles;
    default: return CLOUD_ICONS.sparkles;
  }
}

function getStarRatingSvg(rating) {
  return `<span class="star-rating-wrap">${CLOUD_ICONS.star}${CLOUD_ICONS.star}${CLOUD_ICONS.star}${CLOUD_ICONS.star}${CLOUD_ICONS.star}</span>`;
}

// Generatore di elementi decorativi che appaiono dal bordo al passaggio del mouse
function getPerimeterDecorations(decorType) {
  switch (decorType) {
    case 'mango':
      return `
        <div class="perimeter-decor decor-mango">
          <svg class="decor-item decor-tr" viewBox="0 0 100 100" fill="none">
            <path d="M30 10 C 60 5, 90 25, 95 60 C 98 85, 80 95, 60 90 C 35 85, 10 50, 30 10 Z" fill="rgba(255, 177, 66, 0.35)" stroke="#ffb142" stroke-width="2"/>
            <path d="M45 25 C 65 20, 80 35, 85 55" stroke="#ffda79" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="70" cy="40" r="3" fill="#ffda79"/>
          </svg>
          <svg class="decor-item decor-bl" viewBox="0 0 100 100" fill="none">
            <path d="M70 90 C 40 95, 10 75, 5 40 C 2 15, 20 5, 40 10 C 65 15, 90 50, 70 90 Z" fill="rgba(255, 159, 26, 0.3)" stroke="#ff9f1a" stroke-width="2"/>
            <path d="M55 75 C 35 80, 20 65, 15 45" stroke="#ffda79" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>`;
    case 'berries':
      return `
        <div class="perimeter-decor decor-berries">
          <svg class="decor-item decor-tr" viewBox="0 0 100 100" fill="none">
            <circle cx="75" cy="25" r="18" fill="rgba(255, 79, 195, 0.35)" stroke="#ff4fc3" stroke-width="2"/>
            <circle cx="55" cy="35" r="14" fill="rgba(162, 60, 255, 0.4)" stroke="#a23cff" stroke-width="2"/>
            <circle cx="80" cy="50" r="12" fill="rgba(255, 79, 195, 0.3)" stroke="#ff4fc3" stroke-width="1.5"/>
          </svg>
          <svg class="decor-item decor-bl" viewBox="0 0 100 100" fill="none">
            <circle cx="25" cy="75" r="16" fill="rgba(25, 230, 255, 0.35)" stroke="#19e6ff" stroke-width="2"/>
            <circle cx="45" cy="80" r="12" fill="rgba(255, 79, 195, 0.3)" stroke="#ff4fc3" stroke-width="1.5"/>
          </svg>
        </div>`;
    case 'ice':
      return `
        <div class="perimeter-decor decor-ice">
          <svg class="decor-item decor-tr" viewBox="0 0 100 100" fill="none" stroke="#19e6ff" stroke-width="1.5">
            <line x1="50" y1="10" x2="50" y2="70"/><line x1="20" y1="40" x2="80" y2="40"/>
            <line x1="30" y1="20" x2="70" y2="60"/><line x1="70" y1="20" x2="30" y2="60"/>
            <circle cx="50" cy="40" r="6" fill="rgba(25, 230, 255, 0.25)"/>
          </svg>
          <svg class="decor-item decor-br" viewBox="0 0 100 100" fill="none" stroke="#19e6ff" stroke-width="1.5">
            <polygon points="50,15 85,50 50,85 15,50" fill="rgba(25, 230, 255, 0.15)"/>
            <polygon points="50,30 70,50 50,70 30,50" fill="rgba(25, 230, 255, 0.3)"/>
          </svg>
        </div>`;
    case 'cookie':
      return `
        <div class="perimeter-decor decor-cookie">
          <svg class="decor-item decor-tr" viewBox="0 0 100 100" fill="none">
            <circle cx="70" cy="30" r="24" fill="rgba(205, 133, 63, 0.3)" stroke="#cd853f" stroke-width="2"/>
            <circle cx="62" cy="22" r="3" fill="#8b4513"/>
            <circle cx="78" cy="26" r="3.5" fill="#8b4513"/>
            <circle cx="70" cy="38" r="4" fill="#8b4513"/>
          </svg>
          <svg class="decor-item decor-bl" viewBox="0 0 100 100" fill="none">
            <path d="M10 80 Q 40 60, 60 90" stroke="#ff4fc3" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
          </svg>
        </div>`;
    case 'tobacco':
      return `
        <div class="perimeter-decor decor-tobacco">
          <svg class="decor-item decor-tr" viewBox="0 0 100 100" fill="none">
            <path d="M40 85 C 30 50, 45 25, 80 15 C 75 45, 60 70, 40 85 Z" fill="rgba(218, 165, 32, 0.3)" stroke="#daa520" stroke-width="2"/>
            <path d="M40 85 Q 55 50, 80 15" stroke="#f1c40f" stroke-width="1.5"/>
          </svg>
          <svg class="decor-item decor-bl" viewBox="0 0 100 100" fill="none">
            <path d="M60 15 C 70 50, 55 75, 20 85 C 25 55, 40 30, 60 15 Z" fill="rgba(184, 134, 11, 0.25)" stroke="#b8860b" stroke-width="1.5"/>
          </svg>
        </div>`;
    case 'vapor':
    default:
      return `
        <div class="perimeter-decor decor-vapor">
          <svg class="decor-item decor-tr" viewBox="0 0 100 100" fill="none">
            <path d="M10 60 C 30 40, 50 65, 75 45 C 90 30, 80 10, 65 15" stroke="rgba(25, 230, 255, 0.45)" stroke-width="3" stroke-linecap="round"/>
            <path d="M25 80 C 45 60, 65 75, 85 55" stroke="rgba(255, 79, 195, 0.45)" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg class="decor-item decor-bl" viewBox="0 0 100 100" fill="none">
            <path d="M90 40 C 70 60, 50 35, 25 55 C 10 70, 20 90, 35 85" stroke="rgba(255, 79, 195, 0.4)" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </div>`;
  }
}

// --- PRODOTTI NATURALI ED ELEGANTI (Senza forzature commerciali) ---
const DEFAULT_PRODUCTS = [
  // --- SIGARETTE ELETTRONICHE ---
  {
    id: 'prod-kiwi-spark',
    name: 'Kiwi Spark Pod Mod',
    category: 'sigarette',
    categoryLabel: 'Sigarette Elettroniche',
    price: 24.90,
    originalPrice: 29.90,
    discountPercent: 17,
    badge: 'Selezione Ufficiale',
    badgeType: 'bestseller',
    rating: 4.9,
    reviewsCount: 384,
    stockLeft: 8,
    decorType: 'vapor',
    description: 'Penna sottilissima in nero opaco con bocchino trasparente. Dimensioni tascabili e massima pulizia d\'uso.',
    details: ['Batteria 700 mAh a lunga durata', 'Tiro automatico reattivo', 'Capienza pod 2ml ricaricabile'],
    image: 'img/kiwi-spark.png',
    inHero: true
  },
  {
    id: 'prod-magnum-nano',
    name: 'Magnum Nano Blu',
    category: 'sigarette',
    categoryLabel: 'Sigarette Elettroniche',
    price: 39.90,
    originalPrice: 49.90,
    discountPercent: 20,
    badge: 'Nuovo Arrivo',
    badgeType: 'new',
    rating: 4.8,
    reviewsCount: 192,
    stockLeft: 10,
    decorType: 'vapor',
    description: 'Corpo in alluminio metallizzato blu con serbatoio a vista e grafica distintiva. Ergonomia e tenuta perfette.',
    details: ['Alluminio anodizzato unibody', 'Regolazione dell\'aria micrometrica', 'Resistenza Mesh 0.6 ohm'],
    image: 'img/magnum-nano.png',
    inHero: true
  },
  {
    id: 'prod-vaporesso-luxe',
    name: 'Vaporesso Luxe XR Max',
    category: 'sigarette',
    categoryLabel: 'Sigarette Elettroniche',
    price: 44.90,
    originalPrice: 54.90,
    discountPercent: 18,
    badge: 'Prestazioni Pro',
    badgeType: 'pro',
    rating: 5.0,
    reviewsCount: 521,
    stockLeft: 6,
    decorType: 'vapor',
    description: 'Erogazione bilanciata e resa aromatica pura in formato compatto. Fino a 80W con display ad alta definizione.',
    details: ['Batteria da 2800 mAh ad alta autonomia', 'Chipset intelligente AXON', 'Compatibilità resistenze GTX'],
    image: 'img/magnum-nano.png',
    inHero: false
  },
  {
    id: 'prod-wenax-m1',
    name: 'Geekvape Wenax M1 Pen',
    category: 'sigarette',
    categoryLabel: 'Sigarette Elettroniche',
    price: 15.90,
    originalPrice: 19.90,
    discountPercent: 20,
    badge: 'Formato Pen',
    badgeType: 'deal',
    rating: 4.7,
    reviewsCount: 147,
    stockLeft: 12,
    decorType: 'vapor',
    description: 'Design tubolare ultra-leggero in lega di alluminio. Tiro contrastato morbido e calore bilanciato.',
    details: ['Tiro MTL chiuso e lineare', 'Peso di soli 34 grammi', 'Batteria da 800 mAh'],
    image: 'img/kiwi-spark.png',
    inHero: false
  },

  // --- LIQUIDI ---
  {
    id: 'prod-too-puff',
    name: 'Too Puff S’mores 60ml',
    category: 'liquidi',
    categoryLabel: 'Liquidi',
    price: 14.90,
    originalPrice: 18.90,
    discountPercent: 21,
    badge: 'Aroma Dolce',
    badgeType: 'bestseller',
    rating: 4.9,
    reviewsCount: 612,
    stockLeft: 14,
    decorType: 'cookie',
    description: 'Il classico s’mores con biscotto Graham dorato, marshmallow filante e cioccolato fondente vellutato.',
    details: ['Flacone Chubby da 60ml', 'Formato Mix&Vape 50+10', 'Ingredienti selezionati di grado USP'],
    image: 'img/too-puff.png',
    inHero: true
  },
  {
    id: 'prod-shinobi-ice',
    name: 'Vaporart Shinobi Ice 50ml',
    category: 'liquidi',
    categoryLabel: 'Liquidi',
    price: 13.90,
    originalPrice: 16.90,
    discountPercent: 18,
    badge: 'Aroma Fresco',
    badgeType: 'deal',
    rating: 4.9,
    reviewsCount: 429,
    stockLeft: 10,
    decorType: 'ice',
    description: 'Papaya aromatica con fichi d’india ed una nota rinfrescante bilanciata per uno svapo quotidiano.',
    details: ['Profilo fruttato e fresco', 'Alta resa su ogni tipologia di coil'],
    image: 'img/too-puff.png',
    inHero: false
  },
  {
    id: 'prod-la-tabaccheria',
    name: 'La Tabaccheria Extra Dry 4Pod',
    category: 'liquidi',
    categoryLabel: 'Liquidi',
    price: 15.90,
    originalPrice: 19.90,
    discountPercent: 20,
    badge: 'Tabacco Puro',
    badgeType: 'pro',
    rating: 5.0,
    reviewsCount: 884,
    stockLeft: 8,
    decorType: 'tobacco',
    description: 'Estratto di tabacco organico trasparente che preserva la durata della coil garantendo gusto analogico secco.',
    details: ['Naturale e pulito sulle resistenze', 'Aroma secco e profondo', 'Formato scomposto 20ml'],
    image: 'img/too-puff.png',
    inHero: false
  },
  {
    id: 'prod-mango-bomb',
    name: 'Dreamods Tropical Mango',
    category: 'liquidi',
    categoryLabel: 'Liquidi',
    price: 12.90,
    originalPrice: 15.90,
    discountPercent: 19,
    badge: 'Gusto Esotico',
    badgeType: 'deal',
    rating: 4.8,
    reviewsCount: 215,
    stockLeft: 11,
    decorType: 'mango',
    description: 'Polpa dolce di mango maturo con tocco esotico di frutto della passione e scorza di lime fresco.',
    details: ['Profilo tropicale avvolgente', 'Flacone salva-bambino sigillato'],
    image: 'img/too-puff.png',
    inHero: false
  },

  // --- ACCESSORI ---
  {
    id: 'prod-kiwi-pods',
    name: 'Pod Ricambio Kiwi Spark (3 Pz)',
    category: 'accessori',
    categoryLabel: 'Accessori',
    price: 9.90,
    originalPrice: 12.90,
    discountPercent: 23,
    badge: 'Ricambio Originale',
    badgeType: 'bestseller',
    rating: 4.9,
    reviewsCount: 710,
    stockLeft: 20,
    decorType: 'vapor',
    description: 'Cartucce pod originali con tecnologia mesh integrata per una vaporizzazione costante e priva di perdite.',
    details: ['Pacco da 3 cartucce sigillate', 'Resistenza mesh a resa omogenea'],
    image: 'img/kiwi-spark.png',
    inHero: false
  },
  {
    id: 'prod-filtri-cotone',
    name: 'Filtri in Cotone Premium (Pack 20)',
    category: 'accessori',
    categoryLabel: 'Accessori',
    price: 4.50,
    originalPrice: 6.00,
    discountPercent: 25,
    badge: 'Cotone Naturale',
    badgeType: 'deal',
    rating: 4.8,
    reviewsCount: 390,
    stockLeft: 25,
    decorType: 'tobacco',
    description: 'Filtri sagomati in puro cotone per riprodurre la sensazione tattile naturale della sigaretta tradizionale.',
    details: ['Confezione igienica da 20 filtri', 'Zero condensa e tiro morbido'],
    image: 'img/kiwi-spark.png',
    inHero: false
  },
  {
    id: 'prod-powerbank-usbc',
    name: 'Caricatore USB-C 30W GaN',
    category: 'accessori',
    categoryLabel: 'Accessori',
    price: 12.90,
    originalPrice: 17.90,
    discountPercent: 28,
    badge: 'Ricarica Rapida',
    badgeType: 'pro',
    rating: 4.9,
    reviewsCount: 165,
    stockLeft: 15,
    decorType: 'vapor',
    description: 'Alimentatore compatto con circuito di protezione per una ricarica sicura e preservare la vita della batteria.',
    details: ['Tecnologia termica GaN', 'Protezione contro sovratensioni', 'Cavo rinforzato incluso'],
    image: 'img/magnum-nano.png',
    inHero: false
  },
  {
    id: 'prod-laccio-neck',
    name: 'Laccio da Collo Glow Cloud',
    category: 'accessori',
    categoryLabel: 'Accessori',
    price: 4.90,
    originalPrice: 7.90,
    discountPercent: 38,
    badge: 'Accessorio',
    badgeType: 'deal',
    rating: 4.7,
    reviewsCount: 98,
    stockLeft: 18,
    decorType: 'berries',
    description: 'Cordino morbido con anello universale in silicone elastico per portare comodamente con te la tua pod.',
    details: ['Tessuto morbido jacquard', 'Anello compatibile con la maggior parte delle pod'],
    image: 'img/magnum-nano.png',
    inHero: false
  }
];

// Configurazione equilibrata per l'Upsell del Liquido a 8€
const DEFAULT_UPSELL_CONFIG = {
  active: true,
  title: 'Vuoi aggiungere un liquido al tuo ordine per 8 euro?',
  price: 8.00,
  originalPrice: 14.90,
  liquidName: 'Liquido Selezione Cloud 60ml',
  image: 'img/too-puff.png',
  flavors: [
    { id: 'mango-passion', name: 'Mango & Frutto della Passione', note: 'Esotico e vellutato', icon: 'tropical' },
    { id: 'berries-ice', name: 'Frutti di Bosco Ice', note: 'Fresco e fruttato', icon: 'berry' },
    { id: 'smores-cookie', name: 'S’mores Biscotto & Cioccolato', note: 'Dolce e cremoso', icon: 'cookie' },
    { id: 'menta-glaciale', name: 'Menta Glaciale Siberiana', note: 'Fresco polare', icon: 'snowflake' },
    { id: 'tabacco-vaniglia', name: 'Tabacco Biondo & Vaniglia', note: 'Morbido ed equilibrato', icon: 'leaf' }
  ],
  nicotineLevels: ['0 mg/ml', '4 mg/ml', '9 mg/ml', '14 mg/ml']
};

const DEFAULT_LAYOUT = {
  columns: 3,
  viewMode: 'grid',
  sortBy: 'manual'
};

const STORAGE_KEYS = {
  PRODUCTS: 'cloud_district_products_v3',
  CART: 'cloud_district_cart_v3',
  UPSELL: 'cloud_district_upsell_v3',
  LAYOUT: 'cloud_district_layout_v3',
  AUTH: 'cloud_district_admin_auth'
};

// --- DATA ACCESS METHODS ---

function getProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    if (!raw) {
      saveProducts(DEFAULT_PRODUCTS);
      return DEFAULT_PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PRODUCTS;
  } catch (e) {
    return DEFAULT_PRODUCTS;
  }
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    window.dispatchEvent(new CustomEvent('cloud_products_updated', { detail: products }));
  } catch (e) {}
}

function addProduct(product) {
  const products = getProducts();
  const newProduct = {
    id: 'prod-' + Date.now(),
    name: product.name || 'Nuovo Prodotto',
    category: product.category || 'sigarette',
    categoryLabel: product.category === 'liquidi' ? 'Liquidi' : product.category === 'accessori' ? 'Accessori' : 'Sigarette Elettroniche',
    price: parseFloat(product.price) || 19.90,
    originalPrice: parseFloat(product.originalPrice) || (parseFloat(product.price) * 1.25),
    discountPercent: Math.round(((parseFloat(product.originalPrice || 25) - parseFloat(product.price || 20)) / parseFloat(product.originalPrice || 25)) * 100),
    badge: product.badge || 'Consigliato',
    badgeType: product.badgeType || 'bestseller',
    decorType: product.decorType || (product.category === 'liquidi' ? 'mango' : 'vapor'),
    rating: parseFloat(product.rating) || 4.9,
    reviewsCount: parseInt(product.reviewsCount, 10) || 120,
    stockLeft: parseInt(product.stockLeft, 10) || 10,
    description: product.description || 'Selezionato dallo staff di Cloud District Torino.',
    details: Array.isArray(product.details) ? product.details : (product.details ? product.details.split('\n').filter(Boolean) : ['Qualità verificata']),
    image: product.image || 'img/kiwi-spark.png',
    inHero: !!product.inHero
  };
  products.unshift(newProduct);
  saveProducts(products);
  return newProduct;
}

function updateProduct(id, updatedFields) {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedFields };
    if (updatedFields.price && updatedFields.originalPrice) {
      products[index].discountPercent = Math.round(((products[index].originalPrice - products[index].price) / products[index].originalPrice) * 100);
    }
    saveProducts(products);
    return products[index];
  }
  return null;
}

function deleteProduct(id) {
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  saveProducts(products);
  return products;
}

function reorderProducts(orderedIds) {
  const products = getProducts();
  const map = new Map(products.map(p => [p.id, p]));
  const reordered = [];
  orderedIds.forEach(id => {
    if (map.has(id)) {
      reordered.push(map.get(id));
      map.delete(id);
    }
  });
  map.forEach(p => reordered.push(p));
  saveProducts(reordered);
  return reordered;
}

function getLayoutSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.LAYOUT);
    return raw ? { ...DEFAULT_LAYOUT, ...JSON.parse(raw) } : DEFAULT_LAYOUT;
  } catch (e) {
    return DEFAULT_LAYOUT;
  }
}

function saveLayoutSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEYS.LAYOUT, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent('cloud_layout_updated', { detail: settings }));
  } catch (e) {}
}

function getUpsellConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.UPSELL);
    return raw ? { ...DEFAULT_UPSELL_CONFIG, ...JSON.parse(raw) } : DEFAULT_UPSELL_CONFIG;
  } catch (e) {
    return DEFAULT_UPSELL_CONFIG;
  }
}

function saveUpsellConfig(config) {
  try {
    localStorage.setItem(STORAGE_KEYS.UPSELL, JSON.stringify(config));
  } catch (e) {}
}

function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cloud_cart_updated', { detail: cart }));
  } catch (e) {}
}

function addToCart(item) {
  const cart = getCart();
  const existingIndex = cart.findIndex(c => c.id === item.id && c.variant === item.variant);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += (item.quantity || 1);
  } else {
    cart.push({
      cartItemId: 'item_' + Date.now() + '_' + Math.floor(Math.random()*1000),
      id: item.id,
      name: item.name,
      price: parseFloat(item.price),
      originalPrice: item.originalPrice ? parseFloat(item.originalPrice) : parseFloat(item.price),
      image: item.image,
      quantity: item.quantity || 1,
      variant: item.variant || null,
      isUpsell: !!item.isUpsell
    });
  }
  saveCart(cart);
  return cart;
}

function updateCartQuantity(cartItemId, newQty) {
  let cart = getCart();
  if (newQty <= 0) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
  } else {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) item.quantity = newQty;
  }
  saveCart(cart);
  return cart;
}

function removeFromCart(cartItemId) {
  let cart = getCart();
  cart = cart.filter(item => item.cartItemId !== cartItemId);
  saveCart(cart);
  return cart;
}

function getCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 49.00;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 4.90;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const total = subtotal + shipping;

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
    totalCount,
    freeShippingThreshold,
    amountNeededForFreeShipping: parseFloat(amountNeededForFreeShipping.toFixed(2)),
    hasFreeShipping: subtotal >= freeShippingThreshold && subtotal > 0
  };
}

function checkAdminAuth() {
  return localStorage.getItem(STORAGE_KEYS.AUTH) === 'authenticated';
}

function setAdminAuth(isAuth) {
  if (isAuth) {
    localStorage.setItem(STORAGE_KEYS.AUTH, 'authenticated');
  } else {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  }
}

// Global Export
window.CloudStore = {
  getProducts,
  saveProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  reorderProducts,
  getLayoutSettings,
  saveLayoutSettings,
  getUpsellConfig,
  saveUpsellConfig,
  getCart,
  saveCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  getCartTotals,
  checkAdminAuth,
  setAdminAuth,
  DEFAULT_PRODUCTS,
  DEFAULT_UPSELL_CONFIG
};

window.CloudIcons = {
  ICONS: CLOUD_ICONS,
  get: getIcon,
  getBadgeIcon,
  getStarRatingSvg,
  getPerimeterDecorations
};
