import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './sidebar.css';


export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //lower case
      role: "none",
      message: "none",
      contact: "none",
      admin: "none",
      expand: "chevron_right"
    }
    autoBind(this);
  }
  openDropdown() {
    var role = (this.state.role == "none") ? "block" : "none";
    var expand = (this.state.expand == "chevron_right") ? "expand_more" : "chevron_right";

    this.setState({
      role: role,
      expand: expand
    });
  }


  render() {

    return (
      <div className="sidebar" >
      {this.props.children}
      </div>

    );
  }
}
