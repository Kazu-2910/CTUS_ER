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
        lixi: {
            label: '🧧 Bao lì xì',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        heart: {
            label: '❤️ Trái tim',
            count: 50,
            minSize: 14,
            maxSize: 24,
            minDuration: 8.5,
            maxDuration: 13.0
        },
        phoenix: {
            label: '🌺 Hoa phượng đỏ',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        lantern: {
            label: '🏮 Đèn lồng',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.5,
            maxDuration: 14.5
        },
        ghost: {
            label: '👻 Bóng ma dễ thương',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        bat: {
            label: '🦇 Dơi nhỏ',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 7.5,
            maxDuration: 12.0
        },
        bell: {
            label: '🔔 Chuông Noel',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        candycane: {
            label: '🍭 Kẹo gậy Noel',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        confetti: {
            label: '🎉 Pháo giấy',
            count: 50,
            minSize: 10,
            maxSize: 18,
            minDuration: 6.5,
            maxDuration: 11.0
        },
        gradcap: {
            label: '🎓 Mũ tốt nghiệp',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        clover: {
            label: '🍀 Cỏ 4 lá',
            count: 50,
            minSize: 16,
            maxSize: 24,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        paperplane: {
            label: '✈️ Máy bay giấy',
            count: 50,
            minSize: 18,
            maxSize: 26,
            minDuration: 7.5,
            maxDuration: 12.0
        },
        rain: {
            label: '🌧️ Hạt mưa',
            count: 50,
            minSize: 12,
            maxSize: 20,
            minDuration: 2.2,
            maxDuration: 3.8
        },
        bubble: {
            label: '🫧 Bong bóng xà phòng',
            count: 50,
            minSize: 14,
            maxSize: 26,
            minDuration: 9.0,
            maxDuration: 14.5
        },
        butterfly: {
            label: '🦋 Cánh bướm',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        vnflag: {
            label: '🇻🇳 Cờ đỏ sao vàng',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        lotus: {
            label: '🪷 Hoa sen hồng',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        sunflower: {
            label: '🌻 Hoa hướng dương',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        rose: {
            label: '🌹 Cánh hoa hồng',
            count: 50,
            minSize: 15,
            maxSize: 25,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        mooncake: {
            label: '🥮 Bánh trung thu',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        aplus: {
            label: '💯 Điểm A+',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.0,
            maxDuration: 13.0
        },
        milktea: {
            label: '🧋 Ly trà sữa',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        music: {
            label: '🎵 Nốt nhạc',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.0,
            maxDuration: 13.0
        },
        bulb: {
            label: '💡 Bóng đèn ý tưởng',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        firefly: {
            label: '✨ Đom đóm phát sáng',
            count: 50,
            minSize: 10,
            maxSize: 18,
            minDuration: 10.0,
            maxDuration: 16.0
        },
        feather: {
            label: '🪶 Lông vũ trắng',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 10.0,
            maxDuration: 15.5
        },
        dandelion: {
            label: '🌾 Hạt bồ công anh',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 10.0,
            maxDuration: 16.0
        },
        meteor: {
            label: '☄️ Sao băng',
            count: 50,
            minSize: 22,
            maxSize: 36,
            minDuration: 2.0,
            maxDuration: 4.0
        },
        binary: {
            label: '💻 Mã nhị phân',
            count: 50,
            minSize: 16,
            maxSize: 24,
            minDuration: 5.5,
            maxDuration: 9.5
        },
        paw: {
            label: '🐾 Dấu chân mèo',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        money: {
            label: '💸 Mưa tiền',
            count: 50,
            minSize: 20,
            maxSize: 32,
            minDuration: 6.5,
            maxDuration: 11.5
        },
        santahat: {
            label: '🎅 Mũ Noel',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        witchhat: {
            label: '🧙 Mũ Halloween',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        lightning: {
            label: '⚡ Sấm sét',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 4.5,
            maxDuration: 8.0
        },
        greenleaf: {
            label: '🍃 Lá xanh',
            count: 50,
            minSize: 16,
            maxSize: 26,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        snowman: {
            label: '⛄ Người tuyết',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        cloud: {
            label: '☁️ Đám mây',
            count: 50,
            minSize: 20,
            maxSize: 32,
            minDuration: 10.0,
            maxDuration: 16.0
        },
        xmastree: {
            label: '🎄 Cây thông Noel',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        cayneu: {
            label: '🎋 Cây nêu ngày Tết',
            count: 50,
            minSize: 20,
            maxSize: 30,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        windchime: {
            label: '🎐 Chuông gió',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 9.0,
            maxDuration: 14.0
        },
        firework: {
            label: '🎆 Pháo hoa',
            count: 50,
            minSize: 18,
            maxSize: 30,
            minDuration: 7.0,
            maxDuration: 12.0
        },
        crown: {
            label: '👑 Vương miện',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        balloon: {
            label: '🎈 Bong bóng bay',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        cake: {
            label: '🎂 Bánh sinh nhật',
            count: 50,
            minSize: 18,
            maxSize: 28,
            minDuration: 8.5,
            maxDuration: 13.5
        },
        pinata: {
            label: '🪅 Pinata ngôi sao',
            count: 50,
            minSize: 18,
            maxSize: 28,
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
            /* 10. Bao lì xì */
            .fall-item.effect-lixi {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='14' y='8' width='36' height='48' rx='5' fill='%23dc2626' stroke='%23991b1b' stroke-width='2'/%3E%3Cpath d='M14 18 Q32 30 50 18' fill='none' stroke='%23facc15' stroke-width='2.5'/%3E%3Ccircle cx='32' cy='25' r='6.5' fill='%23facc15'/%3E%3Crect x='29.5' y='22.5' width='5' height='5' fill='%23dc2626'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(185, 28, 28, 0.3));
            }
            /* 11. Trái tim */
            .fall-item.effect-heart {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 54 C32 54 10 39 10 23 C10 14 17 9 24 9 C28.5 9 32 12 32 15 C32 12 35.5 9 40 9 C47 9 54 14 54 23 C54 39 32 54 32 54 Z' fill='%23f43f5e' stroke='%23be123c' stroke-width='1.5'/%3E%3Cpath d='M18 20 C18 16 21 14 24 14' fill='none' stroke='%23fecdd3' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(244, 63, 94, 0.35));
            }
            /* 12. Hoa phượng đỏ */
            .fall-item.effect-phoenix {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg transform='translate(32 32)'%3E%3Cpath d='M0 0 C-7 -9 -10 -22 0 -27 C10 -22 7 -9 0 0 Z' fill='%23ef4444'/%3E%3Cpath d='M0 0 C-7 -9 -10 -22 0 -27 C10 -22 7 -9 0 0 Z' fill='%23dc2626' transform='rotate(72)'/%3E%3Cpath d='M0 0 C-7 -9 -10 -22 0 -27 C10 -22 7 -9 0 0 Z' fill='%23ef4444' transform='rotate(144)'/%3E%3Cpath d='M0 0 C-7 -9 -10 -22 0 -27 C10 -22 7 -9 0 0 Z' fill='%23dc2626' transform='rotate(216)'/%3E%3Cpath d='M0 0 C-7 -9 -10 -22 0 -27 C10 -22 7 -9 0 0 Z' fill='%23fb923c' transform='rotate(288)'/%3E%3Ccircle cx='0' cy='0' r='4.5' fill='%23fef08a'/%3E%3C/g%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(220, 38, 38, 0.3));
            }
            /* 13. Đèn lồng Trung Thu */
            .fall-item.effect-lantern {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cline x1='32' y1='4' x2='32' y2='12' stroke='%23f59e0b' stroke-width='2.5'/%3E%3Crect x='24' y='11' width='16' height='4' rx='2' fill='%23f59e0b'/%3E%3Cellipse cx='32' cy='31' rx='18' ry='16' fill='%23ef4444' stroke='%23b91c1c' stroke-width='1.5'/%3E%3Cellipse cx='32' cy='31' rx='9' ry='16' fill='none' stroke='%23fca5a5' stroke-width='1.5'/%3E%3Crect x='25' y='46' width='14' height='4' rx='2' fill='%23f59e0b'/%3E%3Cline x1='32' y1='50' x2='32' y2='60' stroke='%23f59e0b' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.55));
            }
            /* 14. Bóng ma dễ thương */
            .fall-item.effect-ghost {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M14 54 V30 C14 16 22 10 32 10 C42 10 50 16 50 30 V54 L43 48 L37 54 L32 48 L27 54 L21 48 Z' fill='%23ffffff' stroke='%23cbd5e1' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='25' cy='28' r='3' fill='%231e293b'/%3E%3Ccircle cx='39' cy='28' r='3' fill='%231e293b'/%3E%3Cellipse cx='32' cy='35' rx='3' ry='2' fill='%23f472b6'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(100, 116, 139, 0.35));
            }
            /* 15. Dơi nhỏ */
            .fall-item.effect-bat {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 38 C28 38 25 35 23 32 C19 36 14 36 12 32 C10 35 6 35 4 31 C8 22 16 19 24 23 L27 17 L30 22 H34 L37 17 L40 23 C48 19 56 22 60 31 C58 35 54 35 52 32 C50 36 45 36 41 32 C39 35 36 38 32 38 Z' fill='%231e1b4b'/%3E%3Ccircle cx='29' cy='27' r='1.5' fill='%23facc15'/%3E%3Ccircle cx='35' cy='27' r='1.5' fill='%23facc15'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(30, 27, 75, 0.35));
            }
            /* 16. Chuông Noel */
            .fall-item.effect-bell {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 10 C22 10 17 18 16 32 L11 46 H53 L48 32 C47 18 42 10 32 10 Z' fill='%23facc15' stroke='%23ca8a04' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='32' cy='50' r='5' fill='%23ca8a04'/%3E%3Cpath d='M24 14 Q32 8 40 14' fill='none' stroke='%23dc2626' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(202, 138, 4, 0.4));
            }
            /* 17. Kẹo gậy Noel */
            .fall-item.effect-candycane {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M22 24 C22 13 38 13 38 24 V54' fill='none' stroke='%23ffffff' stroke-width='9' stroke-linecap='round'/%3E%3Cpath d='M22 24 C22 13 38 13 38 24 V54' fill='none' stroke='%23ef4444' stroke-width='9' stroke-dasharray='7 7' stroke-linecap='butt'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3));
            }
            /* 18. Pháo giấy (Confetti) */
            .fall-item.effect-confetti {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='6' y='6' width='12' height='7' rx='2' fill='%23f43f5e' transform='rotate(25 12 9)'/%3E%3Ccircle cx='24' cy='10' r='3.5' fill='%233b82f6'/%3E%3Cpolygon points='10,28 16,18 22,28' fill='%23facc15'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
            }
            /* 19. Mũ tốt nghiệp */
            .fall-item.effect-gradcap {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpolygon points='32,12 6,26 32,40 58,26' fill='%231e293b' stroke='%230f172a' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M18 33 V45 C18 49 24 52 32 52 C40 52 46 49 46 45 V33' fill='%23334155'/%3E%3Cpath d='M52 29 V44' stroke='%23facc15' stroke-width='2.5' stroke-linecap='round'/%3E%3Ccircle cx='52' cy='46' r='3' fill='%23facc15'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(15, 23, 42, 0.3));
            }
            /* 20. Cỏ 4 lá */
            .fall-item.effect-clover {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg transform='translate(32 30)'%3E%3Ccircle cx='0' cy='-11' r='10' fill='%2322c55e'/%3E%3Ccircle cx='11' cy='0' r='10' fill='%2316a34a'/%3E%3Ccircle cx='0' cy='11' r='10' fill='%2322c55e'/%3E%3Ccircle cx='-11' cy='0' r='10' fill='%2316a34a'/%3E%3C/g%3E%3Cpath d='M32 38 Q30 50 24 58' fill='none' stroke='%2315803d' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(22, 163, 74, 0.3));
            }
            /* 21. Máy bay giấy */
            .fall-item.effect-paperplane {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpolygon points='8,30 56,12 38,54 28,38' fill='%23f8fafc' stroke='%2394a3b8' stroke-width='2' stroke-linejoin='round'/%3E%3Cpolygon points='28,38 56,12 33,44' fill='%23cbd5e1'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(100, 116, 139, 0.3));
            }
            /* 22. Hạt mưa (rơi nhanh và thẳng hơn) */
            .fall-item.effect-rain {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 36'%3E%3Cpath d='M12 2 C12 2 4 16 4 23 C4 28 7.6 32 12 32 C16.4 32 20 28 20 23 C20 16 12 2 12 2 Z' fill='%2360a5fa' opacity='0.8'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                animation-name: fallEffectRain;
            }
            @keyframes fallEffectRain {
                0% { transform: translate3d(0, -30px, 0); opacity: 0; }
                15% { opacity: 0.85; }
                100% { transform: translate3d(-18px, 106vh, 0); opacity: 0.1; }
            }
            /* 23. Bong bóng xà phòng */
            .fall-item.effect-bubble {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3CradialGradient id='bb' cx='35%25' cy='30%25' r='65%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff' stop-opacity='0.9'/%3E%3Cstop offset='55%25' stop-color='%23bae6fd' stop-opacity='0.25'/%3E%3Cstop offset='85%25' stop-color='%23f472b6' stop-opacity='0.35'/%3E%3Cstop offset='100%25' stop-color='%2360a5fa' stop-opacity='0.75'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='32' cy='32' r='26' fill='url(%23bb)' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='0.8'/%3E%3Cellipse cx='22' cy='21' rx='6' ry='3.5' fill='%23ffffff' opacity='0.85' transform='rotate(-35 22 21)'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
            }
            /* 24. Cánh bướm */
            .fall-item.effect-butterfly {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 30 C24 14 8 12 10 26 C11 33 20 36 28 34 C18 37 14 48 22 51 C28 53 31 44 32 38 Z' fill='%23a855f7'/%3E%3Cpath d='M32 30 C40 14 56 12 54 26 C53 33 44 36 36 34 C46 37 50 48 42 51 C36 53 33 44 32 38 Z' fill='%23c084fc'/%3E%3Cellipse cx='32' cy='34' rx='2.5' ry='12' fill='%233b0764'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(168, 85, 247, 0.35));
            }
            /* 25. Cờ đỏ sao vàng */
            .fall-item.effect-vnflag {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 44'%3E%3Crect x='2' y='2' width='60' height='40' rx='5' fill='%23da251d' stroke='%23b91c1c' stroke-width='1.5'/%3E%3Cpolygon points='32,9 35.5,19 46,19 37.5,25.2 40.8,35.2 32,29 23.2,35.2 26.5,25.2 18,19 28.5,19' fill='%23ffff00'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(185, 28, 28, 0.3));
            }
            /* 26. Hoa sen hồng */
            .fall-item.effect-lotus {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 50 C14 48 6 36 8 24 C18 28 26 36 32 50 Z' fill='%23f472b6'/%3E%3Cpath d='M32 50 C50 48 58 36 56 24 C46 28 38 36 32 50 Z' fill='%23f472b6'/%3E%3Cpath d='M32 50 C18 42 14 26 20 14 C28 22 31 35 32 50 Z' fill='%23f9a8d4'/%3E%3Cpath d='M32 50 C46 42 50 26 44 14 C36 22 33 35 32 50 Z' fill='%23f9a8d4'/%3E%3Cpath d='M32 50 C24 36 24 20 32 10 C40 20 40 36 32 50 Z' fill='%23fbcfe8' stroke='%23ec4899' stroke-width='1.2'/%3E%3Cellipse cx='32' cy='48' rx='10' ry='4' fill='%23facc15'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3));
            }
            /* 27. Hoa hướng dương */
            .fall-item.effect-sunflower {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg transform='translate(32 32)'%3E%3Cg fill='%23facc15' stroke='%23eab308' stroke-width='1'%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(45)'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(90)'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(135)'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(180)'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(225)'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(270)'/%3E%3Cellipse cx='0' cy='-18' rx='5.5' ry='10' transform='rotate(315)'/%3E%3C/g%3E%3Ccircle cx='0' cy='0' r='11.5' fill='%2378350f' stroke='%23451a03' stroke-width='1.5'/%3E%3Ccircle cx='-3' cy='-3' r='1.5' fill='%23d97706'/%3E%3Ccircle cx='3' cy='-2' r='1.5' fill='%23d97706'/%3E%3Ccircle cx='0' cy='3' r='1.5' fill='%23d97706'/%3E%3C/g%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(234, 179, 8, 0.35));
            }
            /* 28. Cánh hoa hồng */
            .fall-item.effect-rose {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='rp' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fb7185'/%3E%3Cstop offset='55%25' stop-color='%23e11d48'/%3E%3Cstop offset='100%25' stop-color='%239f1239'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M32 54 C16 48 10 30 18 16 C23 9 30 11 32 16 C34 11 41 9 46 16 C54 30 48 48 32 54 Z' fill='url(%23rp)'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(225, 29, 72, 0.3));
            }
            /* 29. Bánh trung thu */
            .fall-item.effect-mooncake {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='24' fill='%23d97706' stroke='%2392400e' stroke-width='3' stroke-dasharray='8 3'/%3E%3Ccircle cx='32' cy='32' r='19' fill='%23f59e0b' stroke='%23b45309' stroke-width='2'/%3E%3Ccircle cx='32' cy='32' r='12' fill='none' stroke='%23fef3c7' stroke-width='2'/%3E%3Cpath d='M32 22 V42 M22 32 H42' stroke='%23fef3c7' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(180, 83, 9, 0.35));
            }
            /* 30. Điểm A+ */
            .fall-item.effect-aplus {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='26' fill='%23fef2f2' stroke='%23ef4444' stroke-width='4'/%3E%3Ctext x='32' y='41' text-anchor='middle' font-family='Arial, sans-serif' font-size='26' font-weight='900' fill='%23dc2626'%3EA+%3C/text%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.3));
            }
            /* 31. Ly trà sữa */
            .fall-item.effect-milktea {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='33' y='4' width='6' height='18' rx='2' fill='%23f43f5e' transform='rotate(10 36 13)'/%3E%3Cpath d='M16 20 H48 L43 56 C42.5 58.5 40.5 60 38 60 H26 C23.5 60 21.5 58.5 21 56 Z' fill='%23e6be8a' stroke='%2392400e' stroke-width='2'/%3E%3Crect x='13' y='16' width='38' height='6' rx='3' fill='%23ffffff' stroke='%2394a3b8' stroke-width='1.5'/%3E%3Ccircle cx='26' cy='53' r='3' fill='%2329150b'/%3E%3Ccircle cx='33' cy='54' r='3' fill='%2329150b'/%3E%3Ccircle cx='39' cy='52' r='3' fill='%2329150b'/%3E%3Ccircle cx='29' cy='47' r='2.8' fill='%2329150b'/%3E%3Ccircle cx='36' cy='47' r='2.8' fill='%2329150b'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(146, 64, 14, 0.25));
            }
            /* 32. Nốt nhạc */
            .fall-item.effect-music {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M24 44 V16 L50 10 V38' fill='none' stroke='%236366f1' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24 24 L50 18' stroke='%236366f1' stroke-width='4'/%3E%3Cellipse cx='18' cy='46' rx='8' ry='6' fill='%234f46e5' transform='rotate(-20 18 46)'/%3E%3Cellipse cx='44' cy='40' rx='8' ry='6' fill='%234f46e5' transform='rotate(-20 44 40)'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(99, 102, 241, 0.4));
            }
            /* 33. Bóng đèn ý tưởng */
            .fall-item.effect-bulb {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 8 C20 8 14 17 14 27 C14 35 19 40 22 45 H42 C45 40 50 35 50 27 C50 17 44 8 32 8 Z' fill='%23fde047' stroke='%23eab308' stroke-width='2'/%3E%3Crect x='23' y='46' width='18' height='5' rx='2' fill='%2394a3b8'/%3E%3Crect x='25' y='52' width='14' height='5' rx='2.5' fill='%2364748b'/%3E%3Cpath d='M26 24 C26 19 29 16 32 16' fill='none' stroke='%23ffffff' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.7));
            }
            /* 34. Đom đóm phát sáng */
            .fall-item.effect-firefly {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3CradialGradient id='ff' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='35%25' stop-color='%23fef08a'/%3E%3Cstop offset='70%25' stop-color='%23a3e635' stop-opacity='0.55'/%3E%3Cstop offset='100%25' stop-color='%23a3e635' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='16' cy='16' r='15' fill='url(%23ff)'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 8px rgba(190, 242, 100, 0.9));
            }
            /* 35. Lông vũ trắng */
            .fall-item.effect-feather {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M54 10 C38 10 22 22 14 42 C24 40 38 34 48 22 C52 17 54 13 54 10 Z' fill='%23f8fafc' stroke='%23cbd5e1' stroke-width='1.5'/%3E%3Cpath d='M52 12 C38 24 24 38 10 54' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(148, 163, 184, 0.45));
            }
            /* 36. Hạt bồ công anh */
            .fall-item.effect-dandelion {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg stroke='%23e2e8f0' stroke-width='1.8' stroke-linecap='round'%3E%3Cline x1='32' y1='26' x2='32' y2='52'/%3E%3Cline x1='32' y1='26' x2='14' y2='14'/%3E%3Cline x1='32' y1='26' x2='22' y2='10'/%3E%3Cline x1='32' y1='26' x2='32' y2='8'/%3E%3Cline x1='32' y1='26' x2='42' y2='10'/%3E%3Cline x1='32' y1='26' x2='50' y2='14'/%3E%3C/g%3E%3Cellipse cx='32' cy='53' rx='3' ry='5' fill='%23cbd5e1'/%3E%3Ccircle cx='32' cy='26' r='2.5' fill='%23ffffff'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 4px rgba(148, 163, 184, 0.7));
            }
            /* 37. Sao băng (rơi xéo nhanh) */
            .fall-item.effect-meteor {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='mt' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='35%25' stop-color='%2338bdf8' stop-opacity='0.85'/%3E%3Cstop offset='100%25' stop-color='%2338bdf8' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cline x1='12' y1='52' x2='58' y2='6' stroke='url(%23mt)' stroke-width='5' stroke-linecap='round'/%3E%3Ccircle cx='12' cy='52' r='4.5' fill='%23ffffff'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.9));
                animation-name: fallEffectMeteor;
            }
            @keyframes fallEffectMeteor {
                0% { transform: translate3d(120px, -60px, 0); opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 0.9; }
                100% { transform: translate3d(-260px, 108vh, 0); opacity: 0; }
            }
            /* 38. Mã nhị phân (0 1) */
            .fall-item.effect-binary {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Ctext x='20' y='17' text-anchor='middle' font-family='monospace' font-size='15' font-weight='900' fill='%2322c55e'%3E10%3C/text%3E%3Ctext x='20' y='34' text-anchor='middle' font-family='monospace' font-size='15' font-weight='900' fill='%234ade80'%3E01%3C/text%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 5px rgba(34, 197, 94, 0.7));
            }
            /* 39. Dấu chân mèo */
            .fall-item.effect-paw {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg fill='%23fb7185'%3E%3Cellipse cx='32' cy='42' rx='13' ry='10'/%3E%3Cellipse cx='16' cy='28' rx='5.5' ry='7.5' transform='rotate(-20 16 28)'/%3E%3Cellipse cx='26' cy='19' rx='5.5' ry='7.5' transform='rotate(-8 26 19)'/%3E%3Cellipse cx='38' cy='19' rx='5.5' ry='7.5' transform='rotate(8 38 19)'/%3E%3Cellipse cx='48' cy='28' rx='5.5' ry='7.5' transform='rotate(20 48 28)'/%3E%3C/g%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(244, 63, 94, 0.3));
            }
            /* 40. Mưa tiền */
            .fall-item.effect-money {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 40'%3E%3Crect x='2' y='2' width='60' height='36' rx='5' fill='%2322c55e' stroke='%2315803d' stroke-width='2.5'/%3E%3Crect x='7' y='7' width='50' height='26' rx='2.5' fill='none' stroke='%2386efac' stroke-width='1.5' stroke-dasharray='4 2'/%3E%3Ccircle cx='32' cy='20' r='9.5' fill='%2316a34a'/%3E%3Ctext x='32' y='25' text-anchor='middle' font-family='Arial, sans-serif' font-size='15' font-weight='900' fill='%23fef08a'%3E$%3C/text%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(21, 128, 61, 0.35));
            }
            /* 41. Mũ Noel */
            .fall-item.effect-santahat {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M12 44 C16 18 36 10 54 24 C45 24 41 30 46 44 Z' fill='%23ef4444'/%3E%3Ccircle cx='54' cy='24' r='6' fill='%23ffffff' stroke='%23e2e8f0' stroke-width='1.5'/%3E%3Crect x='8' y='40' width='42' height='10' rx='5' fill='%23ffffff' stroke='%23e2e8f0' stroke-width='1.5'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(185, 28, 28, 0.3));
            }
            /* 42. Mũ Halloween (mũ phù thủy) */
            .fall-item.effect-witchhat {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M18 46 L30 10 L46 46 Z' fill='%234c1d95'/%3E%3Cpath d='M30 10 C38 8 46 14 48 20 C40 16 35 17 32 22 Z' fill='%235b21b6'/%3E%3Cellipse cx='32' cy='47' rx='26' ry='7' fill='%233b0764'/%3E%3Crect x='20' y='38' width='24' height='6' rx='2' fill='%23f97316'/%3E%3Crect x='29' y='37' width='6' height='8' rx='1' fill='none' stroke='%23facc15' stroke-width='2'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(59, 7, 100, 0.35));
            }
            /* 43. Sấm sét */
            .fall-item.effect-lightning {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpolygon points='38,4 14,34 30,34 24,60 50,28 34,28' fill='%23facc15' stroke='%23eab308' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.85));
            }
            /* 44. Lá xanh */
            .fall-item.effect-greenleaf {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M12 52 C10 26 26 10 52 12 C54 38 38 54 12 52 Z' fill='%2322c55e' stroke='%2316a34a' stroke-width='1.5'/%3E%3Cpath d='M10 54 Q30 34 48 16' fill='none' stroke='%23dcfce7' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(22, 163, 74, 0.3));
            }
            /* 45. Người tuyết */
            .fall-item.effect-snowman {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='45' r='15' fill='%23ffffff' stroke='%23cbd5e1' stroke-width='1.8'/%3E%3Ccircle cx='32' cy='22' r='11' fill='%23ffffff' stroke='%23cbd5e1' stroke-width='1.8'/%3E%3Crect x='22' y='31' width='20' height='4.5' rx='2' fill='%23ef4444'/%3E%3Ccircle cx='28' cy='20' r='1.8' fill='%231e293b'/%3E%3Ccircle cx='36' cy='20' r='1.8' fill='%231e293b'/%3E%3Cpolygon points='32,22 42,24 32,26' fill='%23f97316'/%3E%3Ccircle cx='32' cy='41' r='1.8' fill='%231e293b'/%3E%3Ccircle cx='32' cy='48' r='1.8' fill='%231e293b'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(100, 116, 139, 0.3));
            }
            /* 46. Đám mây */
            .fall-item.effect-cloud {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 44'%3E%3Cpath d='M16 36 H48 C54 36 58 31.5 58 26 C58 21 54.5 17 49.5 16.2 C48 9.5 42 5 34.5 5 C28 5 22.5 9 20.5 14.8 C19.5 14.5 18.5 14.3 17.5 14.3 C11.2 14.3 6 19.3 6 25.5 C6 31.3 10.5 36 16 36 Z' fill='%23ffffff' stroke='%23cbd5e1' stroke-width='2'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(148, 163, 184, 0.4));
            }
            /* 47. Cây thông Noel */
            .fall-item.effect-xmastree {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='28' y='50' width='8' height='10' rx='1.5' fill='%2392400e'/%3E%3Cpolygon points='32,12 10,52 54,52' fill='%2316a34a'/%3E%3Cpolygon points='32,10 15,38 49,38' fill='%2322c55e'/%3E%3Cpolygon points='32,4 34.5,10 41,10 36,14 38,20 32,16.5 26,20 28,14 23,10 29.5,10' fill='%23facc15'/%3E%3Ccircle cx='26' cy='32' r='2.5' fill='%23ef4444'/%3E%3Ccircle cx='38' cy='42' r='2.5' fill='%23facc15'/%3E%3Ccircle cx='24' cy='45' r='2.5' fill='%2338bdf8'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(21, 128, 61, 0.35));
            }
            /* 48. Cây nêu ngày Tết */
            .fall-item.effect-cayneu {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 60 V14 C32 8 38 6 44 8' fill='none' stroke='%2316a34a' stroke-width='3.5' stroke-linecap='round'/%3E%3Cpath d='M32 14 C24 10 20 14 22 18 M32 12 C28 5 34 3 38 7' fill='none' stroke='%2322c55e' stroke-width='2.5' stroke-linecap='round'/%3E%3Cline x1='44' y1='8' x2='44' y2='18' stroke='%23f59e0b' stroke-width='1.8'/%3E%3Cellipse cx='44' cy='25' rx='7' ry='7.5' fill='%23ef4444' stroke='%23facc15' stroke-width='1.5'/%3E%3Cline x1='44' y1='33' x2='44' y2='42' stroke='%23f59e0b' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(185, 28, 28, 0.3));
            }
            /* 49. Chuông gió */
            .fall-item.effect-windchime {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cline x1='32' y1='4' x2='32' y2='12' stroke='%2394a3b8' stroke-width='2'/%3E%3Cpath d='M16 28 C16 17 23 11 32 11 C41 11 48 17 48 28 C48 32 45 35 42 36 H22 C19 35 16 32 16 28 Z' fill='%237dd3fc' stroke='%230284c7' stroke-width='1.8'/%3E%3Cpath d='M22 20 C24 16 27 15 30 15' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round'/%3E%3Cline x1='32' y1='32' x2='32' y2='42' stroke='%2394a3b8' stroke-width='1.8'/%3E%3Crect x='26' y='41' width='12' height='19' rx='2' fill='%23fb7185' stroke='%23e11d48' stroke-width='1.5'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(2, 132, 199, 0.3));
            }
            /* 50. Pháo hoa */
            .fall-item.effect-firework {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg stroke-width='2.8' stroke-linecap='round'%3E%3Cline x1='32' y1='32' x2='32' y2='8' stroke='%23facc15'/%3E%3Cline x1='32' y1='32' x2='52' y2='16' stroke='%23f43f5e'/%3E%3Cline x1='32' y1='32' x2='56' y2='36' stroke='%2338bdf8'/%3E%3Cline x1='32' y1='32' x2='46' y2='54' stroke='%23a855f7'/%3E%3Cline x1='32' y1='32' x2='20' y2='54' stroke='%23facc15'/%3E%3Cline x1='32' y1='32' x2='8' y2='36' stroke='%23f43f5e'/%3E%3Cline x1='32' y1='32' x2='14' y2='16' stroke='%2338bdf8'/%3E%3C/g%3E%3Ccircle cx='32' cy='32' r='4.5' fill='%23ffffff'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 0 6px rgba(250, 204, 21, 0.8));
            }
            /* 51. Vương miện */
            .fall-item.effect-crown {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M8 46 L12 18 L24 32 L32 14 L40 32 L52 18 L56 46 Z' fill='%23facc15' stroke='%23ca8a04' stroke-width='2' stroke-linejoin='round'/%3E%3Crect x='8' y='46' width='48' height='7' rx='3' fill='%23eab308' stroke='%23ca8a04' stroke-width='1.8'/%3E%3Ccircle cx='32' cy='36' r='3.5' fill='%23ef4444'/%3E%3Ccircle cx='18' cy='39' r='2.5' fill='%233b82f6'/%3E%3Ccircle cx='46' cy='39' r='2.5' fill='%233b82f6'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(202, 138, 4, 0.45));
            }
            /* 52. Bong bóng bay */
            .fall-item.effect-balloon {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 45 Q28 53 33 60' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round'/%3E%3Cpolygon points='28,44 36,44 32,40' fill='%23e11d48'/%3E%3Cellipse cx='32' cy='24' rx='16' ry='19' fill='%23f43f5e' stroke='%23e11d48' stroke-width='1.5'/%3E%3Cellipse cx='25' cy='16' rx='3.5' ry='6.5' fill='%23fda4af' opacity='0.75' transform='rotate(-20 25 16)'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(225, 29, 72, 0.3));
            }
            /* 53. Bánh sinh nhật */
            .fall-item.effect-cake {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 6 C35 10 35 14 32 16 C29 14 29 10 32 6 Z' fill='%23facc15'/%3E%3Crect x='29.5' y='16' width='5' height='12' rx='1.5' fill='%2338bdf8'/%3E%3Crect x='12' y='28' width='40' height='26' rx='5' fill='%23fde68a' stroke='%23f59e0b' stroke-width='1.8'/%3E%3Cpath d='M12 33 C16 39 22 39 26 33 C30 39 34 39 38 33 C42 39 48 39 52 33 V28 H12 Z' fill='%23f472b6'/%3E%3Crect x='8' y='53' width='48' height='5' rx='2.5' fill='%23e2e8f0' stroke='%2394a3b8' stroke-width='1.2'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 4px rgba(244, 114, 182, 0.35));
            }
            /* 54. Pinata ngôi sao */
            .fall-item.effect-pinata {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 10 L37 22 L49 14 L41 26 L54 32 L41 38 L49 50 L37 42 L32 54 L27 42 L15 50 L23 38 L10 32 L23 26 L15 14 L27 22 Z' fill='%2338bdf8' stroke='%230284c7' stroke-width='1.5'/%3E%3Cpath d='M32 10 L35 22 L49 14' fill='%23f43f5e'/%3E%3Cpath d='M49 14 L41 26 L54 32' fill='%23facc15'/%3E%3Cpath d='M54 32 L41 38 L49 50' fill='%23a855f7'/%3E%3Cpath d='M49 50 L37 42 L32 54' fill='%23f97316'/%3E%3Cpath d='M32 54 L27 42 L15 50' fill='%23ef4444'/%3E%3Cpath d='M15 50 L23 38 L10 32' fill='%2322c55e'/%3E%3Cpath d='M10 32 L23 26 L15 14' fill='%23ec4899'/%3E%3Cpath d='M15 14 L27 22 L32 10' fill='%23e11d48'/%3E%3Ccircle cx='32' cy='32' r='8' fill='%23e0f2fe' stroke='%2338bdf8' stroke-width='1.5'/%3E%3Ccircle cx='32' cy='32' r='4' fill='%23facc15'/%3E%3Cpath d='M32 6 Q28 2 24 6 M49 14 Q53 10 57 14 M54 32 Q59 34 62 38 M49 50 Q51 55 49 60 M32 54 Q30 59 27 62 M15 50 Q11 53 7 51 M10 32 Q5 30 2 27 M15 14 Q12 9 8 10' fill='none' stroke='%23fb7185' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
                background-size: contain; background-repeat: no-repeat; background-position: center;
                filter: drop-shadow(0 2px 5px rgba(2, 132, 199, 0.45));
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