import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let nextTodoId = 0;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice, thanks to Immer.js under the hood
      state.push({
        id: ++nextTodoId,
        content: action.payload,
        isCompleted: false
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.isCompleted = !todo.isCompleted;
    }
  }
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
