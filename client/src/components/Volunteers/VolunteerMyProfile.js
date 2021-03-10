import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function VolunteerMyProfile(props) {
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
              <p>{props.currUser.name}</p>
            </div>

            <div className='contentPane'>
              <p>
                <span>Age</span>
              </p>
              <p>{props.currUser.age}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Address</span>
              </p>
              <p>{props.currUser.address}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Phone</span>
              </p>
              <p>{props.currUser.phone}</p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Total service count</span>
              </p>
              <p></p>
            </div>
            <div className='contentPane'>
              <p>
                <span>Profile verified</span>
              </p>
              <p>{props.currUser.profileVerified}</p>
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

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
    requests: state.needyReducer.requests,
  };
};

export default connect(mapStateToProps)(VolunteerMyProfile);
