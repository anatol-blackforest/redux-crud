import React, {Component} from 'react'; 
import { connect } from 'react-redux'
//редактируем диагноз в боковой панели
class SidebarEditor extends Component {
   constructor(props){
       super(props);
       this.editHandler = this.editHandler.bind(this);
       this.editTrigger = this.editTrigger.bind(this);
   }
   //редактируем запись в боковой панели
   editHandler(e){
       e.preventDefault();
       if(this.description.value){
           this.props.editHandler(this.id.value, this.description.value);
       }
   }
   //открываем-закрываем форму редактирования
   editTrigger(){
       this.props.editTrigger()
   }
   render(){
       return  <div>
             {
                this.props.currentDiagnose.description ? (
                //если диагноз выбран
                <div>
                    <h1>{this.props.currentDiagnose.diagnosis}</h1>
                    <span className="activity" onClick={this.editTrigger}>EDIT {this.props.prepareToEdit ? "-" : "+" }</span>
                    <div>
                        <p><span>Description:</span></p>
                        {this.props.prepareToEdit ?  (
                            <form onSubmit={this.editHandler}>
                                <textarea ref={description => this.description = description} defaultValue={this.props.currentDiagnose.description} />
                                <input type="hidden" ref={id => this.id = id} defaultValue={this.props.currentDiagnose.id}/>
                                <input type="Submit" defaultValue="SUBMIT" />
                            </form>
                        ) : this.props.currentDiagnose.description} 
                    </div>
                </div>
                ) : (
                //если диагноз не выбран
                <div>
                    <h1>Diagnosis</h1>
                    <p>
                        All diagnoses have description 
                    </p>
                </div>
                )
             }
      </div>
   }
}

function mapStateToProps(state){
    return{
        currentDiagnose: state.diagnosisReducer.currentDiagnose,
        prepareToEdit: state.editTriggerReducer.prepareToEdit,
    }
}
function mapDispatchToProps(dispatch){
    return{
        editHandler: (id, description) => {
            dispatch({type:"EDIT_DIAGNOSIS", payload: {id, description}})
        },   
        editTrigger: () => {
            dispatch({type:"EDIT_TRIGGER", payload: ""})
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarEditor);
