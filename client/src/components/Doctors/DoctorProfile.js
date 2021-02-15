import React from 'react';

function DoctorProfile(props) {
  return (
    <div className='profile'>
      <h2>{props.doctor.name}</h2>
      <p>
        <span>Hospital: </span>
        {props.doctor.hospital}
      </p>
      <p>
        <span>Speciality: </span>
        {props.doctor.speciality}
      </p>
    </div>
  );
}

export default DoctorProfile;
