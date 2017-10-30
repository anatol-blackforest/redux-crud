import React, { Component } from 'react';
import Articles from './Articles';
import Search from './Search';
//центральная панель
class MainContainer extends Component {
   render(){
       return <div className="container">
        <div className="content">
            <div className="breadcrumbs">
            <a>Patients</a>  > Albert E Johnson
          </div>
            <div className="main_column">
              <div className="row header">
                <h2>Current Diagnoses:</h2>
              </div>

              <Search />
              <Articles />
            
          </div>
        </div>
      </div>
   }
}

export default MainContainer;
