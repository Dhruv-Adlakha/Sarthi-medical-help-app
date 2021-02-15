import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { signUser } from '../../redux/actions/Auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVolunteers, getDoctors, getNeedy } from '../../redux/actions/Admin';

function Signup(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'needy',
  });
  const onChangeHandler = async (e) => {
    console.log(e.target.name, e.target.value);
    await setUser(() => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await props.dispatch(signUser(user));
    if (props.isAuthenticated)
      //to prevent the fetching of data if the user is not a valid user
      await props.dispatch(getVolunteers());
    if (props.isAuthenticated) await props.dispatch(getDoctors());
    if (props.isAuthenticated) await props.dispatch(getNeedy());
  };
  return (
    <div>
      <Navbar />
      <div className='signup'>
        <div className='full-form'>
          <h2>Signup</h2>

          <form action='' onSubmit={onSubmitHandler}>
            <div className='formArea'>
              <div className='formElement'>
                <label>Name</label>
                <input type='text' name='name' onChange={onChangeHandler} />
              </div>
              <div className='formElement'>
                <label>Email</label>
                <input type='email' name='email' onChange={onChangeHandler} />
              </div>
              <div className='formElement'>
                <label>Purpose</label>
                <select name='role' id='role' onChange={onChangeHandler}>
                  <option value='need help'>Need help</option>
                  <option value='volunteer'>Volunteer</option>
                  <option value='doctor'>Doctor</option>
                  <option value='admin'>Admin</option>
                </select>
              </div>
              <div className='formElement'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={onChangeHandler}
                />
              </div>
              <div className='formElement'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  name='confirmPassword'
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <button className='btn formLink'>Submit</button>
          </form>
          {props.currUser.role === 'needy' && (
            <Redirect to='/needy/dashboard' />
          )}
          {props.currUser.role === 'volunteer' && (
            <Redirect to='/volunteer/dashboard' />
          )}
          {props.currUser.role === 'admin' && (
            <Redirect to='/admin/dashboard' />
          )}
          {props.currUser.role === 'doctor' && (
            <Redirect to='/doctor/dashboard' />
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
  };
};

export default connect(mapStateToProps)(Signup);
