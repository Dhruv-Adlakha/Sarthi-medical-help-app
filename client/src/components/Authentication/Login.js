import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { loginUser } from '../../redux/actions/Auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  getVolunteers,
  getDoctors,
  getNeedy,
  getRequests,
  getTrust,
} from '../../redux/actions/Admin';
import Spinner from '../Spinner';
import Error from '../Error';

function Login(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    role: 'needy',
  });
  const onChangeHandler = (e) => {
    console.log(e.target.name);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await props.dispatch(loginUser(user));
    console.log('the result is: ', res);
    if (res === 1) {
      sendfurtherrequests();
    }
    console.log(props.isAuthenticated);
  };
  const sendfurtherrequests = async (e) => {
    await props.dispatch(getVolunteers());
    await props.dispatch(getDoctors());
    await props.dispatch(getNeedy());
    await props.dispatch(getTrust());
    await props.dispatch(getRequests());
  };
  return (
    <div>
      <div>
        {props.loading || props.loading1 ? (
          <div>
            <Navbar />
            <Spinner />
          </div>
        ) : (
          <div>
            <Navbar />
            {props.error && <Error text='invalid credentials' />}
            <div className='login'>
              <div className='full-form'>
                <h2>Login</h2>
                <form action='' onSubmit={onSubmitHandler}>
                  <div className='formArea'>
                    <div className='formElement'>
                      <label>Email</label>
                      <input
                        type='email'
                        name='email'
                        onChange={onChangeHandler}
                      />
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
                      <label>Purpose</label>
                      <select name='role' id='role' onChange={onChangeHandler}>
                        <option value='needy'>Need help</option>
                        <option value='volunteer'>Volunteer</option>
                        <option value='doctor'>Doctor</option>
                        <option value='admin'>Admin</option>
                      </select>
                    </div>
                  </div>
                  <button className='btn formLink'>Submit</button>
                </form>
              </div>

              {props.currUser &&
                props.currUser.role === 'needy' &&
                (props.currUser.profileVerified === 'Verified' ? (
                  <Redirect to='/needy/dashboard' />
                ) : (
                  <Redirect to='/needy/updateProfile' />
                ))}
              {props.currUser &&
                props.currUser.role === 'volunteer' &&
                (props.currUser.profileVerified === 'Verified' ? (
                  <Redirect to='/volunteer/dashboard' />
                ) : (
                  <Redirect to='/volunteers/profiles/updateProfile' />
                ))}
              {props.currUser && props.currUser.role === 'admin' && (
                <Redirect to='/admin/dashboard' />
              )}
              {props.currUser &&
                props.currUser.role === 'doctor' &&
                (props.currUser.profileVerified === 'Verified' ? (
                  <Redirect to='/doctor/dashboard' />
                ) : (
                  <Redirect to='/doctors/profiles/updateProfile' />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
    isAuthenticated: state.authReducer.isAuthenticated,
    loading: state.adminReducer.loading,
    loading1: state.authReducer.loading1,
    loading2: state.needyReducer.loading2,
    error: state.authReducer.error,
  };
};

export default connect(mapStateToProps)(Login);
