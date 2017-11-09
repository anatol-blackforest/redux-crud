import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import ArticlesContainer from '../containers/ArticlesContainer';
//центральная панель
export default function(props){
    return  <div className="container">
        <div className="content">
            <div className="breadcrumbs">
            <a>Patients</a>  > Albert E Johnson
            </div>
            <div className="main_column">
                <div className="row header">
                <h2>Current Diagnoses:</h2>
                </div>
                <SearchContainer />
                <ArticlesContainer />
            </div>
        </div>
     </div>
}
