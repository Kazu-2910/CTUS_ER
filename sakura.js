/* === BỘ HIỆU ỨNG RƠI THEO THÁNG (sakura.js) === */
(function () {
    const EFFECT_KEY = 'srl_fall_effect';
    const AUTO_MONTH_KEY = 'srl_fall_auto_monthly';
    const MONTH_MAP_KEY = 'srl_fall_monthly_map';

    const FALL_EFFECTS = {
        sakura: {
            label: '🌸 Hoa anh đào',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.0
        },
        snow: {
            label: '❄️ Tuyết rơi',
            count: 50,
            minSize: 14,
            maxSize: 24,
            minDuration: 8.0,
            maxDuration: 13.5
        },
        leaf: {
            label: '🍂 Lá rơi',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        sparkle: {
            label: '✨ Lấp lánh',
            count: 50,
            minSize: 6,
            maxSize: 11,
            minDuration: 6.5,
            maxDuration: 10.5
        },
        mai: {
            label: '🌼 Hoa mai',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.0
        },
        maple: {
            label: '🍁 Lá phong',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        pumpkin: {
            label: '🎃 Trái bí ngô',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.5,
            maxDuration: 14.5
        },
        star: {
            label: '⭐ Ngôi sao',
            count: 50,
            minSize: 14,
            maxSize: 22,
            minDuration: 7.5,
            maxDuration: 12.0
        },
        candy: {
            label: '🍬 Viên kẹo',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        none: {
            label: '🚫 Mặc định',
            count: 0
        }
    };

    // Mặc định gợi ý theo 12 tháng (bạn có thể đổi bất kỳ tháng nào trên giao diện)
    const DEFAULT_MONTHLY_MAP = {
        '1': 'sakura',
        '2': 'sakura',
        '3': 'sakura',
        '4': 'sparkle',
        '5': 'sparkle',
        '6': 'sparkle',
        '7': 'leaf',
        '8': 'leaf',
        '9': 'leaf',
        '10': 'leaf',
        '11': 'snow',
        '12': 'snow'
    };

    function getMonthlyMap() {
        try {
            const raw = localStorage.getItem(MONTH_MAP_KEY);
            const parsed = raw ? JSON.parse(raw) : {};
            const result = Object.assign({}, DEFAULT_MONTHLY_MAP);
            for (let m = 1; m <= 12; m++) {
                const k = String(m);
                if (parsed[k] && FALL_EFFECTS[parsed[k]]) {
                    result[k] = parsed[k];
                }
            }
            return result;
        } catch (e) {
            return Object.assign({}, DEFAULT_MONTHLY_MAP);
        }
    }

    function isAutoMonthlyEnabled() {
        return localStorage.getItem(AUTO_MONTH_KEY) === '1';
    }

    function getActiveEffectKey() {
        if (isAutoMonthlyEnabled()) {
            const curMonth = String(new Date().getMonth() + 1);
            const map = getMonthlyMap();
            if (map[curMonth] && FALL_EFFECTS[map[curMonth]]) {
                return map[curMonth];
            }
        }
        const saved = localStorage.getItem(EFFECT_KEY);
        return (saved && FALL_EFFECTS[saved]) ? saved : 'sakura';
    }

    function injectStyles() {
        if (document.getElementById('fall-effects-style')) return;
        const styleEl = document.createElement('style');
        styleEl.id = 'fall-effects-style';
        styleEl.textContent = `
            #sakura-fall-layer {
                position: fixed;
                inset: 0;
                z-index: 9990;
                pointer-events: none;
                overflow: hidden;
            }
            .fall-item {
                position: absolute;
                top: -36px;
                will-change: transform, opacity;
                animation-name: fallEffectDrift;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
            /* 1. Hoa anh đào nguyên bông 5 cánh */
            .fall-item.effect-sakura {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3CradialGradient id='sp' cx='50%25' cy='50%25' r='55%25'%3E%3Cstop offset='0%25' stop-color='%23ff5c8a'/%3E%3Cstop offset='65%25' stop-color='%23ff7aa2'/%3E%3Cstop offset='100%25' stop-color='%23ff9ebb'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(32 32)'%3E%3Cg fill='url(%23sp)'%3E%3Cpath d='M0 0 C-9 -6 -12 -20 -4 -26 C-2 -27 -1 -24 0 -22 C1 -24 2 -27 4 -26 C12 -20 9 -6 0 0 Z'/%3E%3Cpath d='M0 0 C-9 -6 -12 -20 -4 -26 C-2 -27 -1 -24 0 -22 C1 -24 2 -27 4 -26 C12 -20 9 -6 0 0 Z' transform='rotate(72)'/%3E%3Cpath d='M0 0 C-9 -6 -12 -20 -4 -26 C-2 -27 -1 -24 0 -22 C1 -24 2 -27 4 -26 C12 -20 9 -6 0 0 Z' transform='rotate(144)'/%3E%3Cpath d='M0 0 C-9 -6 -12 -20 -4 -26 C-2 -27 -1 -24 0 -22 C1 -24 2 -27 4 -26 C12 -20 9 -6 0 0 Z' transform='rotate(216)'/%3E%3Cpath d='M0 0 C-9 -6 -12 -20 -4 -26 C-2 -27 -1 -24 0 -22 C1 -24 2 -27 4 -26 C12 -20 9 -6 0 0 Z' transform='rotate(288)'/%3E%3C/g%3E%3Cg stroke='%23f3e8ff' stroke-width='2.2' stroke-linecap='round'%3E%3Cline x1='0' y1='0' x2='0' y2='-9'/%3E%3Cline x1='0' y1='0' x2='8.5' y2='-2.8'/%3E%3Cline x1='0' y1='0' x2='5.3' y2='7.3'/%3E%3Cline x1='0' y1='0' x2='-5.3' y2='7.3'/%3E%3Cline x1='0' y1='0' x2='-8.5' y2='-2.8'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='5' fill='%23f3e8ff'/%3E%3C/g%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 2px 4px rgba(255, 92, 138, 0.3));
            }
            .fall-item.effect-snow {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07'/%3E%3Cpath d='M9.5 4.5L12 7l2.5-2.5M9.5 19.5L12 17l2.5 2.5M4.5 9.5L7 12l-2.5 2.5M19.5 9.5L17 12l2.5 2.5'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 0 5px rgba(147, 197, 253, 0.95));
            }
            /* 3. Lá rơi (cụm lá thu cam đỏ) */
            .fall-item.effect-leaf {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M10 28 C12 15 26 11 38 14 C35 26 23 31 10 28 Z' fill='%23ea8c2d'/%3E%3Cpath d='M10 28 Q23 22 33 17' fill='none' stroke='%23c85a17' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M6 40 C13 38 22 42 26 50 C16 52 9 48 6 40 Z' fill='%23e67e22'/%3E%3Cpath d='M25 49 Q17 45 12 43' fill='none' stroke='%23b84b14' stroke-width='1.8' stroke-linecap='round'/%3E%3Cpath d='M30 58 C27 39 36 24 54 21 C57 40 48 55 30 58 Z' fill='%23d65136'/%3E%3Cpath d='M54 14 L54 22 L35 49' fill='none' stroke='%239b2c3c' stroke-width='3.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 2px 4px rgba(180, 60, 30, 0.25));
            }
            .fall-item.effect-sparkle {
                border-radius: 50%;
                background: radial-gradient(circle, #fef08a 0%, #facc15 55%, transparent 100%);
                box-shadow: 0 0 10px rgba(250, 204, 21, 0.85);
            }
            /* 5. Hoa mai vàng 5 cánh */
            .fall-item.effect-mai {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3CradialGradient id='mp' cx='50%25' cy='50%25' r='55%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='55%25' stop-color='%23facc15'/%3E%3Cstop offset='100%25' stop-color='%23fef08a'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(32 32)'%3E%3Cg fill='url(%23mp)'%3E%3Ccircle cx='0' cy='-14' r='11'/%3E%3Ccircle cx='13.3' cy='-4.3' r='11'/%3E%3Ccircle cx='8.2' cy='11.3' r='11'/%3E%3Ccircle cx='-8.2' cy='11.3' r='11'/%3E%3Ccircle cx='-13.3' cy='-4.3' r='11'/%3E%3C/g%3E%3Cg stroke='%23b45309' stroke-width='1.8' stroke-linecap='round'%3E%3Cline x1='0' y1='0' x2='0' y2='-8'/%3E%3Cline x1='0' y1='0' x2='7.5' y2='-2.5'/%3E%3Cline x1='0' y1='0' x2='4.6' y2='6.5'/%3E%3Cline x1='0' y1='0' x2='-4.6' y2='6.5'/%3E%3Cline x1='0' y1='0' x2='-7.5' y2='-2.5'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='4.2' fill='%23d97706'/%3E%3C/g%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 2px 4px rgba(234, 179, 8, 0.35));
            }
            /* 6. Lá phong đỏ */
            .fall-item.effect-maple {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 6 L37 19 L47 15 L43 26 L56 26 L46 36 L52 43 L38 43 L35 50 L33 50 L33 59 L31 59 L31 50 L29 50 L26 43 L12 43 L18 36 L8 26 L21 26 L17 15 L27 19 Z' fill='%23dc2626' stroke='%23991b1b' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M32 16 L32 48 M32 35 L20 29 M32 35 L44 29' stroke='%23fca5a5' stroke-width='1.4' stroke-linecap='round' opacity='0.65'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 2px 4px rgba(185, 28, 28, 0.3));
            }
            /* 7. Trái bí ngô */
            .fall-item.effect-pumpkin {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M30 17 C30 11 35 8 38 9 C36 12 35 15 35 18 Z' fill='%2315803d'/%3E%3Cellipse cx='20' cy='37' rx='13' ry='17' fill='%23ea580c'/%3E%3Cellipse cx='44' cy='37' rx='13' ry='17' fill='%23ea580c'/%3E%3Cellipse cx='32' cy='37' rx='14' ry='18.5' fill='%23f97316'/%3E%3Cellipse cx='32' cy='37' rx='7' ry='18' fill='%23fb923c' opacity='0.55'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 2px 4px rgba(234, 88, 12, 0.3));
            }
            /* 8. Ngôi sao vàng */
            .fall-item.effect-star {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpolygon points='32,6 39.5,22.5 58,24.5 44,37 48,55 32,46 16,55 20,37 6,24.5 24.5,22.5' fill='%23facc15' stroke='%23eab308' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.75));
            }
            /* 9. Viên kẹo */
            .fall-item.effect-candy {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg transform='rotate(-25 32 32)'%3E%3Cpolygon points='17,32 5,21 7,43' fill='%23f43f5e'/%3E%3Cpolygon points='47,32 59,21 57,43' fill='%23f43f5e'/%3E%3Cellipse cx='32' cy='32' rx='16' ry='12' fill='%23fb7185' stroke='%23e11d48' stroke-width='2'/%3E%3Cpath d='M24 21 Q29 32 24 43 M32 20 Q37 32 32 44 M40 21 Q45 32 40 43' fill='none' stroke='%23fff1f2' stroke-width='3' stroke-linecap='round'/%3E%3C/g%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                filter: drop-shadow(0 2px 4px rgba(225, 29, 72, 0.28));
            }
            body.dark-mode .fall-item.effect-snow {
                box-shadow: 0 0 10px rgba(224, 242, 254, 0.7);
            }
            @keyframes fallEffectDrift {
                0% {
                    transform: translate3d(0, -30px, 0) rotate(0deg) rotateY(0deg);
                    opacity: 0;
                }
                10% { opacity: 0.9; }
                50% {
                    transform: translate3d(var(--drift-x, 40px), 50vh, 0) rotate(220deg) rotateY(180deg);
                    opacity: 0.85;
                }
                90% { opacity: 0.8; }
                100% {
                    transform: translate3d(calc(var(--drift-x, 40px) * 1.6), 106vh, 0) rotate(440deg) rotateY(360deg);
                    opacity: 0;
                }
            }
            @media (prefers-reduced-motion: reduce) {
                #sakura-fall-layer { display: none !important; }
            }
        `;
        document.head.appendChild(styleEl);
    }

    function renderFallEffect(effectKey) {
        const cfg = FALL_EFFECTS[effectKey] ? FALL_EFFECTS[effectKey] : FALL_EFFECTS.sakura;
        injectStyles();

        let layer = document.getElementById('sakura-fall-layer');
        if (!layer) {
            layer = document.createElement('div');
            layer.id = 'sakura-fall-layer';
            layer.setAttribute('aria-hidden', 'true');
            document.body.appendChild(layer);
        }

        layer.innerHTML = '';
        if (effectKey === 'none' || !cfg.count) return;

        for (let i = 0; i < cfg.count; i++) {
            const el = document.createElement('span');
            el.className = `fall-item effect-${effectKey}`;

            const leftPercent = ((i / cfg.count) * 96 + (Math.random() * 4)).toFixed(1);
            const size = Math.floor(cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize + 1));
            const height = (effectKey === 'snow' || effectKey === 'sparkle') ? size : Math.round(size * 0.75);
            const driftX = (i % 2 === 0 ? 1 : -1) * Math.floor(24 + Math.random() * 28);
            const duration = (cfg.minDuration + Math.random() * (cfg.maxDuration - cfg.minDuration)).toFixed(1);
            const delay = (-Math.random() * 8).toFixed(1);

            el.style.left = `${leftPercent}%`;
            el.style.width = `${size}px`;
            el.style.height = `${height}px`;
            el.style.setProperty('--drift-x', `${driftX}px`);
            el.style.animationDuration = `${duration}s`;
            el.style.animationDelay = `${delay}s`;

            layer.appendChild(el);
        }
    }

    function buildOptionsHtml(selectedVal) {
        return Object.keys(FALL_EFFECTS).map(key => {
            const sel = key === selectedVal ? ' selected' : '';
            return `<option value="${key}"${sel}>${FALL_EFFECTS[key].label}</option>`;
        }).join('');
    }

    function syncUI() {
        const activeKey = getActiveEffectKey();
        const manualKey = localStorage.getItem(EFFECT_KEY) || activeKey;
        const autoEnabled = isAutoMonthlyEnabled();
        const monthlyMap = getMonthlyMap();

        // 1. Đồng bộ dropdown chọn nhanh
        const selectors = document.querySelectorAll('[data-fall-effect-select], #admin-fall-effect-select, #fall-effect-select');
        selectors.forEach(sel => {
            if (!sel.options.length) {
                sel.innerHTML = buildOptionsHtml(autoEnabled ? activeKey : manualKey);
            } else {
                sel.value = autoEnabled ? activeKey : manualKey;
            }
            if (!sel.dataset.fallBound) {
                sel.dataset.fallBound = '1';
                sel.addEventListener('change', function () {
                    window.setFallEffect(this.value);
                });
            }
        });

        // 2. Đồng bộ checkbox tự động theo tháng
        const autoCb = document.getElementById('admin-auto-monthly-fall');
        if (autoCb) {
            autoCb.checked = autoEnabled;
            if (!autoCb.dataset.fallBound) {
                autoCb.dataset.fallBound = '1';
                autoCb.addEventListener('change', function () {
                    window.setAutoMonthlyFall(this.checked);
                });
            }
        }

        // 3. Render hoặc đồng bộ lưới 12 tháng
        const grid = document.getElementById('admin-monthly-fall-grid');
        if (grid) {
            if (!grid.dataset.built) {
                let html = '';
                for (let m = 1; m <= 12; m++) {
                    const mk = String(m);
                    html += `
                        <div class="monthly-theme-item">
                            <div class="monthly-theme-label">Tháng ${m}</div>
                            <select id="admin-month-fall-${m}" data-month="${m}">
                                ${buildOptionsHtml(monthlyMap[mk])}
                            </select>
                        </div>
                    `;
                }
                grid.innerHTML = html;
                grid.dataset.built = '1';

                grid.querySelectorAll('select[data-month]').forEach(mSel => {
                    mSel.addEventListener('change', function () {
                        const mNum = this.getAttribute('data-month');
                        const nextMap = getMonthlyMap();
                        nextMap[mNum] = this.value;
                        localStorage.setItem(MONTH_MAP_KEY, JSON.stringify(nextMap));
                        if (isAutoMonthlyEnabled()) {
                            renderFallEffect(getActiveEffectKey());
                            syncUI();
                        }
                    });
                });
            } else {
                for (let m = 1; m <= 12; m++) {
                    const mk = String(m);
                    const mSel = document.getElementById(`admin-month-fall-${m}`);
                    if (mSel && document.activeElement !== mSel) {
                        mSel.value = monthlyMap[mk];
                    }
                }
            }
        }

        renderFallEffect(activeKey);
    }

    window.setFallEffect = function (effectKey) {
        const validKey = FALL_EFFECTS[effectKey] ? effectKey : 'sakura';
        localStorage.setItem(EFFECT_KEY, validKey);
        localStorage.setItem(AUTO_MONTH_KEY, '0');
        syncUI();
    };

    window.setAutoMonthlyFall = function (enabled) {
        localStorage.setItem(AUTO_MONTH_KEY, enabled ? '1' : '0');
        syncUI();
    };

    window.getFallEffectsList = function () {
        return Object.keys(FALL_EFFECTS).map(k => ({ value: k, label: FALL_EFFECTS[k].label }));
    };

    function init() {
        syncUI();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();