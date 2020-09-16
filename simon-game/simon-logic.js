"use strict";

$(document).ready(function(){

    let Game = {
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
                            // $('#ul').css('background-color', 'rgba(255,0,144,1)');
                            $('#ul').addClass('ul-active');
                            setTimeout(() => {
                                // $('#ul').css('background-color', 'rgba(255,0,144,.3)');
                                $('#ul').removeClass('ul-active');
                            }, 1000)
                        break;
                    case 'ur':
                            // $('#ur').css('background-color', 'rgba(77,77,255,1)');
                            $('#ur').addClass('ur-active');
                            setTimeout(() => {
                                // $('#ur').css('background-color', 'rgba(77,77,255,.3)');
                                $('#ur').removeClass('ur-active');
                            }, 1000)
                        break;
                    case 'll':
                            // $('#ll').css('background-color', 'rgba(0,255,0,1)');
                            $('#ll').addClass('ll-active')
                            setTimeout(() => {
                                // $('#ll').css('background-color', 'rgba(0,255,0,.3)');
                                $('#ll').removeClass('ll-active')
                            }, 1000)
                        break;
                    case 'lr':
                            // $('#lr').css('background-color', 'rgba(255,255,0,1)');
                            $('#lr').addClass('lr-active')
                            setTimeout(() => {
                                // $('#lr').css('background-color', 'rgba(255,255,0,.3)');
                                $('#lr').removeClass('lr-active')
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
                    break;
                case 'ur':
                    pattern.push('ur');
                    highlightBox();
                    break;
                case 'll':
                    pattern.push('ll');
                    highlightBox();
                    break;
                case 'lr':
                    pattern.push('lr');
                    highlightBox();
                    break;
                }
        }, 2000)
    }



    const startGame = () => {

        let game = Object.create(Game);

        newRound();
        const upperLeftBox = document.getElementById('ul');
        const upperRightBox = document.getElementById('ur');
        const lowerLeftBox = document.getElementById('ll');
        const lowerRightBox = document.getElementById('lr');
        upperLeftBox.onclick = () => {
            console.log('UL CLICKED');
        }
        upperRightBox.onclick = () => {
            console.log('UR CLICKED');
        }
        lowerLeftBox.onclick = () => {
            console.log('LL CLICKED');
        }
        lowerRightBox.onclick = () => {
            console.log('LR CLICKED');
        }
    }

    const clicked = (box) => {
        console.log(box);
    }


    //adding event listener on start button to start game
    $('#start-button').click(startGame);
    // startButton.addEventListener('click', startGame);

    //click events on color boxes
    // upperLeftBox.addEventListener('click', getClickedBox(upperLeftBox));
    // upperRightBox.addEventListener('click', getClickedBox(upperRightBox));
    // lowerLeftBox.addEventListener('click', getClickedBox(lowerLeftBox));
    // lowerRightBox.addEventListener('click', getClickedBox(lowerRightBox));

});