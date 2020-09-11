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
            if(this.current === ''){return;}
            if(this.previous !== ''){
                this.compute();
            }
            this.operation = operation;
            this.previous = this.current;
            this.current = '';
        }

        compute() {
            let computation;
            const prev = parseFloat(this.previous)
            const cur = parseFloat(this.current)
            if(isNaN(prev) || isNaN(cur)){return;}
            switch (this.operation) {
                case '+':
                    computation = prev + cur;
                    break;
                case '-':
                    computation = prev - cur;
                    break;
                case '*':
                    computation = prev * cur;
                    break;
                case '/':
                    computation = prev / cur;
                    break;
                default:
                    return;
            }
            this.current = computation;
            this.operation = undefined;
            this.previous = '';
        }

        updateDisplay() {
            this.currentTextField.innerText = this.current;
            this.previousTextField.innerText = this.previous + this.operation;
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

   operationBtn.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
        })
    })

    equalsBtn.addEventListener('click', button => {
        calculator.compute();
        calculator.updateDisplay();
    })

    clearBtn.addEventListener('click', button => {
        calculator.clear();
        calculator.updateDisplay();
    })


})();