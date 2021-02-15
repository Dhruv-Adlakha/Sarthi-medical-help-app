import axios from 'axios';
import { GET_DOCTORS } from './ActionConstants';

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
