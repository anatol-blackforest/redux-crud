import {DELETE_DIAGNOSIS} from '../constants'
//удаление диагноза
export default function (state, action){
    if(action.type === DELETE_DIAGNOSIS){
          let filterFunc = (item) => {
            return item.id !== action.payload
          };
          const newState = state.diagnoses.filter(filterFunc);
          const newFilteredState = state.filteredDiagnoses.filter(filterFunc);
          if(state.currentDiagnose.id === action.payload){
              return{
                  ...state,
                  diagnoses: newState,
                  filteredDiagnoses: newFilteredState,
                  currentDiagnose: {
                    id: null,
                    diagnosis: "",
                    description: ""
                  }
              }
          }
          return{
              ...state,
              filteredDiagnoses: newFilteredState,
              diagnoses: newState
          }
    }  
    return state
}
