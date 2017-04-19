import React, { Component } from 'react';
import './dropDownMenuItem.scss';

export default class DropDownMenuItem extends Component {

  renderProfile() {
    alert("please fetch api");
  }
  _logout () {
    window.location.replace("http://localhost:9990/auth/realms/genny1/protocol/openid-connect/logout?redirect_uri=http://localhost:3000/");
  }

  render() {
    var { visibility } = this.props;
    return (
      <div style={{ visibility: visibility }} className="DropDownMenuItem">
        <a href="#" >profile <i className="material-icons" 
          style={{fontSize:"18px",
                float:"right",
                paddingRight:"5px"}}
                >person_outline</i> </a>
        <span className="divider"></span>
        <a href="#" >setting <i className="material-icons"   
        style={{fontSize:"18px",
                float:"right",
                paddingRight:"5px"}}
                >settings</i></a>
        <span className="divider"></span>
        <a href="#" onClick={this._logout.bind(this)}>logout <i className="material-icons"   
        style={{fontSize:"18px",
                float:"right",
                paddingRight:"5px"}}
                >exit_to_app</i></a>
      </div>

    );
  }
}
