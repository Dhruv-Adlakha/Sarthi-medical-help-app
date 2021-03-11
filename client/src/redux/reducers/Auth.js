import {
  LOGIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  DELETE_DOCTOR,
  DELETE_NEEDY,
  DELETE_VOLUNTEER,
  LOADING1,
  SUBMIT_VERIFCATION_VOLUNTEER,
  SUBMIT_VERIFCATION_DOCTOR,
  SUBMIT_VERIFCATION_NEEDY,
  ERROR,
  ERROR_REMOVAL,
} from '../actions/ActionConstants';

const initState = {
  currUser: '',
  isAuthenticated: false,
  loading1: false,
  error: false,
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
        loading1: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
        loading1: false,
      };
    case DELETE_DOCTOR:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
        loading1: false,
      };
    case DELETE_NEEDY:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
        loading1: false,
      };
    case DELETE_VOLUNTEER:
      return {
        ...state,
        currUser: '',
        isAuthenticated: false,
        loading1: false,
      };
    case LOADING1:
      return {
        ...state,
        loading1: true,
      };
    case SUBMIT_VERIFCATION_DOCTOR:
      return {
        ...state,
        currUser: action.payload,
      };
    case SUBMIT_VERIFCATION_VOLUNTEER:
      return {
        ...state,
        currUser: action.payload,
      };
    case SUBMIT_VERIFCATION_NEEDY:
      return {
        ...state,
        currUser: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading1: false,
        error: true,
      };
    case ERROR_REMOVAL:
      return {
        ...state,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
