import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

function DoctorUpdateProfile() {
  return (
    <div>
      <Navbar />
      <div className='updateProfile'>
        <div className='full-form'>
          <h2>Upate Profile</h2>
          <form action=''>
            <div className='formArea'>
              <div className='formElement'>
                <label>
                  <span>Name</span>
                </label>
                <input type='text' name='name' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Qualification</span>
                </label>
                <input type='text' name='qualification' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Speciality</span>
                </label>
                <input type='text' name='speciality' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Hospital</span>
                </label>
                <input type='text' name='hospital' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Education</span>
                </label>
                <input type='text' name='education' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Aadhar</span>
                </label>
                <input className='fileText' type='file' name='aadhar' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Education certificate</span>
                </label>
                <input
                  className='fileText'
                  type='file'
                  name='education-certificate'
                />
              </div>
            </div>
            <button className='btn formLink'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorUpdateProfile;
