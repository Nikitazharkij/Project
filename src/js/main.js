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

function slider(){
    document.querySelectorAll('.content-slides__show').forEach(function (element) {
        var slideSize = element.clientWidth,
            currentPosition = 0,
            elementRight = document.getElementById('right'),
            elementLeft = document.getElementById('left');

            elementRight.onclick = function () {
                currentPosition += slideSize;

                if (currentPosition >= element.scrollWidth) {
                    currentPosition = 0;
               }
                console.log(currentPosition);

                element.scroll({left: currentPosition, behavior: 'smooth'});
            }

            elementLeft.onclick = function () {
                currentPosition -= slideSize;
                if (currentPosition < 0) {
                    currentPosition = element.scrollWidth - slideSize;
               }
                console.log(currentPosition);

                element.scroll({left: currentPosition, behavior: 'smooth'});
            }

    });
}
slider();

})();
