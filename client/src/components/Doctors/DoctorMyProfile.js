import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function DoctorMyProfile(props) {
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
              <p>{props.name}</p>
            </div>

            <div className='contentPane'>
              <p>
                <span>Qualification</span>
              </p>
              <p>{props.qualification}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Speciality</span>
              </p>
              <p>{props.speciality}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Hospital</span>
              </p>
              <p>{props.hospital}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Education</span>
              </p>
              <p>{props.education}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Profile verified</span>
              </p>
              <p>{props.profileVerified}</p>
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
