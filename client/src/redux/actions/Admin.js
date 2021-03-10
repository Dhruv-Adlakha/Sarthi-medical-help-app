import axios from 'axios';
import {
  GET_DOCTORS,
  GET_VOLUNTEERS,
  GET_NEEDY,
  GET_REQUESTS,
  GET_TRUST,
  LOADING,
  LOADING1,
  LOADING2,
} from './ActionConstants';

export const getDoctors = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
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
    dispatch({
      type: LOADING,
    });
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
    dispatch({
      type: LOADING,
    });
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

export const getRequests = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING2,
    });
    try {
      const requests = await axios.get('/admin/requests');
      console.log(requests.data);
      dispatch({
        type: GET_REQUESTS,
        payload: requests.data,
      });

      return;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTrust = () => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      const token = localStorage.getItem('token');
      const requests = await axios({
        method: 'get',
        url: '/admin/trust',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: GET_TRUST,
        payload: requests.data,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return;
    } catch (error) {
      console.log(error);
    }
  };
};

export const acceptDoctorVerification = (user) => {
  return async (dispatch) => {
    try {
      user.profileVerified = 'Verified';
      console.log(user);
      const token = localStorage.getItem('token');
      const updateRequest = await axios({
        method: 'patch',
        url: `/${user.role}/updateProfile/${user._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: user,
      });
      console.log(updateRequest);

      dispatch({
        type: 'ACCEPT_VERIFICATION_' + user.role.toUpperCase(),
        payload: updateRequest.date,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
