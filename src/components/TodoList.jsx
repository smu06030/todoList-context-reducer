import React, { useContext, useState } from "react";
import TodoContext from "../store/TodoContext";

const TodoList = () => {
  const [value, setValue] = useState("");
  const todoCtx = useContext(TodoContext);

  const onAddItem = () => {
    todoCtx.addItem(value);
  };

  const onRemoveItem = (id) => {
    todoCtx.removeItem(id);
  };

  const onToggleTodo = (id) => {
    todoCtx.toggleTodo(id);
  };

  const list = todoCtx.todos.map((todo) => (
    <li
      key={todo.id}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span onClick={() => onToggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => onRemoveItem(todo.id)}>삭제</button>
    </li>
  ));

  return (
    <>
      <h2>TodoList</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={onAddItem}>
        추가
      </button>
      <ul>{list}</ul>
    </>
  );
};

export default TodoList;
