import { combineReducers } from 'redux'
import data from '../data/data';

export default function Reducers(state = data, action){
    
  if(action.type === "OPEN_TRIGGER"){
     return{
       ...state,
       currentDiagnose: {
         ...state.currentDiagnose,
         prepareToEdit: !state.currentDiagnose.prepareToEdit
       }
     }
  }else if(action.type === "SEARCH_DIAGNOSIS"){
      if(action.payload.length){
          const newArray = state.diagnoses.filter((item, index) => {
              return (item.diagnosis.indexOf(action.payload) !== -1 || item.description.indexOf(action.payload) !== -1)
          });
          return{
            ...state,
            filteredDiagnoses: newArray
          }
     }else{
        return{
            ...state,
            filteredDiagnoses: []
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
        ...state,
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
            ...state,
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
        diagnoses: newState,
        currentDiagnose: {
          ...state.currentDiagnose,
          description: action.payload.description,
          prepareToEdit: false
        }
     }
  }else if(action.type === "ADD_ARTICLE"){
     return{
       ...state,
        diagnoses:[
            ...state.diagnoses,
            {
                "id": Date.now(),
                "diagnosis": action.payload.diagnosis,
                "description": action.payload.description
            }
        ]
     }
  }
  return {
    filteredDiagnoses: [],
    diagnoses: state,
    currentDiagnose: {
      id: null,
      diagnosis: "",
      description: "",
      prepareToEdit: false
    }
  }
};
