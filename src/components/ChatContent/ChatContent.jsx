import styles from "./ChatContent.module.scss";
import Time from "../UI/Time/Time";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const sortChatMessages = (messages) => {
  if (!Array.isArray(messages) || !messages.length) {
    return [];
  }

  if (messages.length < 2) {
    return messages;
  }

  return messages.slice().sort((a, b) => a.created_at - b.created_at);
};

const ChatContent = () => {
  const chatMessages = useSelector(
    (state) => state.currentMessages.chatMessages
  );
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages?.length]);

  const sortedMessages = sortChatMessages(chatMessages);

  return (
    <div className={styles.root}>
      <div className={styles.root__timeGroup}>
        <div className={styles.root__time}>
          <Time>11.02.2021</Time>
        </div>

        <div className={styles.root__list}>
          {sortedMessages?.length &&
            sortedMessages.map((item) => {
              return <Message key={item.id} item={item} main={true} />;
            })}
        </div>

        <div ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default ChatContent;
