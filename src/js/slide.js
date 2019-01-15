(function () {
    "use strict";

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

                    element.scroll({left: currentPosition, behavior: 'smooth'});
                }

                elementLeft.onclick = function () {
                    currentPosition -= slideSize;
                    if (currentPosition < 0) {
                        currentPosition = element.scrollWidth - slideSize;
                   }

                    element.scroll({left: currentPosition, behavior: 'smooth'});
                }

        });
    }
    slider();

})();
