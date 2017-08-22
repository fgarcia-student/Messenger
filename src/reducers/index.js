import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducer-auth';

const rootReducer = combineReducers({
  authenticated: authReducer,
  form: formReducer
});

export default rootReducer;
