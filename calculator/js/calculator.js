"use strict";

(function(){

    const listener = function (event) {
        document.getElementById('left-input').setAttribute('value', 'test');
    }

    document.getElementById('1').addEventListener('click', listener);
    document.getElementById('-').addEventListener('click', listener);

})();