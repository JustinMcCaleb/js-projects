"use strict";

$(document).ready(function(){

    class Game {
        constructor() {
            this.count = 0;
            this.ids = ['#ul', '#ur', '#ll', '#lr'];
            this.currentGame = [];
            this.playerRound = [];
        }


        //resets counts and arrays to zero
        newGame() {
            this.count = 0;
            this.currentGame = [];
            this.playerRound = [];
        }

        //function that highlights boxes based on the elements in the currentGame array
        boxHighlightPattern() {
            console.log("boxHighlightPattern method start")
            let interval = setInterval(() => {
                if(this.count >= this.currentGame.length){
                    clearInterval(interval)
                    console.log("all done");
                }else{
                    console.log(this.currentGame);
                    for(let cg of this.currentGame){
                        switch (cg){
                            case 'ul':
                                $('#ul').addClass('ul-active');
                                setTimeout(() => {
                                    $('#ul').removeClass('ul-active');
                                }, 1000)
                                break;
                            case 'ur':
                                $('#ur').addClass('ur-active');
                                setTimeout(() => {
                                    $('#ur').removeClass('ur-active');
                                }, 1000)
                                break;
                            case 'll':
                                $('#ll').addClass('ll-active')
                                setTimeout(() => {
                                    $('#ll').removeClass('ll-active')
                                }, 1000)
                                break;
                            case 'lr':
                                $('#lr').addClass('lr-active')
                                setTimeout(() => {
                                    $('#lr').removeClass('lr-active')
                                }, 1000)
                                break;
                        }
                    }
                    this.count++
                    this.boxHighlightPattern();
                }
            }, 2000)
        }

        //updates scoreboard text on page
        updateScoreboard() {
            let scoreboardCounter = document.getElementsByClassName('scoreboard-text');
            scoreboardCounter.innerText = 'Round: ' + this.count;
        }

        //adds a new element to currentGame array and then calls boxHighlightPattern to light up boxes with new pattern
        newRound() {
            console.log("newRound method start")
            this.updateScoreboard();
            this.playerRound = [];
            setTimeout(() => {

                let randomNumber = getRandomArbitrary(1,4)

                let boxes = ['ul', 'ur', 'll', 'lr'];

                switch (getRandomIndex(boxes, randomNumber)){
                    case 'ul':
                        this.currentGame.push('ul');
                        this.boxHighlightPattern();
                        break;
                    case 'ur':
                        this.currentGame.push('ur');
                        this.boxHighlightPattern();
                        break;
                    case 'll':
                        this.currentGame.push('ll');
                        this.boxHighlightPattern();
                        break;
                    case 'lr':
                        this.currentGame.push('lr');
                        this.boxHighlightPattern();
                        break;
                }
                // if(this.playerRound.length === this.currentGame.length){
                //     if(JSON.stringify(this.playerRound) === JSON.stringify(this.currentGame)){
                //         startGame();
                //     }
                // }
            }, 2000)
        }


        startGame() {
            console.log("startGame method start")
            this.newRound();
            const upperLeftBox = document.getElementById('ul');
            const upperRightBox = document.getElementById('ur');
            const lowerLeftBox = document.getElementById('ll');
            const lowerRightBox = document.getElementById('lr');
            upperLeftBox.onclick = () => {
                this.playerRound.push('ul');
            }
            upperRightBox.onclick = () => {
                this.playerRound.push('ur');
            }
            lowerLeftBox.onclick = () => {
                this.playerRound.push('ll')
            }
            lowerRightBox.onclick = () => {
                this.playerRound.push('lr');
            }
            console.log("PLAYER ROUND: " + this.playerRound.length);
            console.log("PATTERN LENGTH: " + this.currentGame.length);
        }

        startButtonTest(){
            return "Start Button Pushed"
        }

    }

    const getRandomArbitrary = (min, max) => {
        let randNum = Math.random() * (max - min) + min;
        return Math.round(randNum - 1);
    }

    const getRandomIndex = (array, num) => {
        // console.log(num);
        return array[num];
    }

    let game = new Game();


    $('#start-button').click(function () {
        game.startGame();
    });



    // Game.prototype.highlightBox = function () {
    //     console.log("==========================")
    //     console.log(pattern);
    //     let count = 0;
    //
    //     let interval = setInterval(() => {
    //         if(count >= pattern.length){
    //             clearInterval(interval)
    //             console.log("all done");
    //         }else{
    //             switch (pattern[count]){
    //                 case 'ul':
    //                         // $('#ul').css('background-color', 'rgba(255,0,144,1)');
    //                         $('#ul').addClass('ul-active');
    //                         setTimeout(() => {
    //                             // $('#ul').css('background-color', 'rgba(255,0,144,.3)');
    //                             $('#ul').removeClass('ul-active');
    //                         }, 1000)
    //                     break;
    //                 case 'ur':
    //                         // $('#ur').css('background-color', 'rgba(77,77,255,1)');
    //                         $('#ur').addClass('ur-active');
    //                         setTimeout(() => {
    //                             // $('#ur').css('background-color', 'rgba(77,77,255,.3)');
    //                             $('#ur').removeClass('ur-active');
    //                         }, 1000)
    //                     break;
    //                 case 'll':
    //                         // $('#ll').css('background-color', 'rgba(0,255,0,1)');
    //                         $('#ll').addClass('ll-active')
    //                         setTimeout(() => {
    //                             // $('#ll').css('background-color', 'rgba(0,255,0,.3)');
    //                             $('#ll').removeClass('ll-active')
    //                         }, 1000)
    //                     break;
    //                 case 'lr':
    //                         // $('#lr').css('background-color', 'rgba(255,255,0,1)');
    //                         $('#lr').addClass('lr-active')
    //                         setTimeout(() => {
    //                             // $('#lr').css('background-color', 'rgba(255,255,0,.3)');
    //                             $('#lr').removeClass('lr-active')
    //                         }, 1000)
    //                     break;
    //             }
    //             count++
    //         }
    //     }, 2000)
    // }
    //
    //
    // const userRound = () => {
    //     //need to get users click pattern
    //     let userPattern = [];
    //
    //
    //
    //     //if user click pattern matches pattern then call startGame again
    // }

    // const newRound = () => {
    //     let scoreboardCounter = document.getElementsByClassName('scoreboard-text');
    //     let round = 0;
    //     round++;
    //     scoreboardCounter.innerText = 'Round: ' + round;
    //     playerPattern = [];
    //     setTimeout(() => {
    //
    //         let randomNumber = getRandomArbitrary(1,4)
    //
    //         let boxes = ['ul', 'ur', 'll', 'lr'];
    //
    //         console.log("RANDOM INDEX: " + getRandomIndex(boxes, randomNumber))
    //
    //         switch (getRandomIndex(boxes, randomNumber)){
    //             case 'ul':
    //                 pattern.push('ul');
    //                 highlightBox();
    //                 break;
    //             case 'ur':
    //                 pattern.push('ur');
    //                 highlightBox();
    //                 break;
    //             case 'll':
    //                 pattern.push('ll');
    //                 highlightBox();
    //                 break;
    //             case 'lr':
    //                 pattern.push('lr');
    //                 highlightBox();
    //                 break;
    //             }
    //         if(playerPattern.length === pattern.length){
    //             if(JSON.stringify(playerPattern) === JSON.stringify(pattern)){
    //                 startGame();
    //             }
    //         }
    //     }, 2000)
    // }



    // const startGame = () => {
    //
    //     let game = Object.create(Game);
    //
    //     newRound();
    //     game.playerRound = [];
    //     const upperLeftBox = document.getElementById('ul');
    //     const upperRightBox = document.getElementById('ur');
    //     const lowerLeftBox = document.getElementById('ll');
    //     const lowerRightBox = document.getElementById('lr');
    //     upperLeftBox.onclick = () => {
    //         playerPattern.push('ul');
    //         console.log(playerPattern);
    //     }
    //     upperRightBox.onclick = () => {
    //         playerPattern.push('ur');
    //         console.log(playerPattern);
    //     }
    //     lowerLeftBox.onclick = () => {
    //         playerPattern.push('ll')
    //         console.log(playerPattern);
    //     }
    //     lowerRightBox.onclick = () => {
    //         playerPattern.push('lr');
    //         console.log(playerPattern);
    //     }
    //     console.log("PLAYER ROUND: " + playerPattern.length);
    //     console.log("PATTERN LENGTH: " + pattern.length);
    // }

    // const clicked = (box) => {
    //     console.log(box);
    // }


    //adding event listener on start button to start game
    // startButton.addEventListener('click', startGame);

    //click events on color boxes
    // upperLeftBox.addEventListener('click', getClickedBox(upperLeftBox));
    // upperRightBox.addEventListener('click', getClickedBox(upperRightBox));
    // lowerLeftBox.addEventListener('click', getClickedBox(lowerLeftBox));
    // lowerRightBox.addEventListener('click', getClickedBox(lowerRightBox));

});