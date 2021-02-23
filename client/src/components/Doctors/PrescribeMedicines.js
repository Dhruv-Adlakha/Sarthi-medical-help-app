import React, { useEffect, useState } from 'react';
import { NavLink, match, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import { prescribeMedicines } from '../../redux/actions/Doctor';

function PrescribeMedicines(props) {
  const [currRequest, setCurrRequest] = useState({});
  const [currMedicine, setcurrMedicine] = useState({
    medicine: '',
    id: props.match.params.id,
  });
  useEffect(() => {
    const indexCurrRequest = props.requests.findIndex((e) => {
      return e._id === props.match.params.id;
    });
    console.log(props.match.params.id);
    console.log(props.requests[indexCurrRequest]);
    setCurrRequest(props.requests[indexCurrRequest]);
  });
  const onChangeHandler = (e) => {
    setcurrMedicine(() => {
      return {
        ...currMedicine,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(currMedicine);
    props.dispatch(prescribeMedicines(currMedicine));
  };
  return (
    <div>
      <Navbar />
      <div className='prescribeMedicines'>
        <div>
          <div className='doctorRequest'>
            <h2>Problem: {currRequest && currRequest.problem}</h2>
            <p>{currRequest && currRequest.description}</p>
          </div>
        </div>
        <h2>Prescription</h2>
        {currRequest &&
          currRequest.prescription &&
          currRequest.prescription.map((e) => (
            <div className='addedMedicine'>
              <p>{e.medicine}</p>
            </div>
          ))}

        <form className='addMedicine' onSubmit={onSubmitHandler}>
          <input type='text' name='medicine' onChange={onChangeHandler} />
          <button>Add</button>
        </form>
        {currRequest && currRequest.applicationStatus === 4 && (
          <Redirect to='/doctors/requests' />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    requests: state.needyReducer.requests,
  };
};

export default connect(mapStateToProps)(PrescribeMedicines);
