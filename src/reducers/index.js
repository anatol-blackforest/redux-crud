import { combineReducers } from 'redux'
import diagnosisReducer from './diagnosisReducer';
import openTriggerReducer from './openTriggerReducer';

export default combineReducers({
  diagnosisReducer,
  openTriggerReducer
});