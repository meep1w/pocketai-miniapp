/* =============================================
   i18n (RU/EN)
============================================= */
const I18N = {
    en: {
        "menu.title": "Menu",
        "menu.stats": "Your Statistics",
        "menu.language": "Choose Language",
        "menu.theme": "Theme",

        "theme.title": "Theme",
        "theme.dark": "Dark",
        "theme.light": "Light",
        "theme.default": "Default",
        "btn.close": "Close",
        "btn.get_signal": "Get Signal",
        "btn.reset": "Reset",

        "label.select_instrument": "Select instrument",
        "ph.select_instrument": "Select instrument",
        "label.select_time": "Select time",
        "ph.select_time": "Select time",
        "label.expiration_time": "Expiration time",
        "ph.expiration_time": "Select the time of the transaction",

        "instr.title": "Select instrument",
        "instr.categories": "CATEGORIES",
        "instr.currencies": "Currencies",
        "instr.crypto": "Cryptocurrencies",
        "instr.stocks": "Stocks",
        "instr.commodities": "Commodities",
        "instr.indices": "Indices",

        "time.title": "Select time",

        "expire.title": "Expiration time",
        "expire.warn_short": "Low accuracy",

        "signal.title":"Signal",
        "signal.model":"Model: TESSA",
        "signal.model_premium":"Model: TESSA Quantum",
        "signal.idle":"Get Signal",
        "signal.analyzing":"Analyzing...",
        "signal.exp":"Expiration:",
        "signal.acc":"Accuracy:",
        "signal.received":"Received at:",
        "signal.low_acc_warn":"Low accuracy: trade carefully.",

        "premium.title":"Get Premium",
        "premium.desc":"To get Premium, you need to collect 150 signals. Premium gives you:",
        "premium.b1":"New analysis model — TESSA Quantum",
        "premium.b2":"Full access to all instruments",
        "premium.b3":"Higher signal accuracy",
        "premium.b4":"No signal limit",

        "toast.fill_all":"Please select instrument, timeframe and expiration first.",

        "stats.title":"Your Statistics",
        "stats.tariff":"Your tariff:",
        "stats.received":"Signals received:",
        "stats.accuracy":"Signal accuracy:",
        "stats.base":"Base",
        "lang.title": "Choose Language",
        "lang.ru": "Русский",
        "lang.en": "English",
        "banner.premium_title": "Premium unlocked!",
        "banner.premium_desc": "TESSA Quantum is now available.",
        "stats.premium":"Premium"
    },
    ru: {
        "menu.title": "Меню",
        "menu.stats": "Ваша статистика",
        "menu.language": "Выбор языка",
        "menu.theme": "Тема",

        "theme.title": "Тема",
        "theme.dark": "Тёмная",
        "theme.light": "Светлая",
        "theme.default": "По умолчанию",
        "btn.close": "Закрыть",
        "btn.get_signal": "Получить сигнал",
        "btn.reset": "Сбросить",

        "label.select_instrument": "Выберите инструмент",
        "ph.select_instrument": "Выберите инструмент",
        "label.select_time": "Выберите время",
        "ph.select_time": "Выберите время",
        "label.expiration_time": "Время экспирации",
        "ph.expiration_time": "Выберите время сделки",

        "instr.title": "Выберите инструмент",
        "instr.categories": "КАТЕГОРИИ",
        "instr.currencies": "Валюты",
        "instr.crypto": "Криптовалюты",
        "instr.stocks": "Акции",
        "instr.commodities": "Сырьё",
        "instr.indices": "Индексы",

        "time.title": "Выберите время",

        "expire.title": "Время экспирации",
        "expire.warn_short": "Низкая точность",

        "signal.title":"Сигнал",
        "signal.model":"Модель: TESSA",
        "signal.model_premium":"Модель: TESSA Quantum",
        "signal.idle":"Получить сигнал",
        "signal.analyzing":"Анализ...",
        "signal.exp":"Время сделки:",
        "signal.acc":"Точность:",
        "signal.received":"Получено в:",
        "signal.low_acc_warn":"Низкая точность: будьте аккуратнее.",

        "premium.title":"Получить Premium",
        "premium.desc":"Чтобы получить Premium, соберите 150 сигналов. Premium даёт:",
        "premium.b1":"Новая модель анализа — TESSA Quantum",
        "premium.b2":"Полный доступ ко всем инструментам",
        "premium.b3":"Более высокая точность сигналов",
        "premium.b4":"Без лимита на сигналы",

        "toast.fill_all":"Сначала выберите инструмент, таймфрейм и время сделки.",

        "stats.title":"Ваша статистика",
        "stats.tariff":"Ваш тариф:",
        "stats.received":"Сигналов получено:",
        "stats.accuracy":"Средняя точность:",
        "stats.base":"Base",
        "lang.title": "Выберите язык",
        "lang.ru": "Русский",
        "lang.en": "English",
        "banner.premium_title": "Вы перешли на тариф Premium!",
        "banner.premium_desc": "Модель TESSA Quantum активирована.",
        "stats.premium":"Premium"
    }
};

const KEYS = {
    THEME: "theme_choice",
    LANG: "lang_choice",
    FIELDS: "fields_state",          // {instrument,timeframe,expiration}
    SIGNAL: "signal_state",          // {state,inst,exp,dir,acc,receivedISO,warn}
    COOLDOWN_END: "cooldown_end",    // timestamp ms
    ANALYZE_END: "analyze_end",      // timestamp ms
    STATS: "stats"                   // {count, sumAcc}
};

/* =============================================
   Lang helpers
============================================= */
function getLang(){ return localStorage.getItem(KEYS.LANG) || 'ru'; }
function dict(){ return I18N[getLang()] || I18N.ru; }

/* =============================================
   i18n apply
============================================= */
function applyI18n(lang) {
    const d = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (!key || d[key] == null) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.setAttribute('placeholder', d[key]);
        } else {
            el.textContent = d[key];
        }
    });
}
function initI18n() { applyI18n(getLang()); }

/* =============================================
   Theme
============================================= */
function getPreferredTheme() {
    try { if (window.Telegram?.WebApp?.colorScheme) return window.Telegram.WebApp.colorScheme; } catch(e){}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function updateThemeAssets(effectiveTheme){
    const logo = document.getElementById('logoImg');
    if (logo) {
        const darkSrc  = logo.getAttribute('data-src-dark');
        const lightSrc = logo.getAttribute('data-src-light');
        logo.src = (effectiveTheme === 'light') ? lightSrc : darkSrc;
    }
}
function setHtmlTheme(theme) {
    const effective = (theme === 'default') ? getPreferredTheme() : theme;
    document.documentElement.setAttribute('data-theme', effective);
    updateThemeAssets(effective);
}
function applyTheme(theme) {
    localStorage.setItem(KEYS.THEME, theme);
    setHtmlTheme(theme);
}
function initTheme() {
    const saved = localStorage.getItem(KEYS.THEME) || 'default';
    setHtmlTheme(saved);
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    function syncAuto(){ if ((localStorage.getItem(KEYS.THEME)||'default') === 'default') setHtmlTheme('default'); }
    media?.addEventListener?.('change', syncAuto);
    if (window.Telegram?.WebApp) window.Telegram.WebApp.onEvent?.('themeChanged', syncAuto);
}

/* =============================================
   Sidebar
============================================= */
const burger = document.getElementById('burgerBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeSidebar');
const openSidebar = () => sidebar.classList.add('open');
const closeSidebarFn = () => sidebar.classList.remove('open');
burger?.addEventListener('click', openSidebar);
closeBtn?.addEventListener('click', closeSidebarFn);
document.addEventListener('click', (e) => { if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !burger.contains(e.target)) closeSidebarFn(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSidebarFn(); });

/* =============================================
   Modal helpers
============================================= */
function openModal(id){ document.getElementById(id)?.classList.add('open'); }
function closeModal(id){ document.getElementById(id)?.classList.remove('open'); }

/* Theme modal */
document.getElementById('nav-theme')?.addEventListener('click', () => openModal('themeModal'));
document.querySelectorAll('#themeModal .option-item').forEach(btn => {
    btn.addEventListener('click', () => { applyTheme(btn.getAttribute('data-theme')); closeModal('themeModal'); });
});
document.querySelectorAll('#themeModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('themeModal')));

/* Language toggle (ru/en) */
// открыть модал выбора языка
document.getElementById('nav-lang')?.addEventListener('click', () => {
    const cur = getLang();
    document.querySelectorAll('#langModal .lang-opt').forEach(b => {
        const is = b.getAttribute('data-lang') === cur;
        b.classList.toggle('is-active', is);
        b.setAttribute('aria-pressed', String(is));
    });
    openModal('langModal');
});

// выбор языка
function setLang(lang){
    localStorage.setItem(KEYS.LANG, lang);
    applyI18n(lang);

    // обновить плейсхолдеры, если поле не выбрано
    const d = I18N[lang];
    const fi = document.getElementById('field-instrument');
    if (fi && !fi.getAttribute('data-value')) fi.querySelector('.ui-field__placeholder').textContent = d['ph.select_instrument'];
    const ft = document.getElementById('field-time');
    if (ft && !ft.getAttribute('data-value')) ft.querySelector('.ui-field__placeholder').textContent = d['ph.select_time'];
    const fe = document.getElementById('field-expiration');
    if (fe && !fe.getAttribute('data-value')) fe.querySelector('.ui-field__placeholder').textContent = d['ph.expiration_time'];

    // подпись модели с учётом тарифа
    updateModelLabel();
}

document.querySelectorAll('#langModal .lang-opt').forEach(b=>{
    b.addEventListener('click', () => {
        const lang = b.getAttribute('data-lang');
        setLang(lang);

        // подсветить выбранный
        document.querySelectorAll('#langModal .lang-opt').forEach(x=>{
            const is = x === b;
            x.classList.toggle('is-active', is);
            x.setAttribute('aria-pressed', String(is));
        });

        closeModal('langModal');
    });
});

document.querySelectorAll('#langModal [data-close-modal]')
    .forEach(el => el.addEventListener('click', () => closeModal('langModal')));


/* Premium modal */
document.getElementById('rightIconBtn')?.addEventListener('click', () => openModal('premiumModal'));
document.querySelectorAll('#premiumModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('premiumModal')));

/* =============================================
   Instruments data + modal
============================================= */
const INSTRUMENTS = {
    currencies: ["AED/CNY OTC","AUD/CAD OTC","AUD/USD OTC","BHD/CNY OTC","EUR/CHF OTC","EUR/NZD OTC","EUR/USD OTC","GBP/AUD OTC","LBP/USD OTC","NZD/JPY OTC","SAR/CNY OTC","UAH/USD OTC","USD/ARS OTC","USD/CAD OTC","USD/CLP OTC","USD/CNH OTC","USD/EGP OTC","USD/RUB OTC","ZAR/USD OTC","CHF/NOK OTC","EUR/HUF OTC","EUR/JPY OTC","EUR/RUB OTC","AUD/NZD OTC","AUD/BRL OTC","USD/COP OTC","USD/INR OTC","USD/SGD OTC","CAD/CHF OTC","QAR/CNY OTC","AUD/JPY OTC","OMR/CNY OTC","EUR/GBP OTC","USD/VND OTC","AUD/CHF OTC","USD/THB OTC","USD/DZD OTC","NGN/USD OTC","CAD/JPY OTC","TND/USD OTC","USD/BDT OTC","NZD/USD OTC","USD/MYR OTC","USD/PKR OTC","USD/MXN OTC","GBP/USD OTC","USD/PHP OTC","MAD/USD OTC","JOD/CNY OTC","GBP/JPY OTC","USD/CHF OTC","KES/USD OTC","USD/IDR OTC","CHF/JPY OTC","USD/JPY OTC"],
    crypto: ["Cardano OTC","Bitcoin ETF OTC","BNB OTC","Bitcoin OTC","Polkadot OTC","Ethereum OTC","Litecoin OTC","Polygon OTC","Avalanche OTC","TRON OTC","Toncoin OTC","Solana OTC","Chainlink OTC","Dogecoin OTC","Bitcoin"],
    stocks: ["Apple OTC","Boeing Company OTC","Intel OTC","Johnson & Johnson OTC","Microsoft OTC","Coinbase Global OTC","Marathon Digital Holdings OTC","FedEx OTC","Amazon OTC","VISA OTC","McDonald's OTC","Alibaba OTC","Advanced Micro Devices OTC","American Express OTC","ExxonMobil OTC","Palantir Technologies OTC","VIX OTC","Cisco OTC","Netflix OTC","FACEBOOK INC OTC","Pfizer Inc OTC","Citigroup Inc OTC","Tesla OTC","GameStop Corp OTC"],
    commodities: ["Brent Oil OTC","WTI Crude Oil OTC","Silver OTC","Gold OTC","Natural Gas OTC","Palladium spot OTC","Platinum spot OTC"],
    indices: ["AUS 200 OTC","100GBP OTC","D30EUR OTC","DJI30 OTC","E35EUR OTC","E50EUR OTC","F40EUR OTC","JPN225 OTC","US100 OTC","SP500 OTC"]
};
const catOrder = ["currencies","crypto","stocks","commodities","indices"];

function renderInstrumentsList(items){
    const list = document.getElementById('instrList');
    list.innerHTML = "";
    items.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'instr-item';
        btn.type = 'button';
        btn.setAttribute('role','option');
        btn.textContent = name;
        btn.addEventListener('click', () => {
            setFieldValue('instrument', name);
            closeModal('instrumentsModal');
        });
        list.appendChild(btn);
    });
}
function activateCategory(cat){
    document.querySelectorAll('.instr-cat').forEach(b => b.classList.toggle('is-active', b.getAttribute('data-cat') === cat));
    renderInstrumentsList(INSTRUMENTS[cat] || []);
}
function searchInstruments(q){
    const query = q.trim().toLowerCase();
    if (!query) { const active = document.querySelector('.instr-cat.is-active')?.getAttribute('data-cat') || 'currencies'; renderInstrumentsList(INSTRUMENTS[active]); return; }
    const all = catOrder.flatMap(c => INSTRUMENTS[c]);
    renderInstrumentsList(all.filter(x => x.toLowerCase().includes(query)));
}
(function initInstrumentsModal(){
    const field = document.getElementById('field-instrument');
    field?.addEventListener('click', () => openModal('instrumentsModal'));
    field?.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal('instrumentsModal'); }});
    document.querySelectorAll('.instr-cat').forEach(btn => btn.addEventListener('click', () => { activateCategory(btn.getAttribute('data-cat')); document.getElementById('instrSearch').value = ""; }));
    document.getElementById('instrSearch')?.addEventListener('input', (e) => searchInstruments(e.target.value));
    activateCategory('currencies');
    document.querySelectorAll('#instrumentsModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('instrumentsModal')));
})();

/* =============================================
   Timeframe modal
============================================= */
const TIMEFRAMES = ['M9','M10','M30','H1','H4','D1','D7','D17'];
function renderTimeframes(selected){
    const wrap = document.getElementById('tfList'); wrap.innerHTML = '';
    TIMEFRAMES.forEach(tf => {
        const b = document.createElement('button');
        b.type='button'; b.className='tf-item'+(tf===selected?' is-active':''); b.textContent=tf;
        b.addEventListener('click', () => { setFieldValue('timeframe', tf); closeModal('timeModal'); });
        wrap.appendChild(b);
    });
}
(function initTimeModal(){
    const field = document.getElementById('field-time');
    field?.addEventListener('click', () => {
        const current = getField('timeframe');
        renderTimeframes(TIMEFRAMES.includes(current) ? current : null);
        openModal('timeModal');
    });
    field?.addEventListener('keydown', (e) => { if (e.key==='Enter' || e.key===' '){ e.preventDefault(); field.click(); }});
    document.querySelectorAll('#timeModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('timeModal')));
})();

/* =============================================
   Expiration modal + badge
============================================= */
const EXPIRES = ['S5','S15','S30','M1','M3','M5','M30','H1','H4'];
const EXP_WARN_SET = new Set(['S5','S15','S30']);

(function initExpireModal(){
    const field   = document.getElementById('field-expiration');
    const listEl  = document.getElementById('expList');

    function render(selected){
        listEl.innerHTML = '';
        EXPIRES.forEach(val => {
            const b = document.createElement('button');
            b.type='button'; b.className='exp-item'+(val===selected?' is-active':''); b.textContent=val;
            b.addEventListener('click', () => { setFieldValue('expiration', val); closeModal('expireModal'); });
            listEl.appendChild(b);
        });
    }
    function openExpire(){
        const current = getField('expiration');
        render(EXPIRES.includes(current) ? current : null);
        openModal('expireModal');
    }
    field?.addEventListener('click', openExpire);
    field?.addEventListener('keydown', (e) => { if (e.key==='Enter' || e.key===' '){ e.preventDefault(); openExpire(); }});
    document.querySelectorAll('#expireModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('expireModal')));
})();

/* =============================================
   Helpers: fields state + UI + persistence
============================================= */
function getFields(){
    try { return JSON.parse(localStorage.getItem(KEYS.FIELDS) || '{}'); } catch(e){ return {}; }
}
function saveFields(obj){
    localStorage.setItem(KEYS.FIELDS, JSON.stringify(obj || getFields()));
}
function setFieldValue(kind, value){
    const map = {
        instrument: { field:'#field-instrument', ph:'ph.select_instrument' },
        timeframe:  { field:'#field-time',       ph:'ph.select_time' },
        expiration: { field:'#field-expiration', ph:'ph.expiration_time' }
    };
    const conf = map[kind];
    if (!conf) return;
    const field = document.querySelector(conf.field);
    if (!field) return;

    field.setAttribute('data-value', value);
    field.querySelector('.ui-field__placeholder').textContent = value;

    if (kind === 'expiration'){
        const badge = document.getElementById('expBadge');
        if (badge) badge.hidden = !EXP_WARN_SET.has(value);
    }

    const f = getFields();
    f[kind] = value;
    saveFields(f);
    updateGetSignalState();
}
function getField(kind){
    const f = getFields();
    return f[kind] || '';
}
function clearFields(){
    localStorage.removeItem(KEYS.FIELDS);
    const d = dict();
    const map = {
        instrument: { field:'#field-instrument', ph:d['ph.select_instrument'] },
        timeframe:  { field:'#field-time',       ph:d['ph.select_time'] },
        expiration: { field:'#field-expiration', ph:d['ph.expiration_time'] }
    };
    Object.values(map).forEach(({field,ph}) => {
        const el = document.querySelector(field);
        if (!el) return;
        el.removeAttribute('data-value');
        el.querySelector('.ui-field__placeholder').textContent = ph;
    });
    const badge = document.getElementById('expBadge');
    if (badge) badge.hidden = true;
}

/* =============================================
   Stats (count + average accuracy) + Tier (Base/Premium)
============================================= */
function loadStats(){ try { return JSON.parse(localStorage.getItem(KEYS.STATS) || '{}'); } catch(e){ return {}; } }
function saveStats(o){ localStorage.setItem(KEYS.STATS, JSON.stringify(o||{})); }
function isPremium(stats){ return (stats?.count || 0) >= 150; }

function updateTierIcon(premium){
    const btn = document.getElementById('rightIconBtn');
    if (!btn) return;
    if (premium){
        btn.innerHTML = '<img src="static/img/Premium.svg" alt="" class="tier-img">';
    }else{
        btn.innerHTML = '<span class="icon icon-crown" aria-hidden="true"></span>';
    }
}
function updateModelLabel(){
    const el = document.querySelector('.signal-model');
    if (!el) return;
    const s = loadStats();
    el.textContent = isPremium(s) ? (dict()['signal.model_premium']) : (dict()['signal.model']);
}
function updateTierUI(){
    const s = loadStats();
    updateTierIcon(isPremium(s));
    updateModelLabel();
}

function addSignalToStats(acc){
    const s = loadStats();
    const wasPremium = isPremium(s);

    s.count = (s.count||0) + 1;
    s.sumAcc = (s.sumAcc||0) + (+acc || 0);
    saveStats(s);

    const nowPremium = isPremium(s);
    updateTierUI();

    // показ баннера ровно при переходе Base -> Premium
    if (!wasPremium && nowPremium){
        showPremiumBanner();
    }
}


function openStatsModal(){
    const s = loadStats();
    const d = dict();
    const count = s.count || 0;
    const avg = count ? (s.sumAcc / count) : 0;

    const tEl = document.getElementById('stTariff');
    const cEl = document.getElementById('stCount');
    const aEl = document.getElementById('stAvg');

    if (tEl) tEl.textContent = isPremium(s) ? d['stats.premium'] : d['stats.base'];
    if (cEl) cEl.textContent = count;
    if (aEl) aEl.textContent = `${Math.round(avg)}%`;

    openModal('statsModal');
}

document.getElementById('nav-stats')?.addEventListener('click', openStatsModal);
document.querySelectorAll('#statsModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('statsModal')));

/* =============================================
   Signal card: states + persistence
============================================= */
function setSignalState(state){
    const card = document.getElementById('signalCard');
    if (card) card.setAttribute('data-state', state); // 'idle' | 'loading' | 'result'
    const s = loadSignal(); s.state = state; saveSignal(s);
}
function fillSignalUI(s){
    const instEl = document.getElementById('sigInstrument');
    const actEl  = document.getElementById('sigAction');
    const expEl  = document.getElementById('sigExp');
    const accEl  = document.getElementById('sigAcc');
    const timeEl = document.getElementById('sigTime');
    const warnEl = document.getElementById('sigWarn');

    if (instEl) instEl.textContent = s.inst || '—';
    if (actEl) {
        actEl.textContent = s.dir || 'BUY';
        actEl.classList.remove('buy','sell');
        actEl.classList.add((s.dir || 'BUY').toLowerCase());
    }
    if (expEl)  expEl.textContent  = s.exp || '—';
    if (accEl)  accEl.textContent  = s.acc != null ? `${(+s.acc).toFixed(2)}%` : '—%';
    if (timeEl) timeEl.textContent = s.receivedISO ? new Date(s.receivedISO).toLocaleTimeString() : '—';
    if (warnEl) warnEl.hidden = !s.warn;
}
function saveSignal(obj){ localStorage.setItem(KEYS.SIGNAL, JSON.stringify(obj || {})); }
function loadSignal(){ try { return JSON.parse(localStorage.getItem(KEYS.SIGNAL) || '{}'); } catch(e){ return {}; } }

/* =============================================
   Toast
============================================= */
function showToast(msg){
    let box = document.getElementById('toastBox');
    if (!box){
        box = document.createElement('div');
        box.id = 'toastBox';
        Object.assign(box.style, {
            position:'fixed', left:'50%', bottom:'24px', transform:'translateX(-50%)',
            background:'rgba(0,0,0,.8)', color:'#fff', padding:'10px 14px',
            borderRadius:'12px', fontSize:'14px', zIndex:'4000', transition:'opacity .4s'
        });
        document.body.appendChild(box);
    }
    box.textContent = msg; box.style.opacity='1';
    setTimeout(()=>{ box.style.opacity='0'; }, 2000);
}

function showPremiumBanner(){
    // создаём баннер, если его ещё нет
    let el = document.getElementById('tierBanner');
    if (!el){
        el = document.createElement('div');
        el.id = 'tierBanner';
        el.className = 'top-banner';
        el.innerHTML = `
      <img src="static/img/Premium.svg" alt="" class="top-banner__icon">
      <div class="top-banner__text">
        <div class="top-banner__title" data-i18n="banner.premium_title">Premium unlocked!</div>
        <div class="top-banner__sub"   data-i18n="banner.premium_desc">TESSA Quantum is now available.</div>
      </div>
    `;
        document.body.appendChild(el);
        // локализация текста внутри баннера
        applyI18n(getLang());
    }
    // показать
    requestAnimationFrame(() => el.classList.add('show'));
    // спрятать через 4.2с
    setTimeout(() => {
        el.classList.remove('show');
        // удалить через анимацию, чтобы DOM не зарастал (опционально)
        setTimeout(() => { el.remove(); }, 350);
    }, 4200);
}

/* =============================================
   Get Signal: validation, analyzing, cooldown
   + persistence across reloads
============================================= */
let analyzeTimer = null;
let cooldownTickTimer = null;

function isAllSelected(){
    return Boolean(getField('instrument') && getField('timeframe') && getField('expiration'));
}

function updateGetSignalState(){
    const btn = document.getElementById('getSignalBtn');
    if (!btn) return;
    const cdActive = getCooldownRemaining() > 0;
    btn.disabled = !isAllSelected() || cdActive;
}

function expToSeconds(exp){
    if (!exp) return 0;
    const m = exp.match(/^([SMH])(\d+)$/i); if (!m) return 0;
    const u = m[1].toUpperCase(), v = parseInt(m[2],10);
    if (u==='S') return v;
    if (u==='M') return v*60;
    if (u==='H') return v*3600;
    return 0;
}

function randomDirection(){ return Math.random() < 0.5 ? 'BUY' : 'SELL'; }
function randomAccuracy(exp){
    const isSec = /^S/i.test(exp);
    if (isSec){ const v = 30 + Math.random()*55; return Math.round(v*100)/100; }
    const v = 50 + Math.random()*45; return Math.round(v*100)/100;
}

/* cooldown persistence */
function setCooldownEnd(ts){ if (ts) localStorage.setItem(KEYS.COOLDOWN_END, String(ts)); else localStorage.removeItem(KEYS.COOLDOWN_END); }
function getCooldownEnd(){ const v = +localStorage.getItem(KEYS.COOLDOWN_END); return Number.isFinite(v) ? v : 0; }
function getCooldownRemaining(){ const end = getCooldownEnd(); return end>0 ? Math.max(0, Math.ceil((end - Date.now())/1000)) : 0; }

function startCooldown(){
    const btn = document.getElementById('getSignalBtn');
    const baseLabel = dict()['btn.get_signal'];
    const tick = () => {
        const left = getCooldownRemaining();
        if (left <= 0){
            setCooldownEnd(0);
            btn.textContent = baseLabel;
            updateGetSignalState();
            cooldownTickTimer = null;
            return;
        }
        const suffix = left >= 60 ? ` (${Math.ceil(left/60)}m)` : ` (${left}s)`;
        btn.textContent = baseLabel + suffix;
        cooldownTickTimer = setTimeout(tick, 1000);
    };
    tick();
}

function startAnalyzing(ms){
    setSignalState('loading');
    const end = Date.now() + ms;
    localStorage.setItem(KEYS.ANALYZE_END, String(end));
    analyzeTimer = setTimeout(() => {
        localStorage.removeItem(KEYS.ANALYZE_END);
        const inst = getField('instrument');
        const exp  = getField('expiration');
        const dir = randomDirection();
        const acc = randomAccuracy(exp);
        const warn = /^S/i.test(exp) && acc < 50;

        // обновить карточку + сохранить
        const payload = { state:'result', inst, exp, dir, acc, warn, receivedISO: new Date().toISOString() };
        saveSignal(payload);
        fillSignalUI(payload);
        setSignalState('result');
        document.getElementById('resetWrap')?.removeAttribute('hidden');

        // обновить статистику + тарифа-иконку/модель
        addSignalToStats(acc);
    }, ms);
}

/* main handler */
(function initGetSignal(){
    const btn = document.getElementById('getSignalBtn'); if (!btn) return;

    btn.addEventListener('click', () => {
        if (!isAllSelected()){
            showToast(dict()['toast.fill_all']);
            return;
        }
        if (getCooldownRemaining() > 0) return;

        // analyzing 3s
        startAnalyzing(3000);

        // cooldown = expiration
        const exp = getField('expiration');
        let seconds = expToSeconds(exp);
        if (seconds <= 0) seconds = 5;
        setCooldownEnd(Date.now() + seconds*1000);
        startCooldown();
        updateGetSignalState();
    });
})();

/* Reset */
function resetAll(){
    if (analyzeTimer){ clearTimeout(analyzeTimer); analyzeTimer = null; }
    if (cooldownTickTimer){ clearTimeout(cooldownTickTimer); cooldownTickTimer = null; }
    localStorage.removeItem(KEYS.ANALYZE_END);
    setCooldownEnd(0);
    saveSignal({state:'idle'});
    setSignalState('idle');
    document.getElementById('resetWrap')?.setAttribute('hidden','');

    const btn = document.getElementById('getSignalBtn');
    btn.textContent = dict()['btn.get_signal'];

    clearFields();
    updateGetSignalState();
}
document.getElementById('resetBtn')?.addEventListener('click', resetAll);

/* =============================================
   Restore on load (fields, signal, cooldown, analyzing, stats/tier)
============================================= */
function restoreOnLoad(){
    // fields
    const f = getFields();
    if (f.instrument) setFieldValue('instrument', f.instrument);
    if (f.timeframe)  setFieldValue('timeframe',  f.timeframe);
    if (f.expiration) setFieldValue('expiration', f.expiration);

    // stats / tier UI
    updateTierUI();

    // signal + state (idle/loading/result)
    const s = loadSignal();
    if (s.state === 'result'){
        fillSignalUI(s);
        setSignalState('result');
        document.getElementById('resetWrap')?.removeAttribute('hidden');
    } else if (s.state === 'loading' || (+localStorage.getItem(KEYS.ANALYZE_END) || 0) > Date.now()){
        const end = +localStorage.getItem(KEYS.ANALYZE_END);
        const msLeft = Math.max(0, end - Date.now());
        startAnalyzing(msLeft || 1500);
    } else {
        setSignalState('idle');
    }

    // cooldown
    if (getCooldownRemaining() > 0){
        startCooldown();
    }
    updateGetSignalState();
}

/* =============================================
   Init
============================================= */
initTheme();
initI18n();
restoreOnLoad();
