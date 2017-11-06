//поиск диагноза в массиве
export default function (state, action){
  if(action.type  === "SEARCH_DIAGNOSIS"){
        if(action.payload.length){
            let search = action.payload.toLowerCase();
            return{
                ...state,
                filteredDiagnoses: state.diagnoses.filter((item, index) => {
                    return (item.diagnosis.toLowerCase().indexOf(search) !== -1 || item.description.toLowerCase().indexOf(search) !== -1);
                })
            } 
        }else{
            return{
                ...state,
                filteredDiagnoses: []
            }
        }
  }
}
