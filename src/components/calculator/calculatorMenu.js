import { MENU_OPTIONS } from "../../constants/calculatorMenuConstants.js";

export default class CalculatorMenu {
  constructor() {
    this.element = document.querySelector(".calculator .menu");
    this.menuButton = this.element.querySelector(".menu-btn");
    this.menu = null;
    this.menuOpen = false;
    this.createMenu = this._createMenu.bind(this);
    this.init();
  }

  init() {
    this.menuButton.addEventListener("click", this.toggleMenu.bind(this));
  }

  toggleMenu() {
    if (!this.menuOpen) {
        this.menuOpen = true;
        this.menu = $("<div>", {
            class: "calculator-menu",
          });
          let structure = this.createMenu();
            $(this.menu).append(structure);
          $(this.element).append(this.menu);
          $(this.menu).on("mouseleave", () => {
            $(this.menu).remove();
            this.menuOpen = false;
        });
    }
  }
  _createMenu() {
    const menuOptions = MENU_OPTIONS;
    const menuItems = Object.keys(menuOptions).map(optionKey => {
        const option = menuOptions[optionKey];
        const iconHTML = option.hasOwnProperty("icon") ? `<i class="${option.icon}"></i>` : '';
        return `<li>${iconHTML}<p>${option.name}</p></li>`;
    });
    const menuHTML = `<ul>${menuItems.join("")}</ul>`;
    return $(menuHTML);
}

}
