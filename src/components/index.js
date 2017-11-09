import React from 'react';
import Header from './Header';
import MainPanel from './MainPanel';
import SidebarContainer from '../containers/SidebarContainer';
import AddButtonContainer from '../containers/AddButtonContainer';
import AddWindowContainer from '../containers/AddWindowContainer';
//все приложение (обе панели с хедером)
export default function(props){
    return <div className="app">
        <Header />
        <SidebarContainer />
        <MainPanel />
        <AddWindowContainer />
        <AddButtonContainer />
    </div>
}
