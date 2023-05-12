import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, filterBy } from "../features/todo/todoSlice";

const Todo = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    if (state.todo.filterBy === "COMPLETED") {
      return state.todo.tasks.filter((task) => task.completed);
    } else if (state.todo.filterBy === "NOT_COMPLETED") {
      return state.todo.tasks.filter((task) => !task.completed);
    } else {
      return state.todo.tasks;
    }
  });

  const handleAddTodo = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleToggleComplete = (id, completed) => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteTodo = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    dispatch(deleteTodo(index));
  };

  const handleFilterChange = (event) => {
    dispatch(filterBy(event.target.value));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <select onChange={handleFilterChange}>
          <option value="ALL">All</option>
          <option value="COMPLETED">Completed</option>
          <option value="NOT_COMPLETED">Not Completed</option>
        </select>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id, task.completed)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleDeleteTodo(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
