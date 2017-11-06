//отображение подробного диагноза в боковой панели
export default function (state, action){
    if(action.type  === "DISPLAY_DIAGNOSIS"){
          let diagnose;
          state.diagnoses.forEach((item) => {
            if (item.id === action.payload){
                diagnose = item;
            }
          });
          return{
            ...state,
            currentDiagnose: {
                id: action.payload,
                diagnosis: diagnose.diagnosis,
                description: diagnose.description
            }
          }
    }
    return state
}
