(function () {
    "use strict";

    document.querySelectorAll('.main-select').forEach(function (tabsElement) {
        var selectElement = tabsElement.querySelector('select'),
            tabsContainerElement = tabsElement.querySelector('.main-select__tabsContainer');
            getTabByName(tabsContainerElement, "Twitter").classList.add('main-select__tabsContainer_select');

        selectElement.onchange = function () {
            tabsContainerElement.querySelector('.main-select__tabsContainer_select').classList.remove('main-select__tabsContainer_select');
            getTabByName(tabsContainerElement, selectElement.value).classList.add('main-select__tabsContainer_select');
        };
    });

    function getTabByName(tabsContainerElement, name) {
        return tabsContainerElement.querySelector('[data-name=' + name + ']');
    }
})();