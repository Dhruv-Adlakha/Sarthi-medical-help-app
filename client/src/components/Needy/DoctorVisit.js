import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import DoctorVisitElement from '../Needy/DoctorVisitElement';

function DoctorVisit() {
  return (
    <div>
      <Navbar />
      <div className='doctorVisit'>
        <div className='query'>
          <div className='full-form'>
            <h2>Doctor visit</h2>
            <form action=''>
              <div className='formArea'>
                <div className='formElement'>
                  <label>Name</label>
                  <input type='text' name='name' />
                </div>
                <div className='formElement'>
                  <label>Problem</label>
                  <input type='text' name='problem' />
                </div>
                <div className='formElement'>
                  <label>Description</label>
                  <input type='text' name='description' />
                </div>
              </div>
              <button className='btn formLink'>Search Doctors</button>
            </form>
          </div>
        </div>
        <div className='queryResults'>
          <h2>Doctors available</h2>
          <DoctorVisitElement />
          <DoctorVisitElement />
          <DoctorVisitElement />
        </div>
        <div className='full-form'>
          <h2>Choose doctor</h2>
          <form action=''>
            <div className='formArea'>
              <div className='formElement'>
                <label>Doctor Name</label>
                <input type='text' name='name' />
              </div>
            </div>
            <button className='btn formLink'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorVisit;
