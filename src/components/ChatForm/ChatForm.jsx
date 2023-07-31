import styles from "./ChatForm.module.scss";
import Input from "../UI/Input/Input";
import { useState } from "react";
import { useSelector } from "react-redux";

const ChatForm = () => {
  const [messageQuery, setMessageQuery] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!messageQuery.length) return;

    const newUserMessage = {
      created_at: Date.now(),
      id: Date.now(),
      is_new: false,
      message: messageQuery,
      user: {
        avatar: "https://avatars.lenzaos.com/O7bEEfltwNia.png",
        id: "be215077-594e-4256-82e8-906625c69629",
        name: "Clout",
        surname: "Profi",
        you: true,
      },
    };
  };

  return (
    <form className={styles.root} onSubmit={onFormSubmit}>
      <Input onChange={(e) => setMessageQuery(e.target.value)} />
    </form>
  );
};

export default ChatForm;
