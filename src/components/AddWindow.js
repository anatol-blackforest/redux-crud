import React from 'react';
//рендерим новый диагноз в модальном окне
export default function(props){
    return <div onClick={props.closeWindow} style={props.isOpened ? {display:"block"} : {display:"none"}} className="modal">
                <div onClick={props.stprop} className="adder">
                        <p><span>Add new diagnosis: </span></p>
                        <form onSubmit={props.addHandler} >
                            <input 
                                type="text" 
                                ref={props.diagnosis} 
                                placeholder="Diagnosis"
                            />
                            <textarea 
                                ref={props.description} 
                                placeholder="Description" 
                            />
                            <input type="Submit" defaultValue="ADD" />
                        </form>
                </div>
      </div>
}
