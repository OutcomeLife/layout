import React, { Component } from 'react';
import DropDownMenuItem from './dropdown';
import EmailDropdown from './dropdown/emailDropdown.js';
import NotificationDropdown from './dropdown/notificationDropdown.js';

import autoBind from 'react-autobind';
import './header.scss';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: "hidden",
      toggleClass: "main",
      Notification: "hidden",
      Email: "hidden"
    };

    autoBind(this);

  }

  renderDropdown() {
    
    if (this.state.visibility == "hidden") {
      this.setState({
        visibility: "visible"
      });
    }
    else {
      this.setState({
        visibility: "hidden"
      });
    }
  }
  renderSidebar() {
    if (document.getElementById("main").className == "main") {

      document.getElementById("main").className = "toggleMenu";
    }
    else {
      document.getElementById("main").className = "main";
    }
  }
  renderEmail() {
    if (this.state.Email == "hidden") {
      this.setState({
        Email: "visible"
      });
    }
    else {
      this.setState({
        Email: "hidden"
      });
    }
  }
  renderNotification() {
    if (this.state.Notification == "hidden") {
      this.setState({
        Notification: "visible"
      });
    }
    else {
      this.setState({
        Notification: "hidden"
      });
    }

  }
  collapse () {
    if (this.state.Email == "visible") {
      this.setState({
        Email: "hidden"
      });
    }
    if (this.state.Notification == "visible") {
      this.setState({
        Notification: "hidden"
      });
    }
    if (this.state.visibility == "visible") {
      this.setState({
        visibility: "hidden"
      });
    }
  }

  render() {
    var { user, logo, headerClass } = this.props;

    return (
      <div className="navbar">
        <i className="navbar-brand material-icons" onClick={this.renderSidebar.bind(this)}>menu</i>
        <a className="navbar-brand" href="#">Heading</a>


        <form className="navbar-form navbar-left" style={{ marginTop: "4px", marginLeft: "20px" }}>
          <div className="input-group add-on">
            <input className="form-control" placeholder="Search" type="text" />
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right" >
          <button className="badge1" data-badge="6" style={{ marginTop: "9px", marginRight: "30px" }}
            onClick={this.renderEmail} 
            onBlur={this.collapse}
            /*onMouseEnter={this.renderEmail}
            onMouseLeave={this.collapse}*/
            >
            <i className="material-icons" style={{ color: "teal" }}>mail_outline</i>
          </button>

          <button className="badge2" data-badge="6" style={{ marginTop: "9px", marginRight: "30px" }}
            onClick={this.renderNotification}
            onBlur={this.collapse}
            >
            <i className="material-icons" style={{ color: "teal" }}>notifications_none</i>
          </button>

          <span className="userProfile">
            <li className="user" >
              <button className="drop" onClick={this.renderDropdown} onBlur={this.collapse}>
                <img className="userImage" src="./images/user.png" />
                <text style={{ fontSize: "15" }}>Bill</text>
                <span className="glyphicon glyphicon-triangle-bottom"></span>
              </button>
            </li>
          </span>
        </ul>
        <EmailDropdown visibility={this.state.Email} />
        <NotificationDropdown visibility={this.state.Notification} />
        <DropDownMenuItem visibility={this.state.visibility} />

      </div>

    );
  }
}
