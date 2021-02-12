import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import AdminDashboardImage from '../../images/admin.jpg';

function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={AdminDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/admin/verificationRequests' className='btn'>
            Verification requests
          </Link>
          <Link to='/admin/trust' className='btn'>
            Trust
          </Link>
          <Link to='/doctors/profiles' className='btn'>
            Doctors
          </Link>
          <Link to='/admin/volunteers' className='btn'>
            Volunteers
          </Link>
          <Link to='/admin/patients' className='btn'>
            Patients
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
