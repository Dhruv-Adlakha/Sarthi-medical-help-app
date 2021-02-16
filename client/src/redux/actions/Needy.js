import axios from 'axios';

export const needyHelpRequest = (problem) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const helpRequest = await axios({
        method: 'post',
        url: '/needy/helpRequest',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: problem,
      });
      console.log(helpRequest);
      dispatch({
        type: 'NEEDY_HELP_REQUEST',
        payload: helpRequest.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
