import UtilInjector from "../../utils/utilInjector.js";
import CalculatorMenu from "./calculatorMenu.js";

export default class Calculator {
  constructor() {
    this.menu = new CalculatorMenu();
    this.subscriberId = "Calculator";
    this.eventBus = UtilInjector.eventBus;
    this.element = document.querySelector(".calculator");
    this.keyboard = document.querySelector(".calculator-keyboard");
    this.memorySection = this.element.querySelector(".calculator-screen .memory");
    this.mode = "default";
    this.calculatorUI = UtilInjector.calculatorUI;
    this.buttons = this.calculatorUI.getButtons(this.mode);
    this.memoryButtons = this.calculatorUI.getButtons("memory");
    this.iconSize = 2;
    this.arrangeKeys = this._arrangeKeys.bind(this);
    this.init();
  }

  init() {
    this.eventBus.on('menuSelect', this.subscriberId, (data) => {
      this.arrangeKeys(data);
    })
    this.changeLayout()
    this.arrangeKeys();
    this.menuTitle();
  }

  menuTitle() {
    const menuTitle = this.element.querySelector(".menu .mode-name");
    menuTitle.textContent = this.mode.toUpperCase();
  }

  _arrangeKeys(menuOption = null) {
    if (menuOption && menuOption === this.mode) {
      return
    }
      this.mode = menuOption ?? this.mode;
      this.buttons = this.calculatorUI.getButtons(this.mode);
      this.changeLayout();

    Array.from(this.keyboard.children).forEach(child => child.remove());
    Array.from(this.memorySection.children).forEach(child => child.remove());

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

  changeLayout() {
    const cols = this.calculatorUI.getCols(this.mode);
    this.keyboard.style['grid-template-columns'] = `repeat(${cols}, 1fr)`;
  }
}
