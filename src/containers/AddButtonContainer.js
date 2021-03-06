import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddButton from '../components/AddButton';
import { openWindowAction } from '../actions';
//кнопка добавления диагноза
class AddButtonContainer extends Component{
    constructor(props){
        super(props);
        this.openWindow = this.openWindow.bind(this);
    }
    openWindow(e){
        e.preventDefault();
        this.props.openWindow();
    }
    render(){
        return <AddButton openWindow={this.openWindow} />
    }
}
function mapDispatchToProps(dispatch){
    return{
        openWindow: () => {
           dispatch(openWindowAction(true))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddButtonContainer);
