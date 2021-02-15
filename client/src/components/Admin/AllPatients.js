import React from 'react';
import PatientProfile from '../Admin/PatientProfile';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';

function AllPatients(props) {
  return (
    <div>
      <Navbar />
      <div className='profiles'>
        <h2>Patients</h2>
        <div className='cardsPane'>
          {props.patients.map((patient) => {
            return <PatientProfile patient={patient} />;
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    patients: state.adminReducer.needy,
  };
};

export default connect(mapStateToProps)(AllPatients);
