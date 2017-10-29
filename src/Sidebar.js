import React, {Component} from 'react'; 
import { connect } from 'react-redux'

class Sidebar extends Component {
   constructor(props){
       super(props);
       this.editHandler = this.editHandler.bind(this);
       this.openTrigger = this.openTrigger.bind(this);
   }
   editHandler(e){
       this.props.editHandler(e, this.id.value, this.description.value)
   }
   openTrigger(){
       this.props.openTrigger()
   }
   render(){
       return  <aside>
             {
                this.props.currentDiagnose.description ? (
                <div>
                    <h1>{this.props.currentDiagnose.diagnosis}</h1>
                    <span className="activity" onClick={this.openTrigger}>EDIT {this.props.currentDiagnose.prepareToEdit ? "-" : "+" }</span>
                    <div>
                        <p><span>Description:</span></p>
                        {this.props.currentDiagnose.prepareToEdit ?  (
                            <form onSubmit={this.editHandler}>
                                <textarea ref={description => this.description = description} defaultValue={this.props.currentDiagnose.description} />
                                <input type="hidden" ref={id => this.id = id} defaultValue={this.props.currentDiagnose.id}/>
                                <input type="Submit" defaultValue="SUBMIT" />
                            </form>
                        ) : this.props.currentDiagnose.description} 
                    </div>
                </div>
                ) : (
                <div>
                    <h1>Diagnosis</h1>
                    <p>
                        All diagnoses have description 
                    </p>
                </div>
                )
             }
      </aside>
   }
}

function mapStateToProps(state){
    return{
        currentDiagnose: state.currentDiagnose,
    }
}
function mapDispatchToProps(dispatch){
    return{
        editHandler: (e, id, description) => {
            dispatch({type:"EDIT_ARTICLE", payload: {e, id, description}})
        },   
        openTrigger: () => {
            dispatch({type:"OPEN_TRIGGER", payload: ""})
        }   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
