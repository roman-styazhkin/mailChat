import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../constants/urls";

export const fetchChatMessagesById = createAsyncThunk(
  "users/fetchChatMessagesById",
  async (chatId) => {
    const request = `${URLS.BASE}/${URLS.MESSAGES}?chat_id=${chatId}`;

    const response = await axios.get(
      `https://64c6910a0a25021fde91c7fc.mockapi.io/messages?chatId=${chatId}`
    );

    return response.data[0].messages;
  }
);

const initialState = {
  chatMessages: [],
};

const messagesSlice = createSlice({
  name: "messagesChat",
  initialState,
  reducers: {
    addMyMessage: (state, action) => {
      state.chatMessages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatMessagesById.fulfilled, (state, action) => {
      state.chatMessages = action.payload;
    });
  },
});

export const { addMyMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
