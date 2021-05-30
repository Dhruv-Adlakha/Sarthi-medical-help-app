import React from 'react';
import Navbar from '../Layout/Navbar';
import TrustElement from './TrustElement';
import { connect } from 'react-redux';

function Trust(props) {
  const calcSum = () => {
    let sum = 0;
    props.trust.forEach((e) => {
      sum += e.amount;
    });
    return sum;
  };
  return (
    <div>
      <Navbar />
      <div className='trust'>
        <h2>Trust contribution</h2>
        <div className='amount'>Total amount: {calcSum()} rupees</div>
        <div className='trustElements'>
          {props.trust.map((e) => {
            return (
              <TrustElement amount={e.amount} contributor={e.contributer} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trust: state.adminReducer.trust,
  };
};

export default connect(mapStateToProps)(Trust);
