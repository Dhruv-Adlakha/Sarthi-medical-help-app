import {
  GET_DOCTORS,
  GET_VOLUNTEERS,
  GET_NEEDY,
  SUBMIT_VERIFCATION_DOCTOR,
  ACCEPT_VERIFICATION_DOCTOR,
  SUBMIT_VERIFCATION_VOLUNTEER,
  ACCEPT_VERIFICATION_VOLUNTEER,
  SUBMIT_VERIFCATION_NEEDY,
  ACCEPT_VERIFICATION_NEEDY,
  GET_TRUST,
} from '../actions/ActionConstants';

const initState = {
  doctors: [],
  volunteers: [],
  needy: [],
  trust: [],
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
    case GET_TRUST:
      return {
        ...state,
        trust: action.payload,
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
    case ACCEPT_VERIFICATION_DOCTOR:
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
    case SUBMIT_VERIFCATION_VOLUNTEER:
      return {
        ...state,
        volunteers: state.volunteers.map((volunteer) => {
          if (volunteer._id !== action.payload._id) {
            return volunteer;
          } else {
            return action.payload;
          }
        }),
        currUser: action.payload,
      };
    case ACCEPT_VERIFICATION_VOLUNTEER:
      return {
        ...state,
        volunteers: state.volunteers.map((volunteer) => {
          if (volunteer._id !== action.payload._id) {
            return volunteer;
          } else {
            return action.payload;
          }
        }),
        currUser: action.payload,
      };
    case SUBMIT_VERIFCATION_NEEDY:
      return {
        ...state,
        needy: state.needy.map((e) => {
          if (e._id !== action.payload._id) {
            return e;
          } else {
            return action.payload;
          }
        }),
        currUser: action.payload,
      };
    case ACCEPT_VERIFICATION_NEEDY:
      return {
        ...state,
        needy: state.needy.map((e) => {
          if (e._id !== action.payload._id) {
            return e;
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
