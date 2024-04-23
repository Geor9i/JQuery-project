import styles from "../styles/site.scss";
import "jquery";
import "jquery-ui";

let i = 0;
let maxCount = 4;
const loop = () => {
  i = (i + 1) % maxCount;
  let borderWidth = i === 1 ? "10px" : "0"; // Set border width based on current value of i
  const border = ["top", "right", "bottom", "left"];
  const borderWidthProp = `border-${border[i]}-width`;
  const borderColorProp = `border-${border[i]}-color`;
  $(".box")
    .eq(1)
    .css("border", "8px solid black")
    .animate(
      {
        [borderWidthProp]: "8px",
        [borderColorProp]: "red",
      },
      1000,
      loop
    );
};

loop();
