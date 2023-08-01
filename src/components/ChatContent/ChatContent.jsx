import styles from "./ChatContent.module.scss";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectChatMessages } from "../../redux/features/currentMessages";
import Time from "../UI/Time/Time";
import Message from "../Message/Message";
import Messages from "../../services/Messages";

const ChatContent = () => {
  const chatMessages = useSelector(selectChatMessages);
  const bottomRef = useRef(null);
  const { sortChatMessages } = new Messages();
  const sortedMessages = sortChatMessages(chatMessages);
  const messagesCount = sortedMessages?.length;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesCount]);

  return (
    <div className={styles.root}>
      <div className={styles.root__timeGroup}>
        <div className={styles.root__time}>
          <Time>11.02.2021</Time>
        </div>

        <div className={styles.root__list}>
          {messagesCount &&
            sortedMessages.map((item) => <Message key={item.id} item={item} />)}
        </div>

        <div ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default ChatContent;
