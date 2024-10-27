// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Toggle icon
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Smooth Scrolling with Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
