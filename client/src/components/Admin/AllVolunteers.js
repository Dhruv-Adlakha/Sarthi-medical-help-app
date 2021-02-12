import React from 'react';
import VolunteerProfile from '../Admin/VolunteerProfile';
import Navbar from '../Layout/Navbar';

function AllVolunteers() {
  return (
    <div>
      <Navbar />
      <div className='profiles'>
        <h2>Patients</h2>
        <div className='cardsPane'>
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
          <VolunteerProfile />
        </div>
      </div>
    </div>
  );
}

export default AllVolunteers;
