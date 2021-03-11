import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { submitVerification } from '../../redux/actions/Utils';
import { connect } from 'react-redux';
import Spinner from '../Spinner';

function VolunteerUpdateProfile(props) {
  const [newProfile, setNewProfile] = useState({
    name: props.currUser.name,
    age: props.currUser.age,
    address: props.currUser.address,
    phone: props.currUser.phone,
    role: props.currUser.role,
    _id: props.currUser._id,
  });
  const onChangeHandler = (e) => {
    console.log(e.target.name);
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
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          <Navbar />
          <div className='updateProfile'>
            <div className='full-form'>
              <h2>Upate Profile</h2>
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
                      <span>Phone</span>
                    </label>
                    <input
                      type='text'
                      name='phone'
                      defaultValue={newProfile.phone}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className='formElement'>
                    <label>
                      <span>Aadhar</span>
                    </label>
                    <input className='fileText' type='file' name='aadhar' />
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

export default connect(mapStateToProps)(VolunteerUpdateProfile);
