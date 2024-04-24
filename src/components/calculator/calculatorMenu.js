import { MENU_OPTIONS } from "../../constants/calculatorMenuConstants.js";
import UtilInjector from "../../utils/utilInjector.js";

export default class CalculatorMenu {
  constructor() {
    this.eventUtil = UtilInjector.event;
    this.evenBus = UtilInjector.eventBus;
    this.eventId = "CalculatorMenu";
    this.element = document.querySelector(".calculator .menu");
    this.menuButton = this.element.querySelector(".menu-btn");
    this.menu = null;
    this.mode = "default";
    this.menuOpen = false;
    this.createMenu = this._createMenu.bind(this);
    this.init();
  }

  init() {
    this.menuButton.addEventListener("click", this.toggleMenu.bind(this));
  }

  set activeMenu(mode) {
    this.mode = typeof mode === "string" ? mode : "default";
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
      $(this.menu).on("mouseleave", (e) => {
        $(this.menu).remove();
        this.menuOpen = false;
      });
      $(this.menu).on("click", (e) => {
        const selector = `.calculator .menu .calculator-menu ul li`;
        let parents = this.eventUtil.getRelatives(e).parents;
        let element = e.target.matches(selector)
          ? e.target
          : parents.find((parent) => parent.matches(selector));
        if (element) {
          let option = $(element).text();
          this.evenBus.emit("menuSelect", option);
          $(this.menu).remove();
          this.menuOpen = false;
        }
      });
    }
  }
  _createMenu() {
    const menuOptions = MENU_OPTIONS;
    const menuItems = Object.keys(menuOptions).map((optionKey) => {
      const option = menuOptions[optionKey];
      const iconHTML = option.hasOwnProperty("icon")
        ? `<i class="${option.icon}"></i>`
        : "";
      const className =
        option.name === this.mode ? 'class="selected-mode"' : "";
      return `<li ${className}>${iconHTML}<p>${option.name}</p></li>`;
    });
    const menuHTML = `<ul>${menuItems.join("")}</ul>`;
    return $(menuHTML);
  }
}
