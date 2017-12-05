import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { editAction } from '../actions';
//боковая панель
class SidebarContainer extends Component {
   constructor(props){
       super(props);
       this.editHandler = this.editHandler.bind(this);
       this.editTrigger = this.editTrigger.bind(this);
       this.state = {
           prepareToEdit: false
       }
   }
   //редактируем запись в боковой панели
   editHandler(e){
       e.preventDefault();
       if(this.description.value.trim()){
           this.props.editHandler(this.id.value, this.description.value);
           this.setState({prepareToEdit: !this.state.prepareToEdit});
       }
   }
   //открываем-закрываем форму редактирования
   editTrigger(){
       this.setState({prepareToEdit: !this.state.prepareToEdit})
   }
   render(){
       return  <Sidebar
           currentDiagnose={this.props.currentDiagnose}
           prepareToEdit={this.state.prepareToEdit}
           editTrigger={this.editTrigger}
           editHandler={this.editHandler}
           description={description => this.description = description}
           id={id => this.id = id}
        />
   }
}
function mapStateToProps(state){
    return{
        currentDiagnose: state.diagnosisReducer.currentDiagnose
    }
}
function mapDispatchToProps(dispatch){
    return{
        editHandler: (id, description) => {
            dispatch(editAction(id, description))
        }  
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
