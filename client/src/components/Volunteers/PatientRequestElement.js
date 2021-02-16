import React from 'react';

function PatientRequestElement(props) {
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

      <button className='btn'>Accept</button>
    </div>
  );
}

export default PatientRequestElement;
