// Actions
// You can think of an action as an event that describes something that happened in the application.
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

// Reducers
// You can think of a reducer as an event listener which handles events based on the received action (event) type.
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/incremented') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}

// Store
// The current Redux application state lives in an object called the store .
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}

// Dispatch
// The only way to update the state is to call store.dispatch() and pass in an action object.
store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())
// {value: 1}

// Selectors
// Selectors are functions that know how to extract specific pieces of information from a store state value. 
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
