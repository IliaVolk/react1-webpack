/**
 * Created by user on 23.07.2016.
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import User from '../../../other/User'

export default class UserComponent extends Component{

    constructor() {
        super();
        this.onRemoveUser = this.onRemoveUser.bind(this);
    }
    static get propTypes(){
        return {
            user: React.PropTypes.instanceOf(User),
            onRemoveUser: React.PropTypes.func
        }
    }
    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).css("display", "none").slideDown();
    }

    onRemoveUser(){
        console.log("onRemoveUser");
        $(ReactDOM.findDOMNode(this)).slideUp(()=>{
            this.props.onRemoveUser(this);
        });
    }
    shouldComponentUpdate(){return false;}
    render() {
    return (
        <div className="list-component row">
            Name: {this.props.user.name}
            <button className="btn btn-danger pull-right" onClick={this.onRemoveUser}>Remove</button>
        </div>
    );
}
}