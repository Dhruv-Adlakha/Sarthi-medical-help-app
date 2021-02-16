import axios from 'axios';
import { CONTRIBUTE_TRUST } from './ActionConstants';

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
      console.log(trustContributed.data);
      dispatch({
        type: CONTRIBUTE_TRUST,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
