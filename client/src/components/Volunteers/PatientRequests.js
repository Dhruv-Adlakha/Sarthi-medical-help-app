import React from 'react';
import Navbar from '../Layout/Navbar';
import PatientRequestElement from './PatientRequestElement';

function PatientRequests() {
  return (
    <div>
      <Navbar />
      <div className='volunteerRequests'>
        <h2>Requests</h2>
        <div className='section'>
          <div>
            <h3>Service request</h3>
            <div className='volunteerRequestsElements'>
              <PatientRequestElement />
              <PatientRequestElement />
              <PatientRequestElement />
            </div>
          </div>
          <div>
            <h3>Donation request</h3>
            <div className='volunteerRequestsElements'>
              <PatientRequestElement />
              <PatientRequestElement />
              <PatientRequestElement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientRequests;
