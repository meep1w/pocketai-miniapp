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
        "label.select_model": "Select model",
        "ph.select_model": "Select model",
        "label.expiration_time": "Expiration time",
        "ph.expiration_time": "Select the time of the transaction",

        "instr.title": "Select instrument",
        "instr.categories": "CATEGORIES",
        "instr.currencies": "Currencies",
        "instr.crypto": "Cryptocurrencies",
        "instr.stocks": "Stocks",
        "instr.commodities": "Commodities",
        "instr.indices": "Indices",

        "model.title": "Choose a model",
        "model.tassa2": "TASSA 2.0",
        "model.tessa_plus": "TESSA Plus",
        "model.tessa_quantum": "TESSA Quantum",
        "model.vip_required": "TESSA Quantum requires VIP access. See details via the top icon.",

        "expire.title": "Expiration time",
        "expire.warn_short": "Low accuracy",

        "signal.title":"Signal",
        "signal.model_prefix":"Model:",
        "signal.idle":"Get Signal",
        "signal.analyzing":"Analyzing...",
        "signal.exp":"Expiration:",
        "signal.acc":"Accuracy:",
        "signal.received":"Received at:",
        "signal.low_acc_warn":"Low accuracy: trade carefully.",

        "premium.title":"Base / Platinum",
        "premium.desc":"Get 150 signals to unlock the benefits of Platinum.",
        "premium.b1":"Signal accuracy is higher with Platinum",
        "premium.b2":"Opening of three more categories",
        "premium.b3":"Keep trading and you will receive a VIP",
        "premium.b4":"To learn more about the VIP membership, please contact our support team via the bot",

        "toast.fill_all":"Please select instrument, model and expiration first.",
        "toast.vip_required":"TESSA Quantum requires VIP access. See details via the top icon.",
        "toast.cat_locked": "Available on Platinum (150 signals).",

        "stats.title":"Your Statistics",
        "stats.tariff":"Your tariff:",
        "stats.received":"Signals received:",
        "stats.accuracy":"Signal accuracy:",
        "stats.base":"Base",
        "stats.platinum":"Platinum",

        "banner.platinum_title": "Platinum unlocked!",
        "banner.platinum_desc": "Accuracy is now always ≥70%."
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
        "label.select_model": "Выберите модель",
        "ph.select_model": "Выберите модель",
        "label.expiration_time": "Время экспирации",
        "ph.expiration_time": "Выберите время сделки",

        "instr.title": "Выберите инструмент",
        "instr.categories": "КАТЕГОРИИ",
        "instr.currencies": "Валюты",
        "instr.crypto": "Криптовалюты",
        "instr.stocks": "Акции",
        "instr.commodities": "Сырьё",
        "instr.indices": "Индексы",

        "model.title": "Выберите модель",
        "model.tassa2": "TASSA 2.0",
        "model.tessa_plus": "TESSA Plus",
        "model.tessa_quantum": "TESSA Quantum",
        "model.vip_required": "Чтобы использовать TESSA Quantum, нужен VIP доступ. Подробности — через иконку сверху.",

        "expire.title": "Время экспирации",
        "expire.warn_short": "Низкая точность",

        "signal.title":"Сигнал",
        "signal.model_prefix":"Модель:",
        "signal.idle":"Получить сигнал",
        "signal.analyzing":"Анализ...",
        "signal.exp":"Время сделки:",
        "signal.acc":"Точность:",
        "signal.received":"Получено в:",
        "signal.low_acc_warn":"Низкая точность: будьте аккуратнее.",

        "premium.title":"Base / Platinum",
        "premium.desc":"Получите 150 сигналов, чтобы открыть преимущества Platinum.",
        "premium.b1":"Точность сигналов выше с Platinum",
        "premium.b2":"Открытие еще трех категорий",
        "premium.b3":"Продолжайте торговать и вы получите VIP",
        "premium.b4":"Для ознакомления с условиями о переходе в VIP напишите в поддержку в нашем боте",

        "toast.fill_all":"Сначала выберите инструмент, модель и время сделки.",
        "toast.vip_required":"Чтобы использовать TESSA Quantum, нужен VIP доступ. Подробности — через иконку сверху.",
        "toast.cat_locked": "Доступно на Platinum (150 сигналов).",

        "stats.title":"Ваша статистика",
        "stats.tariff":"Ваш тариф:",
        "stats.received":"Сигналов получено:",
        "stats.accuracy":"Средняя точность:",
        "stats.base":"Base",
        "stats.platinum":"Platinum",

        "banner.platinum_title": "Вы перешли на тариф Platinum!",
        "banner.platinum_desc": "Точность теперь всегда ≥70%."
    }
};

const KEYS = {
    THEME: "theme_choice",
    LANG: "lang_choice",
    FIELDS: "fields_state",          // {instrument, model, expiration}
    SIGNAL: "signal_state",          // {state,inst,exp,dir,acc,receivedISO,warn,model}
    COOLDOWN_END: "cooldown_end",    // timestamp ms
    ANALYZE_END: "analyze_end",      // timestamp ms
    STATS: "stats"                   // {count, sumAcc}
};

/* =============================================
   Lang helpers & i18n
============================================= */
function getLang(){ return localStorage.getItem(KEYS.LANG) || 'ru'; }
function dict(){ return I18N[getLang()] || I18N.ru; }
function applyI18n(lang) {
    const d = I18N[lang] || I18N.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (!key || d[key] == null) return;
        if (/^(INPUT|TEXTAREA)$/.test(el.tagName)) el.setAttribute('placeholder', d[key]);
        else el.textContent = d[key];
    });
}
function initI18n(){ applyI18n(getLang()); }

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
function applyTheme(theme) { localStorage.setItem(KEYS.THEME, theme); setHtmlTheme(theme); }
function initTheme() {
    const saved = localStorage.getItem(KEYS.THEME) || 'default';
    setHtmlTheme(saved);
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    function syncAuto(){ if ((localStorage.getItem(KEYS.THEME)||'default') === 'default') setHtmlTheme('default'); }
    media?.addEventListener?.('change', syncAuto);
    if (window.Telegram?.WebApp) window.Telegram.WebApp.onEvent?.('themeChanged', syncAuto);
}

/* =============================================
   Sidebar & Modals helpers
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

function openModal(id){ document.getElementById(id)?.classList.add('open'); }
function closeModal(id){ document.getElementById(id)?.classList.remove('open'); }

/* Theme modal */
document.getElementById('nav-theme')?.addEventListener('click', () => openModal('themeModal'));
document.querySelectorAll('#themeModal .option-item').forEach(btn => {
    btn.addEventListener('click', () => { applyTheme(btn.getAttribute('data-theme')); closeModal('themeModal'); });
});
document.querySelectorAll('#themeModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('themeModal')));

/* Language modal */
document.getElementById('nav-lang')?.addEventListener('click', () => {
    const cur = getLang();
    document.querySelectorAll('#langModal .lang-opt').forEach(b => {
        const is = b.getAttribute('data-lang') === cur;
        b.classList.toggle('is-active', is);
        b.setAttribute('aria-pressed', String(is));
    });
    openModal('langModal');
});
function setLang(lang){
    localStorage.setItem(KEYS.LANG, lang);
    applyI18n(lang);
    // placeholders если поле пустое
    const d = I18N[lang];
    const m = getFields();
    const x = [
        ['#field-instrument','ph.select_instrument','instrument'],
        ['#field-model','ph.select_model','model'],
        ['#field-expiration','ph.expiration_time','expiration'],
    ];
    x.forEach(([sel,phKey,key])=>{
        const el = document.querySelector(sel);
        if (el && !m[key]) el.querySelector('.ui-field__placeholder').textContent = d[phKey];
    });
    updateModelLabel();
}
document.querySelectorAll('#langModal .lang-opt').forEach(b=>{
    b.addEventListener('click', () => {
        const lang = b.getAttribute('data-lang');
        setLang(lang);
        document.querySelectorAll('#langModal .lang-opt').forEach(x=>{
            const is = x === b;
            x.classList.toggle('is-active', is);
            x.setAttribute('aria-pressed', String(is));
        });
        closeModal('langModal');
    });
});
document.querySelectorAll('#langModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('langModal')));

/* Premium modal open (иконка справа) */
document.getElementById('rightIconBtn')?.addEventListener('click', () => openModal('premiumModal'));
document.querySelectorAll('#premiumModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('premiumModal')));

/* =============================================
   Instruments modal + locking (Base -> Platinum)
============================================= */
const INSTRUMENTS = {
    currencies: ["AED/CNY OTC","AUD/CAD OTC","AUD/USD OTC","BHD/CNY OTC","EUR/CHF OTC","EUR/NZD OTC","EUR/USD OTC","GBP/AUD OTC","LBP/USD OTC","NZD/JPY OTC","SAR/CNY OTC","UAH/USD OTC","USD/ARS OTC","USD/CAD OTC","USD/CLP OTC","USD/CNH OTC","USD/EGP OTC","USD/RUB OTC","ZAR/USD OTC","CHF/NOK OTC","EUR/HUF OTC","EUR/JPY OTC","EUR/RUB OTC","AUD/NZD OTC","AUD/BRL OTC","USD/COP OTC","USD/INR OTC","USD/SGD OTC","CAD/CHF OTC","QAR/CNY OTC","AUD/JPY OTC","OMR/CNY OTC","EUR/GBP OTC","USD/VND OTC","AUD/CHF OTC","USD/THB OTC","USD/DZD OTC","NGN/USD OTC","CAD/JPY OTC","TND/USD OTC","USD/BDT OTC","NZD/USD OTC","USD/MYR OTC","USD/PKR OTC","USD/MXN OTC","GBP/USD OTC","USD/PHP OTC","MAD/USD OTC","JOD/CNY OTC","GBP/JPY OTC","USD/CHF OTC","KES/USD OTC","USD/IDR OTC","CHF/JPY OTC","USD/JPY OTC"],
    crypto: ["Cardano OTC","Bitcoin ETF OTC","BNB OTC","Bitcoin OTC","Polkadot OTC","Ethereum OTC","Litecoin OTC","Polygon OTC","Avalanche OTC","TRON OTC","Toncoin OTC","Solana OTC","Chainlink OTC","Dogecoin OTC","Bitcoin"],
    stocks: ["Apple OTC","Boeing Company OTC","Intel OTC","Johnson & Johnson OTC","Microsoft OTC","Coinbase Global OTC","Marathon Digital Holdings OTC","FedEx OTC","Amazon OTC","VISA OTC","McDonald's OTC","Alibaba OTC","Advanced Micro Devices OTC","American Express OTC","ExxonMobil OTC","Palantir Technologies OTC","VIX OTC","Cisco OTC","Netflix OTC","FACEBOOK INC OTC","Pfizer Inc OTC","Citigroup Inc OTC","Tesla OTC","GameStop Corp OTC"],
    commodities: ["Brent Oil OTC","WTI Crude Oil OTC","Silver OTC","Gold OTC","Natural Gas OTC","Palladium spot OTC","Platinum spot OTC"],
    indices: ["AUS 200 OTC","100GBP OTC","D30EUR OTC","DJI30 OTC","E35EUR OTC","E50EUR","F40EUR OTC","JPN225 OTC","US100 OTC","SP500 OTC"]
};
const catOrder = ["currencies","crypto","stocks","commodities","indices"];

// какие категории закрываем до Platinum
const LOCKED_CATS = new Set(['crypto','stocks','commodities']);

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
// true если пользователь уже Platinum (>=150 сигналов)
function isPlatinumActive(){ return isPlatinum(loadStats()); }

// навесить/снять "замок" на кнопках категорий; если активная закрыта — переключить на допустимую
function updateInstrumentCatLocks(){
    const platinum = isPlatinumActive();
    document.querySelectorAll('.instr-cat').forEach(btn => {
        const cat = btn.getAttribute('data-cat');
        const locked = LOCKED_CATS.has(cat) && !platinum;
        btn.classList.toggle('is-locked', locked);
    });

    // если активная категория закрыта — переключить на доступную
    const active = document.querySelector('.instr-cat.is-active');
    if (active){
        const actCat = active.getAttribute('data-cat');
        if (LOCKED_CATS.has(actCat) && !platinum){
            const fallback = document.querySelector('.instr-cat:not(.is-locked)')
                || document.querySelector('.instr-cat[data-cat="currencies"]');
            if (fallback){
                active.classList.remove('is-active');
                fallback.classList.add('is-active');
                activateCategory(fallback.getAttribute('data-cat'));
            }
        }
    }
}

function searchInstruments(q){
    const query = q.trim().toLowerCase();
    const platinum = isPlatinumActive();

    if (!query){
        const active = document.querySelector('.instr-cat.is-active')?.getAttribute('data-cat') || 'currencies';
        const cat = (!platinum && LOCKED_CATS.has(active)) ? 'currencies' : active;
        renderInstrumentsList(INSTRUMENTS[cat] || []);
        return;
    }
    const allowedCats = platinum ? catOrder : catOrder.filter(c => !LOCKED_CATS.has(c));
    const all = allowedCats.flatMap(c => INSTRUMENTS[c]);
    renderInstrumentsList(all.filter(x => x.toLowerCase().includes(query)));
}

(function initInstrumentsModal(){
    const field = document.getElementById('field-instrument');
    field?.addEventListener('click', () => {
        updateInstrumentCatLocks(); // актуализируем замки перед показом
        openModal('instrumentsModal');
    });
    field?.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); field.click(); }});

    document.querySelectorAll('.instr-cat').forEach(btn => btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        if (LOCKED_CATS.has(cat) && !isPlatinumActive()){
            showToast(dict()['toast.cat_locked']);
            return;
        }
        activateCategory(cat);
        document.getElementById('instrSearch').value = "";
    }));

    document.getElementById('instrSearch')?.addEventListener('input', (e) => searchInstruments(e.target.value));

    activateCategory('currencies');
    updateInstrumentCatLocks(); // проставим замки при первом открытии
    document.querySelectorAll('#instrumentsModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('instrumentsModal')));
})();

/* =============================================
   Model modal
============================================= */
const MODELS = [
    { id:'tassa2',     labelKey:'model.tassa2',      locked:false },
    { id:'tessa_plus', labelKey:'model.tessa_plus',  locked:false },
    { id:'tessa_q',    labelKey:'model.tessa_quantum', locked:true } // cannot select
];

(function initModelModal(){
    const field = document.getElementById('field-model');
    const wrap  = document.getElementById('modelList');

    function render(selectedId){
        wrap.innerHTML = '';
        MODELS.forEach(m => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'model-item';
            if (m.locked) btn.setAttribute('disabled','');
            btn.innerHTML = `
        <span class="model-item__name">${dict()[m.labelKey]}</span>
        <span class="model-item__tag">${m.locked ? 'VIP' : ''}</span>
      `;
            btn.addEventListener('click', () => {
                if (m.locked){
                    showToast(dict()['toast.vip_required']);
                    // openModal('premiumModal'); // по желанию
                    return;
                }
                setFieldValue('model', dict()[m.labelKey]);
                updateModelLabel();
                closeModal('modelModal');
            });
            if (dict()[m.labelKey] === selectedId) btn.classList.add('is-active');
            wrap.appendChild(btn);
        });
    }

    function openModel(){
        const current = getField('model'); // хранится строкой label
        render(current || '');
        openModal('modelModal');
    }

    field?.addEventListener('click', openModel);
    field?.addEventListener('keydown', (e)=>{ if (e.key==='Enter'||e.key===' '){ e.preventDefault(); openModel(); } });
    document.querySelectorAll('#modelModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('modelModal')));
})();

/* =============================================
   Expiration modal
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
   Fields helpers + persistence
============================================= */
function getFields(){
    try { return JSON.parse(localStorage.getItem(KEYS.FIELDS) || '{}'); } catch(e){ return {}; }
}
function saveFields(obj){ localStorage.setItem(KEYS.FIELDS, JSON.stringify(obj || getFields())); }
function setFieldValue(kind, value){
    const map = {
        instrument: { field:'#field-instrument', ph:'ph.select_instrument' },
        model:      { field:'#field-model',      ph:'ph.select_model' },
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
function getField(kind){ const f = getFields(); return f[kind] || ''; }
function clearFields(){
    localStorage.removeItem(KEYS.FIELDS);
    const d = dict();
    [
        ['#field-instrument', 'ph.select_instrument'],
        ['#field-model',      'ph.select_model'],
        ['#field-expiration', 'ph.expiration_time'],
    ].forEach(([sel,phKey])=>{
        const el = document.querySelector(sel);
        if (!el) return;
        el.removeAttribute('data-value');
        el.querySelector('.ui-field__placeholder').textContent = d[phKey];
    });
    const badge = document.getElementById('expBadge'); if (badge) badge.hidden = true;
}

/* =============================================
   Stats & Tier (Base → Platinum @ 150)
============================================= */
function loadStats(){ try { return JSON.parse(localStorage.getItem(KEYS.STATS) || '{}'); } catch(e){ return {}; } }
function saveStats(o){ localStorage.setItem(KEYS.STATS, JSON.stringify(o||{})); }
function isPlatinum(stats){ return (stats?.count || 0) >= 150; }

function updateTierIcon(platinum){
    const btn = document.getElementById('rightIconBtn');
    if (!btn) return;
    if (platinum){
        btn.innerHTML = '<img src="static/img/Premium.svg" alt="" class="tier-img">'; // заменишь на свой «платиновый», если нужно
    }else{
        btn.innerHTML = '<span class="icon icon-crown" aria-hidden="true"></span>';
    }
}
function updateModelLabel(){
    const el = document.querySelector('.signal-model');
    if (!el) return;
    const selectedModel = getField('model') || '—';
    el.textContent = `${dict()['signal.model_prefix']} ${selectedModel}`;
}
function updateTierUI(){
    const s = loadStats();
    updateTierIcon(isPlatinum(s));
    updateModelLabel();          // модель = выбранная пользователем
    updateInstrumentCatLocks();  // снять/повесить замки при апгрейде
}
function addSignalToStats(acc){
    const s = loadStats();
    const wasPlat = isPlatinum(s);
    s.count = (s.count||0) + 1;
    s.sumAcc = (s.sumAcc||0) + (+acc || 0);
    saveStats(s);
    const nowPlat = isPlatinum(s);
    updateTierUI();
    if (!wasPlat && nowPlat) showPlatinumBanner();
}
function openStatsModal(){
    const s = loadStats();
    const d = dict();
    const count = s.count || 0;
    const avg = count ? (s.sumAcc / count) : 0;
    document.getElementById('stTariff')?.replaceChildren(document.createTextNode(isPlatinum(s) ? d['stats.platinum'] : d['stats.base']));
    document.getElementById('stCount')?.replaceChildren(document.createTextNode(count));
    document.getElementById('stAvg')?.replaceChildren(document.createTextNode(`${Math.round(avg)}%`));
    openModal('statsModal');
}
document.getElementById('nav-stats')?.addEventListener('click', openStatsModal);
document.querySelectorAll('#statsModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('statsModal')));

/* Platinum banner */
function showPlatinumBanner(){
    const DURATION = 8000; // 8 сек

    let el = document.getElementById('tierBanner');
    if (!el){
        el = document.createElement('div');
        el.id = 'tierBanner';
        el.className = 'top-banner';
        el.innerHTML = `
      <img src="static/img/Premium.svg" alt="" class="top-banner__icon">
      <div class="top-banner__text">
        <div class="top-banner__title" data-i18n="banner.platinum_title">Platinum unlocked!</div>
        <div class="top-banner__sub"   data-i18n="banner.platinum_desc">Accuracy is now always ≥70%.</div>
      </div>
    `;
        document.body.appendChild(el);
        applyI18n(getLang());
    }

    // показать
    requestAnimationFrame(() => el.classList.add('show'));

    // спрятать через DURATION
    setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => { el.remove(); }, 350);
    }, DURATION);
}


/* =============================================
   Signal card (states + persistence)
============================================= */
function setSignalState(state){
    const card = document.getElementById('signalCard');
    if (card) card.setAttribute('data-state', state); // 'idle' | 'loading' | 'result'
    const s = loadSignal(); s.state = state; saveSignal(s);
}
function fillSignalUI(s){
    document.getElementById('sigInstrument')?.replaceChildren(document.createTextNode(s.inst || '—'));
    const actEl = document.getElementById('sigAction');
    if (actEl){
        actEl.textContent = s.dir || 'BUY';
        actEl.classList.remove('buy','sell');
        actEl.classList.add((s.dir || 'BUY').toLowerCase());
    }
    document.getElementById('sigExp')?.replaceChildren(document.createTextNode(s.exp || '—'));
    document.getElementById('sigAcc')?.replaceChildren(document.createTextNode(s.acc != null ? `${(+s.acc).toFixed(2)}%` : '—%'));
    document.getElementById('sigTime')?.replaceChildren(document.createTextNode(s.receivedISO ? new Date(s.receivedISO).toLocaleTimeString() : '—'));
    const warnEl = document.getElementById('sigWarn');
    if (warnEl) warnEl.hidden = !s.warn;
    updateModelLabel(); // показать выбранную модель в шапке карточки
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

/* =============================================
   Get Signal: validation, analyzing, cooldown, persistence
============================================= */
let analyzeTimer = null;
let cooldownTickTimer = null;

function isAllSelected(){
    return Boolean(getField('instrument') && getField('model') && getField('expiration'));
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
    // после Platinum — всегда ≥ 70%
    if (isPlatinumActive()){
        const v = 70 + Math.random()*25; // 70–95
        return Math.round(v*100)/100;
    }
    // до Platinum — старая логика
    const isSec = /^S/i.test(exp);
    if (isSec){ const v = 30 + Math.random()*55; return Math.round(v*100)/100; } // 30–85
    const v = 50 + Math.random()*45; return Math.round(v*100)/100; // 50–95
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
        const model = getField('model');
        const exp  = getField('expiration');
        const dir = randomDirection();
        const acc = randomAccuracy(exp);
        const warn = /^S/i.test(exp) && acc < 50; // после Platinum не сработает, т.к. acc >= 70
        const payload = { state:'result', inst, exp, dir, acc, warn, model, receivedISO: new Date().toISOString() };
        saveSignal(payload);
        fillSignalUI(payload);
        setSignalState('result');
        document.getElementById('resetWrap')?.removeAttribute('hidden');
        addSignalToStats(acc); // учёт статистики и возможный апгрейд (баннер)
    }, ms);
}

/* main handler */
(function initGetSignal(){
    const btn = document.getElementById('getSignalBtn'); if (!btn) return;
    btn.addEventListener('click', () => {
        if (!isAllSelected()){ showToast(dict()['toast.fill_all']); return; }
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
   Restore on load
============================================= */
function restoreOnLoad(){
    // fields
    const f = getFields();
    if (f.instrument) setFieldValue('instrument', f.instrument);
    if (f.model)      setFieldValue('model',      f.model);
    if (f.expiration) setFieldValue('expiration', f.expiration);

    // tier UI
    updateTierUI();

    // signal
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
    if (getCooldownRemaining() > 0) startCooldown();

    // актуализируем замки после восстановления
    updateInstrumentCatLocks();

    updateGetSignalState();
}

/* =============================================
   Init
============================================= */
initTheme();
initI18n();
restoreOnLoad();
