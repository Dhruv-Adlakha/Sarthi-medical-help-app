import { combineReducers } from 'redux';
import adminReducer from '../reducers/Admin';
import authReducer from '../reducers/Auth';
import needyReducer from '../reducers/Needy';

const rootReducer = combineReducers({
  adminReducer,
  authReducer,
  needyReducer,
});

export default rootReducer;
