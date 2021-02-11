import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function NeedyMyProfile() {
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
              <p>Motilal vihari</p>
            </div>

            <div className='contentPane'>
              <p>
                <span>Age</span>
              </p>
              <p>45</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Annual income</span>
              </p>
              <p>60000</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Gender</span>
              </p>
              <p>Male</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Profile verified</span>
              </p>
              <p>Yes</p>
            </div>
          </div>
          <Link to='/needy/updateProfile' className='btn'>
            Update profile
          </Link>
        </div>
        <div className='serviceHistory'>
          <h2>Doctor visits</h2>
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

export default NeedyMyProfile;
