import styles from "./Sidebar.module.scss";
import Title from "../UI/Title/Title";
import ChatItemList from "../ChatItemList/ChatItemList";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Sidebar = () => {
  const chats = useSelector((state) => state.chats.chats);
  const currentChatId = useSelector((state) => state.chats.currentChatId);
  const visible = useSelector((state) => state.visibleSidebar.visible);

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
        {chats?.length &&
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
