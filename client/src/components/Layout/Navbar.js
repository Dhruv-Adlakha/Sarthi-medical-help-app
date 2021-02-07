import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>
        <a href='#'>Sarthi</a>
      </h1>
      <ul>
        <li>
          <a href='#'>Login</a>
        </li>
        <li>
          <a href='#'>SignUp</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
