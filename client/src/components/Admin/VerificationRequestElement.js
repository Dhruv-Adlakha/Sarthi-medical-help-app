import React from 'react';

function VerificationRequestElement() {
  return (
    <div className='verificationRequestElement'>
      <div className='pane'>
        <p>
          <span>Name</span>
        </p>
        <p>Ramesh sharma</p>
      </div>
      <div className='pane'>
        <p>
          <span>Role</span>
        </p>
        <p>13/2,Mansarovar,Jaipur</p>
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
