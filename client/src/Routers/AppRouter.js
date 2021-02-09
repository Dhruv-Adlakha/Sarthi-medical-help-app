import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/Layout/LandingPage';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import About from '../components/ExtraPages/About';
import DoctorProfiles from '../components/Doctors/DoctorProfiles';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} exact={true} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/about' component={About} />
      <Route path='/doctors' component={DoctorProfiles} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
