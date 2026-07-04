'use strict';

/* ───────── DATOS ───────── */
const RESTAURANTS = [
  {
    id: 'terraza', name: 'La Terraza', kind: 'Cocina de autor · Último piso',
    desc: 'Vista a la cordillera y cocina argentina contemporánea con productos de pequeños productores de la zona.',
    signature: 'Imperdible: el cordero confitado',
    hours: 'Cena · 20:00 – 23:30', openRanges: [[20, 23.5]], tables: 12,
    slots: ['20:00','20:30','21:00','21:30','22:00','22:30'],
    menu: [
      { section: 'Entradas', items: [
        { n: 'Burrata con tomates asados', d: 'Pesto de albahaca y focaccia de la casa', p: 14500, tags: ['V'] },
        { n: 'Tartar de trucha patagónica', d: 'Palta, lima y chips de batata', p: 16800, tags: ['SG'] },
        { n: 'Empanadas de osobuco', d: 'Braseado ocho horas, masa criolla · tres unidades', p: 11200, tags: [] }
      ]},
      { section: 'Principales', items: [
        { n: 'Ojo de bife madurado', d: '400 g · papas rústicas y chimichurri de hierbas', p: 32500, tags: ['SG'] },
        { n: 'Ñoquis de ricota y espinaca', d: 'Crema de parmesano y nuez', p: 21900, tags: ['V'] },
        { n: 'Cordero confitado', d: 'Doce horas a baja temperatura · puré de coliflor, reducción de malbec', p: 29800, tags: ['SG'] },
        { n: 'Pesca del día', d: 'Según llegada, con verduras grilladas', p: 26500, tags: ['SG'] }
      ]},
      { section: 'Postres', items: [
        { n: 'Flan de dulce de leche', d: 'Crema y nuez caramelizada', p: 8900, tags: ['V','SG'] },
        { n: 'Texturas de chocolate', d: 'Mousse 70 %, crocante y helado de cacao', p: 10500, tags: ['V'] }
      ]},
      { section: 'Vinos', items: [
        { n: 'Malbec · Valle de Uco', d: 'Copa 4.200 · selección del sommelier', p: 18500, tags: ['SG'] },
        { n: 'Torrontés · Cafayate', d: 'Copa 3.800 · frío de cava', p: 16200, tags: ['SG'] },
        { n: 'Espumante brut nature', d: 'Método tradicional, 24 meses', p: 21000, tags: ['SG'] }
      ]}
    ]
  },
  {
    id: 'raices', name: 'Raíces Parrilla', kind: 'Parrilla a leña & cava',
    desc: 'Junto al jardín: cortes clásicos y achuras a leña de quebracho, con una cava de más de ochenta etiquetas.',
    signature: 'Imperdible: la entraña a la leña',
    hours: 'Almuerzo 12:30 – 15:00 · Cena 20:00 – 23:00', openRanges: [[12.5, 15],[20, 23]], tables: 16,
    slots: ['12:30','13:00','13:30','14:00','20:00','20:30','21:00','21:30','22:00'],
    menu: [
      { section: 'Para empezar', items: [
        { n: 'Provoleta a la leña', d: 'Orégano fresco y tomates confitados', p: 9800, tags: ['V','SG'] },
        { n: 'Chorizo y morcilla', d: 'De elaboración propia, con salsa criolla', p: 8500, tags: ['SG'] },
        { n: 'Mollejas al limón', d: 'Crocantes, con puré de papa ahumado', p: 13900, tags: ['SG'] }
      ]},
      { section: 'De la parrilla', items: [
        { n: 'Asado banderita', d: '450 g · cocción lenta a la leña', p: 27900, tags: ['SG'] },
        { n: 'Entraña', d: '350 g · con ensalada del huerto', p: 28900, tags: ['SG'] },
        { n: 'Pollo al limón', d: 'Deshuesado, papas al rescoldo', p: 19800, tags: ['SG'] },
        { n: 'Verduras de estación a la brasa', d: 'Con romesco y semillas tostadas', p: 15900, tags: ['V','SG'] }
      ]},
      { section: 'Postres', items: [
        { n: 'Queso y dulce', d: 'Pategrás y batata casera', p: 7200, tags: ['V','SG'] },
        { n: 'Panqueque de dulce de leche', d: 'Hecho al momento, flambeado en mesa', p: 8400, tags: ['V'] }
      ]}
    ]
  },
  {
    id: 'patio', name: 'Café del Patio', kind: 'Café & pastelería propia',
    desc: 'Desayunos, brunch y merienda bajo la glicina del patio central. La pastelería sale del horno toda la mañana.',
    signature: 'Imperdible: las medialunas de las 9',
    hours: 'Todos los días · 7:00 – 19:00', openRanges: [[7, 19]], tables: 10,
    slots: ['08:00','09:00','10:00','11:00','16:00','17:00','18:00'],
    menu: [
      { section: 'Desayuno & brunch', items: [
        { n: 'Desayuno Costa Andina', d: 'Café o té, jugo exprimido, tostadas de masa madre, huevos revueltos y fruta', p: 12500, tags: [] },
        { n: 'Tostado de jamón crudo', d: 'Pan de masa madre, rúcula y manteca de hierbas', p: 8900, tags: [] },
        { n: 'Bowl de yogur y granola', d: 'Frutas de estación y miel de la zona', p: 7800, tags: ['V'] }
      ]},
      { section: 'Pastelería', items: [
        { n: 'Medialunas de manteca', d: 'Tres unidades · salen del horno cada hora', p: 4200, tags: ['V'] },
        { n: 'Torta del día', d: 'Consulte por la opción sin TACC', p: 6500, tags: ['V'] },
        { n: 'Alfajor de la casa', d: 'Doble dulce de leche, baño de chocolate semiamargo', p: 3900, tags: ['V'] }
      ]},
      { section: 'Café & bebidas', items: [
        { n: 'Espresso · cortado', d: 'Blend propio, tostado en Córdoba', p: 2800, tags: ['V','SG'] },
        { n: 'Submarino', d: 'Con barra de chocolate semiamargo', p: 4500, tags: ['V','SG'] },
        { n: 'Limonada del patio', d: 'Limón, menta y jengibre', p: 3800, tags: ['V','SG'] }
      ]}
    ]
  }
];

/* Claves de almacenamiento */
const SS = 'ry_session', SB = 'ry_bookings', SP = 'ry_prefs', ST = 'ry_status';
const SK_BLK = 'ry_blocked', SK_86 = 'ry_86', SK_CAP = 'ry_caps', SK_WL = 'ry_wait';
const MONTHS = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
const DOWS = ['DOM','LUN','MAR','MIÉ','JUE','VIE','SÁB'];

/* Roles del personal: clave → rol */
const STAFF_KEYS = { '1': 'recepcion', '2': 'maitre', '3': 'gerencia' };
const ROLE_NAME = { recepcion: 'Recepción', maitre: 'Maître', gerencia: 'Gerencia' };

let session = null, currentResto = null;
let selDate = null, selSlot = null, people = 2, pendingCancelId = null;
let occasion = null, cartaOnlyApt = false, cartaTab = 0;
let prefs = { veg: false, celiac: false, note: '' };
const $ = id => document.getElementById(id);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ───────── HELPERS ───────── */
let _bCache = null;
const loadB = () => { if (_bCache) return _bCache; try { return _bCache = JSON.parse(localStorage.getItem(SB)) || []; } catch(e) { return []; } };
const saveB = l => { localStorage.setItem(SB, JSON.stringify(l)); _bCache = null; };
const loadJ = (k, fb) => { try { return JSON.parse(localStorage.getItem(k)) || fb; } catch(e) { return fb; } };
const saveJ = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const money = n => '$ ' + n.toLocaleString('es-AR');
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmtLong = iso => {
  const t = new Date(iso + 'T12:00:00').toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
  return t.charAt(0).toUpperCase() + t.slice(1);
};
function nextDays(n) {
  const out = [], t = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(t); d.setDate(t.getDate() + i);
    out.push({ iso: d.toISOString().slice(0,10), d, today: i === 0 });
  }
  return out;
}
const todayIso = () => nextDays(1)[0].iso;
function isOpenNow(r) {
  const d = new Date(), h = d.getHours() + d.getMinutes()/60;
  return r.openRanges.some(([a,b]) => h >= a && h < b);
}
function greetWord() {
  const h = new Date().getHours();
  return h < 12 ? 'Buen día' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
}

/* ─── Permisos por rol ─── */
function can(perm) {
  const role = session && session.role;
  if (perm === 'pause' || perm === 'capacity') return role === 'gerencia';
  if (perm === 'block' || perm === 'd86') return role === 'maitre' || role === 'gerencia';
  return true; // libro, altas, sentar, no-show, editar, cancelar, espera: todos
}

/* ─── Capacidad editable (mesas por salón) ─── */
const loadCaps = () => loadJ(SK_CAP, {});
function effTables(r) {
  const c = parseInt(loadCaps()[r.id], 10);
  return (c >= 1 && c <= r.tables) ? c : r.tables;
}
function setCap(restoId, n) {
  const caps = loadCaps();
  const r = RESTAURANTS.find(x => x.id === restoId);
  if (n >= r.tables) delete caps[restoId]; else caps[restoId] = Math.max(1, n);
  saveJ(SK_CAP, caps);
}

/* ─── Bloqueo de turnos puntuales ─── */
const loadBlocks = () => loadJ(SK_BLK, {});
function blockedReason(restoId, iso, slot) {
  const v = loadBlocks()[restoId + '|' + iso + '|' + slot];
  return v === undefined ? false : (v || '');
}
function toggleBlock(restoId, iso, slot, reason) {
  const blocks = loadBlocks();
  const key = restoId + '|' + iso + '|' + slot;
  let blocked;
  if (key in blocks) { delete blocks[key]; blocked = false; }
  else { blocks[key] = reason || ''; blocked = true; }
  saveJ(SK_BLK, blocks);
  return blocked;
}

/* ─── 86 de platos (agotados) ─── */
const load86 = () => loadJ(SK_86, {});
const dishKey = (rid, si, ii) => rid + '|' + si + '|' + ii;
const is86 = (rid, si, ii) => !!load86()[dishKey(rid, si, ii)];
function toggle86(rid, si, ii) {
  const m = load86(); const k = dishKey(rid, si, ii);
  if (m[k]) delete m[k]; else m[k] = true;
  saveJ(SK_86, m);
  return !!m[k];
}

/* ─── Lista de espera ─── */
const loadWL = () => loadJ(SK_WL, []);
const saveWL = l => saveJ(SK_WL, l);
function wlFind(room, restoId, iso, slot) {
  return loadWL().find(w => w.room === room && w.restoId === restoId && w.date === iso && w.time === slot);
}

/* ─── Capacidad real de mesas ───
   Cada salón tiene N mesas (editables desde gerencia) de hasta 4 cubiertos;
   un grupo ocupa ceil(personas/4) mesas. La ocupación combina una base
   simulada (otros huéspedes, determinística) + reservas reales.
   excludeId permite editar una reserva sin que se cuente a sí misma. */
function tablesNeeded(p) { return Math.max(1, Math.ceil((parseInt(p, 10) || 1) / 4)); }
function baseOccupancy(restoId, iso, slot, total) {
  let h = 0; const s = restoId + iso + slot;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  if (h % 13 === 0) return total;
  return Math.min(total, Math.floor(total * (0.15 + (h % 81) / 100)));
}
function tablesTaken(restoId, iso, slot, excludeId) {
  const r = RESTAURANTS.find(x => x.id === restoId);
  const total = effTables(r);
  const base = baseOccupancy(restoId, iso, slot, total);
  const real = loadB()
    .filter(b => b.restoId === restoId && b.date === iso && b.time === slot && b.id !== excludeId)
    .reduce((a, b) => a + tablesNeeded(b.people), 0);
  return Math.min(total, base + real);
}
function tablesFree(r, iso, slot, excludeId) {
  return Math.max(0, effTables(r) - tablesTaken(r.id, iso, slot, excludeId));
}
function toast(text) {
  $('toastText').textContent = text;
  const t = $('toast');
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 3600);
}
const stagger = el => [...el.children].forEach((c, i) => c.style.setProperty('--i', i));

/* ───────── LOBBY: polvo dorado + saludo ───────── */
(function lobbyAmbience() {
  $('lobbyGreet').textContent = greetWord() + '. Su mesa lo espera.';
  if (reduceMotion) return;
  const dust = $('dust');
  const moteCount = matchMedia('(max-width: 680px)').matches ? 8 : 16;
  for (let i = 0; i < moteCount; i++) {
    const m = document.createElement('span');
    m.className = 'mote';
    const size = 2 + Math.random() * 3.5;
    m.style.cssText = `left:${Math.random()*100}vw; width:${size}px; height:${size}px;` +
      `--dur:${16 + Math.random()*20}s; --delay:${-Math.random()*30}s;` +
      `--drift:${(Math.random()-.5)*120}px; --op:${.15 + Math.random()*.4};`;
    dust.appendChild(m);
  }
})();

/* ───────── LOGIN ───────── */
$('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const room = $('inRoom').value.trim();
  const surname = $('inSurname').value.trim();
  const err = $('loginError');
  if (!/^\d{1,4}$/.test(room)) { err.textContent = 'Ingrese un número de habitación válido.'; return; }
  if (surname.length < 2) { err.textContent = 'Ingrese su apellido como figura en el check-in.'; return; }
  err.textContent = '';
  session = { room, surname: surname.charAt(0).toUpperCase() + surname.slice(1) };
  sessionStorage.setItem(SS, JSON.stringify(session));
  enterApp();
});
function enterApp() {
  if (session.staff) { enterStaff(); return; }
  $('viewLogin').classList.add('hidden');
  $('viewApp').classList.remove('hidden');
  $('chipRoom').textContent = 'Hab. ' + session.room;
  $('btnPrefs').classList.remove('hidden');
  const saved = loadPrefs();
  prefs = saved || { veg: false, celiac: false, note: '' };
  syncPrefBtn();
  showHome();
  if (!saved) setTimeout(() => openPrefs(true), 900);
}
$('btnLogout').addEventListener('click', () => {
  sessionStorage.removeItem(SS); session = null;
  $('viewApp').classList.add('hidden');
  $('viewStaff').classList.add('hidden');
  $('btnPrefs').classList.remove('hidden');
  $('viewLogin').classList.remove('hidden');
  $('inRoom').value = ''; $('inSurname').value = ''; $('inStaffKey').value = '';
  setLoginTab('guest');
});

/* ───────── RELOJ DEL HOTEL ───────── */
(function clock() {
  const tick = () => $('clock').textContent =
    new Intl.DateTimeFormat('es-AR', { hour: '2-digit', minute: '2-digit' }).format(new Date());
  tick(); setInterval(tick, 15000);
})();

/* Refresco automático del panel del hotel (vista "ahora" + KPIs) */
setInterval(() => {
  if (session && session.staff && !$('viewStaff').classList.contains('hidden')) {
    renderNow(); renderKpis();
  }
}, 60000);

/* ───────── HOME ───────── */
function replay(el) { el.classList.remove('hidden','view-enter'); void el.offsetWidth; el.classList.add('view-enter'); }

function showHome() {
  currentResto = null;
  $('viewResto').classList.add('hidden');
  $('viewStaff').classList.add('hidden');
  $('fab').classList.remove('show');
  replay($('viewHome'));
  $('greeting').innerHTML = greetWord() + ', <em>' + esc(session.surname) + '</em>';
  renderRestos();
  renderBookings();
  renderMyWaitlist();
  window.scrollTo({ top: 0 });
}

function renderRestos() {
  const grid = $('restoGrid');
  grid.innerHTML = RESTAURANTS.map(r => {
    const open = isOpenNow(r);
    const paused = isClosedManually(r.id);
    return `
    <button class="scene" data-id="${r.id}" aria-label="Ver ${r.name}">
      <span class="scene-bg"></span>
      <span class="scene-ring"></span>
      <span class="scene-inner">
        <span class="scene-top">
          <span class="scene-kind">${r.kind}</span>
          ${paused ? `<span class="status closed">Reservas pausadas</span>` : `<span class="status ${open ? 'open' : 'closed'}">${open ? 'Abierto ahora' : 'Cerrado ahora'}</span>`}
        </span>
        <h3>${r.name}</h3>
        <span class="scene-desc">${r.desc}</span>
        <span class="scene-foot">
          <span class="scene-hours">${r.hours}</span>
          <span class="scene-cta">Ver carta y reservar <span class="arr">→</span></span>
          <span class="scene-sig">${r.signature}</span>
        </span>
      </span>
    </button>`;
  }).join('');
  stagger(grid);
  grid.querySelectorAll('.scene').forEach(card => {
    card.addEventListener('click', () => openResto(card.dataset.id));
    attachTilt(card);
  });
}

function attachTilt(card) {
  if (reduceMotion || !matchMedia('(pointer:fine)').matches) return;
  let raf = null;
  card.addEventListener('mousemove', e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `rotateY(${x * 3.5}deg) rotateX(${-y * 3.5}deg)`;
      raf = null;
    });
  });
  card.addEventListener('mouseleave', () => { if (raf) cancelAnimationFrame(raf); raf = null; card.style.transform = ''; });
}

function renderBookings() {
  const mine = loadB().filter(b => b.room === session.room);
  const box = $('myBookings');
  if (!mine.length) {
    box.innerHTML = `
      <div class="empty">
        <span class="serif">Su agenda está libre</span>
        <p>Todavía no tiene reservas. Elija un salón y asegure su mesa — le toma menos de un minuto.</p>
      </div>`;
    return;
  }
  mine.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  box.innerHTML = mine.map(b => {
    const r = RESTAURANTS.find(x => x.id === b.restoId);
    const d = new Date(b.date + 'T12:00:00');
    const bd = [];
    if (b.occasion) bd.push(b.occasion);
    if (b.diet && b.diet.celiac) bd.push('Sin TACC');
    if (b.diet && b.diet.veg) bd.push('Veg');
    if (b.note) bd.push('Nota a cocina');
    const badges = bd.length ? '<span class="t-badges">' + bd.map(x => '<span class="t-badge">' + x + '</span>').join('') + '</span>' : '';
    return `
      <div class="ticket">
        <div class="ticket-stub">
          <span class="dow">${DOWS[d.getDay()]}</span>
          <span class="day">${d.getDate()}</span>
          <span class="mon">${MONTHS[d.getMonth()]}</span>
        </div>
        <div class="ticket-body">
          <div>
            <h4>${r ? r.name : b.restoId}</h4>
            <div class="ticket-meta"><b>${b.time} hs</b> · ${b.people} ${b.people == 1 ? 'comensal' : 'comensales'} · a nombre de ${esc(b.surname)} · Hab. ${b.room}${badges}</div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn-edit" data-edit="${b.id}">Cambiar</button>
            <button class="btn-cancel" data-cancel="${b.id}">Cancelar</button>
          </div>
        </div>
      </div>`;
  }).join('');
  stagger(box);
  box.querySelectorAll('[data-cancel]').forEach(btn =>
    btn.addEventListener('click', () => askCancel(btn.dataset.cancel)));
  box.querySelectorAll('[data-edit]').forEach(btn =>
    btn.addEventListener('click', () => openEdit(btn.dataset.edit)));
}

/* ───────── LISTA DE ESPERA DEL HUÉSPED ───────── */
function renderMyWaitlist() {
  const mine = loadWL().filter(w => w.room === session.room)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  const box = $('myWaitlist');
  if (!mine.length) { box.innerHTML = ''; return; }
  box.innerHTML = `
    <div class="agenda-head" style="margin-top: 44px;">
      <span class="kicker">Lista de espera</span>
      <h2>En <em>espera</em></h2>
    </div>` +
    mine.map(w => {
      const r = RESTAURANTS.find(x => x.id === w.restoId);
      return `
      <div class="wl-row">
        <div class="grow"><b>${r ? r.name : w.restoId}</b> · ${fmtLong(w.date)} · <b>${w.time} hs</b> · ${w.people} ${w.people == 1 ? 'comensal' : 'comensales'}</div>
        <div class="wl-actions"><button class="btn-cancel" data-wlout="${w.id}">Salir de la lista</button></div>
      </div>`;
    }).join('') +
    `<p class="svc-meta" style="text-align:center; margin-top: 10px;">Si se libera una mesa, recepción lo contactará para confirmar.</p>`;
  box.querySelectorAll('[data-wlout]').forEach(btn =>
    btn.addEventListener('click', () => {
      saveWL(loadWL().filter(w => w.id !== btn.dataset.wlout));
      renderMyWaitlist();
      if (currentResto) renderSlots();
      toast('Salió de la lista de espera');
    }));
}

function joinWaitlist(slot) {
  const exists = wlFind(session.room, currentResto.id, selDate, slot);
  if (exists) {
    saveWL(loadWL().filter(w => w.id !== exists.id));
    toast('Salió de la lista de espera · ' + slot + ' hs');
  } else {
    const list = loadWL();
    list.push({
      id: 'w' + Date.now(), room: session.room, surname: session.surname,
      restoId: currentResto.id, date: selDate, time: slot, people, ts: Date.now()
    });
    saveWL(list);
    toast('Anotado en lista de espera · ' + currentResto.name + ' · ' + slot + ' hs');
  }
  renderSlots();
}

/* ───────── DETALLE + CARTA ───────── */
function openResto(id) {
  currentResto = RESTAURANTS.find(r => r.id === id);
  if (!currentResto) return;
  selSlot = null; selDate = todayIso(); people = 2;

  $('viewHome').classList.add('hidden');
  replay($('viewResto'));

  $('restoHero').innerHTML = `
    <span class="scene-bg" data-bg></span>
    <span class="scene-ring"></span>
    <div class="detail-hero-inner">
      <h2>${currentResto.name}</h2>
      <span class="scene-kind">${currentResto.kind}</span>
      <p>${currentResto.desc}</p>
      <div class="meta-row">
        <span>${currentResto.hours}</span>
        <span class="dia"></span>
        <span>${currentResto.signature}</span>
      </div>
    </div>`;
  $('restoHero').className = 'detail-hero scene';
  $('restoHero').dataset.id = currentResto.id;

  occasion = null; cartaOnlyApt = false;
  renderCarta('all');
  renderDates();
  renderPeople();
  renderSlots();
  renderOccasions();
  $('occNote').value = '';
  updateSentence();
  $('bookMsg').textContent = '';
  window.scrollTo({ top: 0 });
  watchFab();
}

function renderCarta(active) {
  cartaTab = active;
  const r = currentResto;
  const apt = it => !prefs.celiac || it.tags.includes('SG');
  const personalized = prefs.veg || prefs.celiac || prefs.note;
  const all = active === 'all';
  const secIdx = all ? r.menu.map((_, i) => i) : [active];

  /* Los platos en 86 desaparecen de la carta del huésped */
  const available = si => r.menu[si].items
    .map((it, ii) => ({ it, ii }))
    .filter(x => !is86(r.id, si, x.ii));
  const aptCount = si => available(si).filter(x => apt(x.it)).length;

  const itemHtml = it => {
    const fav = prefs.veg && it.tags.includes('V');
    const no = prefs.celiac && !it.tags.includes('SG');
    return `
        <div class="menu-item${fav && !no ? ' mi-pref' : ''}${no ? ' mi-no' : ''}">
          <span class="n">${it.n}${it.tags.length ? '<span class="tags">' + it.tags.map(t => `<span class="tag ${t === 'SG' ? 'sg' : 'v'}">${t}</span>`).join('') + '</span>' : ''}</span>
          <span class="leader"></span>
          <span class="p">${money(it.p)}</span>
        </div>
        <div class="menu-desc${no ? ' mi-no' : ''}${fav && !no ? ' mi-pref' : ''}">${it.d}</div>
        ${fav && !no ? '<div class="mi-pref-note">Sugerido para usted</div>' : ''}
        ${no ? '<div class="mi-no-note">No apto sin TACC · consulte adaptaciones en salón</div>' : ''}`;
  };

  const sectionsHtml = secIdx.map(si => {
    const visible = available(si).filter(x => !cartaOnlyApt || apt(x.it));
    return `
      ${all ? `<div class="carta-sec-title">${r.menu[si].section}</div>` : ''}
      ${visible.length ? visible.map(x => itemHtml(x.it)).join('') : '<div class="menu-desc" style="text-align:center; padding: 12px 0;">No hay platos disponibles en esta sección por el momento — consulte en salón.</div>'}`;
  }).join('');

  $('menuArea').innerHTML = `
    <div class="carta-head">
      <span class="kicker">La carta</span>
      <div class="serif">${r.name}</div>
    </div>
    ${personalized ? `
    <div class="carta-banner">
      <span>Adaptada a usted</span>
      ${prefs.veg ? '<span class="b-chip">✦ Vegetariano</span>' : ''}
      ${prefs.celiac ? '<span class="b-chip">Sin TACC</span>' : ''}
      ${prefs.note ? '<span class="b-chip">Cocina avisada</span>' : ''}
    </div>` : ''}
    <div class="carta-tabs">
      <button class="carta-tab${all ? ' on' : ''}" data-tab="all">Toda la carta</button>
      ${r.menu.map((s, i) => `<button class="carta-tab${!all && i === active ? ' on' : ''}" data-tab="${i}">${s.section}${prefs.celiac ? ' (' + aptCount(i) + ')' : ''}</button>`).join('')}
    </div>
    ${prefs.celiac ? `
    <div class="carta-filter">
      <button type="button" id="onlyApt" class="${cartaOnlyApt ? 'on' : ''}">${cartaOnlyApt ? '✓ Solo aptos sin TACC' : 'Mostrar solo aptos sin TACC'}</button>
    </div>` : ''}
    <div class="carta-section">${sectionsHtml}</div>
    <div class="carta-foot">V · vegetariano &nbsp;✦&nbsp; SG · sin gluten / sin TACC &nbsp;✦&nbsp; Cargo a habitación disponible en todos los salones</div>
  `;
  $('menuArea').querySelectorAll('.carta-tab').forEach(t =>
    t.addEventListener('click', () => {
      const v = t.dataset.tab;
      renderCarta(v === 'all' ? 'all' : parseInt(v, 10));
    }));
  const fb = document.getElementById('onlyApt');
  if (fb) fb.addEventListener('click', () => { cartaOnlyApt = !cartaOnlyApt; renderCarta(cartaTab); });
}

/* ───────── RITUAL DE RESERVA ───────── */
function renderDates() {
  const box = $('dates');
  box.innerHTML = nextDays(7).map(d => `
    <button type="button" class="date-chip${d.iso === selDate ? ' sel' : ''}${d.today ? ' today' : ''}" data-iso="${d.iso}">
      <span class="dw">${d.today ? 'Hoy' : DOWS[d.d.getDay()]}</span>
      <span class="dd">${d.d.getDate()}</span>
      <span class="dm">${MONTHS[d.d.getMonth()]}</span>
    </button>`).join('');
  box.querySelectorAll('.date-chip').forEach(c =>
    c.addEventListener('click', () => {
      selDate = c.dataset.iso; selSlot = null;
      renderDates(); renderSlots(); updateSentence();
      $('bookMsg').textContent = '';
    }));
}

function renderPeople() {
  $('peopleVal').innerHTML = people + ' <small>' + (people === 1 ? 'comensal' : 'comensales') + '</small>';
  $('stepDown').disabled = people <= 1;
  $('stepUp').disabled = people >= 8;
}
$('stepDown').addEventListener('click', () => { if (people > 1) { people--; renderPeople(); renderSlots(); updateSentence(); } });
$('stepUp').addEventListener('click', () => { if (people < 8) { people++; renderPeople(); renderSlots(); updateSentence(); } });

function renderSlots() {
  const box = $('slots');
  if (isClosedManually(currentResto.id)) {
    box.innerHTML = '<div style="color: var(--muted); font-style: italic; font-family: Cormorant Garamond, serif; font-size: 16px;">El salón no está recibiendo reservas en este momento · consulte en recepción (interno 0)</div>';
    return;
  }
  const need = tablesNeeded(people);
  if (selSlot && (tablesFree(currentResto, selDate, selSlot) < need || blockedReason(currentResto.id, selDate, selSlot) !== false)) {
    selSlot = null; updateSentence();
  }
  box.innerHTML = currentResto.slots.map(s => {
    const blk = blockedReason(currentResto.id, selDate, s);
    if (blk !== false) {
      return `<button type="button" class="slot blk" disabled title="No disponible">${s}<span class="cap">No disponible${blk ? ' · ' + esc(blk) : ''}</span></button>`;
    }
    const free = tablesFree(currentResto, selDate, s);
    if (free === 0) {
      const onWl = !!wlFind(session.room, currentResto.id, selDate, s);
      return `<button type="button" class="slot wait${onWl ? ' onwl' : ''}" data-wl="${s}">${s}<span class="cap">${onWl ? '✓ En lista de espera' : 'Completo · anotarse en espera'}</span></button>`;
    }
    if (free < need) return `<button type="button" class="slot" disabled title="Sin mesa para ${people}">${s}<span class="cap">Sin mesa para ${people}</span></button>`;
    const tag = free === 1 ? '<span class="few">Última mesa</span>' : free <= 3 ? `<span class="few">Quedan ${free} mesas</span>` : '';
    return `<button type="button" class="slot${selSlot === s ? ' sel' : ''}" data-slot="${s}">${tag}${s}</button>`;
  }).join('');
  box.querySelectorAll('.slot[data-slot]').forEach(b =>
    b.addEventListener('click', () => {
      selSlot = b.dataset.slot;
      renderSlots(); updateSentence();
      $('bookMsg').textContent = '';
    }));
  box.querySelectorAll('.slot[data-wl]').forEach(b =>
    b.addEventListener('click', () => joinWaitlist(b.dataset.wl)));
}

function updateSentence() {
  const s = $('sentence');
  if (!selSlot) {
    s.innerHTML = 'Elija día y horario, y su mesa quedará dispuesta.';
    s.style.opacity = .55;
    return;
  }
  const today = selDate === todayIso();
  s.style.opacity = 1;
  s.innerHTML = `Una mesa para <b>${people}</b> en <b>${currentResto.name}</b>, ${today ? '<b>esta ' + (parseInt(selSlot) < 16 ? 'tarde' : 'noche') + '</b>' : fmtLong(selDate).toLowerCase()} a las <b>${selSlot}</b>.`;
}

$('btnBack').addEventListener('click', showHome);

let fabIO = null;
function watchFab() {
  if (fabIO) fabIO.disconnect();
  fabIO = new IntersectionObserver(([e]) => {
    $('fab').classList.toggle('show', !e.isIntersecting && currentResto);
  }, { threshold: .08 });
  fabIO.observe($('bookPanel'));
}
$('fab').addEventListener('click', () =>
  $('bookPanel').scrollIntoView({ behavior: 'smooth', block: 'start' }));

/* ───────── CONFIRMAR ───────── */
$('btnBook').addEventListener('click', () => {
  const msg = $('bookMsg');
  if (isClosedManually(currentResto.id)) { msg.textContent = 'El salón no está recibiendo reservas · consulte en recepción.'; return; }
  if (!selSlot) { msg.textContent = 'Elija un horario para su mesa.'; return; }
  if (blockedReason(currentResto.id, selDate, selSlot) !== false) {
    msg.textContent = 'Ese turno ya no está disponible · elija otro.';
    renderSlots(); return;
  }

  const list = loadB();
  const dup = list.find(b => b.room === session.room && b.restoId === currentResto.id && b.date === selDate && b.time === selSlot);
  if (dup) { msg.textContent = 'Ya tiene una reserva en este salón para ese día y horario.'; return; }
  if (tablesFree(currentResto, selDate, selSlot) < tablesNeeded(people)) {
    msg.textContent = 'Ese horario acaba de completarse · elija otro.';
    renderSlots(); return;
  }

  const kitchenNote = $('occNote').value.trim();
  list.push({
    id: 'b' + Date.now(), room: session.room, surname: session.surname,
    restoId: currentResto.id, date: selDate, time: selSlot, people,
    occasion, note: kitchenNote || null,
    diet: (prefs.veg || prefs.celiac || prefs.note) ? { veg: prefs.veg, celiac: prefs.celiac, note: prefs.note || null } : null
  });
  saveB(list);

  /* Si estaba en lista de espera para ese turno, lo saco automáticamente */
  const wl = wlFind(session.room, currentResto.id, selDate, selSlot);
  if (wl) saveWL(loadWL().filter(w => w.id !== wl.id));

  $('successDetail').innerHTML =
    `${currentResto.name} · mesa para ${people}<small>${fmtLong(selDate)} · ${selSlot} hs · a nombre de ${esc(session.surname)} · Hab. ${session.room}${occasion ? ' · ' + occasion : ''}</small>`;
  const avis = [];
  if (prefs.celiac) avis.push('menú sin TACC');
  if (prefs.veg) avis.push('preferencia vegetariana');
  if (prefs.note) avis.push('sus indicaciones');
  if (kitchenNote) avis.push('su nota');
  $('successNote').textContent = avis.length
    ? 'La cocina fue avisada: ' + avis.join(', ') + '. Si sus planes cambian, puede modificar o cancelar desde su agenda.'
    : 'Recepción ya fue notificada. Si sus planes cambian, puede modificar o cancelar desde su agenda.';
  const back = $('successBack');
  back.classList.remove('hidden');
  const card = back.querySelector('.success-card');
  card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
});
$('successOk').addEventListener('click', () => {
  $('successBack').classList.add('hidden');
  showHome();
});

/* ───────── EDITAR RESERVA (sin cancelar y recrear) ───────── */
let ed = null; // { id, restoId, room, date, time, people, orig: {date, time} }

function openEdit(id) {
  const b = loadB().find(x => x.id === id);
  if (!b) return;
  const r = RESTAURANTS.find(x => x.id === b.restoId);
  if (!r) return;
  ed = {
    id, restoId: b.restoId, room: b.room,
    date: b.date, time: b.time,
    people: Math.min(12, Math.max(1, parseInt(b.people, 10) || 1)),
    orig: { date: b.date, time: b.time }
  };
  $('edWhere').textContent = r.name + ' · a nombre de ' + b.surname + ' · Hab. ' + b.room;
  $('edNote').value = b.note || '';
  $('edMsg').textContent = '';
  renderEdDates(); renderEdPeople(); renderEdSlots();
  $('editBack').classList.remove('hidden');
}

function renderEdDates() {
  $('edDates').innerHTML = nextDays(7).map(d => `
    <button type="button" class="date-chip${d.iso === ed.date ? ' sel' : ''}${d.today ? ' today' : ''}" data-iso="${d.iso}">
      <span class="dw">${d.today ? 'Hoy' : DOWS[d.d.getDay()]}</span><span class="dd">${d.d.getDate()}</span><span class="dm">${MONTHS[d.d.getMonth()]}</span>
    </button>`).join('');
  $('edDates').querySelectorAll('.date-chip').forEach(c =>
    c.addEventListener('click', () => {
      ed.date = c.dataset.iso;
      ed.time = (ed.date === ed.orig.date) ? ed.orig.time : null;
      renderEdDates(); renderEdSlots();
      $('edMsg').textContent = '';
    }));
}

function renderEdPeople() {
  $('edVal').innerHTML = ed.people + ' <small>' + (ed.people === 1 ? 'comensal' : 'comensales') + '</small>';
  $('edDown').disabled = ed.people <= 1;
  $('edUp').disabled = ed.people >= 12;
}
$('edDown').addEventListener('click', () => { if (ed && ed.people > 1) { ed.people--; renderEdPeople(); renderEdSlots(); } });
$('edUp').addEventListener('click', () => { if (ed && ed.people < 12) { ed.people++; renderEdPeople(); renderEdSlots(); } });

function renderEdSlots() {
  const r = RESTAURANTS.find(x => x.id === ed.restoId);
  const need = tablesNeeded(ed.people);
  /* Si el horario elegido quedó sin lugar (por ej. al subir comensales), lo limpio */
  if (ed.time && tablesFree(r, ed.date, ed.time, ed.id) < need) ed.time = null;
  $('edSlots').innerHTML = r.slots.map(s => {
    const isOrig = ed.date === ed.orig.date && s === ed.orig.time;
    const blk = blockedReason(r.id, ed.date, s);
    /* El turno original sigue siendo válido aunque esté bloqueado (la reserva ya existía) */
    if (blk !== false && !isOrig) return `<button type="button" class="slot blk" disabled>${s}<span class="cap">No disponible</span></button>`;
    const free = tablesFree(r, ed.date, s, ed.id);
    if (free < need) return `<button type="button" class="slot" disabled>${s}<span class="cap">${free === 0 ? 'Completo' : 'Sin mesa para ' + ed.people}</span></button>`;
    return `<button type="button" class="slot${ed.time === s ? ' sel' : ''}" data-slot="${s}">${s}${isOrig ? '<span class="cap">Horario actual</span>' : ''}</button>`;
  }).join('');
  $('edSlots').querySelectorAll('.slot[data-slot]').forEach(b =>
    b.addEventListener('click', () => {
      ed.time = b.dataset.slot;
      renderEdSlots();
      $('edMsg').textContent = '';
    }));
}

$('edSave').addEventListener('click', () => {
  if (!ed) return;
  const msg = $('edMsg');
  if (!ed.time) { msg.textContent = 'Elija un horario.'; return; }
  const r = RESTAURANTS.find(x => x.id === ed.restoId);
  const list = loadB();
  const b = list.find(x => x.id === ed.id);
  if (!b) { closeEdit(); return; }
  const dup = list.find(x => x.id !== ed.id && x.room === b.room && x.restoId === ed.restoId && x.date === ed.date && x.time === ed.time);
  if (dup) { msg.textContent = 'Ya existe otra reserva de esta habitación en ese turno.'; return; }
  if (tablesFree(r, ed.date, ed.time, ed.id) < tablesNeeded(ed.people)) {
    msg.textContent = 'No queda mesa para ese grupo en ese horario.';
    renderEdSlots(); return;
  }
  b.date = ed.date; b.time = ed.time; b.people = ed.people;
  b.note = $('edNote').value.trim() || null;
  saveB(list);
  closeEdit();
  if (session && session.staff) { renderSvc(); renderKpis(); renderMgrSalons(); renderNow(); }
  else { renderBookings(); if (currentResto) renderSlots(); }
  toast('Reserva modificada · ' + r.name + ' · ' + fmtLong(ed.date) + ' · ' + ed.time + ' hs');
});
function closeEdit() { ed = null; $('editBack').classList.add('hidden'); }
$('edCancel').addEventListener('click', closeEdit);
$('editBack').addEventListener('click', e => { if (e.target === $('editBack')) closeEdit(); });

/* ───────── CANCELAR ───────── */
function askCancel(id) {
  const b = loadB().find(x => x.id === id);
  if (!b) return;
  const r = RESTAURANTS.find(x => x.id === b.restoId);
  pendingCancelId = id;
  $('modalText').textContent = `${r ? r.name : ''} · ${fmtLong(b.date)} · ${b.time} hs · ${b.people} ${b.people == 1 ? 'comensal' : 'comensales'}`;
  $('modalBack').classList.remove('hidden');
}
$('modalNo').addEventListener('click', () => { pendingCancelId = null; $('modalBack').classList.add('hidden'); });
$('modalBack').addEventListener('click', e => {
  if (e.target === $('modalBack')) { pendingCancelId = null; $('modalBack').classList.add('hidden'); }
});
$('modalYes').addEventListener('click', () => {
  if (pendingCancelId) {
    const b = loadB().find(x => x.id === pendingCancelId);
    saveB(loadB().filter(x => x.id !== pendingCancelId));
    pendingCancelId = null;
    if (session && session.staff) {
      renderSvc(); renderKpis(); renderMgrSalons(); renderNow();
      /* Aviso si hay lista de espera para el turno liberado */
      if (b) {
        const waiting = loadWL().filter(w => w.restoId === b.restoId && w.date === b.date && w.time === b.time).length;
        toast(waiting ? `Mesa liberada · hay ${waiting} en lista de espera para ese turno` : 'Reserva cancelada · la mesa quedó liberada');
      } else toast('Reserva cancelada · la mesa quedó liberada');
    } else {
      renderBookings();
      if (currentResto) renderSlots();
      toast('Reserva cancelada · la mesa quedó liberada');
    }
  }
  $('modalBack').classList.add('hidden');
});

/* ───────── PREFERENCIAS DEL HUÉSPED ───────── */
function loadPrefsAll() { return loadJ(SP, {}); }
function loadPrefs() { return loadPrefsAll()[session.room] || null; }
function savePrefs(p) { const all = loadPrefsAll(); all[session.room] = p; saveJ(SP, all); }

function syncPrefBtn() {
  const tags = [];
  if (prefs.veg) tags.push('Veg');
  if (prefs.celiac) tags.push('Sin TACC');
  const btn = $('btnPrefs');
  btn.classList.toggle('set', tags.length > 0 || !!prefs.note);
  btn.textContent = tags.length ? '✦ ' + tags.join(' · ') : '✦ Preferencias';
}

function openPrefs(first) {
  $('swVeg').classList.toggle('on', prefs.veg);
  $('swVeg').setAttribute('aria-checked', String(prefs.veg));
  $('swCeliac').classList.toggle('on', prefs.celiac);
  $('swCeliac').setAttribute('aria-checked', String(prefs.celiac));
  $('prefNote').value = prefs.note || '';
  $('prefsSkip').textContent = first ? 'Ahora no' : 'Cancelar';
  $('prefsBack').classList.remove('hidden');
}

['swVeg', 'swCeliac'].forEach(id =>
  $(id).addEventListener('click', () => {
    const on = $(id).classList.toggle('on');
    $(id).setAttribute('aria-checked', String(on));
  }));

$('prefsSave').addEventListener('click', () => {
  prefs = {
    veg: $('swVeg').classList.contains('on'),
    celiac: $('swCeliac').classList.contains('on'),
    note: $('prefNote').value.trim()
  };
  savePrefs(prefs);
  syncPrefBtn();
  $('prefsBack').classList.add('hidden');
  if (currentResto) renderCarta(cartaTab);
  toast('Preferencias guardadas · la carta se adapta a usted');
});
$('prefsSkip').addEventListener('click', () => {
  savePrefs(prefs);
  $('prefsBack').classList.add('hidden');
});
$('prefsBack').addEventListener('click', e => {
  if (e.target === $('prefsBack')) $('prefsBack').classList.add('hidden');
});
$('btnPrefs').addEventListener('click', () => openPrefs(false));

/* ───────── OCASIÓN ───────── */
const OCCASIONS = ['Sin ocasión', 'Aniversario', 'Cumpleaños', 'Negocios'];
function renderOccasions() {
  const box = $('occasions');
  box.innerHTML = OCCASIONS.map(o =>
    `<button type="button" class="occ${(occasion === o || (!occasion && o === 'Sin ocasión')) ? ' sel' : ''}" data-occ="${o}">${o}</button>`
  ).join('');
  box.querySelectorAll('.occ').forEach(b =>
    b.addEventListener('click', () => {
      occasion = b.dataset.occ === 'Sin ocasión' ? null : b.dataset.occ;
      renderOccasions();
    }));
}

/* ───────── INGRESO DIVIDIDO ───────── */
function setLoginTab(which) {
  const g = which === 'guest';
  $('tabGuest').classList.toggle('on', g);
  $('tabStaff').classList.toggle('on', !g);
  $('tabGuest').setAttribute('aria-selected', String(g));
  $('tabStaff').setAttribute('aria-selected', String(!g));
  $('paneGuest').classList.toggle('hidden', !g);
  $('paneStaff').classList.toggle('hidden', g);
}
$('tabGuest').addEventListener('click', () => setLoginTab('guest'));
$('tabStaff').addEventListener('click', () => setLoginTab('staff'));

$('staffForm').addEventListener('submit', e => {
  e.preventDefault();
  const key = $('inStaffKey').value.trim();
  const role = STAFF_KEYS[key];
  if (!role) { $('staffError').textContent = 'Clave incorrecta · consulte con gerencia.'; return; }
  $('staffError').textContent = '';
  session = { staff: true, role };
  sessionStorage.setItem(SS, JSON.stringify(session));
  enterStaff();
});

/* ───────── ESTADO DE SALONES ───────── */
function loadStatus() { return loadJ(ST, {}); }
function saveStatus(s) { saveJ(ST, s); }
function isClosedManually(id) { return !!loadStatus()[id]; }

/* ───────── PANEL DEL HOTEL ───────── */
let wiSalonId = RESTAURANTS[0].id, wiDate = null, wiSlot = null;
let svcDate = null, svcFilterId = 'all';
let blkSalonId = RESTAURANTS[0].id, blkDate = null;
let d86SalonId = RESTAURANTS[0].id;

function enterStaff() {
  if (!session.role) session.role = 'gerencia'; // sesiones viejas
  $('viewLogin').classList.add('hidden');
  $('viewApp').classList.remove('hidden');
  $('chipRoom').textContent = ROLE_NAME[session.role] || 'Personal';
  $('btnPrefs').classList.add('hidden');
  $('viewHome').classList.add('hidden');
  $('viewResto').classList.add('hidden');
  $('fab').classList.remove('show');
  replay($('viewStaff'));
  $('staffGreeting').innerHTML = greetWord() + ', <em>' + (ROLE_NAME[session.role] || 'equipo').toLowerCase() + '</em>';
  /* Secciones según rol */
  $('blockSection').classList.toggle('hidden', !can('block'));
  $('d86Section').classList.toggle('hidden', !can('d86'));
  wiSalonId = RESTAURANTS[0].id; wiDate = todayIso(); wiSlot = null;
  svcDate = wiDate; svcFilterId = 'all';
  blkSalonId = RESTAURANTS[0].id; blkDate = wiDate;
  d86SalonId = RESTAURANTS[0].id;
  renderKpis(); renderNow(); renderMgrSalons();
  if (can('block')) { renderBlkSalon(); renderBlkDates(); renderBlkSlots(); }
  if (can('d86')) { renderD86Salon(); renderD86List(); }
  renderWiSalon(); renderWiDates(); renderWiSlots();
  renderSvcDates(); renderSvcFilter(); renderSvc();
  bindAccordion();
  window.scrollTo({ top: 0 });
}

// Toggle accordion en mobile
function bindAccordion() {
  $('viewStaff').querySelectorAll('.acc-head').forEach(head => {
    head.onclick = () => head.closest('.acc').classList.toggle('open');
  });
}

function renderKpis() {
  const today = todayIso();
  const todays = loadB().filter(b => b.date === today);
  const covers = todays.reduce((a, b) => a + (parseInt(b.people, 10) || 0), 0);
  const now = new Date(); const nowM = now.getHours() * 60 + now.getMinutes();
  const soon = todays.filter(b => {
    const [h, m] = b.time.split(':').map(Number);
    const t = h * 60 + m;
    return t >= nowM && t <= nowM + 120 && !b.seated && !b.noshow;
  }).length;
  const noshows = todays.filter(b => b.noshow).length;
  let taken = 0, total = 0;
  RESTAURANTS.forEach(r => r.slots.forEach(s => { taken += tablesTaken(r.id, today, s); total += effTables(r); }));
  const occPct = total ? Math.round(taken / total * 100) : 0;
  $('kpis').innerHTML = [
    [todays.length, 'Reservas hoy'],
    [covers, 'Cubiertos hoy'],
    [soon, 'Próximas 2 horas'],
    [noshows, 'No-shows hoy'],
    [occPct + '%', 'Ocupación hoy']
  ].map(([v, l]) => `<div class="kpi"><b>${v}</b><span>${l}</span></div>`).join('');
  stagger($('kpis'));
}

/* ─── Vista "ahora": llegadas de los próximos 30 minutos ─── */
function renderNow() {
  const box = $('nowPanel');
  const today = todayIso();
  const now = new Date(); const nowM = now.getHours() * 60 + now.getMinutes();
  const items = loadB()
    .filter(b => {
      if (b.date !== today || b.seated || b.noshow) return false;
      const [h, m] = b.time.split(':').map(Number);
      const t = h * 60 + m;
      return t >= nowM - 15 && t <= nowM + 30; // 15 min de tolerancia hacia atrás
    })
    .sort((a, b) => a.time.localeCompare(b.time));
  if (!items.length) { box.innerHTML = ''; return; }
  box.innerHTML = `
    <div class="agenda-head"><span class="kicker">Ahora</span><h2>Llegan en los próximos <em>30 minutos</em></h2></div>` +
    items.map(b => {
      const r = RESTAURANTS.find(x => x.id === b.restoId);
      const [h, m] = b.time.split(':').map(Number);
      const diff = h * 60 + m - nowM;
      const eta = diff < 0 ? 'Demorado ' + (-diff) + ' min' : diff === 0 ? 'Ahora' : 'En ' + diff + ' min';
      const notes = [b.note, b.diet && b.diet.note].filter(Boolean).map(esc).join(' · ');
      return `
      <div class="svc-row now">
        <div class="svc-time">${b.time}</div>
        <div class="svc-main">
          <h4>${esc(b.surname)} <small>· Hab. ${b.room} · ${r ? r.name : b.restoId}</small></h4>
          <div class="svc-meta">${b.people} ${b.people == 1 ? 'comensal' : 'comensales'}${b.occasion ? ' · ' + b.occasion : ''}</div>
          ${notes ? `<div class="svc-note">"${notes}"</div>` : ''}
        </div>
        <span class="now-eta">${eta}</span>
        <div class="svc-actions">
          <button class="btn-seat" data-nowseat="${b.id}">Sentar</button>
        </div>
      </div>`;
    }).join('');
  box.querySelectorAll('[data-nowseat]').forEach(btn =>
    btn.addEventListener('click', () => {
      const list = loadB();
      const b = list.find(x => x.id === btn.dataset.nowseat);
      if (b) { b.seated = true; b.noshow = false; saveB(list); renderNow(); renderSvc(); renderKpis(); }
    }));
}

function renderMgrSalons() {
  const st = loadStatus();
  const today = todayIso();
  $('mgrSalons').innerHTML = RESTAURANTS.map(r => {
    const closed = !!st[r.id];
    const open = isOpenNow(r);
    const eff = effTables(r);
    const occ = r.slots.map(s => {
      const blk = blockedReason(r.id, today, s);
      if (blk !== false) return `<span class="occ-cell full"><b>${s}</b><i><u style="width:100%"></u></i><small>Bloqueado</small></span>`;
      const taken = tablesTaken(r.id, today, s);
      const p = eff ? Math.round(taken / eff * 100) : 0;
      return `<span class="occ-cell${taken >= eff ? ' full' : ''}"><b>${s}</b><i><u style="width:${p}%"></u></i><small>${taken}/${eff} mesas</small></span>`;
    }).join('');
    const capCtl = can('capacity') ? `
          <span class="cap-ctl">
            <button type="button" data-capdown="${r.id}" ${eff <= 1 ? 'disabled' : ''} aria-label="Menos mesas en ${r.name}">−</button>
            <b>${eff} mesas</b>
            <button type="button" data-capup="${r.id}" ${eff >= r.tables ? 'disabled' : ''} aria-label="Más mesas en ${r.name}">+</button>
          </span>` : '';
    return `
      <div class="mgr-salon">
        <div style="flex:1; min-width: 260px;">
          <h4>${r.name}</h4>
          <div class="ms-meta">${r.hours} · <span class="${open ? 'ms-open' : 'ms-dim'}">${open ? 'en horario de servicio' : 'fuera de horario'}</span></div>
          <div class="ms-meta">${eff} mesas habilitadas · hasta ${eff * 4} cubiertos por turno${capCtl}</div>
          ${eff < r.tables ? `<div class="cap-reduced">Capacidad reducida: ${eff} de ${r.tables} mesas (p. ej. sector cerrado por clima)</div>` : ''}
          ${closed ? '<div class="ms-closed">Reservas pausadas — los huéspedes no pueden reservar este salón</div>' : ''}
          <div class="occ-grid">${occ}</div>
        </div>
        <div class="ms-action">
          <span class="ms-label">${closed ? 'Pausado' : 'Recibe reservas'}</span>
          ${can('pause')
            ? `<button type="button" class="switch${closed ? '' : ' on'}" data-salon="${r.id}" role="switch" aria-checked="${!closed}" aria-label="Recibir reservas en ${r.name}"></button>`
            : ''}
        </div>
      </div>`;
  }).join('');
  stagger($('mgrSalons'));
  $('mgrSalons').querySelectorAll('.switch').forEach(sw =>
    sw.addEventListener('click', () => {
      const id = sw.dataset.salon;
      const st = loadStatus();
      if (st[id]) delete st[id]; else st[id] = true;
      saveStatus(st);
      renderMgrSalons(); renderWiSalon();
      const r = RESTAURANTS.find(x => x.id === id);
      toast(st[id] ? r.name + ' · reservas pausadas' : r.name + ' · vuelve a recibir reservas');
    }));
  $('mgrSalons').querySelectorAll('[data-capdown]').forEach(b =>
    b.addEventListener('click', () => {
      const r = RESTAURANTS.find(x => x.id === b.dataset.capdown);
      setCap(r.id, effTables(r) - 1);
      renderMgrSalons(); renderKpis(); renderWiSlots();
      if (can('block')) renderBlkSlots();
    }));
  $('mgrSalons').querySelectorAll('[data-capup]').forEach(b =>
    b.addEventListener('click', () => {
      const r = RESTAURANTS.find(x => x.id === b.dataset.capup);
      setCap(r.id, effTables(r) + 1);
      renderMgrSalons(); renderKpis(); renderWiSlots();
      if (can('block')) renderBlkSlots();
    }));
}

/* ─── Bloqueo de turnos puntuales ─── */
function renderBlkSalon() {
  $('blkSalon').innerHTML = RESTAURANTS.map(r =>
    `<button type="button" class="occ${r.id === blkSalonId ? ' sel' : ''}" data-id="${r.id}">${r.name}</button>`).join('');
  $('blkSalon').querySelectorAll('.occ').forEach(b =>
    b.addEventListener('click', () => {
      blkSalonId = b.dataset.id;
      renderBlkSalon(); renderBlkSlots();
    }));
}
function renderBlkDates() {
  $('blkDates').innerHTML = nextDays(7).map(d => `
    <button type="button" class="date-chip${d.iso === blkDate ? ' sel' : ''}${d.today ? ' today' : ''}" data-iso="${d.iso}">
      <span class="dw">${d.today ? 'Hoy' : DOWS[d.d.getDay()]}</span><span class="dd">${d.d.getDate()}</span><span class="dm">${MONTHS[d.d.getMonth()]}</span>
    </button>`).join('');
  $('blkDates').querySelectorAll('.date-chip').forEach(c =>
    c.addEventListener('click', () => {
      blkDate = c.dataset.iso;
      renderBlkDates(); renderBlkSlots();
    }));
}
function renderBlkSlots() {
  const r = RESTAURANTS.find(x => x.id === blkSalonId);
  $('blkSlots').innerHTML = r.slots.map(s => {
    const blk = blockedReason(r.id, blkDate, s);
    const taken = loadB().filter(b => b.restoId === r.id && b.date === blkDate && b.time === s).length;
    if (blk !== false) {
      return `<button type="button" class="slot blk-toggle" data-slot="${s}">${s}<span class="cap">Bloqueado${blk ? ' · ' + esc(blk) : ''}</span></button>`;
    }
    return `<button type="button" class="slot" data-slot="${s}">${s}<span class="cap">${taken ? taken + (taken === 1 ? ' reserva tomada' : ' reservas tomadas') : 'Libre para bloquear'}</span></button>`;
  }).join('');
  $('blkSlots').querySelectorAll('.slot[data-slot]').forEach(b =>
    b.addEventListener('click', () => {
      const blocked = toggleBlock(blkSalonId, blkDate, b.dataset.slot, $('blkReason').value.trim());
      renderBlkSlots(); renderMgrSalons(); renderWiSlots();
      const r = RESTAURANTS.find(x => x.id === blkSalonId);
      toast(blocked
        ? r.name + ' · ' + b.dataset.slot + ' hs bloqueado'
        : r.name + ' · ' + b.dataset.slot + ' hs liberado');
    }));
}

/* ─── 86 de platos ─── */
function renderD86Salon() {
  $('d86Salon').innerHTML = RESTAURANTS.map(r =>
    `<button type="button" class="occ${r.id === d86SalonId ? ' sel' : ''}" data-id="${r.id}">${r.name}</button>`).join('');
  $('d86Salon').querySelectorAll('.occ').forEach(b =>
    b.addEventListener('click', () => {
      d86SalonId = b.dataset.id;
      renderD86Salon(); renderD86List();
    }));
}
function renderD86List() {
  const r = RESTAURANTS.find(x => x.id === d86SalonId);
  $('d86List').innerHTML = r.menu.map((sec, si) => `
    <div class="d86-sec-title">${sec.section}</div>
    ${sec.items.map((it, ii) => {
      const off = is86(r.id, si, ii);
      return `
      <div class="d86-row${off ? ' off' : ''}">
        <div><span class="dn">${it.n}</span><span class="ds">${it.d}</span></div>
        <button type="button" class="btn-ns${off ? ' on' : ''}" data-86="${si}|${ii}">${off ? '✗ Agotado · reponer' : 'Marcar agotado'}</button>
      </div>`;
    }).join('')}`).join('');
  $('d86List').querySelectorAll('[data-86]').forEach(b =>
    b.addEventListener('click', () => {
      const [si, ii] = b.dataset['86'].split('|').map(Number);
      const off = toggle86(d86SalonId, si, ii);
      renderD86List();
      const r = RESTAURANTS.find(x => x.id === d86SalonId);
      const dish = r.menu[si].items[ii].n;
      toast(off ? '86 · ' + dish + ' fuera de la carta' : dish + ' · de vuelta en la carta');
    }));
}

/* ─── Alta espontánea ─── */
function wiResto() { return RESTAURANTS.find(r => r.id === wiSalonId); }
function renderWiSalon() {
  const st = loadStatus();
  $('wiSalon').innerHTML = RESTAURANTS.map(r =>
    `<button type="button" class="occ${r.id === wiSalonId ? ' sel' : ''}" data-id="${r.id}">${r.name}${st[r.id] ? ' · pausado' : ''}</button>`).join('');
  $('wiSalon').querySelectorAll('.occ').forEach(b =>
    b.addEventListener('click', () => {
      wiSalonId = b.dataset.id; wiSlot = null;
      renderWiSalon(); renderWiSlots();
    }));
}
function renderWiDates() {
  $('wiDates').innerHTML = nextDays(7).map(d => `
    <button type="button" class="date-chip${d.iso === wiDate ? ' sel' : ''}${d.today ? ' today' : ''}" data-iso="${d.iso}">
      <span class="dw">${d.today ? 'Hoy' : DOWS[d.d.getDay()]}</span><span class="dd">${d.d.getDate()}</span><span class="dm">${MONTHS[d.d.getMonth()]}</span>
    </button>`).join('');
  $('wiDates').querySelectorAll('.date-chip').forEach(c =>
    c.addEventListener('click', () => {
      wiDate = c.dataset.iso; wiSlot = null;
      renderWiDates(); renderWiSlots();
    }));
}
function renderWiSlots() {
  const r = wiResto();
  const need = tablesNeeded(parseInt($('wiPeople').value, 10) || 1);
  if (wiSlot && (tablesFree(r, wiDate, wiSlot) < need || blockedReason(r.id, wiDate, wiSlot) !== false)) wiSlot = null;
  $('wiSlots').innerHTML = r.slots.map(s => {
    const blk = blockedReason(r.id, wiDate, s);
    if (blk !== false) return `<button type="button" class="slot blk" disabled>${s}<span class="cap">Bloqueado${blk ? ' · ' + esc(blk) : ''}</span></button>`;
    const free = tablesFree(r, wiDate, s);
    if (free === 0) return `<button type="button" class="slot" disabled>${s}<span class="cap">Completo</span></button>`;
    if (free < need) return `<button type="button" class="slot" disabled>${s}<span class="cap">Sin lugar para el grupo</span></button>`;
    return `<button type="button" class="slot${wiSlot === s ? ' sel' : ''}" data-slot="${s}">${s}<span class="cap">${free} de ${effTables(r)} libres</span></button>`;
  }).join('');
  $('wiSlots').querySelectorAll('.slot:not(:disabled)').forEach(b =>
    b.addEventListener('click', () => {
      wiSlot = b.dataset.slot;
      renderWiSlots();
      $('wiMsg').textContent = '';
    }));
}
$('wiPeople').addEventListener('input', renderWiSlots);
$('wiBook').addEventListener('click', () => {
  const msg = $('wiMsg');
  const room = $('wiRoom').value.trim();
  const name = $('wiName').value.trim();
  const ppl = parseInt($('wiPeople').value, 10);
  if (!wiSlot) { msg.textContent = 'Elija un horario.'; return; }
  if (!/^\d{1,4}$/.test(room)) { msg.textContent = 'Ingrese la habitación del huésped.'; return; }
  if (name.length < 2) { msg.textContent = 'Ingrese el apellido del huésped.'; return; }
  if (!(ppl >= 1 && ppl <= 12)) { msg.textContent = 'Comensales: entre 1 y 12.'; return; }
  if (blockedReason(wiSalonId, wiDate, wiSlot) !== false) {
    msg.textContent = 'Ese turno está bloqueado.';
    renderWiSlots(); return;
  }
  if (tablesFree(wiResto(), wiDate, wiSlot) < tablesNeeded(ppl)) {
    msg.textContent = 'No queda mesa para ese grupo en ese horario.';
    renderWiSlots(); return;
  }
  const list = loadB();
  list.push({
    id: 'b' + Date.now(), room,
    surname: name.charAt(0).toUpperCase() + name.slice(1),
    restoId: wiSalonId, date: wiDate, time: wiSlot, people: ppl,
    note: $('wiNote').value.trim() || null, occasion: null, diet: null, source: 'staff'
  });
  saveB(list);
  msg.textContent = '';
  $('wiRoom').value = ''; $('wiName').value = ''; $('wiNote').value = ''; $('wiPeople').value = 2;
  wiSlot = null;
  renderWiSlots(); renderKpis(); renderNow(); renderMgrSalons();
  if (svcDate === wiDate) renderSvc();
  toast('Reserva registrada · ' + wiResto().name + ' · ' + wiDate.split('-').reverse().slice(0, 2).join('/'));
});

/* ─── Libro de reservas ─── */
function renderSvcDates() {
  $('svcDates').innerHTML = nextDays(7).map(d => `
    <button type="button" class="date-chip${d.iso === svcDate ? ' sel' : ''}${d.today ? ' today' : ''}" data-iso="${d.iso}">
      <span class="dw">${d.today ? 'Hoy' : DOWS[d.d.getDay()]}</span><span class="dd">${d.d.getDate()}</span><span class="dm">${MONTHS[d.d.getMonth()]}</span>
    </button>`).join('');
  $('svcDates').querySelectorAll('.date-chip').forEach(c =>
    c.addEventListener('click', () => { svcDate = c.dataset.iso; renderSvcDates(); renderSvc(); }));
}
function renderSvcFilter() {
  const opts = [{ id: 'all', name: 'Todos los salones' }].concat(RESTAURANTS);
  $('svcFilter').innerHTML = opts.map(o =>
    `<button type="button" class="occ${svcFilterId === o.id ? ' sel' : ''}" data-id="${o.id}">${o.name}</button>`).join('');
  $('svcFilter').querySelectorAll('.occ').forEach(b =>
    b.addEventListener('click', () => { svcFilterId = b.dataset.id; renderSvcFilter(); renderSvc(); }));
}
function renderSvc() {
  const items = loadB()
    .filter(b => b.date === svcDate && (svcFilterId === 'all' || b.restoId === svcFilterId))
    .sort((a, b) => a.time.localeCompare(b.time));
  const waiting = loadWL()
    .filter(w => w.date === svcDate && (svcFilterId === 'all' || w.restoId === svcFilterId))
    .sort((a, b) => a.time.localeCompare(b.time) || a.ts - b.ts);
  const box = $('svcList');

  let html = '';
  if (!items.length) {
    html = `<div class="empty"><span class="serif">Sin reservas</span><p>No hay reservas para este día${svcFilterId !== 'all' ? ' en este salón' : ''}. Las altas espontáneas aparecen aquí al instante.</p></div>`;
  } else {
    const covers = items.reduce((a, b) => a + (parseInt(b.people, 10) || 0), 0);
    const noshows = items.filter(b => b.noshow).length;
    const seated = items.filter(b => b.seated).length;
    const stat = `${items.length} ${items.length === 1 ? 'reserva' : 'reservas'} · ${covers} cubiertos · ${seated} en mesa · ${noshows} no-show${items.length ? ' (' + Math.round(noshows / items.length * 100) + '%)' : ''}`;
    html = `<p class="svc-meta" style="margin-bottom: 14px; text-align: right;">${stat}</p>` +
      items.map(b => {
        const r = RESTAURANTS.find(x => x.id === b.restoId);
        const bd = [];
        if (b.occasion) bd.push(b.occasion);
        if (b.diet && b.diet.celiac) bd.push('Sin TACC');
        if (b.diet && b.diet.veg) bd.push('Veg');
        if (b.source === 'staff') bd.push('Alta en salón');
        if (b.source === 'waitlist') bd.push('Desde lista de espera');
        const badges = bd.length ? ' <span class="t-badges">' + bd.map(x => '<span class="t-badge">' + x + '</span>').join('') + '</span>' : '';
        const notes = [b.note, b.diet && b.diet.note].filter(Boolean).map(esc).join(' · ');
        return `
      <div class="svc-row${b.seated ? ' seated' : ''}${b.noshow ? ' noshow' : ''}">
        <div class="svc-time">${b.time}</div>
        <div class="svc-main">
          <h4>${esc(b.surname)} <small>· Hab. ${b.room} · ${r ? r.name : b.restoId}</small></h4>
          <div class="svc-meta">${b.people} ${b.people == 1 ? 'comensal' : 'comensales'}${badges}</div>
          ${notes ? `<div class="svc-note">"${notes}"</div>` : ''}
        </div>
        <div class="svc-actions">
          <button class="btn-seat${b.seated ? ' on' : ''}" data-seat="${b.id}">${b.seated ? '✓ En mesa' : 'Sentar'}</button>
          <button class="btn-ns${b.noshow ? ' on' : ''}" data-ns="${b.id}">${b.noshow ? '✗ No vino' : 'No vino'}</button>
          <button class="btn-edit" data-edit="${b.id}">Editar</button>
          <button class="btn-cancel" data-cancel="${b.id}">Cancelar</button>
        </div>
      </div>`;
      }).join('');
  }

  /* Lista de espera del día */
  if (waiting.length) {
    html += `<div class="agenda-head" style="margin-top: 40px;"><span class="kicker">En espera</span><h2>Lista de <em>espera</em></h2></div>` +
      waiting.map(w => {
        const r = RESTAURANTS.find(x => x.id === w.restoId);
        const hasRoom = r && tablesFree(r, w.date, w.time) >= tablesNeeded(w.people) && blockedReason(w.restoId, w.date, w.time) === false;
        return `
        <div class="wl-row">
          <div class="grow"><b>${w.time} hs</b> · ${esc(w.surname)} · Hab. ${w.room} · <b>${r ? r.name : w.restoId}</b> · ${w.people} ${w.people == 1 ? 'comensal' : 'comensales'}${hasRoom ? ' · <b style="color:var(--ok);">¡hay mesa!</b>' : ''}</div>
          <div class="wl-actions">
            <button class="btn-seat" data-wlconv="${w.id}">Convertir en reserva</button>
            <button class="btn-cancel" data-wldel="${w.id}">Quitar</button>
          </div>
        </div>`;
      }).join('');
  }
  box.innerHTML = html;

  box.querySelectorAll('[data-seat]').forEach(btn =>
    btn.addEventListener('click', () => {
      const list = loadB();
      const b = list.find(x => x.id === btn.dataset.seat);
      if (b) { b.seated = !b.seated; if (b.seated) b.noshow = false; saveB(list); renderSvc(); renderKpis(); renderNow(); }
    }));
  box.querySelectorAll('[data-ns]').forEach(btn =>
    btn.addEventListener('click', () => {
      const list = loadB();
      const b = list.find(x => x.id === btn.dataset.ns);
      if (b) { b.noshow = !b.noshow; if (b.noshow) b.seated = false; saveB(list); renderSvc(); renderKpis(); renderNow(); }
    }));
  box.querySelectorAll('[data-edit]').forEach(btn =>
    btn.addEventListener('click', () => openEdit(btn.dataset.edit)));
  box.querySelectorAll('[data-cancel]').forEach(btn =>
    btn.addEventListener('click', () => askCancel(btn.dataset.cancel)));
  box.querySelectorAll('[data-wldel]').forEach(btn =>
    btn.addEventListener('click', () => {
      saveWL(loadWL().filter(w => w.id !== btn.dataset.wldel));
      renderSvc();
      toast('Quitado de la lista de espera');
    }));
  box.querySelectorAll('[data-wlconv]').forEach(btn =>
    btn.addEventListener('click', () => {
      const w = loadWL().find(x => x.id === btn.dataset.wlconv);
      if (!w) return;
      const r = RESTAURANTS.find(x => x.id === w.restoId);
      if (blockedReason(w.restoId, w.date, w.time) !== false) { toast('Ese turno está bloqueado · no se puede convertir'); return; }
      if (!r || tablesFree(r, w.date, w.time) < tablesNeeded(w.people)) { toast('Todavía no hay mesa libre en ese turno'); return; }
      const list = loadB();
      list.push({
        id: 'b' + Date.now(), room: w.room, surname: w.surname,
        restoId: w.restoId, date: w.date, time: w.time, people: w.people,
        note: null, occasion: null, diet: null, source: 'waitlist'
      });
      saveB(list);
      saveWL(loadWL().filter(x => x.id !== w.id));
      renderSvc(); renderKpis(); renderNow(); renderMgrSalons();
      toast('Convertida en reserva · ' + r.name + ' · ' + w.time + ' hs');
    }));
}

/* ───────── SESIÓN + EASTER ───────── */
(function restore() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SS));
    if (s && (s.staff || (s.room && s.surname))) { session = s; enterApp(); }
  } catch(e) {}
})();
console.log('%c\u2726 ReservaY\u00E1 \u00B7 conserjer\u00EDa digital del Hotel Costa Andina\nUn producto de Ynera \u2014 hola@ynera.com', 'color:#C9A24B; font-family:serif; font-size:13px;');
