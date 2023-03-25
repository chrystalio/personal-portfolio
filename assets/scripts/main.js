const hamburger = document.querySelector('#hamburger');

// Navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
});