import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>
        <NavLink to='/'>Sarthi</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink className='isHover' to='/login'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className='isHover' to='/signup'>
            SignUp
          </NavLink>
        </li>
        <li>
          <NavLink className='isHover' to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
