import React from 'react';
import { NavLink } from 'react-router-dom';

function DoctorRequest() {
  return (
    <div className='doctorRequest'>
      <h2>Problem: Fever</h2>
      <p>
        I have been suffering from fever for the last 5 days and have stomach
        ache also.pppppp
      </p>
      <div className='buttonSection'>
        <NavLink to='/doctors/requests/prescribe' className='btn'>
          Prescribe medicines
        </NavLink>
      </div>
    </div>
  );
}

export default DoctorRequest;
