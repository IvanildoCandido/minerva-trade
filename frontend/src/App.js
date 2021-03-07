import React from 'react';
import { connect } from 'react-redux';

function App(props) {
  return <h1>Minerva Trade System | {props.user.user.email}</h1>;
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
