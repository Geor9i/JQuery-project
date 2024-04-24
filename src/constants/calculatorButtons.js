export const CALC_BUTTONS = {
  memory: { keys: ["MC", "MR", "M+", "M-", "MS", "M⌄"] },
  default: {
    keys: [
      ["%", "CE", "C", "del"],
      ["¹⁄x", "x²", "sqrt", "/"],
      ["7", "8", "9", "x"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["+/-", "0", ".", "="],
    ],
    cols: 4,
  },
  scientific: {
    keys: [
      ["2ⁿᵈ", "𝝅", "e", "C", "del"],
      ["x²", "¹⁄x", "| x |", "exp", "mod"],
      ["sqrt", "(", ")", "n!", "/"],
      ["xʸ", "7", "8", "9", "x"],
      ["10ˣ", "4", "5", "6", "-"],
      ["log", "1", "2", "3", "+"],
      ["ln", "+/-", "0", ".", "="],
    ],
    cols: 5,
  },
};

export const CALC_ICONS = {
  del: "fa-solid fa-delete-left",
  sqrt: "fa-solid fa-square-root-variable",
  percent: "fa-solid fa-percent",
  "/": "fa-solid fa-divide",
  "*": "fa-solid fa-xmark",
  "+": "fa-solid fa-plus",
  "-": "fa-solid fa-minus",
  "+/-": "fa-solid fa-plus-minus",
  "=": "fa-solid fa-equals",
  x3: "x³",
};
