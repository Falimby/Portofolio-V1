const navbarNav = document.querySelector('.navbar-nav');



document.querySelector('#menu').onclick = () => {

    navbarNav.classList.toggle('active');

};
document.querySelector('#close').onclick = () => {
    navbarNav.classList.remove('active');
};

const Menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});
//just some js to simulate fake loading time
