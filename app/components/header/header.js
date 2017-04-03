import React, { Component } from 'react';
import DropDownMenuItem from './dropdownMenuItem.js';
import './header.scss';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { visibility: "hidden", toggleClass: "main" };

  }
  handelDropdown() {
    if (this.state.visibility == "hidden") {
      this.setState({ visibility: "visible" });
    }
    else {
      this.setState({ visibility: "hidden" });
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

  render() {
    var { user, logo, headerClass } = this.props;

    return (
      <div className="navbar">
        <i className="navbar-brand material-icons" onClick={this.renderSidebar.bind(this)}>menu</i>
        <a className="navbar-brand" href="#">Heading</a>

        <ul className="userProfile">

          <li className="user" >
            <button className="drop" onClick={this.handelDropdown.bind(this)}>
              <img className="userImage" src="./images/user.png" />
              <text style={{fontSize:"10"}}>Bill</text>
             <span className="glyphicon glyphicon-triangle-bottom"></span>
            </button>
          </li>
        </ul>

        <DropDownMenuItem visibility={this.state.visibility} />

      </div>

    );
  }
}
