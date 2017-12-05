import { combineReducers } from 'redux'
import diagnosisReducer from './diagnosisReducer';
import editTriggerReducer from './editTriggerReducer';
import modalWindowReducer from './modalWindowReducer';

export default combineReducers({
  diagnosisReducer,
  editTriggerReducer,
  modalWindowReducer
});
