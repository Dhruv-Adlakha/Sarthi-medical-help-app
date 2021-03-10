import React from 'react';

function ServiceHistoryElement(props) {
  return (
    <div className='serviceHistoryElement'>
      <p>{props.index}</p>
      <p>{props.name}</p>
      <p>{props.problem}</p>
    </div>
  );
}

export default ServiceHistoryElement;
