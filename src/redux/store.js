import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from "./features/chats";
import currentMessagesSlice from "./features/currentMessages";

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    currentMessages: currentMessagesSlice,
  },
});

export default store;
