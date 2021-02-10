import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/Layout/LandingPage';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import About from '../components/ExtraPages/About';
import DoctorProfiles from '../components/Doctors/DoctorProfiles';
import DoctorRequests from '../components/Doctors/DoctorRequests';
import DoctorDashboard from '../components/Doctors/DoctorDashboard';
import DoctorMyProfile from '../components/Doctors/DoctorMyProfile';
import DoctorsUpdateProfile from '../components/Doctors/DoctorUpdateProfile';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} exact={true} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/about' component={About} />
      <Route path='/doctors/dashboard' component={DoctorDashboard} />
      <Route path='/doctors/profiles' component={DoctorProfiles} exact={true} />
      <Route path='/doctors/requests' component={DoctorRequests} />
      <Route path='/doctors/profiles/me' component={DoctorMyProfile} />
      <Route
        path='/doctors/profiles/updateProfile'
        component={DoctorsUpdateProfile}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
