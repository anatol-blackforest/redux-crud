import {MODAL_TRIGGER} from '../constants'
const data = {isOpened: false}
//редюсер видимости формы редактирования
export default function (state = data, action){
  if(action.type === MODAL_TRIGGER){
     return  {
        isOpened: action.payload
     }
  }
  return {isOpened: false}
}
