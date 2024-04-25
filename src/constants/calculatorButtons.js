export const CALC_BUTTONS = {
  memory: { keys: ["MC", "MR", "M+", "M-", "MS", "M⌄"] },
  default: {
    keys: [
      ["%", "CE", "C", "del"],
      ["1/x", "²", "sqrt", "/"],
      ["7", "8", "9", "*"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["+/-", "0", ".", "="],
    ],
    cols: 4,
  },
  scientific: {
    keys: [
      ["2nd", "𝝅", "e", "C", "del"],
      ["²", "1/x", "| x |", "exp", "mod"],
      ["sqrt", "(", ")", "n!", "/"],
      ["ʸ", "7", "8", "9", "*"],
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
  "³": "x³",
  "²": "x²",
  "ʸ": "xʸ",
  "1/x": "¹⁄ₓ",
  "2nd": "2ⁿᵈ",
};

export const KEYBOARD_KEYS = ["Control","Tab", "Alt", "Shift", "Meta", "AltGraph", "ContextMenu", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", "NumLock", "ScrollLock", "Pause", "Insert", "Home", "Insert", "Backspace", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Delete", "PageDown", "PageUp", "CapsLock"]