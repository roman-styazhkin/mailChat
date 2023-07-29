import styles from "./ChatContent.module.scss";
import Time from "../UI/Time/Time";
import Message from "../Message/Message";
import { useSelector } from "react-redux";

const ChatContent = () => {
  const chatMessages = useSelector(
    (state) => state.currentMessages.chatMessages
  );

  return (
    <div className={styles.root}>
      <div className={styles.root__timeGroup}>
        <div className={styles.root__time}>
          <Time>11.02.2021</Time>
        </div>

        <div className={styles.root__list}>
          {chatMessages?.length &&
            chatMessages.map((item) => {
              return <Message key={item.id} item={item} main={true} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
