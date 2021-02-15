import { combineReducers } from 'redux';
import adminReducer from '../reducers/Admin';

const rootReducer = combineReducers({
  adminReducer,
});

export default rootReducer;
