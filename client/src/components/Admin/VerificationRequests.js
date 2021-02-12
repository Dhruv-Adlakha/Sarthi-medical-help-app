import React from 'react';
import Navbar from '../Layout/Navbar';
import VerificationRequestElement from '../Admin/VerificationRequestElement';
function VerificationRequests() {
  return (
    <div>
      <Navbar />
      <div className='verificationRequests'>
        <h2>Verification Requests</h2>
        <div className='section'>
          <div>
            <div className='verificationRequestsElements'>
              <VerificationRequestElement />
              <VerificationRequestElement />
              <VerificationRequestElement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationRequests;
