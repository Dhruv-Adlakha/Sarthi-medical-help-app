import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import DoctorDashboardImage from '../../images/volunteer.png';

function VolunteerDashboard() {
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={DoctorDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/volunteers/patientRequests' className='btn'>
            Patient requests
          </Link>
          <Link to='/volunteers/trustContribution' className='btn'>
            Contribute to Trust
          </Link>
          <Link to='/volunteers/profiles/me' className='btn'>
            My profile
          </Link>
          <Link to='/volunteers/profiles/updateProfile' className='btn'>
            Update profile
          </Link>
          <Link to='/login' className='btn'>
            Delete profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;
