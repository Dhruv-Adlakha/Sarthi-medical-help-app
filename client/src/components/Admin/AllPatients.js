import React from 'react';
import PatientProfile from '../Admin/PatientProfile';
import Navbar from '../Layout/Navbar';

function AllPatients() {
  return (
    <div>
      <Navbar />
      <div className='profiles'>
        <h2>Patients</h2>
        <div className='cardsPane'>
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
          <PatientProfile />
        </div>
      </div>
    </div>
  );
}

export default AllPatients;
