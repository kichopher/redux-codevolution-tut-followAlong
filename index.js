const BUY_CAKE = "BUY_CAKE"; // action type

function buyCake() {
  // action creator function
  return {
    // action object with mandatory type property
    type: BUY_CAKE,
    info: "First redux action",
  };
}
