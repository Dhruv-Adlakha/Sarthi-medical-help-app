import React from 'react';

function VerificationRequestElement(props) {
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

      <button className='btn'>Accept</button>
    </div>
  );
}

export default VerificationRequestElement;
