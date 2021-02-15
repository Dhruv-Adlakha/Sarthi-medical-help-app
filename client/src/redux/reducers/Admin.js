import { GET_DOCTORS } from '../actions/ActionConstants';

const initState = {
  doctors: [],
  volunteers: [],
  needy: [],
};

const reducer = (state = initState, action) => {
  console.log('Admin reducer', state, action);
  switch (action.type) {
    case GET_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
