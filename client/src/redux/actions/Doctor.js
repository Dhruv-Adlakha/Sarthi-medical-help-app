import axios from 'axios';
import { DOCTOR_ACCEPT_REQUEST } from '../actions/ActionConstants';

export const doctorAcceptRequest = (requestId) => {
  return async (dispatch) => {
    try {
      console.log(requestId._id);
      const token = localStorage.getItem('token');
      const currRequest = await axios({
        method: 'patch',
        url: '/doctor/patientRequests/' + requestId._id,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: DOCTOR_ACCEPT_REQUEST,
        payload: currRequest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
