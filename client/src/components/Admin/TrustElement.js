import React from 'react';

function TrustElement(props) {
  return (
    <div className='trustElement'>
      <div className='pane'>
        <p>
          <span>Amount</span>
        </p>
        <p>{props.amount}</p>
      </div>
      <div className='pane'>
        <p>
          <span>Contributor</span>
        </p>
        <p>{props.contributor}</p>
      </div>
    </div>
  );
}

export default TrustElement;
