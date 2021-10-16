import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../redux/actions/main.actions";

/**
 * @author Sayed Minhal
 * @function Greetings
 **/

const Greetings = ({ count, increment }) => ( 
  <>
    <div>Greetings the count is {count}</div>
    <button onClick={() => increment()}>Increment</button>
  </>
);

const mapStateToProps = (state) => ({ count: state.count.count })
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(action.increment()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greetings);
