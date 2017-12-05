import {EDIT_TRIGGER} from '../data/constants'
const data = {prepareToEdit: false}
//редюсер видимости формы редактирования
export default function (state = data, action){
  if(action.type === EDIT_TRIGGER){
     return  {
        prepareToEdit: !state.prepareToEdit
     }
  }
  return {prepareToEdit: false}
}
