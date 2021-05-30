import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import DoctorDashboardImage from '../../images/doctorDashboardImage.jpg';
import { connect } from 'react-redux';
import { deleteDoctor } from '../../redux/actions/Doctor';

function DoctorDashboard(props) {
  const [deleted, setDeleted] = useState(false);
  const onClickHandler = () => {
    props.dispatch(deleteDoctor(props.currUser));
    setDeleted(true);
  };
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={DoctorDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/doctors/profiles' className='btn'>
            All Doctors
          </Link>
          <Link to='/doctors/requests' className='btn'>
            Patient requests
          </Link>
          <Link to='/doctors/profiles/me' className='btn'>
            My profile
          </Link>
          <Link to='/doctors/profiles/updateProfile' className='btn'>
            Update profile
          </Link>
          <button to='/login' className='btn' onClick={onClickHandler}>
            Delete profile
          </button>
          {deleted && <Redirect to='/' />}
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

export default connect(mapStateToProps)(DoctorDashboard);
