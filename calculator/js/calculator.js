"use strict";

(function(){

    class Calculator {
        constructor(previousTextField, currentTextField) {
            this.previousTextField = previousTextField;
            this.currentTextField = currentTextField;
            this.clear();
        }

        clear() {
            this.current = '';
            this.previous = '';
            this.operation = undefined;
        }

        delete() {

        }

        append(number) {
            if(number === '.' && this.current.includes('.')){return;}
            this.current = this.current.toString() + number.toString();
        }

        chooseOperation(operation) {

        }

        compute() {

        }

        updateDisplay() {
            this.currentTextField.innerText = this.current;
        }
    }

    const numbersBtn = document.querySelectorAll('[data-number]');
    const operationBtn = document.querySelectorAll('[data-operation]');
    const clearBtn = document.querySelector('[data-clear]');
    const equalsBtn = document.querySelector('[data-equals]');
    const previousTextField = document.querySelector('[data-previous]');
    const currentTextField = document.querySelector('[data-current]');


    const calculator = new Calculator(previousTextField, currentTextField);

    numbersBtn.forEach(button => {
        button.addEventListener('click', () => {
            calculator.append(button.innerText);
            calculator.updateDisplay();
        })
    })


    // function leftToRight(){
    //
    //
    //
    // }
    //
    // const listener = function (event) {
    //     document.getElementById('left-input').setAttribute('value', 'test');
    // }
    // document.getElementById('1').addEventListener('click', listener);
    //
    //
    //
    //
    // const clear = function () {
    //     document.getElementById('left-input').setAttribute('value', '');
    //     document.getElementById('middle-input').setAttribute('value', '');
    //     document.getElementById('right-input').setAttribute('value', '');
    // }
    // document.getElementById('C').addEventListener('click', clear);
    //
    //
    //
    //
    // function minus() {document.getElementById('middle-input').setAttribute('value', '-');}
    // function plus(){document.getElementById('middle-input').setAttribute('value', '+');}
    // function multiply(){document.getElementById('middle-input').setAttribute('value', 'x');}
    // function divide(){document.getElementById('middle-input').setAttribute('value', '/');}
    // document.getElementById('-').addEventListener('click', minus);
    // document.getElementById('+').addEventListener('click', plus);
    // document.getElementById('*').addEventListener('click', multiply);
    // document.getElementById('/').addEventListener('click', divide);
    //
    //

})();