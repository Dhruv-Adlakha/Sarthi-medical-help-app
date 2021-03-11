import axios from 'axios';
import { DELETE_NEEDY, LOADING2 } from './ActionConstants';

export const needyHelpRequest = (problem) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING2,
    });
    try {
      const token = localStorage.getItem('token');
      const helpRequest = await axios({
        method: 'post',
        url: '/needy/helpRequest',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: problem,
      });
      console.log(helpRequest);
      dispatch({
        type: 'NEEDY_HELP_REQUEST',
        payload: helpRequest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteNeedy = (needyUser) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
      const needy = await axios({
        method: 'delete',
        url: `/needy/delete/${needyUser._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('token', null);
      dispatch({
        type: DELETE_NEEDY,
        payload: needy.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
