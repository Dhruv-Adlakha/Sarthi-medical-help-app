import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import NeedyDashboardImage from '../../images/needyDashboard.jpeg';
import { deleteNeedy } from '../../redux/actions/Needy';
import { connect } from 'react-redux';
import Spinner from '../Spinner';

function NeedyDashboard(props) {
  const [deleted, setDeleted] = useState(false);
  const onClickHandler = async () => {
    await props.dispatch(deleteNeedy(props.currUser));
    setDeleted(() => true);
  };
  return (
    <div>
      {props.loading2 ? (
        <Spinner />
      ) : (
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
              <button className='btn' onClick={onClickHandler}>
                Delete profile
              </button>
              {deleted && <Redirect to='/' />}
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
    loading1: state.authReducer.loading1,
    loading2: state.needyReducer.loading2,
  };
};

export default connect(mapStateToProps)(NeedyDashboard);
