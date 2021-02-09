import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

function Login() {
  return (
    <div>
      <Navbar />
      <div className='login'>
        <div className='full-form'>
          <h2>Login</h2>
          <form action=''>
            <div className='formElement'>
              <label>Email</label>
              <input type='email' name='email' />
            </div>
            <div className='formElement'>
              <label>Password</label>
              <input type='password' name='password' />
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
          </form>
          <Link className='btn formLink'>Submit</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
