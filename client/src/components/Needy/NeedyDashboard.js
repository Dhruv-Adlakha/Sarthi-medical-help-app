import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import NeedyDashboardImage from '../../images/needyDashboard.jpeg';

function NeedyDashboard() {
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={NeedyDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/needy/doctorVisit' className='btn'>
            Doctor visit
          </Link>
          <Link to='/needy/currentVisit' className='btn'>
            Current visit
          </Link>
          <Link to='/doctors/profiles' className='btn'>
            All Doctors
          </Link>

          <Link to='/needy/profiles/me' className='btn'>
            My profile
          </Link>
          <Link to='/needy/updateProfile' className='btn'>
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

export default NeedyDashboard;
