import { createSlice } from "@reduxjs/toolkit";

export const VisibilityStatus = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETE: "incomplete"
};

const initialState = {
  visibility: VisibilityStatus.ALL
};

const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    visibilityChanged(state, action) {
      state.visibility = action.payload;
    }
  }
});

export const { visibilityChanged } = visibilitySlice.actions;
export default visibilitySlice.reducer;
