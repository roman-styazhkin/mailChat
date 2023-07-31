import { useEffect } from "react";
import styles from "./App.module.scss";
import ChatContent from "./components/ChatContent/ChatContent";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "./redux/features/chats";
import { fetchChatMessagesById } from "./redux/features/currentMessages";
import ChatForm from "./components/ChatForm/ChatForm";
import Themes from "./services/Themes";

const App = () => {
  const dispatch = useDispatch();
  const currentChatId = useSelector((state) => state.chats.currentChatId);
  const defaultTheme = useSelector((state) => state.themes.theme);
  const { onToggleTheme } = new Themes();

  useEffect(() => {
    dispatch(fetchChats());
    onToggleTheme(defaultTheme, () => 2);
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
        <ChatForm />
      </div>
    </div>
  );
};

export default App;
