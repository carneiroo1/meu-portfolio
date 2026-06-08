const btn = document.getElementById('themeToggle');
const icon = btn.querySelector('.theme-icon');
const root = document.documentElement;

// Aplica tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
}

btn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
        root.removeAttribute('data-theme');
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        root.setAttribute('data-theme', 'dark');
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Botão Tecnologias
const techBtn = document.querySelector('.tech-button');
if (techBtn) {
    techBtn.addEventListener('click', () => {
        document.getElementById('tecnologias').scrollIntoView({ behavior: 'smooth' });
    });
}