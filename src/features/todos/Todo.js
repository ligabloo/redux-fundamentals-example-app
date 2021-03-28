import { useDispatch } from "react-redux";
import { todoToggled } from "./todosSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch(); //Removed `todoToggled` as a param

  const handleTodoToggle = () => dispatch(todoToggled(todo.id));

  return (
    <li className="todo-item" onClick={handleTodoToggle}>
      {todo && todo.isCompleted ? "👌" : "👋"}{" "}
      <span
        className={`todo-item ${todo.isCompleted && "todo-item--completed"}`}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default Todo;
