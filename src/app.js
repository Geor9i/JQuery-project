import styles from "../styles/site.scss";
import "jquery";
import "jquery-ui";
import Decimal from "decimal.js";
import Calculator from "./components/calculator.js";


if (module.hot) {
  module.hot.accept();
}

const calculator = new Calculator();