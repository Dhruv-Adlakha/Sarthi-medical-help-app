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

    await props.dispatch(getVolunteers());
    await props.dispatch(getDoctors());
    await props.dispatch(getNeedy());
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
          {props.currUser.role === 'needy' &&
            (props.currUser.profileVerified === 'Verified' ? (
              <Redirect to='/needy/dashboard' />
            ) : (
              <Redirect to='/needy/updateProfile' />
            ))}
          {props.currUser.role === 'volunteer' &&
            (props.currUser.profileVerified === 'Verified' ? (
              <Redirect to='/volunteer/dashboard' />
            ) : (
              <Redirect to='/volunteers/profiles/updateProfile' />
            ))}
          {props.currUser.role === 'admin' && (
            <Redirect to='/admin/dashboard' />
          )}
          {props.currUser.role === 'doctor' &&
            (props.currUser.profileVerified === 'Verified' ? (
              <Redirect to='/doctor/dashboard' />
            ) : (
              <Redirect to='/doctors/profiles/updateProfile' />
            ))}
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
