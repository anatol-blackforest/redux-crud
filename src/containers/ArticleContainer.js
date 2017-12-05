import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import Article from '../components/Article';
import { displayAction, deleteAction } from '../actions';
//вывод 1 диагноза в списке всех диагнозов в главной панели
class ArticleContainer extends Component {
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
       return <Article
          articleHandler={() => this.articleHandler(id)} 
          deleteHandler={() => this.deleteHandler(id)} 
          diagnosis={this.props.item.diagnosis}
          description={this.props.item.description}
       />
   }
}
function mapDispatchToProps(dispatch){
  return{
    articleHandler: id => {
      dispatch(displayAction(id))
    },
    deleteHandler: id => {
      dispatch(deleteAction(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(ArticleContainer);
