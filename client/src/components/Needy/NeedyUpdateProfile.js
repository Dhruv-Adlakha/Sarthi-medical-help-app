import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

function NeedyUpdateProfile() {
  return (
    <div>
      <Navbar />
      <div className='updateProfile'>
        <div className='full-form'>
          <h2>Upate Profile</h2>
          <form action=''>
            <div className='formElement'>
              <label>
                <span>Name</span>
              </label>
              <input type='text' name='name' />
            </div>
            <div className='formElement'>
              <label>
                <span>Yearly income</span>
              </label>
              <input type='text' name='income' />
            </div>
            <div className='formElement'>
              <label>
                <span>Age</span>
              </label>
              <input type='text' name='age' />
            </div>
            <div className='formElement'>
              <label>
                <span>Gender</span>
              </label>
              <input type='text' name='gender' />
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
          </form>
          <Link className='btn formLink'>Submit</Link>
        </div>
      </div>
    </div>
  );
}

export default NeedyUpdateProfile;
