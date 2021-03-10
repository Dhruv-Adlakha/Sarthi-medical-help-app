import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import ServiceHistoryElement from '../ExtraPages/ServiceHistoryElement';

function NeedyMyProfile(props) {
  const [doctorVisits, setDoctorVisits] = useState([]);
  useEffect(() => {
    const arr = props.requests.filter((e) => {
      return e.patient === props.currUser._id;
    });
    const brr = arr.map((e) => ({
      ...e,
      doct: props.doctors.find((f) => {
        return f._id === e.doctor;
      }),
    }));
    console.log(arr);
    console.log(brr);
    setDoctorVisits(() => brr);
  });
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
              {doctorVisits.map((e, index) => {
                return (
                  <ServiceHistoryElement
                    key={index}
                    index={index}
                    name={e.doct.name}
                    problem={e.problem}
                  />
                );
              })}
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
    requests: state.needyReducer.requests,
    doctors: state.adminReducer.doctors,
  };
};

export default connect(mapStateToProps)(NeedyMyProfile);
