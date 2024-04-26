import UtilInjector from "../../utils/utilInjector.js";

export default class CalculatorDisplay {
constructor() {
    this.eventBus = UtilInjector.eventBus;
    this.eventId = "CalculatroDisplay";
    this.element = document.querySelector(".calculator .calculator-screen");
    this.input = this.element.querySelector("textarea"); 
    this.calculationHandler = this._calculationHandler.bind(this);
    this.init();
}

init() {
    mathjax({
        options: {
          input: TeX(),
          output: CHTML()
        }
      }).then((MathJax) => {
        console.log('MathJax initialized');
      }).catch((err) => {
        console.error('Error initializing MathJax:', err);
      });
    

    this.eventBus.on("keyFunction", this.eventId, this.calculationHandler);
}

    _calculationHandler(data) {
        this.input.value += data
    }

}