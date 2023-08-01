import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectVisible,
  toggleVisibilitySidebar,
} from "../../redux/features/visibleSidebar";
import SliderCheckBox from "../UI/SliderCheckBox/SliderCheckBox";
import EllipsisText from "react-lines-ellipsis";
import { selectCurrentChatName } from "../../redux/features/chats";

const Header = () => {
  const dispatch = useDispatch();
  const currentChatName = useSelector(selectCurrentChatName);
  const visible = useSelector(selectVisible);

  const onToggleSidebar = () => {
    dispatch(toggleVisibilitySidebar(!visible));
  };

  return (
    <header className={styles.root}>
      <button className={styles.root__prev} onClick={onToggleSidebar}>
        <div className={styles.root__icon}>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.5858 6.00008L7.29289 1.70718L8.70711 0.292969L15.4142 7.00008L8.70711 13.7072L7.29289 12.293L11.5858 8.00008H0V6.00008H11.5858Z"
              fill="var(--app-heading-color)"
            />
          </svg>
        </div>
      </button>
      <div className={styles.root__title}>
        <EllipsisText
          text={currentChatName}
          maxLine="1"
          ellipsis="..."
          trimRight
        />
      </div>

      <SliderCheckBox />
    </header>
  );
};

export default Header;
