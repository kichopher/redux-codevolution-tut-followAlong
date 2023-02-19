const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE"; // action type

function buyCake() {
  // action creator function
  return {
    // action object with mandatory type property
    type: BUY_CAKE,
    info: "First redux action",
  };
}

// reducer: (prevState, action)=> newState
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("State updated to: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
