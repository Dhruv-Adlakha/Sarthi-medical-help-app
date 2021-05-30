import axios from 'axios';
import { LOADING } from '../actions/ActionConstants';

export const submitVerification = (user) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    try {
      user.profileVerified = 'In process';
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

      dispatch({
        type: 'SUBMIT_VERIFICATION_' + user.role.toUpperCase(),
        payload: updateRequest.data,
      });
      return 1;
    } catch (error) {
      return 0;
    }
  };
};
