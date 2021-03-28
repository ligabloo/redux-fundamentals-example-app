import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleUpdateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    dispatch(todoAdded(input));
    setInput(""); //Added to clear input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleUpdateInput} value={input} />
      <button type="submit" className="add-todo">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
