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
  if(document.getElementById("main").className == "main")
  {

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
        <nav className={headerClass}>
          <div className="container-fluid">
            <div className="navbar-header">
              <i className="navbar-brand material-icons" onClick={this.renderSidebar.bind(this)}>menu</i>
              <a className="navbar-brand" href="#">Heading</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="user" >
                <button className="drop" onClick={this.handelDropdown.bind(this)}>
                  <img className="userImage" src="./images/user.png" />
                  Bill
                      <span className="glyphicon glyphicon-triangle-bottom"></span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <DropDownMenuItem visibility={this.state.visibility} />

      </div>

    );
  }
}
