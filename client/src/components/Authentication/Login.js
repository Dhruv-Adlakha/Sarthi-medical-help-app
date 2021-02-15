import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { loginUser } from '../../redux/actions/Auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
    console.log(user);
    await props.dispatch(loginUser(user));
  };
  return (
    <div>
      <Navbar />
      <div className='login'>
        <div className='full-form'>
          <h2>Login</h2>
          <form action='' onSubmit={onSubmitHandler}>
            <div className='formArea'>
              <div className='formElement'>
                <label>Email</label>
                <input type='email' name='email' onChange={onChangeHandler} />
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
        {props.currUser.role === 'needy' && <Redirect to='/needy/dashboard' />}
        {props.currUser.role === 'volunteer' && (
          <Redirect to='/volunteer/dashboard' />
        )}
        {props.currUser.role === 'admin' && <Redirect to='/admin/dashboard' />}
        {props.currUser.role === 'doctor' && (
          <Redirect to='/doctor/dashboard' />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
  };
};

export default connect(mapStateToProps)(Login);
