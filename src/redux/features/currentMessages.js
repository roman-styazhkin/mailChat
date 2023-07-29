import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../constants/urls";

export const fetchChatMessagesById = createAsyncThunk(
  "users/fetchChatMessagesById",
  async (chatId) => {
    const response = await axios.get(
      `${URLS.BASE}/${URLS.MESSAGES}?chat_id=${chatId}`,
      {
        headers: {
          version: "0.0",
        },
      }
    );

    return response.data.response;
  }
);

const initialState = {
  chatMessages: [],
};

const messagesSlice = createSlice({
  name: "messagesChat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChatMessagesById.fulfilled, (state, action) => {
      state.chatMessages = action.payload;
    });
  },
});

export default messagesSlice.reducer;
