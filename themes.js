// ==========================================
// THƯ VIỆN CHỦ ĐỀ TRANG ĐĂNG NHẬP (themes.js)
// ==========================================
const VIDEO_THEMES = {
    'video_theme': 'theme-video.mp4'
};
// 1. Danh sách các chủ đề có sẵn (Đã lọc bỏ trùng lặp)
const AVAILABLE_THEMES = [
    { id: 'default', name: '🌟 Default' },
    { id: 'christmas', name: '🎄 Christmas' },
    { id: 'tet', name: '🌸 Lunar New Year' },
    { id: 'halloween', name: '🎃 Halloween' },
    { id: 'trickortreat', name: '🍬 Trick or Treat' },
    { id: 'colorfest', name: '🎨 Color Festival' },
    { id: 'midautumn', name: '🥮 Mid-Autumn Festival' },
    { id: 'easter', name: '🐰 Easter Day' },
    { id: 'hoadang', name: '🏮 Lantern Festival' },
    { id: 'earthhour', name: '🌍 Earth Hour' },
    { id: 'valentine', name: '💖 Valentine' },
    { id: 'nationalday', name: '🇻🇳 National Day 2/9' },
    { id: 'reunification', name: '🔴 Reunification Day 30/4' },
    { id: 'video_theme', name: '🎬 Chủ đề Video Động' },
];

// 2. Hàm áp dụng chủ đề lên giao diện trang đăng nhập
function applyLoginPageTheme(themeName) {
    document.body.classList.remove(
        'theme-christmas', 
        'theme-tet', 
        'theme-halloween',
        'theme-trickortreat',
        'theme-colorfest', 
        'theme-midautumn', 
        'theme-easter', 
        'theme-hoadang',
        'theme-earthhour',
        'theme-valentine',
        'theme-nationalday',
        'theme-reunification',
        'theme-video_theme'
    );
    
    if (themeName && themeName !== 'default') {
        document.body.classList.add(`theme-${themeName}`);
        localStorage.setItem('srl_cached_login_theme', themeName); // 🌟 Lưu cache ngay vào máy
    } else {
        localStorage.setItem('srl_cached_login_theme', 'default');
    }

    const selectAdminEl = document.getElementById('admin-theme-select');
    if (selectAdminEl && document.activeElement !== selectAdminEl) {
        selectAdminEl.value = themeName || 'default';
    }

    const videoEl = document.getElementById('theme-bg-video');
    const videoSrcEl = document.getElementById('theme-bg-video-src');
    if (videoEl && videoSrcEl) {
        if (VIDEO_THEMES[themeName]) {
            const targetFile = VIDEO_THEMES[themeName];
            if (videoSrcEl.getAttribute('src') !== targetFile) {
                videoSrcEl.setAttribute('src', targetFile);
                videoEl.load();
            }
            videoEl.style.display = 'block';
            videoEl.play().catch(() => {});
        } else {
            videoEl.pause();
            videoEl.style.display = 'none';
        }
    }
}

// 3. Khởi tạo danh sách vào thẻ <select> trong mục Quản trị viên tự động
function initThemeSelector() {
    const selectAdminEl = document.getElementById('admin-theme-select');
    if (selectAdminEl && selectAdminEl.options.length <= 1) {
        selectAdminEl.innerHTML = '';
        AVAILABLE_THEMES.forEach(theme => {
            const opt = document.createElement('option');
            opt.value = theme.id;
            opt.textContent = theme.name;
            selectAdminEl.appendChild(opt);
        });
    }
}

// 4. Lắng nghe sự kiện khi Admin thay đổi chủ đề
document.addEventListener('DOMContentLoaded', () => {
    initThemeSelector();
    
    const selectAdminEl = document.getElementById('admin-theme-select');
    if (selectAdminEl) {
        selectAdminEl.addEventListener('change', async function() {
            if (typeof isAdminUser === 'function' && !isAdminUser(auth.currentUser)) {
                alert("Bạn không có quyền thay đổi chủ đề hệ thống!");
                return;
            }
            const selectedTheme = this.value;
            applyLoginPageTheme(selectedTheme);

            // Lưu lên Firestore để đồng bộ cho toàn bộ sinh viên truy cập
            try {
                await db.collection("system").doc("config").set({
                    loginTheme: selectedTheme,
                    themeUpdatedBy: auth.currentUser ? auth.currentUser.email : 'admin',
                    themeUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
                
                alert(`Đã cập nhật chủ đề trang đăng nhập thành công thành: ${this.options[this.selectedIndex].text}`);
            } catch (err) {
                console.error("Lỗi lưu chủ đề lên Firestore:", err);
            }
        });
    }
});