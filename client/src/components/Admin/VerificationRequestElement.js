import React from 'react';
import { connect } from 'react-redux';
import { acceptDoctorVerification } from '../../redux/actions/Admin';

function VerificationRequestElement(props) {
  const onAcceptHandler = () => {
    props.dispatch(acceptDoctorVerification(props.content));
  };
  return (
    <div className='verificationRequestElement'>
      <div className='pane'>
        <p>
          <span>Name</span>
        </p>
        <p>{props.content.name}</p>
      </div>
      <div className='pane'>
        <p>
          <span>Role</span>
        </p>
        <p>{props.content.role}</p>
      </div>
      <div className='pane'>
        <p>
          <span>Documents</span>
        </p>
        <p>doc__links</p>
      </div>

      <button className='btn' onClick={onAcceptHandler}>
        Accept
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(VerificationRequestElement);
