import AddTodo from "./features/todos/AddTodo";
import TodoList from "./features/todos/TodoList";
import VisibilityFilters from "./features/filters/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
