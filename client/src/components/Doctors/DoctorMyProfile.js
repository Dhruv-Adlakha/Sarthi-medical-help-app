import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import ServiceHistoryElement from '../Doctors/ServiceHistoryElement';

function DoctorMyProfile() {
  return (
    <div>
      <Navbar />
      <div className='doctorMyProfile'>
        <div className='profileDescription'>
          <h2>My Profile</h2>
          <div className='content'>
            <div className='contentPane'>
              <p>
                <span>Name</span>
              </p>
              <p>Dr. Umar Gul</p>
            </div>

            <div className='contentPane'>
              <p>
                <span>Qualification</span>
              </p>
              <p>MBBS</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Speciality</span>
              </p>
              <p>ENT</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Hospital</span>
              </p>
              <p>Jodhpur</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Education</span>
              </p>
              <p>SMS,Jaipur</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Profile verified</span>
              </p>
              <p>Yes</p>
            </div>
          </div>
          <Link to='/doctors/profiles/updateProfile' className='btn'>
            Update profile
          </Link>
        </div>
        <div className='serviceHistory'>
          <h2>Service history</h2>
          <div className='content'>
            <ServiceHistoryElement />
            <ServiceHistoryElement />
            <ServiceHistoryElement />
            <ServiceHistoryElement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorMyProfile;
