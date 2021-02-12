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
import DoctorVisit from '../components/Needy/DoctorVisit';
import CurrentVisit from '../components/Needy/CurrentVisit';
import VolunteerDashboard from '../components/Volunteers/VolunteersDashboard';
import VolunteerMyProfile from '../components/Volunteers/VolunteerMyProfile';
import VolunteerUpdateProfile from '../components/Volunteers/VolunteerUpdateProfile';
import PatientRequests from '../components/Volunteers/PatientRequests';
import TrustContribute from '../components/Volunteers/TrustContribute';
import AdminDashboard from '../components/Admin/AdminDashboard';
import AllPatients from '../components/Admin/AllPatients';
import AllVolunteers from '../components/Admin/AllVolunteers';
import VerificationRequests from '../components/Admin/VerificationRequests';
import Trust from '../components/Admin/Trust';

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
      <Route path='/needy/doctorVisit' component={DoctorVisit} />
      <Route path='/needy/currentVisit' component={CurrentVisit} />

      <Route path='/volunteers/dashboard' component={VolunteerDashboard} />
      <Route path='/volunteers/profiles/me' component={VolunteerMyProfile} />
      <Route
        path='/volunteers/profiles/updateProfile'
        component={VolunteerUpdateProfile}
      />
      <Route path='/volunteers/patientRequests' component={PatientRequests} />
      <Route path='/volunteers/trustContribution' component={TrustContribute} />

      <Route path='/admin/dashboard' component={AdminDashboard} />
      <Route path='/admin/patients' component={AllPatients} />
      <Route path='/admin/volunteers' component={AllVolunteers} />
      <Route
        path='/admin/verificationRequests'
        component={VerificationRequests}
      />
      <Route path='/admin/trust' component={Trust} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
