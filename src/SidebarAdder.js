import React, {Component} from 'react'; 
import { connect } from 'react-redux'
//добавляем новый диагноз из боковой панели
class SidebarEditor extends Component {
   constructor(props){
       super(props);
       this.addHandler = this.addHandler.bind(this);
   }
   addHandler(e){
       e.preventDefault();
       if(this.diagnosis.value && this.description.value){
            this.props.addHandler(this.diagnosis.value, this.description.value);
            this.diagnosis.value = "";
            this.description.value = "";
       }
   }
   render(){
       return  <div className="adder">
           <p><span>Add new diagnosis: </span></p>
            <form onSubmit={this.addHandler}>
                <input 
                    type="text" 
                    ref={diagnosis => this.diagnosis = diagnosis} 
                    placeholder="Diagnosis"
                />
                <textarea 
                    ref={description => this.description = description} 
                    placeholder="Description" 
                />
                <input type="Submit" defaultValue="ADD" />
            </form>
      </div>
   }
}

function mapStateToProps(state){
    return{
        currentDiagnose: state.articlesReducer.currentDiagnose,
    }
}
function mapDispatchToProps(dispatch){
    return{
        addHandler: (diagnosis, description) => {
            dispatch({type:"ADD_DIAGNOSIS", payload: {diagnosis, description}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarEditor);
