import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
//поиск диагноза (центральная панель)
class SearchContainer extends Component{
    constructor(props){
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
        this.emptyHandler = this.emptyHandler.bind(this);
    }
    searchHandler(){
        this.props.searchHandler(this.search.value);
    }
    emptyHandler(e){
        e.preventDefault();
        this.search.value = "";
        this.props.searchHandler("");
    }
    render(){
        return <Search
          search={search=> this.search = search} 
          searchHandler={this.searchHandler} 
          emptyHandler={this.emptyHandler}
        />
    }
}
function mapDispachToProps(dispatch){
    return{
        searchHandler: (searchValue) => {
            dispatch({type:"SEARCH_DIAGNOSIS", payload: searchValue})
        }
    }
}
export default connect(null, mapDispachToProps)(SearchContainer)
