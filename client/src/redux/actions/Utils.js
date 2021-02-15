import axios from 'axios';

export const submitVerification = (user) => {
  return async (dispatch) => {
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
      console.log(updateRequest);

      dispatch({
        type: 'SUBMIT_VERIFICATION_' + user.role.toUpperCase(),
        payload: updateRequest.date,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
