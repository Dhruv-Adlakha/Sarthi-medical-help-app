import React, { useEffect, useState } from 'react';
import { NavLink, match, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import { prescribeMedicines } from '../../redux/actions/Doctor';

function PrescribeMedicines(props) {
  const [currRequest, setCurrRequest] = useState({});
  const [allMedicines, setAllMedicines] = useState([]);
  const [currMedicine, setcurrMedicine] = useState('');
  const [currMedicines, setCurrMedicines] = useState({
    medicines: [],
    id: props.match.params.id,
  });
  useEffect(() => {
    const indexCurrRequest = props.requests.findIndex((e) => {
      return e._id === props.match.params.id;
    });

    setCurrRequest(props.requests[indexCurrRequest]);
  }, [props]);
  const onChangeHandler = (e) => {
    setcurrMedicine(() => {
      return {
        ...currMedicine,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onAddHandler = (e) => {
    e.preventDefault();
    setAllMedicines(() => [...allMedicines, currMedicine]);
    setcurrMedicine('');
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCurrMedicines(() => ({
      ...currMedicines,
      medicines: allMedicines,
    }));
    props.dispatch(prescribeMedicines(currMedicines));
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
        {allMedicines &&
          allMedicines.map((e, index) => (
            <div className='addedMedicine' key={index}>
              <p>{e.medicine}</p>
            </div>
          ))}

        <form className='addMedicine' onSubmit={onAddHandler}>
          <input type='text' name='medicine' onChange={onChangeHandler} />
          <button>Add</button>
        </form>
        <button className='btn' onClick={onSubmitHandler}>
          Submit
        </button>
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
