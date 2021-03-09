import React from 'react';
import { connect } from 'react-redux';
import { acceptPatientDoctorVisit } from '../../redux/actions/Volunteer';

function PatientRequestElement(props) {
  const onClickHandler = () => {
    //if (props.applicationStatus != 4)
    props.dispatch(
      acceptPatientDoctorVisit({
        id: props._id,
        applicationStatus: props.applicationStatus,
      })
    );
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
      <div className='pane'>
        <p>
          <span>Doctor</span>
        </p>
        <p>{props.doctor}</p>
      </div>
      <div className='pane'>
        <p>
          <span>Hospital</span>
        </p>
        <p>{props.hospital}</p>
      </div>
      {props.applicationStatus != 4 && (
        <div className='pane'>
          <p>
            <span>Service</span>
          </p>
          <p>
            {props.applicationStatus == 2
              ? 'Doctor visit'
              : 'Medicine delivery'}
          </p>
        </div>
      )}
      {props.applicationStatus == 4 && (
        <div className='pane'>
          <p>
            <span>Amount</span>
          </p>
          <p>{props.amount}</p>
        </div>
      )}
      <button className='btn' onClick={onClickHandler}>
        Help
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
