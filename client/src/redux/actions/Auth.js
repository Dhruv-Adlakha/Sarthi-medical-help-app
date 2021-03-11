import axios from 'axios';
import { LOADING1, ERROR, ERROR_REMOVAL } from './ActionConstants';

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
      return 1;
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_REMOVAL,
        });
      }, 1000);
      return 0;
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
      return 1;
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR,
      });
      setTimeout(() => {
        dispatch({
          type: ERROR_REMOVAL,
        });
      }, 2000);
      return 0;
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
