import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import VerificationRequestElement from '../Admin/VerificationRequestElement';
import { connect } from 'react-redux';

function VerificationRequests(props) {
  const [vrequests, setVrequests] = useState([]);
  useEffect(async () => {
    const arr = await props.doctors.filter((doctor) => {
      return doctor.profileVerified === 'In progress';
    });
    setVrequests(() => {
      return arr;
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='verificationRequests'>
        <div className='section'>
          <div>
            <div className='verificationRequestsElements'>
              {vrequests.map((req) => {
                return <VerificationRequestElement content={req} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    doctors: state.adminReducer.doctors,
  };
};

export default connect(mapStateToProps)(VerificationRequests);
