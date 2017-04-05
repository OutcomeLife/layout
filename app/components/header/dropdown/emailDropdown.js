import React, { Component } from 'react';
import './emailDropdown.scss';

export default class EmailDropdown extends Component {

  renderProfile() {
    alert("please fetch api");
  }

  render() {
    var { visibility } = this.props;
    return (
      <div style={{ visibility: visibility }} className="EmailDropDown">
        <a href="#" >email 1 <i className="material-icons" 
          style={{fontSize:"18px",
                float:"right",
                paddingRight:"5px"}}
                >person_outline</i> </a>
        <span className="divider"></span>
    
      </div>

    );
  }
}
