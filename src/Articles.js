import React, { Component } from 'react';
import { connect } from 'react-redux'
import Article from './Article';
import NothingFound from './NothingFound';
//выводим все диагнозы в главной панели
class Articles extends Component {
   render(){
        let diagnoses;
        if(this.props.isFiltered){
            if(this.props.filteredDiagnoses.length){
                diagnoses = this.props.filteredDiagnoses.map((item, index) => <Article key={item.id} item={item} />);
            }else{
                diagnoses = <NothingFound />
            }
        }else{
            diagnoses = this.props.diagnoses.map((item, index) => <Article key={item.id} item={item} />);
        }
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
      diagnoses: state.diagnosisReducer.diagnoses,
      isFiltered: state.diagnosisReducer.isFiltered,
      filteredDiagnoses: state.diagnosisReducer.filteredDiagnoses
    }
}
export default connect(mapStateToProps)(Articles);
