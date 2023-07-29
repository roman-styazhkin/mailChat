import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../constants/urls";

export const fetchChats = createAsyncThunk("chats/fetchChats", async () => {
  const response = await axios.get(`${URLS.BASE}/${URLS.CHATS}`, {
    headers: {
      version: "0.0",
    },
  });

  const chats = response.data.response;

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
