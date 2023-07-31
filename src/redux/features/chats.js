import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../constants/urls";

export const fetchChats = createAsyncThunk("chats/fetchChats", async () => {
  const response = await axios.get(`${URLS.CHATS}`);
  const chats = response.data;
  return chats;
});

const initialState = {
  chats: [],
  currentChatName: "",
  currentChatId: null,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
    setCurrentChatName: (state, action) => {
      state.currentChatName = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.chats = action.payload;
      state.currentChatId = state.currentChatId || action.payload[0].id;
    });
  },
});

export const { setCurrentChatId, setCurrentChatName } = chatsSlice.actions;

export default chatsSlice.reducer;
