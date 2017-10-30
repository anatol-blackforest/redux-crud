import React, { Component } from 'react';
import { connect } from 'react-redux'
import Article from './Article';

class Articles extends Component {
   render(){
      let diagnoses = this.props.diagnoses.map((item, index) => {
        return <Article key={item.id} item={item} />
      })
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
                {diagnoses}
            </tbody>
        </table>
   }
}

function mapStateToProps(state){
    return{
      diagnoses: state.diagnoses
    }
}
export default connect(mapStateToProps)(Articles);