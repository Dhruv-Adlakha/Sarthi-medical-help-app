import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';

function CurrentVisit(props) {
  const [appStatus, setAppStatus] = useState(0);
  useEffect(async () => {
    console.log(props.requests, props.currUser);
    const req = await props.requests.filter((e) => {
      return e.patient == props.currUser._id && e.applicationStatus > 0;
    });
    console.log(req);
    if (req.length) setAppStatus(() => req[0].applicationStatus);
  });
  return (
    <div>
      <Navbar />

      <div className='currentVisit'>
        <div className='volunteer'>
          <h2>Volunteering Doctor</h2>
          <p>Dr. Manish kriplani</p>
        </div>
        <div className='status'>
          <h2>Current visit status</h2>
          <div className='statusBars'>
            <div
              className={
                appStatus >= 1 ? 'statusBarsElement done' : 'statusBarsElement'
              }
            >
              Application completed
            </div>
            <div
              className={
                appStatus >= 2 ? 'statusBarsElement done' : 'statusBarsElement'
              }
            >
              Doctor accepted request
            </div>
            <div
              className={
                appStatus >= 3 ? 'statusBarsElement done' : 'statusBarsElement'
              }
            >
              Volunteer took to doctor
            </div>
            <div
              className={
                appStatus >= 4 ? 'statusBarsElement done' : 'statusBarsElement'
              }
            >
              Doctor prescribed medicines
            </div>
            <div
              className={
                appStatus >= 5 ? 'statusBarsElement done' : 'statusBarsElement'
              }
            >
              Medicines bill paid
            </div>
            <div
              className={
                appStatus >= 6 ? 'statusBarsElement done' : 'statusBarsElement'
              }
            >
              Volunteer took and delivered
            </div>
          </div>

          <div className='depictor'>
            <p>
              <span className='green'>Green:</span> Complete
            </p>
            <p>
              <span className='red'>Red:</span>Incomplete
            </p>
          </div>
        </div>
        <div className='volunteer'>
          <h2>Volunteers</h2>
          <div>
            <h3>Doctor visit</h3>
            <p>Ravi sharma</p>
          </div>
          <div>
            <h3>Medicine delivery</h3>
            <p>Ibrahim haq</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    requests: state.needyReducer.requests,
    currUser: state.authReducer.currUser,
  };
};

export default connect(mapStateToProps)(CurrentVisit);
