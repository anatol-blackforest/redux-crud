import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import './css/index.css';
import App from './App';
import initialState from './data/data';

const reducer = function(state = initialState, action){
  if(action.type === "OPEN_TRIGGER"){
     return{
       ...state,
       currentDiagnose: {
         ...state.currentDiagnose,
         prepareToEdit: !state.currentDiagnose.prepareToEdit
       }
     }
  }else if(action.type === "DISPLAY_ARTICLE"){
     let diagnose;
     state.diagnoses.map((item) => {
       if (item.id === action.payload){
           diagnose = item;
       }
     });
     return{
        diagnoses:[...state.diagnoses],
        currentDiagnose: {
          id: action.payload,
          diagnosis: diagnose.diagnosis,
          description: diagnose.description,
          prepareToEdit: false
        }
     }
  }else if(action.type === "DELETE_ARTICLE"){
     let newState = state.diagnoses.filter((item) => {
       return item.id !== action.payload
     });
     if(state.currentDiagnose.id === action.payload){
        return{
            diagnoses: newState,
            currentDiagnose: {
              id: null,
              diagnosis: "",
              description: "",
              prepareToEdit: false
            }
        }
     }
     return{
       ...state,
        diagnoses: newState
     }
  }else if(action.type === "EDIT_ARTICLE"){
     action.payload.e.preventDefault()
     let newState = [...state.diagnoses];
     newState = newState.map((item, index) => {
       let newItem = {...item}
       if(item.id === Number(action.payload.id)){
         newItem.description = action.payload.description;
         return newItem;
       }
       return newItem
     });
     return{
        ...state,
        diagnoses: newState
     }
  }
  return {
    diagnoses: state,
    currentDiagnose: {
      id: null,
      diagnosis: "",
      description: "",
      prepareToEdit: false
    }
  }
  
};

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
