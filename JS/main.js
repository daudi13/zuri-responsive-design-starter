const headerNav = document.querySelector('.header__nav');
const hamIcon = document.querySelector('.hamburger-icon');

hamIcon.addEventListener('click', () => {
    headerNav.classList.toggle('active')
});