(function () {
    "use strict";


    function showSearch() {
        var clickElement = document.getElementById('button'),
            showElement = document.getElementById('input');

        clickElement.onclick = function () {
            showElement.classList.remove('header-input_appear');
        };
 }
showSearch();

})();