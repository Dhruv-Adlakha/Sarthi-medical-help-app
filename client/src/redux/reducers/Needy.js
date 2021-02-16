import { NEEDY_HELP_REQUEST } from '../actions/ActionConstants';

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
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
