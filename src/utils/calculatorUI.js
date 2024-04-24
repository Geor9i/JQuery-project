import { CALC_BUTTONS, CALC_ICONS } from "../constants/calculatorButtons.js";
export default class CalculatorUI {
  constructor() {
    this.buttonSets = {...CALC_BUTTONS};
    this.icons = {...CALC_ICONS};
  }

  getButtons(calculatorMode) {
    if (this.buttonSets.hasOwnProperty(calculatorMode)) {
        return this.buttonSets[calculatorMode].keys.map(entry => {
          if (Array.isArray(entry)) {
            return entry.map(symbol => this.icons[symbol] || symbol)
          } else {
            return this.icons[entry] || entry;
          }
        });
    }
    throw new Error(`${calculatorMode} mode is unrecognised!`)
  }

  getCols(calculatorMode) {
    if (this.buttonSets.hasOwnProperty(calculatorMode)) {
      return this.buttonSets[calculatorMode].cols;
    }
  }
}
