import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};
export default Routes;
