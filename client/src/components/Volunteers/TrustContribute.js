import React, { useState } from 'react';
import Navbar from '../Layout/Navbar';
import { contributeTrust } from '../../redux/actions/Volunteer';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function TrustContribute(props) {
  const [updated, setUpdated] = useState(false);
  const [trustItems, setTrustItems] = useState({
    amount: 0,
    address: '',
    contributer: props.authReducer.currUser.name,
    modeOfPayment: 'cash',
    _id: props.authReducer.currUser._id,
  });
  const onChangeHandler = (e) => {
    setTrustItems({
      ...trustItems,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await props.dispatch(contributeTrust(trustItems));
    setUpdated(true);
  };
  return (
    <div>
      <Navbar />
      <div className='trustContribute'>
        <div className='full-form'>
          <h2>Contribute to trust</h2>
          <form action='' onSubmit={onSubmitHandler}>
            <div className='formArea'>
              <div className='formElement'>
                <label>Amount</label>
                <input type='text' name='amount' onChange={onChangeHandler} />
              </div>
              <div className='formElement'>
                <label>Address</label>
                <input type='text' name='address' onChange={onChangeHandler} />
              </div>
              <div className='formElement'>
                <label>Mode of payment</label>
                <select
                  name='modeOfPayment'
                  id='modeOfPayment'
                  onChange={onChangeHandler}
                >
                  <option value='netBanking'>Net banking</option>
                  <option value='Paytm'>Paytm</option>
                  <option value='Paypal'>Paypal</option>
                  <option value='Cash'>Cash</option>
                </select>
              </div>
            </div>
            <button className='btn formLink'>Contribute</button>
            {updated && <Redirect to='/volunteer/dashboard' />}
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(TrustContribute);
