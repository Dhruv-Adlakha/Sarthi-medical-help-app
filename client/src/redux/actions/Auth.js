import axios from 'axios';
import { LOADING1 } from './ActionConstants';

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING1,
    });
    try {
      console.log(user);
      const us = await axios({
        method: 'post',
        url: '/auth/login',
        data: user,
      });
      localStorage.setItem('token', us.data.token);
      console.log(us);
      dispatch({
        type: 'LOGIN_USER',
        payload: {
          currUser: us.data.user,
          isAuthenticated: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING1,
    });
    try {
      const us = await axios({
        method: 'post',
        url: '/signup',
        data: user,
      });
      localStorage.setItem('token', us.data.token);
      console.log(us);
      dispatch({
        type: 'SIGNUP_USER',
        payload: {
          currUser: us.data.user,
          isAuthenticated: true,
        },
      });
      return us.data.user;
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING1,
    });
    try {
      const token = localStorage.getItem('token');
      const us = await axios({
        method: 'post',
        url: '/logout',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      localStorage.setItem('token', null);
      console.log(us.data);
      dispatch({
        type: 'LOGOUT_USER',
      });
    } catch (error) {
      console.log(error);
    }
  };
};
