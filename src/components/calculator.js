import UtilInjector from "../utils/utilInjector.js";

export default class Calculator {
    constructor() {
        this.element = document.querySelector('.calculator');
        this.keyboard = document.querySelector('.calculator-keyboard');
        this.memorySection = this.element.querySelector('.calculator-screen .memory');
        this.mode = 'default';
        this.calculatorUI = UtilInjector.calculatorUI;
        this.buttons = this.calculatorUI.getButtons(this.mode);
        this.memoryButtons = this.calculatorUI.getButtons("memory");
        this.init();
    }

    init() {
        this.display();
        this.menuTitle();
    }

    menuTitle() {
        const menuTitle = this.element.querySelector('.menu .mode-name');
        menuTitle.textContent = this.mode.toUpperCase();
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
        const memoryFragment = document.createDocumentFragment();
        this.memoryButtons.forEach(button => {
            const buttonElement = document.createElement('DIV');
            buttonElement.classList.add('calculator-memory-button');
            const p = document.createElement('P');
            p.textContent = button;

            buttonElement.appendChild(p);
            memoryFragment.appendChild(buttonElement);
        })
        this.memorySection.appendChild(memoryFragment);
    }

}