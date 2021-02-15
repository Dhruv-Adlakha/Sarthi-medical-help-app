import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Layout/Navbar';
import DoctorProfile from '../Doctors/DoctorProfile';

function DoctorProfiles(props) {
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
  return {
    doctors: state.adminReducer.doctors,
  };
};

export default connect(mapStateToProps)(DoctorProfiles);
