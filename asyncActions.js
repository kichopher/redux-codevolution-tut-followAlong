const axios = require("axios");
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

initialState = {
  loading: false,
  users: [],
  error: "",
};

// action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// action creators
const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});
const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users, // from api call response
});
const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error, // from api call response
});

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// async action creator (returns a function instead of an action object)
const fetchUsers = () =>
  function (dispatch) {
    dispatch(fetchUsersRequest()); // sets loading to true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // get the users list from response
        const usersDataList = response.data;
        const usersList = usersDataList.map((userDataObj) => userDataObj.name);
        dispatch(fetchUsersSuccess(usersList));
      })
      .catch((error) => {
        // error.message will give the api call error message
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const unsubscribe = store.subscribe(() => {
  console.log("State was updated to: ", store.getState());
});
console.log("Initial state: ", store.getState());
store.dispatch(fetchUsers());
/* not unsubscribing here. (unsubscribing here will stop listening before the async updates complete)
 The async dispatch calls would happen asynchronously 
 and we want to be listening to these async state changes */
