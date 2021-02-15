import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';
import { connect } from 'react-redux';

function DoctorMyProfile(props) {
  return (
    <div>
      <Navbar />
      {props && (
        <div className='myProfile'>
          <div className='profileDescription'>
            <h2>My Profile</h2>
            <div className='content'>
              <div className='contentPane'>
                <p>
                  <span>Name</span>
                </p>
                <p>{props.currUser.name}</p>
              </div>

              <div className='contentPane'>
                <p>
                  <span>Qualification</span>
                </p>
                <p>{props.currUser.qualification}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Speciality</span>
                </p>
                <p>{props.currUser.speciality}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Hospital</span>
                </p>
                <p>{props.currUser.hospital}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Education</span>
                </p>
                <p>{props.currUser.education}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Profile verified</span>
                </p>
                <p>{props.currUser.profileVerified}</p>
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
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
  };
};

export default connect(mapStateToProps)(DoctorMyProfile);
