const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});