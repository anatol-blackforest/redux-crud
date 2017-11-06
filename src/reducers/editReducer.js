//редактирование диагноза в боковой панели
export default function (state, action){
    if(action.type  === "EDIT_DIAGNOSIS"){
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
                description: action.payload.description
              }
          }
    } 
    return state 
}
