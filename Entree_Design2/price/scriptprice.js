document.querySelectorAll('.menu > li').forEach(menuItem => {
    menuItem.addEventListener('click', function() {
        const dropdown = this.querySelector('.dropdown-menu');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    });
});

const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
