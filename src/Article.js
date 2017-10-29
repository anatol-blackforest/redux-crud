import React, {Component} from 'react'; 
import { connect } from 'react-redux'

class Article extends Component {
   constructor(props){
     super(props);
     this.articleHandler = this.articleHandler.bind(this);
     this.deleteHandler = this.deleteHandler.bind(this);
   }
   articleHandler(id){
     this.props.articleHandler(id)
   }
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
          <td><a onClick={() => this.deleteHandler(id)} className="close" ></a></td>
      </tr>
   }
}

function mapDispatchToProps(dispatch){
  return{
    articleHandler: id => {
      dispatch({type:"DISPLAY_ARTICLE", payload: id})
    },
    deleteHandler: id => {
      dispatch({type:"DELETE_ARTICLE", payload: id})
    }
  }
}

export default connect(null, mapDispatchToProps)(Article);
