import data from '../data/data';
//первичное состояние
let initialState = {
  filteredDiagnoses: [],
  diagnoses: data,
  currentDiagnose: {
    id: null,
    diagnosis: "",
    description: ""
  }
}

export default function articlesReducer(state = initialState, action){
  //поиск диагноза в массиве
  if(action.type === "SEARCH_DIAGNOSIS"){
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
  }else if(action.type === "DISPLAY_DIAGNOSIS"){
    //отображение подробного диагноза в боковой панели
     let diagnose;
     state.diagnoses.map((item) => {
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
  }else if(action.type === "DELETE_DIAGNOSIS"){
    //удаление диагноза
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
  }else if(action.type === "EDIT_DIAGNOSIS"){
    //редактирование диагноза в боковой панели
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
  }else if(action.type === "ADD_DIAGNOSIS"){
    //добавление нового диагноза
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
  return state
};
