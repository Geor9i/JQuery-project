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
    this.eventBus.on("keyFunction", this.eventId, this.calculationHandler);
}

    _calculationHandler(data) {
        this.input.value = data
        // console.log('data: ', data);
    }

}