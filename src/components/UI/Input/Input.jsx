import styles from "./Input.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import MyButton from "../MyButton/MyButton";
import sendMessage from "../../../assets/images/send-icon.svg";

const Input = ({ onChange, value }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__inner}>
        <div className={styles.root__wrapper}>
          <TextareaAutosize
            value={value}
            onChange={onChange}
            maxRows={5}
            style={{ resize: "none" }}
            placeholder="Type messsage"
          />
        </div>
        <div className={styles.root__buttons}>
          <MyButton type="submit" backgroundImage={sendMessage}></MyButton>
        </div>
      </div>
    </div>
  );
};

export default Input;
