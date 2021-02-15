import axios from 'axios';
import { GET_DOCTORS, GET_VOLUNTEERS } from './ActionConstants';

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
