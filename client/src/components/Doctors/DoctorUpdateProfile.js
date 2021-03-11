import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Layout/Navbar';
import { submitVerification } from '../../redux/actions/Utils';
import Spinner from '../Spinner';

function DoctorUpdateProfile(props) {
  const [newProfile, setNewProfile] = useState({
    name: props.currUser.name,
    qualification: props.currUser.qualification,
    speciality: props.currUser.speciality,
    hospital: props.currUser.hospital,
    education: props.currUser.education,
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
                      <span>Qualification</span>
                    </label>
                    <input
                      type='text'
                      name='qualification'
                      defaultValue={newProfile.qualification}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Speciality</span>
                    </label>
                    <input
                      type='text'
                      name='speciality'
                      defaultValue={newProfile.speciality}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Hospital</span>
                    </label>
                    <input
                      type='text'
                      name='hospital'
                      defaultValue={newProfile.hospital}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>
                      <span>Education</span>
                    </label>
                    <input
                      type='text'
                      name='education'
                      defaultValue={newProfile.education}
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

export default connect(mapStateToProps)(DoctorUpdateProfile);
