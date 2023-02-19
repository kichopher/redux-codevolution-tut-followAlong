const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE"; // action type
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
  // action creator function
  return {
    // action object with mandatory type property
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function buyIceCream() {
  // action creator function
  return {
    type: BUY_ICE_CREAM,
  };
}

// reducer: (prevState, action)=> newState
// const initialState = {
//   numOfCakes: 10,
// };
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: {
//       return { ...state, numOfCakes: state.numOfCakes - 1 };
//     }
//     default:
//       return state;
//   }
// };
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    }
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM: {
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("State updated to: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
