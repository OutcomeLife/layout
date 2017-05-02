import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {

    constructor() {
        super();
        this._logout = this._logout.bind(this);
        this._account = this._account.bind(this);

    }
    _logout(e) {
        this.props.keycloak.logout({ redirectUri: "https://genny.outcome-hub.com/" });
        this.props.keycloak.loadUserProfile().success((user) => console.log(user));
        //e.preventDefault();
    }

    _account() {
        this.props.keycloak.accountManagement();
        //e.preventDefault();
    }

    render() {
        return (
            <div className="dropdown" id="dropdown">
                <hr />
                <li>
                    <a href="/account" onMouseDown={this._account}>account</a>
                    <i className="material-icons" style={{ fontSize: "18px", float: "right", paddingRight: "5px" }}>settings</i>
                </li>
                <hr />
                <li>
                    <a href="/logout" onMouseDown={this._logout}>logout</a>
                    <i className="material-icons" style={{ fontSize: "18px", float: "right", paddingRight: "5px" }}>exit_to_app</i>
                </li>
            </div>
        );
    }
}

export default Dropdown;