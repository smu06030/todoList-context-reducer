import React, { useReducer } from "react";
import TodoContext from "./TodoContext";
import { defaultTodoState, todoReducer } from "./todoReducer";

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, defaultTodoState);

  const addTodoList = (item) => {
    dispatch({ type: "ADD", item});
  };

  const removeTodoList = (id) => {
    dispatch({ type: "REMOVE", id});
  }

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE", id});
  }

  const todoContext = {
    todos: state.todos,
    addItem: addTodoList,
    removeItem: removeTodoList,
    toggleTodo
  };

  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
