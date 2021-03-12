import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './components/RouteHandler';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import AdPage from './Pages/AdPage';
import Ads from './Pages/Ads';
import AddAd from './Pages/AddAd';
const Routes = () => {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/signin" component={Signin} />
      <MyRoute exact path="/signup" component={SignUp} />
      <MyRoute exact path="/ad/:id" component={AdPage} />
      <MyRoute exact path="/about" component={About} />
      <MyRoute exact path="/ads" component={Ads} />
      <MyRoute private exact path="/post-an-ad">
        <AddAd />
      </MyRoute>
      <MyRoute component={NotFound} />
    </Switch>
  );
};
export default Routes;
