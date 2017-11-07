import { combineReducers } from 'redux'
import diagnosisReducer from './diagnosisReducer';
import editTriggerReducer from './editTriggerReducer';

export default combineReducers({
  diagnosisReducer,
  editTriggerReducer
});
