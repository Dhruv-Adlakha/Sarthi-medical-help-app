import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import NeedyDashboardImage from '../../images/needyDashboard.jpeg';
import { deleteNeedy } from '../../redux/actions/Needy';
import { connect } from 'react-redux';

function NeedyDashboard(props) {
  const [deleted, setDeleted] = useState(false);
  const onClickHandler = () => {
    props.dispatch(deleteNeedy(props.currUser));
    setDeleted(true);
  };
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <img src={NeedyDashboardImage} alt='' />
        <div className='contents'>
          <Link to='/needy/doctorVisit' className='btn'>
            Doctor visit
          </Link>
          <Link to='/needy/currentVisit' className='btn'>
            Current visit
          </Link>
          <Link to='/doctors/profiles' className='btn'>
            All Doctors
          </Link>

          <Link to='/needy/profiles/me' className='btn'>
            My profile
          </Link>
          <Link to='/needy/updateProfile' className='btn'>
            Update profile
          </Link>
          <Link to='/login' className='btn' onClick={onClickHandler}>
            Delete profile
          </Link>
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

export default connect(mapStateToProps)(NeedyDashboard);
