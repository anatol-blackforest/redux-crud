//удаление диагноза
export default function (state, action){
    if(action.type  === "DELETE_DIAGNOSIS"){
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
                    description: ""
                  }
              }
          }
          return{
              ...state,
              diagnoses: newState
          }
    }  
    return state
}
