import {EDIT_DIAGNOSIS} from '../data/constants'
//редактирование диагноза в боковой панели
export default function (state, action){
    if(action.type === EDIT_DIAGNOSIS){
          let newState = [...state.diagnoses];
          let newFilteredState = [...state.filteredDiagnoses];
          let mapFunc = (item, index) => {
            let newItem = {...item}
            if(item.id === Number(action.payload.id)){
              newItem.description = action.payload.description;
              return newItem;
            }
            return newItem
          }
          newState = newState.map(mapFunc);
          newFilteredState = newFilteredState.map(mapFunc);
          return{
              ...state,
              diagnoses: newState,
              filteredDiagnoses: newFilteredState,
              currentDiagnose: {
                ...state.currentDiagnose,
                description: action.payload.description
              }
          }
    } 
    return state 
}
