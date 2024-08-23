import React, { createContext } from 'react'

const TodoContext = createContext({
  todos: [],
  addItem: (item) => {},
  removeTodoList: (id) => {},
  toggleTodo: (id) => {},
})

export default TodoContext