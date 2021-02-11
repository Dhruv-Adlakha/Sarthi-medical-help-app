import React from 'react';
import Navbar from '../Layout/Navbar';

function VolunteerUpdateProfile() {
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
                  <span>Age</span>
                </label>
                <input type='text' name='age' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Address</span>
                </label>
                <input type='text' name='address' />
              </div>
              <div className='formElement'>
                <label>
                  <span>Phone</span>
                </label>
                <input type='text' name='phone' />
              </div>

              <div className='formElement'>
                <label>
                  <span>Aadhar</span>
                </label>
                <input className='fileText' type='file' name='aadhar' />
              </div>
            </div>
            <button className='btn formLink'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VolunteerUpdateProfile;
