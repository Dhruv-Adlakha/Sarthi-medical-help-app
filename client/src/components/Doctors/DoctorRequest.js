import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { doctorAcceptRequest } from '../../redux/actions/Doctor';

function DoctorRequest(props) {
  const [request, setRequest] = useState('');
  useEffect(() => {
    setRequest(props.requests.find((e) => e._id === props.id));
  }, []);
  const onAcceptHandler = () => {
    props.dispatch(doctorAcceptRequest(request));
  };
  return (
    <div className='doctorRequest'>
      <h2>Problem: {props.problem}</h2>
      <h5>Patient: {props.patient && props.patient.name}</h5>
      <p>{props.description}</p>
      <div className='buttonSection'>
        <button className='btn green' onClick={onAcceptHandler}>
          Accept
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
