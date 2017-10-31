import React, {Component} from 'react'; 
import { connect } from 'react-redux'
//вывод 1 диагноза в списке всех диагнозов в главной панели
class Article extends Component {
   constructor(props){
     super(props);
     this.articleHandler = this.articleHandler.bind(this);
     this.deleteHandler = this.deleteHandler.bind(this);
   }
   //подробный вывод диагноза в боковой панели по клику на него в главном списке 
   articleHandler(id){
     this.props.articleHandler(id)
   }
   //удаление диагноза клику на кнопку в главном списке 
   deleteHandler(id){
     this.props.deleteHandler(id)
   }
   render(){
       let id = this.props.item.id;
       return <tr>
          <td onClick={() => this.articleHandler(id)}>
            {this.props.item.diagnosis}
          </td>
          <td onClick={() => this.articleHandler(id)}>{this.props.item.description}</td>
          <td>-</td>
          <td><a onClick={() => this.deleteHandler(id)} className="close" >x</a></td>
      </tr>
   }
}

function mapDispatchToProps(dispatch){
  return{
    articleHandler: id => {
      dispatch({type:"DISPLAY_DIAGNOSIS", payload: id})
    },
    deleteHandler: id => {
      dispatch({type:"DELETE_DIAGNOSIS", payload: id})
    }
  }
}

export default connect(null, mapDispatchToProps)(Article);
