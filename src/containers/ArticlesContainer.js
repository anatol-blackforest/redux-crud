import React, { Component } from 'react';
import { connect } from 'react-redux'
import ArticleContainer from './ArticleContainer';
import Articles from '../components/Articles'
import NothingFound from '../components/NothingFound';
//выводим все диагнозы в главной панели
class ArticlesContainer extends Component {
   render(){
        let diagnoses;
        if(this.props.isFiltered){
            if(this.props.filteredDiagnoses.length){
                diagnoses = this.props.filteredDiagnoses.map((item, index) => <ArticleContainer key={item.id} item={item} />);
            }else{
                diagnoses = <NothingFound />
            }
        }else{
            diagnoses = this.props.diagnoses.map((item, index) => <ArticleContainer key={item.id} item={item} />);
        }
        return <Articles diagnoses={diagnoses} />
   }
}
function mapStateToProps(state){
    return{
      diagnoses: state.diagnosisReducer.diagnoses,
      isFiltered: state.diagnosisReducer.isFiltered,
      filteredDiagnoses: state.diagnosisReducer.filteredDiagnoses
    }
}
export default connect(mapStateToProps)(ArticlesContainer);
