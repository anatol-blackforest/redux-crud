import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddButton extends Component{
    constructor(props){
        super(props);
        this.openWindow = this.openWindow.bind(this);
    }
    openWindow(e){
        e.preventDefault();
        this.props.openWindow();
    }
    render(){
        return <a href="." onClick={this.openWindow} className="plus">Add</a>
    }
}

function mapStateToProps(){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return{
        openWindow: () => {
           dispatch({type: "MODAL_TRIGGER", payload: true})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
