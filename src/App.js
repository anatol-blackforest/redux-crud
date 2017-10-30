import React, { Component } from 'react';

import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
//все приложение (обе панели)
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
