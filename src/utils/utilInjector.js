import CalculatorUI from "./calculatorUI.js"
import EventBus from "./eventBus.js";
import EventUtil from "./eventUtil.js";

export default class UtilInjector {
    static calculatorUI = new CalculatorUI();
    static event = new EventUtil();
    static eventBus = new EventBus();
}