import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import DoctorDashboardImage from '../../images/volunteer.png';
import { connect } from 'react-redux';
import { deleteVolunteer } from '../../redux/actions/Volunteer';

function VolunteerDashboard(props) {
  const [deleted, setDeleted] = useState(false);
  const onClickHandler = () => {
    props.dispatch(deleteVolunteer(props.currUser));
    setDeleted(true);
  };
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={DoctorDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/volunteers/patientRequests' className='btn'>
            Patient requests
          </Link>
          <Link to='/volunteers/trustContribution' className='btn'>
            Contribute to Trust
          </Link>
          <Link to='/volunteers/profiles/me' className='btn'>
            My profile
          </Link>
          <Link to='/volunteers/profiles/updateProfile' className='btn'>
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

export default connect(mapStateToProps)(VolunteerDashboard);
