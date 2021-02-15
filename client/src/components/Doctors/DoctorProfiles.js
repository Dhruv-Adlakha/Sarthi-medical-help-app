import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Layout/Navbar';
import DoctorProfile from '../Doctors/DoctorProfile';
import { getDoctors } from '../../redux/actions/Admin';

function DoctorProfiles(props) {
  useEffect(async () => {
    console.log('useeffect');
    await props.dispatch(getDoctors());
    console.log(props.doctors);
  }, []);
  return (
    <div>
      <Navbar />
      <div className='profiles'>
        <h2>Doctors</h2>
        <div className='cardsPane'>
          {props.doctors &&
            props.doctors.map((doctor, index) => {
              return <DoctorProfile doctor={doctor} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.adminReducer.doctors);
  return {
    doctors: state.adminReducer.doctors,
  };
};

export default connect(mapStateToProps)(DoctorProfiles);
