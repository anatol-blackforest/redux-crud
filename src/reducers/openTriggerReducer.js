const data = {prepareToEdit: false}
//редюсер видимости формы редактирования
export default function (state = data, action){
  if(action.type === "OPEN_TRIGGER"){
     return  {
        prepareToEdit: !state.prepareToEdit
     }
  }
  return {prepareToEdit: false}
}
