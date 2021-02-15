import {
  GET_DOCTORS,
  GET_VOLUNTEERS,
  GET_NEEDY,
  SUBMIT_VERIFCATION_DOCTOR,
} from '../actions/ActionConstants';

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
    case GET_NEEDY:
      return {
        ...state,
        needy: action.payload,
      };
    case SUBMIT_VERIFCATION_DOCTOR:
      return {
        ...state,
        doctors: state.doctors.map((doctor) => {
          if (doctor._id !== action.payload._id) {
            return doctor;
          } else {
            return action.payload;
          }
        }),
        currUser: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
