import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return <div>Item count: {props.itemCount}</div>;
}

const mapStateToProps = (state, ownProps) => {
  const itemCount = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    itemCount,
  };
};

export default connect(mapStateToProps)(ItemContainer);
