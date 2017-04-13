import React, { Component } from 'react';
import './notificationDropdown.css';

export default class NotificationDropdown extends Component {

  renderProfile() {
    alert("please fetch api");
  }

  render() {
    var { visibility } = this.props;
    return (
      <div style={{ visibility: visibility }} className="NotificationDropDown">
        <a href="#" >notification 1 <i className="material-icons" 
          style={{fontSize:"18px",
                float:"right",
                paddingRight:"5px"}}
                >person_outline</i> </a>
        <span className="divider"></span>
    
      </div>

    );
  }
}
