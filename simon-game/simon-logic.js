"use strict";

$(document).ready(function(){

    let game = {
        count: 0,
        ids: ['#ul', '#ur', '#ll', '#lr'],
        currentGame: [],
        playerRound: []
    }

    let pattern = [];

    const getRandomArbitrary = (min, max) => {
        let randNum = Math.random() * (max - min) + min;
        return Math.round(randNum - 1);
    }

    const getRandomIndex = (array, num) => {
        // console.log(num);
        return array[num];
    }

    const highlightBox = () => {
        console.log("==========================")
        console.log(pattern);
        let count = 0;

        let interval = setInterval(() => {
            if(count >= pattern.length){
                clearInterval(interval)
                console.log("all done");
            }else{
                switch (pattern[count]){
                    case 'ul':
                            $('#ul').css('background-color', 'rgba(255,0,144,1)');
                            setTimeout(() => {
                                $('#ul').css('background-color', 'rgba(255,0,144,.3)');
                            }, 1000)
                        break;
                    case 'ur':
                            $('#ur').css('background-color', 'rgba(77,77,255,1)');
                            setTimeout(() => {
                                $('#ur').css('background-color', 'rgba(77,77,255,.3)');
                            }, 1000)
                        break;
                    case 'll':
                            $('#ll').css('background-color', 'rgba(0,255,0,1)');
                            setTimeout(() => {
                                $('#ll').css('background-color', 'rgba(0,255,0,.3)');
                            }, 1000)
                        break;
                    case 'lr':
                            $('#lr').css('background-color', 'rgba(255,255,0,1)');
                            setTimeout(() => {
                                $('#lr').css('background-color', 'rgba(255,255,0,.3)');
                            }, 1000)
                        break;
                }
                count++
            }
        }, 2000)
    }

    const userRound = () => {
        //need to get users click pattern
        let userPattern = [];
        console.log($('#ul').click() + "1");


        //if user click pattern matches pattern then call startGame again
    }

    const newRound = () => {
        setTimeout(() => {

            let randomNumber = getRandomArbitrary(1,4)

            let boxes = ['ul', 'ur', 'll', 'lr'];

            console.log("RANDOM INDEX: " + getRandomIndex(boxes, randomNumber))

            switch (getRandomIndex(boxes, randomNumber)){
                case 'ul':
                    pattern.push('ul');
                    highlightBox();
                    userRound();
                    break;
                case 'ur':
                    pattern.push('ur');
                    highlightBox();
                    userRound();
                    break;
                case 'll':
                    pattern.push('ll');
                    highlightBox();
                    userRound();
                    break;
                case 'lr':
                    pattern.push('lr');
                    highlightBox();
                    userRound();
                    break;
                }
        }, 2000)
    }



    const startGame = () => {
        newRound();
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
