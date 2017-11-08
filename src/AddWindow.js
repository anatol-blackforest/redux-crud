import React, {Component} from 'react'; 
import { connect } from 'react-redux'
//добавляем новый диагноз из боковой панели
class SidebarEditor extends Component {
   constructor(props){
       super(props);
       this.addHandler = this.addHandler.bind(this);
       this.closeWindow = this.closeWindow.bind(this);
       this.stprop = this.stprop.bind(this);
   }
   addHandler(e){
       e.preventDefault();
       if(this.diagnosis.value && this.description.value){
            this.props.addHandler(this.diagnosis.value, this.description.value);
            this.props.closeWindow();
            this.diagnosis.value = "";
            this.description.value = "";
       }
   }
   stprop(e){
       e.stopPropagation();
   }
   closeWindow(){
       this.props.closeWindow();
   }
   render(){
       return  <div onClick={this.closeWindow} style={this.props.isOpened ? {display:"block"} : {display:"none"}} className="modal">
            <div onClick={this.stprop} className="adder">
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
      </div>
   }
}

function mapStateToProps(state){
    return{
        currentDiagnose: state.diagnosisReducer.currentDiagnose,
        isOpened: state.modalWindowReducer.isOpened,
    }
}
function mapDispatchToProps(dispatch){
    return{
        addHandler: (diagnosis, description) => {
            dispatch({type:"ADD_DIAGNOSIS", payload: {diagnosis, description}})
        },
        closeWindow: () => {
           dispatch({type: "MODAL_TRIGGER", payload: false});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarEditor);
