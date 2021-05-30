import React from 'react';
import spinimage from '../spinner/spinner.gif';

export default () => {
  return (
    <div>
      <img src={spinimage} className='spinner' alt='Loading...' />
    </div>
  );
};
