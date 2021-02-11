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
import PrescribeMedicines from '../components/Doctors/PrescribeMedicines';
import NeedyDashboard from '../components/Needy/NeedyDashboard';
import NeedyUpdateProfile from '../components/Needy/NeedyUpdateProfile';
import NeedyMyProfile from '../components/Needy/NeedyMyProfile';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} exact={true} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/about' component={About} />
      <Route path='/doctors/dashboard' component={DoctorDashboard} />
      <Route path='/doctors/profiles' component={DoctorProfiles} exact={true} />
      <Route path='/doctors/requests' component={DoctorRequests} exact={true} />
      <Route path='/doctors/profiles/me' component={DoctorMyProfile} />

      <Route
        path='/doctors/profiles/updateProfile'
        component={DoctorsUpdateProfile}
      />
      <Route
        path='/doctors/requests/prescribe'
        component={PrescribeMedicines}
      />

      <Route path='/needy/dashboard' component={NeedyDashboard} />
      <Route path='/needy/updateProfile' component={NeedyUpdateProfile} />
      <Route path='/needy/profiles/me' component={NeedyMyProfile} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
