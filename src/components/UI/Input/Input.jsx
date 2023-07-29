import styles from "./Input.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import MyButton from "../MyButton/MyButton";
import addFile from "../../../assets/images/add-file-icon.svg";
import sendMessage from "../../../assets/images/send-icon.svg";

const Input = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__wrapper}>
        <TextareaAutosize
          maxRows={3}
          style={{ resize: "none" }}
          placeholder="Type messsage"
        />
      </div>

      <div className={styles.root__buttons}>
        <MyButton type="button" backgroundImage={addFile}></MyButton>
        <MyButton type="submit" backgroundImage={sendMessage}></MyButton>
      </div>
    </div>
  );
};

export default Input;
