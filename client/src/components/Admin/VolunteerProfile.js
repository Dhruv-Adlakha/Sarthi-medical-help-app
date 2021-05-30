import React from 'react';

function VolunteerProfile(props) {
  return (
    <div className='profile'>
      <h2>{props.volunteer.name}</h2>
      <p>
        <span>Age: </span>
        {props.volunteer.age}
      </p>
      <p>
        <span>Gender: </span>
        {props.volunteer.gender}
      </p>
      <p>
        <span>Address: </span>
        {props.volunteer.address}
      </p>
      <p>
        <span>Phone: </span>
        {props.volunteer.phone}
      </p>
    </div>
  );
}

export default VolunteerProfile;
