import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { doctorAcceptRequest } from '../../redux/actions/Doctor';

function DoctorRequest(props) {
  const [request, setRequest] = useState('');
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    setRequest(props.requests.find((e) => e._id === props.id));
  }, []);
  const onAcceptHandler = () => {
    const res = props.dispatch(doctorAcceptRequest(request));
    if (res) {
      setUpdated(true);
    }
  };
  return (
    <div className='doctorRequest'>
      <h2>Problem: {props.problem}</h2>
      <h5>Patient: {props.patient && props.patient.name}</h5>
      <p>{props.description}</p>
      <div className='buttonSection'>
        <button
          className='btn acceptButton'
          onClick={onAcceptHandler}
          disabled={props.applicationStatus === 2}
        >
          {props.applicationStatus === 2 ? 'Accepted' : 'Accept'}
        </button>
        <NavLink to='/doctors/requests/prescribe' className='btn'>
          Prescribe medicines
        </NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    requests: state.needyReducer.requests,
  };
};

export default connect(mapStateToProps)(DoctorRequest);
