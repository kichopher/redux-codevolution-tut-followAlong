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
