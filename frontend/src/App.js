import React from 'react';
import { connect } from 'react-redux';
import { Template } from './components/MainComponents';
import Routes from './Routes';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const App = (props) => {
  return (
    <Template>
      <Header />
      <Routes />
      <Footer />
    </Template>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
