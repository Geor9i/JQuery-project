import UtilInjector from "../utils/utilInjector.js";

export default class Calculator {
    constructor() {
        this.element = document.querySelector('.calculator');
        this.keyboard = document.querySelector('.calculator-keyboard');
        this.mode = 'default';
        this.calculatorUI = UtilInjector.calculatorUI;
        this.buttons = this.calculatorUI.getButtons(this.mode);
        this.init();
    }

    init() {
        this.display()
    }

    display() {
        const fragment = document.createDocumentFragment();
        this.buttons.forEach(buttonGroup => {
            buttonGroup.forEach(button => {
                const buttonElement = document.createElement('DIV');
                buttonElement.classList.add('calculator-ui-button');
                const p = document.createElement('P');
                p.textContent = button;

                buttonElement.appendChild(p);
                fragment.appendChild(buttonElement);
            })
            this.keyboard.appendChild(fragment);
        })
    }

}