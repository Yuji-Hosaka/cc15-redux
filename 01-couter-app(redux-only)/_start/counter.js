const { createStore } = require("redux");

//Redux
// -State
const initialState = {
  count: 0,
};
// -Action : JS Object
const increment = {
  type: "INCREMENT",
};

const decrement = {
  type: "DECREMENT",
};
const reset = {
  type: "RESET",
};

const incrementByFive = {
    type: 'INCREMENT_BY_FIVE',
    payload: 5
}
// -Reducer: Logic based on ActionType
// Input: state, action
// Return: newState (DO NOT MODIFY)
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    //state.count +=1  >> (DON'T)
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: initialState };
  } else if (action.type === 'INCREMENT_BY_FIVE') {
    return {count: state.count + action.payload}
  }
  return state;
};
// -Store

const store = createStore(counterReducer);

//getState: current state
// console.log(store.getState());

//subscribe: tracking of dispatch
// WORKING: subscribe then start tracking
store.subscribe(() => {
    const state = store.getState()
    console.log('current state', state)
})

//dispatch => syntax: dispatch(action)

// store.dispatch(increment);
store.dispatch(decrement);
store.dispatch(incrementByFive)
// console.log(store.getState());

store.dispatch(reset)
// console.log(store.getState());
