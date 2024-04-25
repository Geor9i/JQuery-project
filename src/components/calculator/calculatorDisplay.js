import UtilInjector from "../../utils/utilInjector.js";

export default class CalculatorDisplay {
constructor() {
    this.eventBus = UtilInjector.eventBus;
    this.eventId = "CalculatroDisplay";
    this.element = document.querySelector(".calculator .calculator-screen");
    this.calculationHandler = this._calculationHandler.bind(this);
    this.init();
}

init() {
    this.eventBus.on("keyFunction", this.eventId, this.calculationHandler);
}

    _calculationHandler(data) {
        console.log('data: ', data);
    }

}