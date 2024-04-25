import UtilInjector from "../../utils/utilInjector.js";

export default class KeyFunctions {
  constructor() {
    this.eventBus = UtilInjector.eventBus;
    this.eventUtil = UtilInjector.event;
    this.element = document.querySelector(".calculator-keyboard");
    this.buttonHandler = this._buttonHandler.bind(this);
    this.init();
  }

  init() {
    this.element.addEventListener("click", this.buttonHandler);
    document.addEventListener("keydown", this.buttonHandler);
  }

  _buttonHandler(e) {
    e.preventDefault();
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
      symbol = e.key;
    }
    if (this.isSafe(symbol)) {
        const command = this.getButtonFunction(symbol);
        this.eventBus.emit("keyFunction", command);
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
      nonVariableSuperscript: /ᵉ|ᵖⁱ/,
      exponents: /[⁰¹²³⁴⁵⁶⁷⁸⁹]+/,
      constants: /e|PI|pi|Pi/,
      calcFunctions: /CE|C/,
      operators: /sqrt|log|mod|\+|\-|\/|\*|×|%|=|~|\(|\)|1\/x/
    }
    let results = {};
    Object.keys(patterns).forEach(pattern => results[pattern] = patterns[pattern].test(symbol));
    console.log(results);


    return symbol
  }
}
