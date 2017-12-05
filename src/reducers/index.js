import { combineReducers } from 'redux'
import diagnosisReducer from './diagnosisReducer';
import modalWindowReducer from './modalWindowReducer';

export default combineReducers({
  diagnosisReducer,
  modalWindowReducer
});
