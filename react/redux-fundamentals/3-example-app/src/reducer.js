import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value od `state.todos` is whatever the todos reducer returns
    todos: todosReducer(state.todos, action),
    // For both reducers, we only pass in their slice of the state
    fliters: filtersReducer(state.filters, action)
  }
}
