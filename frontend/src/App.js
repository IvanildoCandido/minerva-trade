import React from 'react';
import { connect } from 'react-redux';
import Routes from './Routes';

function App(props) {
  return (
    <div>
      <h1>Minerva Trade System | {props.user.user.email}</h1>
      <Routes />
    </div>
  );
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
