import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './components/RouteHandler';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import AddAd from './Pages/AddAd';
const Routes = () => {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/signin" component={Signin} />
      <MyRoute exact path="/signup" component={SignUp} />
      <MyRoute exact path="/about">
        <About />
      </MyRoute>
      <MyRoute private exact path="/post-an-ad">
        <AddAd />
      </MyRoute>
      <MyRoute component={NotFound} />
    </Switch>
  );
};
export default Routes;
