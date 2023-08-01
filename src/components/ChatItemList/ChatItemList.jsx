import styles from "./ChatItemList.module.scss";
import { useDispatch } from "react-redux";
import {
  setCurrentChatId,
  setCurrentChatName,
} from "../../redux/features/chats";
import { toggleVisibilitySidebar } from "../../redux/features/visibleSidebar";
import classNames from "classnames";
import dayjs from "dayjs";
import EllipsisText from "react-lines-ellipsis";

const ChatItemList = ({ selected, ...props }) => {
  const { id, title, avatar, last_message } = props;
  const time = dayjs(last_message.created_at).format("HH:mm");
  const dispatch = useDispatch();

  const onSelectChatItem = () => {
    dispatch(setCurrentChatName(title));
    dispatch(setCurrentChatId(id));
    dispatch(toggleVisibilitySidebar(false));
  };

  return (
    <div
      onClick={onSelectChatItem}
      className={classNames(styles.root, {
        [styles.active]: selected,
      })}
    >
      <div className={styles.root__time}>{time}</div>
      <img
        className={styles.root__img}
        src={avatar}
        alt={title || ""}
        width={48}
        height={48}
      />
      <div className={styles.root__info}>
        <h3 className={styles.root__heading}>
          <EllipsisText text={title} maxLine="1" ellipsis="..." trimRight />
        </h3>
        <div className={styles.root__text}>
          <EllipsisText
            text={last_message.message}
            maxLine="1"
            ellipsis="..."
            trimRight
          />
        </div>
      </div>
    </div>
  );
};

export default ChatItemList;
