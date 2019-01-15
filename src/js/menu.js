(function () {
    var menuElement = document.querySelector('.header-nav__items'),
        itemsElement = document.querySelector('.header-nav'),
        openItems = 'header-nav_opened';

    menuElement.addEventListener('click', function () {
        itemsElement.classList.toggle(openItems);
    });
})();