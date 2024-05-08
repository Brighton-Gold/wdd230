document.getElementById('hamburger-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        this.innerHTML = '&times; Close';
    } else {
        navMenu.classList.add('hidden');
        this.innerHTML = '&#9776; Menu';
    }
});
