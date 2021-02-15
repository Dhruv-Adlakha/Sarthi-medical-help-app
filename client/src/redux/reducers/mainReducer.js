import { combineReducers } from 'redux';
import adminReducer from '../reducers/Admin';
import authReducer from '../reducers/Auth';

const rootReducer = combineReducers({
  adminReducer,
  authReducer,
});

export default rootReducer;
