import React from 'react';
//боковая панель
export default function(props){
    return <aside>
             {
                props.currentDiagnose.description ? (
                //если диагноз выбран
                <div>
                    <h1>{props.currentDiagnose.diagnosis}</h1>
                    <span className="activity" onClick={props.editTrigger}>EDIT {props.prepareToEdit ? "-" : "+" }</span>
                    <div>
                        <p><span>Description:</span></p>
                        {props.prepareToEdit ?  (
                            <form onSubmit={props.editHandler}>
                                <textarea ref={props.description} defaultValue={props.currentDiagnose.description} />
                                <input type="hidden" ref={props.id} defaultValue={props.currentDiagnose.id}/>
                                <input type="Submit" defaultValue="SUBMIT" />
                            </form>
                        ) : props.currentDiagnose.description} 
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
      </aside>
}
