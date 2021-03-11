import axios from 'axios';
import { CONTRIBUTE_TRUST, DELETE_VOLUNTEER } from './ActionConstants';

export const contributeTrust = (trust) => {
  return async (dispatch) => {
    try {
      trust.amount = Number(trust.amount);
      console.log(trust);
      const token = localStorage.getItem('token');
      const trustContributed = await axios({
        method: 'post',
        url: '/volunteer/trust',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: trust,
      });
      dispatch({
        type: CONTRIBUTE_TRUST,
      });
      return 1;
    } catch (error) {
      return 0;
    }
  };
};

export const deleteVolunteer = (volunteerUser) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    try {
      const volunteer = await axios({
        method: 'delete',
        url: `/volunteer/delete/${volunteerUser._id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem('token', null);
      dispatch({
        type: DELETE_VOLUNTEER,
        payload: volunteer.data,
      });
      return 1;
    } catch (error) {
      return 0;
    }
  };
};

export const acceptPatientDoctorVisit = (req) => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    // ++req.applicationStatus;
    console.log('dhruv', req);
    try {
      const request = await axios({
        method: 'patch',
        url: `/updateRequest/${req.id}`,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          applicationStatus: req.applicationStatus + 1,
        },
      });

      dispatch({
        type: 'UPDATE_REQUEST',
        payload: request.data,
      });
      return 1;
    } catch (error) {
      return 0;
    }
  };
};
