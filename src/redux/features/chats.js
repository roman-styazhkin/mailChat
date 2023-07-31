import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../constants/urls";

export const fetchChats = createAsyncThunk("chats/fetchChats", async () => {
  const request = `${URLS.BASE}/${URLS.CHATS}`;

  const response = await axios.get(
    `https://64c68ba90a25021fde91c0fa.mockapi.io/chats`
  );

  const chats = response.data;

  return chats;
});

const initialState = {
  chats: [],
  currentChatId: null,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.chats = action.payload;
      state.currentChatId = action.payload[0].id;
    });
  },
});

export const { setCurrentChatId } = chatsSlice.actions;

export default chatsSlice.reducer;
