import React, { Component } from 'react';
import { connect } from 'react-redux';
//поиск диагноза (центральная панель)
class Search extends Component{
    constructor(props){
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(){
        this.props.searchHandler(this.search.value);
    }
    render(){
        return <div className="row adder">
            <form>
                <input ref={search=> this.search = search} onChange={this.searchHandler} type="text" placeholder="Search Diagnoses" /><button></button>
            </form>
        </div>
    }
}
function mapDispachToProps(dispatch){
    return{
        searchHandler: (searchValue) => {
            dispatch({type:"SEARCH_DIAGNOSIS", payload: searchValue})
        }
    }
}
export default connect(null, mapDispachToProps)(Search)