"use strict";

$(document).ready(function(){

    const startGame = () => {
        alert('game started!')
    }

    const getClickedBox = (box) => {
        console.log(box.id);
    }


    //adding event listener on start button to start game
    $('#start-button').click(startGame);
    // startButton.addEventListener('click', startGame);

    const upperLeftBox = document.getElementById('ul');
    const upperRightBox = document.getElementById('ur');
    const lowerLeftBox = document.getElementById('ll');
    const lowerRightBox = document.getElementById('lr');
    //click events on color boxes
    // upperLeftBox.addEventListener('click', getClickedBox(upperLeftBox));
    // upperRightBox.addEventListener('click', getClickedBox(upperRightBox));
    // lowerLeftBox.addEventListener('click', getClickedBox(lowerLeftBox));
    // lowerRightBox.addEventListener('click', getClickedBox(lowerRightBox));

});
