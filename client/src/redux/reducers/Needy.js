import {
  NEEDY_HELP_REQUEST,
  GET_REQUESTS,
  DOCTOR_ACCEPT_REQUEST,
} from '../actions/ActionConstants';

const initState = {
  requests: [],
};

const reducer = (state = initState, action) => {
  console.log('login reducer', state, action);
  switch (action.type) {
    case NEEDY_HELP_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case DOCTOR_ACCEPT_REQUEST:
      return {
        ...state,
        requests: state.requests.map((e) => {
          if (e._id === action.payload._id) {
            return action.payload;
          } else {
            return e;
          }
        }),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
