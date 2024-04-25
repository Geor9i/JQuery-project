import styles from "../styles/site.scss";
import Calculator from "./components/calculator/calculator.js";

if (module.hot) {
  module.hot.accept();
}
const calculator = new Calculator();
