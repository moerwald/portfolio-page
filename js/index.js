const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});