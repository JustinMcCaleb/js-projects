"use strict";

$(document).ready(function(){

    const getRandomArbitrary = (min, max) => {
        let randNum = Math.random() * (max - min) + min;
        return Math.round(randNum - 1);
    }

    const getRandomIndex = (array, num) => {
        console.log(num);
        return array[num];
    }

    const round = () => {

    }

    const highlightBox = (id, rgba, rgba2) => {
        $('#'+ id).css('background-color', rgba);
        setTimeout(() => {
            $('#'+ id).css('background-color', rgba2);
        }, 1000)
    }

    const startGame = () => {

        setTimeout(() => {

        let randomNumber = getRandomArbitrary(0,4)

        let boxes = ['ul', 'ur', 'll', 'lr'];
        let pattern = ['ul'];
        // console.log(getRandomIndex(boxes, randomNumber));

        for(let i = 0; i <= pattern.length; i++){

            switch (getRandomIndex(boxes, randomNumber)){
                case 'ul':
                    console.log('UL');
                    highlightBox('ul', 'rgba(255,0,144,1)', 'rgba(255,0,144,.5)');
                    // pattern.push('ul');
                    break;
                case 'ur':
                    console.log('UR');
                    highlightBox('ur', 'rgba(77,77,255,1)', 'rgba(77,77,255,.5)');
                    // pattern.push('ur');
                    break;
                case 'll':
                    console.log('LL');
                    highlightBox('ll', 'rgba(0,255,0,1)', 'rgba(0,255,0,.5)');
                    // pattern.push('ll');
                    break;
                case 'lr':
                    console.log('LR');
                    highlightBox('lr', 'rgba(255,255,0,1)', 'rgba(255,255,0,.5)');
                    // pattern.push('lr');
                    break;
            }
        }
        }, 2000)
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
