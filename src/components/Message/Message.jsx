import styles from "./Message.module.scss";
import dayjs from "dayjs";
import classNames from "classnames";

const Message = ({ item }) => {
  const { message, created_at } = item;
  const { avatar, name, surname, you } = item.user;

  const time = dayjs(created_at).format("HH:mm");
  const notYourMessage = !you;

  return (
    <div
      className={classNames(styles.root, {
        [styles.my]: you,
      })}
    >
      {notYourMessage && (
        <img className={styles.root__photo} src={avatar} alt={name} />
      )}

      <div className={styles.root__content}>
        {notYourMessage && (
          <div className={styles.root__name}>
            {name} {surname}
          </div>
        )}

        <div className={styles.root__info}>
          <div className={styles.root__text}>{message}</div>
          <div className={styles.root__bottom}>
            <div className={styles.root__time}>{time}</div>
            {you && <div className={styles.root__status}></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
