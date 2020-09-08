"use strict";

(function(){

    const listener = function (event) {
        document.getElementById('left-input').setAttribute('value', 'test');
    }


    const clear = function () {
        document.getElementById('left-input').setAttribute('value', '');
        document.getElementById('middle-input').setAttribute('value', '');
        document.getElementById('right-input').setAttribute('value', '');
    }

    document.getElementById('1').addEventListener('click', listener);
    document.getElementById('-').addEventListener('click', listener);

    document.getElementById('C').addEventListener()

})();