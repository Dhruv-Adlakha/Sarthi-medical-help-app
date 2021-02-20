import axios from 'axios';
import {
  DOCTOR_ACCEPT_REQUEST,
  DELETE_DOCTOR,
} from '../actions/ActionConstants';

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

export const deleteDoctor = (doctorUser) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
      const doctor = await axios({
        method: 'delete',
        url: `/doctor/delete/${doctorUser._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('token', null);
      dispatch({
        type: DELETE_DOCTOR,
        payload: doctor.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
