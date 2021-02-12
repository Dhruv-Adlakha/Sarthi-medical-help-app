import React from 'react';

function PatientRequestElement() {
  return (
    <div className='patientRequestElement'>
      <div className='pane'>
        <p>
          <span>Name</span>
        </p>
        <p>Ramesh sharma</p>
      </div>
      <div className='pane'>
        <p>
          <span>Address</span>
        </p>
        <p>13/2,Mansarovar,Jaipur</p>
      </div>
      <div className='pane'>
        <p>
          <span>Medical shop</span>
        </p>
        <p>14/55,Mansarovar,Jaipur</p>
      </div>

      <button className='btn'>Accept</button>
    </div>
  );
}

export default PatientRequestElement;
