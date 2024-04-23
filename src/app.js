import styles from "../styles/site.scss";
import "jquery";
import "jquery-ui";
import { loop } from "./components/cubeAnimation.js";

if (module.hot) {
  module.hot.accept();
}

loop();
