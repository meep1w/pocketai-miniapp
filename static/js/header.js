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
        "model.tessa_plus": "TESSA Plus",
        "model.tessa_quantum": "TESSA Quantum",
        "toast.cat_locked": "Available for Platinum only.",
        "expire.title": "Expiration time",

        "signal.title":"Signal",
        "signal.model_prefix":"Model:",
        "signal.idle":"Get Signal",
        "signal.analyzing":"Analyzing...",

        "toast.fill_all":"Please select instrument, model and expiration first.",
        "toast.vip_required":"TESSA Quantum requires Platinum access. See details via the top icon.",

        "stats.title":"Your Statistics",
        "stats.tariff":"Your tariff:",
        "stats.received":"Signals received:",
        "stats.accuracy":"Signal accuracy:",
        "vipinfo.title": "Base / Platinum",
        "vipinfo.note": "To get Platinum, contact support in our bot.",
        "vipinfo.b1": "Higher signal accuracy with Platinum",
        "vipinfo.b2": "Unlock three more categories",
        "vipinfo.b3": "Priority support",
        "vipinfo.b4": "New market analysis model for signal generation",

        "stats.base":"Base",
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
        "model.tessa_plus": "TESSA Plus",
        "model.tessa_quantum": "TESSA Quantum",

        "expire.title": "Время экспирации",
        "toast.cat_locked": "Доступно только для Platinum.",
        "signal.title":"Сигнал",
        "signal.model_prefix":"Модель:",
        "signal.idle":"Получить сигнал",
        "signal.analyzing":"Анализ...",

        "toast.fill_all":"Сначала выберите инструмент, модель и время сделки.",
        "toast.vip_required":"Чтобы использовать TESSA Quantum, нужен Platinum доступ. Подробности — через иконку сверху.",

        "stats.title":"Ваша статистика",
        "stats.tariff":"Ваш тариф:",
        "stats.received":"Сигналов получено:",
        "stats.accuracy":"Средняя точность:",
        "vipinfo.title": "Base / VIP",
        "vipinfo.note": "Для получения тарифа Platinum, свяжитесь с поддержкой, указанной в боте.",
        "vipinfo.b1": "Точность сигналов выше с Platinum",
        "vipinfo.b2": "Открытие ещё трёх категорий",
        "vipinfo.b3": "Приоритетная поддержка",
        "vipinfo.b4": "Новая модель аналитики рынка для выдачи сигналов",

        "stats.base":"Base",
    }
};

const KEYS = {
    THEME: "theme_choice",
    LANG: "lang_choice",
    FIELDS: "fields_state",   // {instrument, model, expiration}
    SIGNAL: "signal_state",   // {pair, exp, dir, conf, strength, valid, acc}
    STATS: "stats"            // {count, sumAcc}
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
        if (darkSrc && lightSrc) logo.src = (effectiveTheme === 'light') ? lightSrc : darkSrc;
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
const openSidebar = () => sidebar?.classList.add('open');
const closeSidebarFn = () => sidebar?.classList.remove('open');
burger?.addEventListener('click', openSidebar);
closeBtn?.addEventListener('click', closeSidebarFn);
document.addEventListener('click', (e) => {
    if (!sidebar) return;
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !burger.contains(e.target)) {
        closeSidebarFn();
    }
});
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

/* Premium modal (иконка справа, если есть) */
// было: openModal('premiumModal')
document.getElementById('rightIconBtn')?.addEventListener('click', () => openModal('vipInfoModal'));
document.querySelectorAll('#vipInfoModal [data-close-modal]')
    .forEach(el => el.addEventListener('click', () => closeModal('vipInfoModal')));

/* =============================================
   Instruments modal
============================================= */
// какие категории блокируем
const LOCKED_CATS = new Set(['crypto','stocks','commodities']);
const allowedCats = () => catOrder.filter(c => !LOCKED_CATS.has(c));

function updateInstrumentCatLocks(){
    document.querySelectorAll('.instr-cat').forEach(btn=>{
        const cat = btn.getAttribute('data-cat');
        const locked = LOCKED_CATS.has(cat);
        btn.classList.toggle('is-locked', locked);
        btn.setAttribute('aria-disabled', locked ? 'true' : 'false');
    });

    // если активная категория оказалась заблокированной — переключаемся на первую доступную
    const active = document.querySelector('.instr-cat.is-active');
    if (active && LOCKED_CATS.has(active.getAttribute('data-cat'))){
        const fb = document.querySelector('.instr-cat:not(.is-locked)') || document.querySelector('.instr-cat[data-cat="currencies"]');
        if (fb){
            active.classList.remove('is-active');
            fb.classList.add('is-active');
            activateCategory(fb.getAttribute('data-cat'));
        }
    }
}


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
    if (!list) return;
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

    if (!query){
        // если активная заблокирована — покажем первую доступную
        const active = document.querySelector('.instr-cat.is-active')?.getAttribute('data-cat') || 'currencies';
        const cat = LOCKED_CATS.has(active) ? (allowedCats()[0] || 'currencies') : active;
        renderInstrumentsList(INSTRUMENTS[cat] || []);
        return;
    }

    const all = allowedCats().flatMap(c => INSTRUMENTS[c] || []);
    renderInstrumentsList(all.filter(x => x.toLowerCase().includes(query)));
}

(function initInstrumentsModal(){
    const field = document.getElementById('field-instrument');
    field?.addEventListener('click', () => openModal('instrumentsModal'));
    field?.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal('instrumentsModal'); }});

    document.querySelectorAll('.instr-cat').forEach(btn => btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        if (LOCKED_CATS.has(cat)){
            showToast(dict()['toast.cat_locked']);
            return;
        }
        document.querySelectorAll('.instr-cat').forEach(b=>b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activateCategory(cat);
        document.getElementById('instrSearch').value = "";
    }));

    document.getElementById('instrSearch')?.addEventListener('input', (e) => searchInstruments(e.target.value));

    // первичная отрисовка
    updateInstrumentCatLocks();
    activateCategory( allowedCats()[0] || 'currencies' );

    document.querySelectorAll('#instrumentsModal [data-close-modal]')
        .forEach(el => el.addEventListener('click', () => closeModal('instrumentsModal')));
})();


/* =============================================
   Model modal (TESSA Plus available, TESSA Quantum disabled)
============================================= */
const MODELS = [
    { id:'tessa_plus',   labelKey:'model.tessa_plus',   locked:false },
    { id:'tessa_q',      labelKey:'model.tessa_quantum', locked:true }
];
(function initModelModal(){
    const field = document.getElementById('field-model');
    const wrap  = document.getElementById('modelList');
    function render(){
        if (!wrap) return;
        wrap.innerHTML = '';
        MODELS.forEach(m => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'model-item';
            if (m.locked) btn.disabled = true;
            btn.innerHTML = `
        <span class="model-item__name">${dict()[m.labelKey]}</span>
        ${m.locked ? '<span class="model-item__tag">Platinum</span>' : ''}
      `;
            btn.addEventListener('click', () => {
                if (m.locked){ showToast(dict()['toast.vip_required']); return; }
                setFieldValue('model', dict()[m.labelKey]);
                updateModelLabel();
                closeModal('modelModal');
            });
            wrap.appendChild(btn);
        });
    }
    function open(){ render(); openModal('modelModal'); }
    field?.addEventListener('click', open);
    field?.addEventListener('keydown', (e)=>{ if (e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); }});
    document.querySelectorAll('#modelModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('modelModal')));
})();

/* =============================================
   Expiration modal
============================================= */
const EXPIRES = ['S5','S15','S30','M1','M3','M5','M30','H1','H4'];
(function initExpireModal(){
    const field   = document.getElementById('field-expiration');
    const listEl  = document.getElementById('expList');
    function render(selected){
        if (!listEl) return;
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
}

/* =============================================
   Stats (без платинум-логики)
============================================= */
function loadStats(){ try { return JSON.parse(localStorage.getItem(KEYS.STATS) || '{}'); } catch(e){ return {}; } }
function saveStats(o){ localStorage.setItem(KEYS.STATS, JSON.stringify(o||{})); }
function addSignalToStats(acc){
    const s = loadStats();
    s.count = (s.count||0) + 1;
    s.sumAcc = (s.sumAcc||0) + (+acc || 0);
    saveStats(s);
}
function openStatsModal(){
    const s = loadStats();
    const d = dict();
    const count = s.count || 0;
    const avg = count ? (s.sumAcc / count) : 0;
    document.getElementById('stTariff')?.replaceChildren(document.createTextNode(d['stats.base']));
    document.getElementById('stCount')?.replaceChildren(document.createTextNode(count));
    document.getElementById('stAvg')?.replaceChildren(document.createTextNode(`${Math.round(avg)}%`));
    openModal('statsModal');
}
document.getElementById('nav-stats')?.addEventListener('click', openStatsModal);
document.querySelectorAll('#statsModal [data-close-modal]').forEach(el => el.addEventListener('click', () => closeModal('statsModal')));

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
   Signal card: states, analysis, result
============================================= */
function updateModelLabel(){
    const el = document.querySelector('.signal-model');
    if (!el) return;
    const selectedModel = getField('model') || '—';
    el.textContent = `${dict()['signal.model_prefix']} ${selectedModel}`;
}

function setDirection(isUp){
    const arrow = document.getElementById('dirArrow');
    const dirTxt = document.getElementById('dirText');
    if (!arrow || !dirTxt) return;
    arrow.classList.toggle('up', isUp);
    arrow.classList.toggle('down', !isUp);
    dirTxt.classList.toggle('up', isUp);
    dirTxt.classList.toggle('down', !isUp);
    dirTxt.textContent = isUp ? 'UP' : 'DOWN';
}

function showState(state){
    const controls = document.getElementById('controls');
    const idle     = document.getElementById('idleView');
    const steps    = document.getElementById('analysisSteps');
    const res      = document.getElementById('resultView');
    const reset    = document.getElementById('resetWrap');

    if (state === 'start'){
        controls?.classList.remove('collapsed');
        if (idle)  idle.hidden  = false;
        if (steps) steps.hidden = true;
        if (res)   res.hidden   = true;
        if (reset) reset.hidden = true;
    } else if (state === 'analyzing'){
        controls?.classList.add('collapsed');
        if (idle)  idle.hidden  = true;
        if (steps) steps.hidden = false;
        if (res)   res.hidden   = true;
        if (reset) reset.hidden = true;
        document.getElementById('signalCard')?.scrollIntoView({behavior:'smooth', block:'start'});
    } else if (state === 'result'){
        controls?.classList.add('collapsed');
        if (idle)  idle.hidden  = true;
        if (steps) steps.hidden = true;
        if (res)   { res.hidden = false; res.classList.remove('result-enter'); requestAnimationFrame(()=>res.classList.add('result-enter')); }
        if (reset) reset.hidden = false;
    }
}

function runStepsAndFinish(onDone){
    const steps = Array.from(document.querySelectorAll('.step'));
    const bar   = document.getElementById('progressBar');
    const txt   = document.getElementById('progressText');

    let i=0;
    function tick(){
        if (i>0) steps[i-1].classList.add('done');
        const progress = Math.min(100, Math.round((i/steps.length)*100));
        if (bar) bar.style.width = progress + '%';
        if (txt) txt.textContent = progress + '%';

        if (i < steps.length){
            i++;
            setTimeout(tick, 650);
        } else {
            setTimeout(()=>{
                if (bar) bar.style.width='100%';
                if (txt) txt.textContent='100%';
                onDone();
            }, 350);
        }
    }
    steps.forEach(s=>s.classList.remove('done'));
    if (bar) bar.style.width='0%';
    if (txt) txt.textContent='0%';
    tick();
}

function randomAccuracy(exp){
    const isSec = /^S/i.test(exp);
    if (isSec)  return +(30 + Math.random()*55).toFixed(2); // 30–85
    return +(50 + Math.random()*45).toFixed(2);            // 50–95
}

function showResult(){
    const pair = getField('instrument');
    const exp  = getField('expiration');

    const isUp = Math.random() < 0.5;
    setDirection(isUp);

    const conf = Math.floor(75 + Math.random()*21);             // 75–95
    const strength = Math.random()<0.55 ? 'Medium' : 'High';
    const acc = randomAccuracy(exp);
    const plusMin = Math.random()<0.5 ? 1 : 2;
    const valid = new Date(Date.now() + plusMin*60*1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

    document.getElementById('resTime')?.replaceChildren(document.createTextNode(exp || '—'));
    document.getElementById('resPair')?.replaceChildren(document.createTextNode(pair || '—'));
    document.getElementById('resConf')?.replaceChildren(document.createTextNode(conf + '%'));
    document.getElementById('resStrength')?.replaceChildren(document.createTextNode(strength));
    document.getElementById('resValid')?.replaceChildren(document.createTextNode(valid));
    document.getElementById('resAcc')?.replaceChildren(document.createTextNode(acc.toFixed(0) + '%'));
    document.getElementById('resVol')?.replaceChildren(document.createTextNode(Math.random()<0.5 ? 'Low' : 'Medium'));
    document.getElementById('resRisk')?.replaceChildren(document.createTextNode(Math.random()<0.6 ? 'Medium' : 'High'));

    addSignalToStats(+acc);
    showState('result');

    // сохраняем последний результат (если хочешь восстановление после F5)
    saveSignal({ pair, exp, dir:isUp?'UP':'DOWN', conf, strength, valid, acc });
}

function saveSignal(obj){ localStorage.setItem(KEYS.SIGNAL, JSON.stringify(obj || {})); }
function loadSignal(){ try { return JSON.parse(localStorage.getItem(KEYS.SIGNAL) || '{}'); } catch(e){ return {}; } }

/* =============================================
   Get Signal + Reset
============================================= */
function isAllSelected(){
    return Boolean(getField('instrument') && getField('model') && getField('expiration'));
}
function updateGetSignalState(){
    const btn = document.getElementById('getSignalBtn');
    if (!btn) return;
    btn.disabled = !isAllSelected();
}

(function initGetSignal(){
    const btn = document.getElementById('getSignalBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        if (!isAllSelected()){ showToast(dict()['toast.fill_all']); return; }
        updateModelLabel();
        showState('analyzing');
        runStepsAndFinish(showResult);
    });
})();

function resetAll(){
    // очистка UI
    document.querySelectorAll('.step').forEach(s=>s.classList.remove('done'));
    const bar = document.getElementById('progressBar'); if (bar) bar.style.width='0%';
    const txt = document.getElementById('progressText'); if (txt) txt.textContent='0%';
    document.getElementById('resAcc')?.replaceChildren(document.createTextNode('—%'));
    document.getElementById('resVol')?.replaceChildren(document.createTextNode('Low'));
    document.getElementById('resRisk')?.replaceChildren(document.createTextNode('Medium'));

    // сбрасываем выбранные поля
    clearFields();
    updateModelLabel();
    updateGetSignalState();

    // удаляем сохранённый сигнал
    localStorage.removeItem(KEYS.SIGNAL);

    showState('start');
}
document.getElementById('resetBtn')?.addEventListener('click', resetAll);

/* =============================================
   Restore on load (по желанию можно без восстановления результата)
============================================= */
function restoreOnLoad(){
    // restore fields
    const f = getFields();
    if (f.instrument) setFieldValue('instrument', f.instrument);
    if (f.model)      setFieldValue('model',      f.model);
    if (f.expiration) setFieldValue('expiration', f.expiration);

    updateModelLabel();
    updateGetSignalState();

    // если хочешь возвращать карточку результата после перезагрузки:
    const s = loadSignal();
    if (s && s.pair){
        setDirection((s.dir||'UP')==='UP');
        document.getElementById('resTime')?.replaceChildren(document.createTextNode(s.exp || '—'));
        document.getElementById('resPair')?.replaceChildren(document.createTextNode(s.pair || '—'));
        document.getElementById('resConf')?.replaceChildren(document.createTextNode((s.conf ?? '—') + (s.conf!=null?'%':'')));
        document.getElementById('resStrength')?.replaceChildren(document.createTextNode(s.strength || '—'));
        document.getElementById('resValid')?.replaceChildren(document.createTextNode(s.valid || '—:—'));
        document.getElementById('resAcc')?.replaceChildren(document.createTextNode((s.acc!=null?Number(s.acc).toFixed(0)+'%':'—%')));
        showState('result');
    } else {
        showState('start');
    }
}

/* =============================================
   Init
============================================= */
initTheme();
initI18n();
restoreOnLoad();
