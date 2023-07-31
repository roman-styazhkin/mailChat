import classNames from "classnames";
import styles from "./SliderCheckBox.module.scss";

const SliderCheckBox = () => {
  return (
    <label className={styles.root} htmlFor="checkbox">
      <input type="checkbox" id="checkbox" />
      <div
        className={classNames(styles.root__slider, styles.root__round)}
      ></div>
    </label>
  );
};

export default SliderCheckBox;
