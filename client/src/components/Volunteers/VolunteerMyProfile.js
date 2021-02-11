import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function VolunteerMyProfile() {
  return (
    <div>
      <Navbar />
      <div className='myProfile'>
        <div className='profileDescription'>
          <h2>My Profile</h2>
          <div className='content'>
            <div className='contentPane'>
              <p>
                <span>Name</span>
              </p>
              <p>Ravi Sharma</p>
            </div>

            <div className='contentPane'>
              <p>
                <span>Age</span>
              </p>
              <p>25</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Address</span>
              </p>
              <p>12/33, Mansarovar, Jaipur</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Phone</span>
              </p>
              <p>9273944213</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Total service count</span>
              </p>
              <p>32</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Profile verified</span>
              </p>
              <p>Yes</p>
            </div>
          </div>
          <Link to='/volunteers/profiles/updateProfile' className='btn'>
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

export default VolunteerMyProfile;
