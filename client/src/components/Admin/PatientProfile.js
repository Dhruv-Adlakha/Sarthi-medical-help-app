import React from 'react';

function PatientProfile(props) {
  return (
    <div className='profile'>
      <h2>{props.patient.name}</h2>
      <p>
        <span>Age: </span>
        {props.patient.age}
      </p>
      <p>
        <span>Gender: </span>
        {props.patient.gender}
      </p>
      <p>
        <span>Address: </span>
        {props.patient.address}
      </p>
    </div>
  );
}

export default PatientProfile;
