const data = {prepareToEdit: false}

export default function articlesReducer(state = data, action){
  if(action.type === "OPEN_TRIGGER"){
     return  {
        prepareToEdit: !state.prepareToEdit
     }
  }
  return {prepareToEdit: false}
}
