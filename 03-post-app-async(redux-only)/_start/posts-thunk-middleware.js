const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").default;
const axios = require("axios");
const thunk = require('redux-thunk').default

// initialState

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

// Action
const FETCH_POST_PENDING = "FETCH_POST_PENDING";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
const FETCH_POST_ERROR = "FETCH_POST_ERROR";

const fetchPostPendingAction = () => {
  return {
    type: FETCH_POST_PENDING,
  };
};

const fetchPostSuccessAction = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

const fetchPostErrorAction = (error) => {
  return {
    type: FETCH_POST_ERROR,
    payload: error,
  };
};

// Real Action: Thunk Action Creator ***
const fetchPostAction = () => {
  return async (dispatch) => {
    dispatch(fetchPostPendingAction());
    try {
      //make HTTP Request
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(fetchPostSuccessAction(response.data));
    } catch (error) {
      dispatch(fetchPostErrorAction(error.message));
    }
  };
};

// Reducer

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_PENDING:
      return { ...state, loading: true };
    case FETCH_POST_SUCCESS:
      return { ...state, posts: action.payload, error: "", loading: false };
    case FETCH_POST_ERROR:
      return { ...state, posts: [], error: action.payload, loading: false };
    default:
      return state;
  }
};

// custom-middleware

const myMiddleware = () => {
  return (next) => {
    return (action) => {
      console.log("*************Action Fire!!", action);
      next(action); //forward to another middleware or reducer
    };
  };
};

const rootmiddleware = applyMiddleware(loggerMiddleware, thunk);
// Store

const store = createStore(postsReducer, rootmiddleware);

// store.subscribe(() => {
//   const data = store.getState()
//   console.log(data)
// })

store.dispatch(fetchPostAction())