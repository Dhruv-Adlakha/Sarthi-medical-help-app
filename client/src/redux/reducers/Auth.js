import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  DELETE_DOCTOR,
  DELETE_NEEDY,
  DELETE_VOLUNTEER,
} from '../actions/ActionConstants';

const initState = {
  currUser: '',
  isAuthenticated: false,
};

const reducer = (state = initState, action) => {
  console.log('login reducer', state, action);
  switch (action.type) {
    case LOGIN_USER:
    case SIGNUP_USER:
      return {
        ...state,
        currUser: action.payload.currUser,
        isAuthenticated: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
      };
    case DELETE_DOCTOR:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
      };
    case DELETE_NEEDY:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
      };
    case DELETE_VOLUNTEER:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
