import React from 'react';
import { connect } from 'react-redux';
import { acceptPatientDoctorVisit } from '../../redux/actions/Volunteer';

function PatientRequestElement(props) {
  const onClickHandler = () => {
    props.dispatch(acceptPatientDoctorVisit(props._id));
  };
  return (
    <div className='patientRequestElement'>
      <div className='pane'>
        <p>
          <span>Name</span>
        </p>
        <p>{props.name}</p>
      </div>
      <div className='pane'>
        <p>
          <span>Address</span>
        </p>
        <p>{props.address}</p>
      </div>

      <button className='btn' onClick={onClickHandler}>
        Accept
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(PatientRequestElement);
