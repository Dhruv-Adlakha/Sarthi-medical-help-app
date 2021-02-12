import React from 'react';
import Navbar from '../Layout/Navbar';
import DoctorProfile from '../Doctors/DoctorProfile';

function DoctorProfiles() {
  return (
    <div>
      <Navbar />
      <div className='profiles'>
        <h2>Doctors</h2>
        <div className='cardsPane'>
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
          <DoctorProfile />
        </div>
      </div>
    </div>
  );
}

export default DoctorProfiles;
