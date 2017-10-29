import React, { Component } from 'react';
import { connect } from 'react-redux'
import Articles from './Articles';

class MainContainer extends Component {
   render(){
       return <div className="container">
        <div className="content">
            <div className="breadcrumbs">
            <a href="#">Patients</a>  > Albert E Johnson
          </div>
            <div className="main_column">
              <div className="row header">
                <h2>Current Diagnoses:</h2>
              </div>
            <div className="row adder">
                <form>
                  
                <input type="text" defaultValue="Add Diagnoses" /><button></button>
                  
              </form>
              </div>
            
              <Articles />
            
          </div>
        </div>
      </div>
   }
}

export default MainContainer;
