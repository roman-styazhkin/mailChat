import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatsReducer from "./features/chats";
import currentMessagesReducer from "./features/currentMessages";
import themeReducer from "./features/theme";
import visibleSidebarReducer from "./features/visibleSidebar";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  chats: chatsReducer,
  currentMessages: currentMessagesReducer,
  themes: themeReducer,
  visibleSidebar: visibleSidebarReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
