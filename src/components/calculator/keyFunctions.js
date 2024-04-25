import { KEYBOARD_KEYS } from "../../constants/calculatorButtons.js";
import UtilInjector from "../../utils/utilInjector.js";

export default class KeyFunctions {
  constructor() {
    this.eventBus = UtilInjector.eventBus;
    this.eventUtil = UtilInjector.event;
    this.element = document.querySelector(".calculator-keyboard");
    this.buttonHandler = this._buttonHandler.bind(this);
    this.keyboardKey = null;
    this.onKeyUp = this._onKeyUp.bind(this);
    this.init();
  }

  init() {
    this.element.addEventListener("click", this.buttonHandler);
    document.addEventListener("keydown", this.buttonHandler);
  }

  _buttonHandler(e) {
    let symbol;
    if (e.type === "click") {
      const selector = ".calculator-keyboard .calculator-ui-button";
      const parents = this.eventUtil.getRelatives(e).parents;
      const button = e.target.matches(selector)
        ? e.target
        : parents.find((parent) => parent.matches(selector));
      if (button) {
        symbol = button.dataset.symbol;
      }
    } else if (e.type === "keydown") {
      const keyboardPattern = new RegExp(KEYBOARD_KEYS.join('|'));
      symbol = e.key;
      if (keyboardPattern.test(symbol)) {
        this.keyboardKey = symbol;
        document.addEventListener('keyup', this.onKeyUp);
      } 
      if(!this.keyboardKey){
        e.preventDefault()
      }
    }
    if (this.isSafe(symbol) && !this.keyboardKey) {
        const command = this.getButtonFunction(symbol);
        this.eventBus.emit("keyFunction", command);
    }
  }

  _onKeyUp(e) {
    if (this.keyboardKey && this.keyboardKey === e.key) {
      this.keyboardKey = null;
      document.removeEventListener('keyup', this.onKeyUp);
    }
  }

  isSafe(symbol) {
    const regexPattern = /[a-zA-z0-9₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹ₐₑₒₓₔₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓₔᵨᵪᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵓᵖʳˢᵗᵘᵛʷˣʸᶻ\/\+\-\.\,\(\)\*\|\%\=\<\>\~]+/g;
    return regexPattern.test(symbol)
  }

  
  getButtonFunction(symbol) {
    
    const patterns = {
      variable: /[a-zA-Z]+/,
      number: /[0-9]+/,
      variableSuperscript: /[ᵃᵇᶜᵈᶠᵍʰⁱʲᵏˡᵐⁿᵒᵓᵖʳˢᵗᵘᵛʷˣʸᶻ]+/,
      constantsSuperscript: /ᵉ|ᵖⁱ/,
      exponents: /[⁰¹²³⁴⁵⁶⁷⁸⁹]+/,
      constants: /e|PI|pi|Pi/,
      calcFunctions: /CE|C/,
      operators: /sqrt|log|mod|\+|\-|\/|\*|×|%|=|~|\(|\)|1\/x/,
    }
    let results = {};
    Object.keys(patterns).forEach(pattern => results[pattern] = patterns[pattern].test(symbol));
    console.log(results);
    return symbol
  }
}
