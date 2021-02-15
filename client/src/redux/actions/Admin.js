import axios from 'axios';
import { GET_DOCTORS, GET_VOLUNTEERS, GET_NEEDY } from './ActionConstants';

export const getDoctors = () => {
  return async (dispatch) => {
    try {
      const doctors = await axios.get('/admin/doctorProfiles');
      dispatch({
        type: GET_DOCTORS,
        payload: doctors.data,
      });
      return doctors;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getVolunteers = () => {
  return async (dispatch) => {
    try {
      const volunteers = await axios.get('/admin/volunteerProfiles');
      dispatch({
        type: GET_VOLUNTEERS,
        payload: volunteers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNeedy = () => {
  return async (dispatch) => {
    try {
      const needy = await axios.get('/admin/needyProfiles');
      dispatch({
        type: GET_NEEDY,
        payload: needy.data,
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };
};
