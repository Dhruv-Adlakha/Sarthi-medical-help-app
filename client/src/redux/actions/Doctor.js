import axios from 'axios';
import {
  DOCTOR_ACCEPT_REQUEST,
  DELETE_DOCTOR,
  UPDATE_REQUEST,
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

export const prescribeMedicines = (medicine) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    console.log(medicine.id);
    try {
      const req = await axios({
        method: 'post',
        url: `/doctor/prescribeMedicines/${medicine.id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: medicine,
      });
      console.log(req);
      dispatch({
        type: UPDATE_REQUEST,
        payload: req.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
