import {ADD_DIAGNOSIS} from '../constants'
//добавление нового диагноза
export default function (state, action){
    if(action.type === ADD_DIAGNOSIS){
          return {
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
}
