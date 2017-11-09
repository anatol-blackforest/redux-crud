import React from 'react';
//рендер 1 диагноза в списке всех диагнозов в главной панели
export default function(props){
    return <tr>
        <td onClick={props.articleHandler}>
          {props.diagnosis}
        </td>
        <td onClick={props.articleHandler}>{props.description}</td>
        <td>-</td>
        <td><a onClick={props.deleteHandler} className="close" >x</a></td>
    </tr>
}
