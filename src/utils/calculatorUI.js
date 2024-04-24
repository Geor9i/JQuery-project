import { CALC_BUTTONS } from "../constants/calculatorButtons.js";

export default class CalculatorUI {
  constructor() {}

  getButtons(calculatorMode) {
    const buttons = {
      default: CALC_BUTTONS.default,
      scientific: CALC_BUTTONS.scientific,
      memory: CALC_BUTTONS.memory,
    };

    if (buttons.hasOwnProperty(calculatorMode)) {
        return buttons[calculatorMode];
    }
    throw new Error(`${calculatorMode} mode is unrecognised!`)
  }
}
