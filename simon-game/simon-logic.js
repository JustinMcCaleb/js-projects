"use strict";

(function (){
    const startGame = () => {
        alert('game started')
    }


    //adding event listener on start button to start game
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', startGame);

    const upperLeftBox = document.getElementById('ul');
    const upperRightBox = document.getElementById('ur');
    const lowerLeftBox = document.getElementById('ll');
    const lowerRightBox = document.getElementById('lr');

})();