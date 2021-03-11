import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Layout/Navbar';
import { submitVerification } from '../../redux/actions/Utils';
import Spinner from '../Spinner';

function NeedyUpdateProfile(props) {
  const [newProfile, setNewProfile] = useState({
    name: props.currUser.name,
    age: props.currUser.age,
    annualIncome: props.currUser.annualIncome,
    gender: props.currUser.gender,
    role: props.currUser.role,
    address: props.currUser.address,
    _id: props.currUser._id,
  });
  const onChangeHandler = (e) => {
    setNewProfile({
      ...newProfile,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await props.dispatch(submitVerification(newProfile));
  };
  return (
    <div>
      <Navbar />
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          <div className='updateProfile'>
            <div className='full-form'>
              <h2>Update Profile</h2>
              <form action='' onSubmit={onSubmitHandler}>
                <div className='formArea'>
                  <div className='formElement'>
                    <label>
                      <span>Name</span>
                    </label>
                    <input
                      type='text'
                      name='name'
                      defaultValue={newProfile.name}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Yearly income</span>
                    </label>
                    <input
                      type='text'
                      name='annualIncome'
                      defaultValue={newProfile.annualIncome}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Address</span>
                    </label>
                    <input
                      type='text'
                      name='address'
                      defaultValue={newProfile.address}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Age</span>
                    </label>
                    <input
                      type='text'
                      name='age'
                      defaultValue={newProfile.age}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Gender</span>
                    </label>
                    <input
                      type='text'
                      name='gender'
                      defaultValue={newProfile.gender}
                      onChange={onChangeHandler}
                    />
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
                <button
                  className='btn formLink'
                  disabled={props.currUser.profileVerified === 'In process'}
                >
                  {props.currUser.profileVerified === 'In process'
                    ? 'In process Check later'
                    : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
    loading: state.adminReducer.loading,
  };
};

export default connect(mapStateToProps)(NeedyUpdateProfile);
