import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/Auth';

const Navbar = (props) => {
  const onClickHandler = async () => {
    await props.dispatch(logoutUser(props.currUser));
  };
  return (
    <div>
      {(!props || props.isAuthenticated === false) && (
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
      )}
      {props && props.isAuthenticated && (
        <div className='navbar'>
          <h1>
            <NavLink to='/'>Sarthi</NavLink>
          </h1>
          <ul>
            {(props.currUser.profileVerified === 'Verified' ||
              props.currUser.role === 'admin') && (
              <li>
                <NavLink
                  className='isHover'
                  to={`/${props.currUser.role}/dashboard`}
                >
                  Dashboard
                </NavLink>
              </li>
            )}
            <li>
              <NavLink className='isHover' to='/' onClick={onClickHandler}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currUser: state.authReducer.currUser,
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Navbar);
