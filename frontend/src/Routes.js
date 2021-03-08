import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;
