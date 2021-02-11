import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import DoctorDashboardImage from '../../images/doctorDashboardImage.jpg';

function DoctorDashboard() {
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={DoctorDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/doctors/profiles' className='btn'>
            All Doctors
          </Link>
          <Link to='/doctors/requests' className='btn'>
            Patient requests
          </Link>
          <Link to='/doctors/profiles/me' className='btn'>
            My profile
          </Link>
          <Link to='/doctors/profiles/updateProfile' className='btn'>
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

export default DoctorDashboard;