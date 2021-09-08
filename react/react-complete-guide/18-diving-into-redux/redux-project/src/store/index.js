import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const INCREMENT = 'increment';

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// reducer can be split to smaller reducers if needed
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    // new objects are overwriting existing state
    // existing state should never be mutated
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  };

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  };

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  };

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  };

  return state;
};

const store = createStore(counterReducer);

export default store;
