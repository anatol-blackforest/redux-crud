import data from '../data/data';
//первичное состояние (список диагнозов)
let initialState = {
  filteredDiagnoses: [],
  diagnoses: data,
  currentDiagnose: {
    id: null,
    diagnosis: "",
    description: ""
  }
}
//редюсер обработки списка диагнозов
export default function articlesReducer(state = initialState, action){
  switch(action.type){
    //поиск диагноза в массиве
    case "SEARCH_DIAGNOSIS": {
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
    }
    //отображение подробного диагноза в боковой панели
    case "DISPLAY_DIAGNOSIS": {
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
    }
    //удаление диагноза
    case "DELETE_DIAGNOSIS": {
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
    //редактирование диагноза в боковой панели
    case "EDIT_DIAGNOSIS": {
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
    //добавление нового диагноза
    case "ADD_DIAGNOSIS": {
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
    //возвращаем начальный стейт
    default: return state
  }
};
