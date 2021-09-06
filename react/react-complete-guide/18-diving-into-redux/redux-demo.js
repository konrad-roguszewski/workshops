// [Reducer Function]
// ----> (Mutates (=changes) Store Data
// [Central Data (State) Store]
// ----> Subscription
// [Components]
// ----> Dispatch
// [Action]
// ----> Forwarded to ...Reducer Function

const redux = require('redux');

// The Reducer Function (NOT useReducer() "Reducer Fuctions" are a general concept, just like array.reduce)
// Should be a pure function - same input leads to same output
// Inputs: old state + dispatched action
// Output: new state object
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1
  };
};

// Store
const store = redux.createStore(counterReducer);

// Subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState)
};

store.subscribe(counterSubscriber);

// Dispatch
store.dispatch({ type: 'increment' });
