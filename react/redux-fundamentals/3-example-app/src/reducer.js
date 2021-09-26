// Use the initial state as a default value
export default function appReducer(state, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do sth here based on the different types of actions
    
    default:
      // If this reducer doesn't recognize the action type, or doesnn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
