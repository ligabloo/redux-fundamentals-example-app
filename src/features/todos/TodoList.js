import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { VisibilityStatus } from "../filters/filtersSlice";
import Todo from "./Todo";

const selectTodosByVisibility = createSelector(
  (state) => state.todos,
  (state) => state.filters.visibility,
  (todos, visibility) => {
    if (visibility === VisibilityStatus.ALL) return todos;

    const shouldFilterByIsCompleted = visibility === VisibilityStatus.COMPLETED;
    return todos.filter(
      (todo) => todo.isCompleted === shouldFilterByIsCompleted
    );
  }
);

const TodoList = () => {
  const todos = useSelector(selectTodosByVisibility);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "You're all done, yay!"}
    </ul>
  );
};

export default TodoList;
