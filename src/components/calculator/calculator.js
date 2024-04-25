import UtilInjector from "../../utils/utilInjector.js";
import CalculatorDisplay from "./calculatorDisplay.js";
import CalculatorMenu from "./calculatorMenu.js";
import KeyFunctions from "./keyFunctions.js";

export default class Calculator {
  constructor() {
    this.calculatorDisplay = new CalculatorDisplay();
    this.menu = new CalculatorMenu();
    this.keyFunctions = new KeyFunctions();
    this.calculatorUI = UtilInjector.calculatorUI;
    this.eventBus = UtilInjector.eventBus;
    this.mode = "default";
    this.subscriberId = "Calculator";

    this.element = document.querySelector(".calculator");
    this.keyboard = document.querySelector(".calculator-keyboard");
    this.memorySection = this.element.querySelector(".calculator-screen .memory");

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


  _arrangeKeys(menuOption = null) {
    if (menuOption && menuOption === this.mode) {
      return
    }
      this.mode = menuOption ?? this.mode;
      this.buttons = this.calculatorUI.getButtons(this.mode);
      this.menu.activeMenu = this.mode;
      this.changeLayout();
      this.menuTitle();

    Array.from(this.keyboard.children).forEach(child => child.remove());
    Array.from(this.memorySection.children).forEach(child => child.remove());

    const fragment = document.createDocumentFragment();
    this.buttons.forEach((buttonRow) => {
      buttonRow.forEach((buttonObj) => {
        fragment.appendChild(this.createButton("calculator-ui-button", buttonObj));
      });
      this.keyboard.appendChild(fragment);
    });
    const memoryFragment = document.createDocumentFragment();
    this.memoryButtons.forEach((buttonObj) => {
      memoryFragment.appendChild(
        this.createButton("calculator-memory-button", buttonObj)
      );
    });
    this.memorySection.appendChild(memoryFragment);
  }

  createButton(buttonClass, buttonObj) {
    const buttonElement = document.createElement("DIV");
    buttonElement.dataset.symbol = buttonObj.symbol;
    buttonElement.classList.add(buttonClass);
    const isIcon = buttonObj.icon.startsWith('fa-');
    const icon = document.createElement(isIcon ? "I": "P");
    if (isIcon) {
      icon.classList.add(...buttonObj.icon.split(' '), `fa-${this.iconSize}x`);
    }else {
      icon.textContent = buttonObj.icon;
    }
    buttonElement.appendChild(icon);
    return buttonElement;
  }

  changeLayout() {
    const cols = this.calculatorUI.getCols(this.mode);
    this.keyboard.style['grid-template-columns'] = `repeat(${cols}, 1fr)`;
  }
  
  menuTitle() {
    const menuTitle = this.element.querySelector(".menu .mode-name");
    menuTitle.textContent = this.mode.toUpperCase();
  }
}
