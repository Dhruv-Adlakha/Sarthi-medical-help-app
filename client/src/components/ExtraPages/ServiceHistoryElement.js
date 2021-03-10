import React from 'react';

function ServiceHistoryElement(props) {
  return (
    <div className='serviceHistoryElement'>
      <p>{props.index}</p>
      <p>{props.name}</p>
      <p>{!props.query && props.problem}</p>
      <p>{props.query === 0 && 'Doctor visit'}</p>
      <p>{props.query === 1 && 'Medicine delivery'}</p>
    </div>
  );
}

export default ServiceHistoryElement;
