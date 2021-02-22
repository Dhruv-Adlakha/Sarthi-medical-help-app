import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import VerificationRequestElement from '../Admin/VerificationRequestElement';
import { connect } from 'react-redux';

function VerificationRequests(props) {
  const [vrequests, setVrequests] = useState([]);
  useEffect(async () => {
    const a1 = await props.doctors.filter((doctor) => {
      return doctor.profileVerified === 'In process';
    });
    const a2 = await props.needy.filter((e) => {
      return e.profileVerified === 'In process';
    });
    const a3 = await props.volunteers.filter((e) => {
      return e.profileVerified === 'In process';
    });
    const arr = [...a1, ...a2, ...a3];
    console.log(arr);
    setVrequests(() => {
      return arr;
    });
  }, [vrequests]); //here try something different to make the page reload

  return (
    <div>
      <Navbar />

      <div className='verificationRequests'>
        <div className='section'>
          {vrequests.length === 0 ? (
            <h3>No requests</h3>
          ) : (
            <div>
              <div className='verificationRequestsElements'>
                {vrequests.map((req) => {
                  return <VerificationRequestElement content={req} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    doctors: state.adminReducer.doctors,
    needy: state.adminReducer.needy,
    volunteers: state.adminReducer.volunteers,
  };
};

export default connect(mapStateToProps)(VerificationRequests);
