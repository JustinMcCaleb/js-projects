"use strict";

$(document).ready(function(){

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

        let count = 0;

        let interval = setInterval(() => {
            if(count >= pattern.length){
                clearInterval(interval)
                console.log("all done");
            }else{
                count++
                switch (pattern[count]){
                    case 'ul':
                            $('#ul').css('background-color', 'rgba(255,0,144,1)');
                            setTimeout(() => {
                                $('#ul').css('background-color', 'rgba(255,0,144,.5)');
                            }, 1000)
                        break;
                    case 'ur':
                            // highlightBox('ur', 'rgba(77,77,255,1)', 'rgba(77,77,255,.5)');
                            $('#ur').css('background-color', 'rgba(77,77,255,1)');
                            setTimeout(() => {
                                $('#ur').css('background-color', 'rgba(77,77,255,.5)');
                            }, 1000)
                        break;
                    case 'll':
                            // highlightBox('ll', 'rgba(0,255,0,1)', 'rgba(0,255,0,.5)');
                            $('#ll').css('background-color', 'rgba(0,255,0,1)');
                            setTimeout(() => {
                                $('#ll').css('background-color', 'rgba(0,255,0,.5)');
                            }, 1000)
                        break;
                    case 'lr':
                            // highlightBox('lr', 'rgba(255,255,0,1)', 'rgba(255,255,0,.5)');
                            $('#lr').css('background-color', 'rgba(255,255,0,1)');
                            setTimeout(() => {
                                $('#lr').css('background-color', 'rgba(255,255,0,.5)');
                            }, 1000)
                        break;
                }
            }
        }, 1000)


        // $('#'+ id).css('background-color', rgba);
        // setTimeout(() => {
        //     $('#'+ id).css('background-color', rgba2);
        // }, 1000)
    }

    const newRound = () => {
        setTimeout(() => {

            let randomNumber = getRandomArbitrary(0,4)

            let boxes = ['ul', 'ur', 'll', 'lr'];

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
        console.log(pattern);
    }

    const userRound = (pattern) => {
        //need to get users click pattern
        let userPattern = [];


        //if user click pattern matches pattern then call startGame again
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
