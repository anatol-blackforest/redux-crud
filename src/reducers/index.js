import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer';
import openTriggerReducer from './openTriggerReducer';

export default combineReducers({
  diagnosisReducer,
  openTriggerReducer
});