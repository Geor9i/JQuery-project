import { CALC_BUTTONS, CALC_ICONS } from "../constants/calculatorButtons.js";
export default class CalculatorUI {
  constructor() {}

  getButtons(calculatorMode) {
    const buttons = {
      default: CALC_BUTTONS.default,
      scientific: CALC_BUTTONS.scientific,
      memory: CALC_BUTTONS.memory,
    };

    if (buttons.hasOwnProperty(calculatorMode)) {
        return buttons[calculatorMode].map(entry => {
          if (Array.isArray(entry)) {
            return entry.map(symbol => CALC_ICONS[symbol] || symbol)
          } else {
            return CALC_ICONS[entry] || entry;
          }
        });
    }
    throw new Error(`${calculatorMode} mode is unrecognised!`)
  }
}
