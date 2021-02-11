import React from 'react';
import Navbar from '../Layout/Navbar';

function TrustContribute() {
  return (
    <div>
      <Navbar />
      <div className='trustContribute'>
        <div className='full-form'>
          <h2>Contribute to trust</h2>
          <form action=''>
            <div className='formArea'>
              <div className='formElement'>
                <label>Amount</label>
                <input type='email' name='amount' />
              </div>
              <div className='formElement'>
                <label>Address</label>
                <input type='password' name='address' />
              </div>
              <div className='formElement'>
                <label>Mode of payment</label>
                <select name='purpose' id='purpose'>
                  <option value='need help'>Net banking</option>
                  <option value='volunteer'>Paytm</option>
                  <option value='doctor'>Paypal</option>
                  <option value='admin'>Cash</option>
                </select>
              </div>
            </div>
            <button className='btn formLink'>Contribute</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrustContribute;
