import React, {Component} from 'react'; 
import { connect } from 'react-redux'
import AddWindow from '../components/AddWindow';
//добавляем новый диагноз в модальном окне
class AddWindowContainer extends Component {
   constructor(props){
       super(props);
       this.addHandler = this.addHandler.bind(this);
       this.closeWindow = this.closeWindow.bind(this);
       this.stprop = this.stprop.bind(this);
   }
   addHandler(e){
       e.preventDefault();
       if(this.diagnosis.value.trim() && this.description.value.trim()){
            this.props.addHandler(this.diagnosis.value, this.description.value);
            this.props.closeWindow();
            e.target.reset();
       }
   }
   stprop(e){
       e.stopPropagation();
   }
   closeWindow(){
       this.props.closeWindow();
   }
   render(){
       return  <AddWindow 
            closeWindow={this.closeWindow} 
            isOpened={this.props.isOpened} 
            stprop={this.stprop}
            addHandler={this.addHandler}
            diagnosis={diagnosis => this.diagnosis = diagnosis}
            description={description => this.description = description} 
       />
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
export default connect(mapStateToProps, mapDispatchToProps)(AddWindowContainer);
