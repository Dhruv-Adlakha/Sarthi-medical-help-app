import axios from 'axios';

export const submitVerification = (user) => {
  return async (dispatch) => {
    const updates = {
      profileVerified: 'In process',
    };
    try {
      const updateRequest = await axios({
        method: 'post',
        url: `/${user.role}/updateProfile/${user._id}`,
        data: updates,
      });
      console.log(updateRequest);
      user.profileVerified = 'In process';
      dispatch({
        type: 'SUBMIT_VERIFICATION_' + user.role.toUpperCase(),
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
