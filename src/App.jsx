import { useEffect } from "react";
import styles from "./App.module.scss";
import ChatContent from "./components/ChatContent/ChatContent";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Input from "./components/UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "./redux/features/chats";
import { fetchChatMessagesById } from "./redux/features/currentMessages";

const App = () => {
  const dispatch = useDispatch();
  const currentChatId = useSelector((state) => state.chats.currentChatId);

  useEffect(() => {
    dispatch(fetchChats());
  }, []);

  useEffect(() => {
    dispatch(fetchChatMessagesById(currentChatId));
  }, [currentChatId]);

  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.root__chat}>
        <Header />
        <ChatContent />
        <form className={styles.root__form}>
          <Input placeholder="Type messsage" />
        </form>
      </div>
    </div>
  );
};

export default App;
