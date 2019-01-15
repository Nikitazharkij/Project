(function () {
    "use strict";

    function circle() {
        var element = document.querySelectorAll(".main-icons__menuCircle"),
            elementTitle = document.querySelectorAll(".main-icons__someInfoTitle"),
            index = 0;
        setInterval(function() {
            var elementGreen = document.querySelectorAll(".main-icons__menuCircle_green"),
                elementOpen = document.querySelectorAll(".main-icons__someInfoTitle_open");
            if (index >= element.length) {
                index = 0;
            }
            elementGreen[0].classList.remove('main-icons__menuCircle_green');
            element[index].classList.add('main-icons__menuCircle_green');
            elementOpen[0].classList.remove('main-icons__someInfoTitle_open');
            elementTitle[index].classList.add('main-icons__someInfoTitle_open');
            index++;
        }, 3000);

    }
    circle();

})();