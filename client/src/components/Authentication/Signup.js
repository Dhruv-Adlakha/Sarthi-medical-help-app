import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

function Signup() {
  return (
    <div>
      <Navbar />
      <div className='signup'>
        <div className='full-form'>
          <h2>Signup</h2>
          <form action=''>
            <div className='formElement'>
              <label>Name</label>
              <input type='text' name='name' />
            </div>
            <div className='formElement'>
              <label>Email</label>
              <input type='email' name='email' />
            </div>
            <div className='formElement'>
              <label>Locality</label>
              <input type='text' name='locality' />
            </div>
            <div className='formElement'>
              <label>Purpose</label>
              <select name='purpose' id='purpose'>
                <option value='need help'>Need help</option>
                <option value='volunteer'>Volunteer</option>
                <option value='doctor'>Doctor</option>
                <option value='admin'>Admin</option>
              </select>
            </div>
            <div className='formElement'>
              <label>Password</label>
              <input type='password' name='password' />
            </div>
            <div className='formElement'>
              <label>Confirm Password</label>
              <input type='password' name='confirm-password' />
            </div>
          </form>
          <Link className='btn formLink'>Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
