/**
 * Created by user on 23.07.2016.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class AddUserComponent extends Component{
    constructor(){
        super();
        this.onAddUser = this.onAddUser.bind(this);
    }
    static get propTypes(){
        return{
            onAddUser: React.PropTypes.func
        };
    }
    onAddUser(){
        console.log("AddUserComponent.onAddUser")
        var inputNode = ReactDOM.findDOMNode(this.refs.input);
        this.props.onAddUser(
            inputNode.value);
        inputNode.value = "";
    }

    render(){
        console.log("AddUserComponent.render")
        return (
            <div className="list-component row">
                <input type="text" ref="input" placeholder="New Name"/>
                <button className="btn btn-primary"
                    onClick={this.onAddUser}>
                    Submit</button>
            </div>
        )
    }
}