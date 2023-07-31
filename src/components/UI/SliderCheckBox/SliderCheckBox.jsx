import classNames from "classnames";
import styles from "./SliderCheckBox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/features/theme";
import Themes from "../../../services/Themes";

const SliderCheckBox = () => {
  const appTheme = useSelector((state) => state.themes.theme);
  const dispath = useDispatch();
  const { onToggleTheme } = new Themes();

  const onClickTheme = () => {
    if (appTheme === "dark") {
      dispath(toggleTheme("light"));
      onToggleTheme("light");
    } else {
      dispath(toggleTheme("dark"));
      onToggleTheme("dark");
    }
  };

  return (
    <div
      onClick={onClickTheme}
      className={classNames(styles.root, {
        [styles.active]: appTheme === "light",
      })}
    >
      <input type="checkbox" />
      <div className={styles.root__decor}></div>
      <div
        className={classNames(styles.root__slider, styles.root__round)}
      ></div>
    </div>
  );
};

export default SliderCheckBox;
