import { NEEDY_HELP_REQUEST, GET_REQUESTS } from '../actions/ActionConstants';

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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
