import React, { Component } from 'react';

import AddButton from './AddButton'
import Header from './Header'
import Sidebar from './Sidebar'
import AddWindow from './AddWindow'
import MainContainer from './MainContainer'

//все приложение (обе панели с хедером)
class App extends Component {
  render() {
    return (
    <div className="app">
      <AddWindow />
      <AddButton />
      <Header />
      <Sidebar />
      <MainContainer />
    </div>
    )
  }
}

export default App;
