import UtilInjector from "../../utils/utilInjector.js";
import CalculatorMenu from "./calculatorMenu.js";

export default class Calculator {
  constructor() {
    this.menu = new CalculatorMenu();
    this.element = document.querySelector(".calculator");
    this.keyboard = document.querySelector(".calculator-keyboard");
    this.memorySection = this.element.querySelector(
      ".calculator-screen .memory"
    );
    this.mode = "default";
    this.calculatorUI = UtilInjector.calculatorUI;
    this.buttons = this.calculatorUI.getButtons(this.mode);
    this.memoryButtons = this.calculatorUI.getButtons("memory");
    this.iconSize = 2;
    this.init();
  }

  init() {
    this.display();
    this.menuTitle();
  }

  menuTitle() {
    const menuTitle = this.element.querySelector(".menu .mode-name");
    menuTitle.textContent = this.mode.toUpperCase();
  }

  display() {
    const fragment = document.createDocumentFragment();
    this.buttons.forEach((buttonGroup) => {
      buttonGroup.forEach((buttonName) => {
        fragment.appendChild(this.createButton("calculator-ui-button", buttonName));
      });
      this.keyboard.appendChild(fragment);
    });
    const memoryFragment = document.createDocumentFragment();
    this.memoryButtons.forEach((buttonName) => {
      memoryFragment.appendChild(
        this.createButton("calculator-memory-button", buttonName)
      );
    });
    this.memorySection.appendChild(memoryFragment);
  }

  createButton(buttonClass, text) {
    const buttonElement = document.createElement("DIV");
    buttonElement.classList.add(buttonClass);
    const isIcon = text.startsWith('fa-');
    const icon = document.createElement(isIcon ? "I": "P");
    if (isIcon) {
      icon.classList.add(...text.split(' '), `fa-${this.iconSize}x`);
    }else {
      icon.textContent = text;
    }
    buttonElement.appendChild(icon);
    return buttonElement;
  }
}
