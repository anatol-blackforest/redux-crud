import React, { Component } from 'react';
import { connect } from 'react-redux'

import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

class App extends Component {
  render() {
    return (
    <div>
      <Sidebar />
      <MainContainer />
    </div>
    )
  }
}

export default App;
