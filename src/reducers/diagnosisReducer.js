import searchReducer from './searchReducer';
import displayReducer from './displayReducer';
import deleteReducer from './deleteReducer';
import editReducer from './editReducer';
import addReducer from './addReducer';
import initialState from './initialState';

//редюсер обработки списка диагнозов
export default function (state = initialState(), action){
  switch(action.type){
    //поиск диагноза в массиве
    case "SEARCH_DIAGNOSIS": {
      return searchReducer(state, action);
    }
    //отображение подробного диагноза в боковой панели
    case "DISPLAY_DIAGNOSIS": {
       return displayReducer(state, action);
    }
    //удаление диагноза
    case "DELETE_DIAGNOSIS": {
       return deleteReducer(state, action);
    }
    //редактирование диагноза в боковой панели
    case "EDIT_DIAGNOSIS": {
         return editReducer(state, action);
    }
    //добавление нового диагноза
    case "ADD_DIAGNOSIS": {
      return addReducer(state, action);
    }
    //возвращаем начальный стейт
    default: return state
  }
};
