import React from 'react';
import Navbar from '../Layout/Navbar';
import DoctorRequest from '../Doctors/DoctorRequest';

function DoctorRequests() {
  return (
    <div>
      <Navbar />
      <div className='doctorRequests'>
        <h2>Patient requests</h2>
        <DoctorRequest />
        <DoctorRequest />
        <DoctorRequest />
      </div>
    </div>
  );
}

export default DoctorRequests;
