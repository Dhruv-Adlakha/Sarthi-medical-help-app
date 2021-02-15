import { GET_DOCTORS, GET_VOLUNTEERS } from '../actions/ActionConstants';

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
    case GET_VOLUNTEERS:
      return {
        ...state,
        volunteers: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
