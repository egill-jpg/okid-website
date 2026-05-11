function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-is]').forEach(el => {
        el.innerHTML = lang === 'is' ? el.dataset.is : el.dataset.en;
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'is' ? 'EN' : 'IS';
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'is';
    setLang(lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const current = localStorage.getItem('lang') || 'is';
            setLang(current === 'is' ? 'en' : 'is');
        });
    }
});
