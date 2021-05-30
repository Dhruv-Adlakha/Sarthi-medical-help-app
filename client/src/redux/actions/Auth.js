import axios from 'axios';
import { LOADING1, ERROR, ERROR_REMOVAL } from './ActionConstants';

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING1,
    });
    try {
      const us = await axios({
        method: 'post',
        url: '/auth/login',
        data: user,
      });
      localStorage.setItem('token', us.data.token);
      dispatch({
        type: 'LOGIN_USER',
        payload: {
          currUser: us.data.user,
          isAuthenticated: true,
        },
      });
      return 1;
    } catch (error) {
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
      dispatch({
        type: 'SIGNUP_USER',
        payload: {
          currUser: us.data.user,
          isAuthenticated: true,
        },
      });
      return 1;
    } catch (error) {
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
      dispatch({
        type: 'LOGOUT_USER',
      });
      return 1;
    } catch (error) {
      return 0;
    }
  };
};
