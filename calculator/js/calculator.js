"use strict";

(function(){

    const listener = function (event) {
        document.getElementById('left-input').setAttribute('value', 'test');
    }
    document.getElementById('1').addEventListener('click', listener);




    const clear = function () {
        document.getElementById('left-input').setAttribute('value', '');
        document.getElementById('middle-input').setAttribute('value', '');
        document.getElementById('right-input').setAttribute('value', '');
    }
    document.getElementById('C').addEventListener('click', clear);




    function minus() {
        document.getElementById('middle-input').setAttribute('value', '-');
    }
    function plus(){
        document.getElementById('middle-input').setAttribute('value', '+');

    }
    document.getElementById('-').addEventListener('click', minus);
    document.getElementById('+').addEventListener('click', plus);
    document.getElementById('*').addEventListener('click', operands);
    document.getElementById('/').addEventListener('click', operands);



})();