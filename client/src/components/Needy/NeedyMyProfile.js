import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function NeedyMyProfile(props) {
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
                  <span>Age</span>
                </p>
                <p>{props.currUser.age}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Annual income</span>
                </p>
                <p>{props.currUser.annualIncome}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Address</span>
                </p>
                <p>{props.currUser.address}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Gender</span>
                </p>
                <p>{props.currUser.gender}</p>
              </div>
              <div className='contentPane'>
                <p>
                  <span>Profile verified</span>
                </p>
                <p>{props.currUser.profileVerified}</p>
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
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
    requests: state.authReducer.requests,
  };
};

export default connect(mapStateToProps)(NeedyMyProfile);
