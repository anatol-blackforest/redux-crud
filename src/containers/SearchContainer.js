import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchAction } from '../actions';
//поиск диагноза (центральная панель)
class SearchContainer extends Component{
    constructor(props){
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
        this.emptyHandler = this.emptyHandler.bind(this);
    }
    searchHandler(e){
        this.props.searchHandler(e.target.value);
    }
    emptyHandler(){
        this.props.searchHandler(null);
    }
    render(){
        return <Search
          searchHandler={this.searchHandler} 
          emptyHandler={this.emptyHandler}
        />
    }
}
function mapDispachToProps(dispatch){
    return{
        searchHandler: (searchValue) => {
            dispatch(searchAction(searchValue))
        }
    }
}
export default connect(null, mapDispachToProps)(SearchContainer)
