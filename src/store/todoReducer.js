export const defaultTodoState = {
  todos: [],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newItem = {
        text: action.item,
        id: crypto.randomUUID(),
        completed: false,
      };

      return {
        todos: [...state.todos, newItem],
      };
    }
    case "REMOVE": {
      const removeItem = state.todos.filter(todo => todo.id !== action.id)
    
      return {
        todos: removeItem,
      };
    }
    case "TOGGLE": {
      const todo = state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
      
      return {...state.todos, todos: todo}
    }
    default: {
      throw Error("Unknown action" + action.type);
    }
  }

  return defaultTodoState;
};