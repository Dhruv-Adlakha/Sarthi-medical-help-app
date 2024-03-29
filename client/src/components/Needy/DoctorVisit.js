import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { connect } from 'react-redux';
import { needyHelpRequest } from '../../redux/actions/Needy';
import Spinner from '../Spinner';

function DoctorVisit(props) {
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => {
    const arr = props.requests.filter((e) => {
      return (
        e.patient == props.currUser._id &&
        e.applicationStatus >= 1 &&
        e.applicationStatus < 6
      );
    });
    if (arr.length !== 0) {
      setInProgress(true);
    }
  }, []);
  const [problem, setProblem] = useState({
    patientId: props.currUser._id,
    problem: '',
    description: '',
  });
  const [updated, setUpdated] = useState(false);
  const onChangeHandler = (e) => {
    setProblem({
      ...problem,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await props.dispatch(needyHelpRequest(problem));
    setUpdated(true);
  };
  return (
    <div>
      <Navbar />
      {props.loading2 ? (
        <Spinner />
      ) : (
        <div className='doctorVisit'>
          <div className='query'>
            <div className='full-form'>
              <h2>Doctor visit</h2>
              <form action='' onSubmit={onSubmitHandler}>
                <div className='formArea'>
                  <div className='formElement'>
                    <label>Name</label>
                    <input type='text' name='name' onChange={onChangeHandler} />
                  </div>
                  <div className='formElement'>
                    <label>Problem</label>
                    <input
                      type='text'
                      name='problem'
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='formElement'>
                    <label>Description</label>
                    <input
                      type='text'
                      name='description'
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <button className='btn formLink' disabled={inProgress}>
                  {!inProgress ? 'Submit' : 'In process'}
                </button>
              </form>
              {updated && <Redirect to='/needy/currentVisit' />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
    requests: state.needyReducer.requests,
    loading2: state.needyReducer.loading2,
  };
};

export default connect(mapStateToProps)(DoctorVisit);
