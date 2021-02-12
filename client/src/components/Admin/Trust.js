import React from 'react';
import Navbar from '../Layout/Navbar';
import TrustElement from './TrustElement';

function Trust() {
  return (
    <div>
      <Navbar />
      <div className='trust'>
        <h2>Trust contribution</h2>
        <div className='amount'>Total amount: 34000 rupees</div>
        <div className='trustElements'>
          <TrustElement />
          <TrustElement />
          <TrustElement />
          <TrustElement />
        </div>
      </div>
    </div>
  );
}

export default Trust;
