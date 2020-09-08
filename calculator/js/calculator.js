"use strict";

(function(){

    const listener = function (event) {
        alert("you clicked a button");
    }

    document.getElementById('1').addEventListener('click', listener);

})();