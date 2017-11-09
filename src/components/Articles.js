import React from 'react';
//рендерим все диагнозы в главной панели
export default function(props){
    return <table className="demo">
        <thead>
            <tr>
                <th>Diagnosis</th>
                <th>Description</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.diagnoses}
        </tbody>
    </table>
}
