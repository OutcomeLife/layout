import React, { Component } from 'react';
import { DropDownMenuItem, EmailDropdown, NotificationDropdown }from './dropdown';
import './header.css';
import autoBind from 'react-autobind';

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
    
    if (this.state.visibility === "hidden") {
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
    if (document.getElementById("main").className === "main") {

      document.getElementById("main").className = "toggleMenu";
    }
    else {
      document.getElementById("main").className = "main";
    }
  }
  renderEmail() {
    if (this.state.Email === "hidden") {
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
    if (this.state.Notification === "hidden") {
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
    if (this.state.Email === "visible") {
      this.setState({
        Email: "hidden"
      });
    }
    if (this.state.Notification === "visible") {
      this.setState({
        Notification: "hidden"
      });
    }
    if (this.state.visibility === "visible") {
      this.setState({
        visibility: "hidden"
      });
    }
  }

  render() {
    var { user, logo} = this.props;
    if(user === undefined) {
      user = {
        image: './Images/user.png',
        name: 'sam'
      }
    }
    if(logo === undefined) {
      logo = "logo"
    }

    return (

      <div className="navbar">
        <i className="navbar-brand material-icons" onClick={this.renderSidebar.bind(this)}>menu</i>
        <a className="navbar-brand" href="#">{logo}</a>

        <ul className="nav navbar-nav navbar-right" >
          <button className="badge1" data-badge="6" style={{ marginTop: "9px", marginRight: "30px" }}
            onClick={this.renderEmail} 
            onBlur={this.collapse}
            /*onMouseEnter={this.renderEmail}
            onMouseLeave={this.collapse}*/
            >
            <i className="material-icons" >mail_outline</i>
          </button>

          <button className="badge2" data-badge="6" style={{ marginTop: "9px", marginRight: "30px" }}
            onClick={this.renderNotification}
            onBlur={this.collapse}
            >
            <i className="material-icons" >notifications_none</i>
          </button>

          <span className="userProfile">
            <li className="user" >
              <button className="drop" onClick={this.renderDropdown} onBlur={this.collapse}>
                <img className="userImage" src={user.image} />
                <text style={{ fontSize: "15px" }}>{user.name}</text>
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
