import {
  NEEDY_HELP_REQUEST,
  GET_REQUESTS,
  DOCTOR_ACCEPT_REQUEST,
  UPDATE_REQUEST,
  LOADING2,
} from '../actions/ActionConstants';

const initState = {
  requests: [],
  loading2: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case NEEDY_HELP_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.payload],
        loading2: false,
      };
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        loading2: false,
      };
    case DOCTOR_ACCEPT_REQUEST:
    case UPDATE_REQUEST:
      return {
        ...state,
        requests: state.requests.map((e) => {
          if (e._id === action.payload._id) {
            return action.payload;
          } else {
            return e;
          }
        }),
        loading2: false,
      };

    case LOADING2:
      return {
        ...state,
        loading2: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
