
let i = 0;
let maxCount = 4;
export const loop = () => {
  i = (i + 1) % maxCount;
  const border = ["top", "right", "bottom", "left"];
  const borderWidthProp = `border-${border[i]}-width`;
  const borderColorProp = `border-${border[i]}-color`;
  $(".box")
    .eq(1)
    .css("border", "8px solid black")
    .animate(
      {
        [borderWidthProp]: "10px",
        [borderColorProp]: "red",
      },
      1000,
      loop
    );
};

