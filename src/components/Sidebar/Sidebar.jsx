import styles from "./Sidebar.module.scss";
import { useSelector } from "react-redux";
import Title from "../UI/Title/Title";
import ChatItemList from "../ChatItemList/ChatItemList";
import classNames from "classnames";
import { selectChats, selectCurrentChatId } from "../../redux/features/chats";
import { selectVisible } from "../../redux/features/visibleSidebar";

const Sidebar = () => {
  const chats = useSelector(selectChats);
  const currentChatId = useSelector(selectCurrentChatId);
  const visible = useSelector(selectVisible);
  const chatsCount = chats?.length;

  return (
    <aside
      className={classNames(styles.root, {
        [styles.visible]: visible,
      })}
    >
      <div className={styles.root__top}>
        <div className={styles.root__heading}>
          <Title>All chats</Title>
        </div>
      </div>

      <div className={styles.root__list}>
        {chatsCount &&
          chats.map((item) => (
            <ChatItemList
              selected={currentChatId === item.id}
              key={item.id}
              {...item}
            />
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;
