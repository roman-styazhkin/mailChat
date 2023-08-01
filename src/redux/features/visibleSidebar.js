import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

const visibleSidebarSlice = createSlice({
  name: "visible-sidebar",
  initialState,
  reducers: {
    toggleVisibilitySidebar: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { toggleVisibilitySidebar } = visibleSidebarSlice.actions;
export const selectVisible = (state) => state.visibleSidebar.visible;
export default visibleSidebarSlice.reducer;
