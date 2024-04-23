import styles from "../styles/site.scss";
import "jquery";
import "jquery-ui";
import Decimal from "decimal.js";

import { loop } from "./components/cubeAnimation.js";

if (module.hot) {
  module.hot.accept();
}

const x = new Decimal(2.22323).ceil().valueOf();
console.log(x);

loop();
