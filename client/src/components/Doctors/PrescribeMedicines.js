import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

function PrescribeMedicines() {
  return (
    <div>
      <Navbar />
      <div className='prescribeMedicines'>
        <div>
          <div className='doctorRequest'>
            <h2>Problem: Fever</h2>
            <p>
              I have been suffering from fever for the last 5 days and have
              stomach ache also.pppppp
            </p>
          </div>
        </div>
        <h2>Prescription</h2>
        <div className='addedMedicine'>
          <p>1. Roxid 40mg</p>
        </div>
        <div className='addedMedicine'>
          <p>2. Sumo tablets</p>
        </div>
        <div className='addMedicine'>
          <input type='text' name='medicine' />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default PrescribeMedicines;
