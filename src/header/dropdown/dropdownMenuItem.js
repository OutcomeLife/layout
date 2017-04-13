import React, { Component } from 'react';
import './dropdownMenuItem.css';

export default class DropDownMenuItem extends Component {

  renderProfile() {
    alert("please fetch api");
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
        <a href="#">logout <i className="material-icons"   
        style={{fontSize:"18px",
                float:"right",
                paddingRight:"5px"}}
                >exit_to_app</i></a>
      </div>

    );
  }
}
