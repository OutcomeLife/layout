import React, { Component } from 'react';
import DropDownMenuItem from './dropdown';
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


        <form className="navbar-form navbar-left" style={{ marginTop: "4px", marginLeft: "20px" }}>
          <div className="input-group add-on">
            <input className="form-control" placeholder="Search" type="text" />
            <div className="input-group-btn">
              <button className="btn btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i></button>
            </div>
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right" >
          <button className="badge1" data-badge="6" style={{marginTop:"9px",marginRight:"30px"}}>
            <i className="material-icons" style={{color:"teal"}}>email</i>
          </button>

            <button className="badge2" data-badge="6" style={{marginTop:"9px",marginRight:"30px"}}>
            <i className="material-icons" style={{color:"teal"}}>notifications_none</i>
          </button>
            <span className="userProfile">
              <li className="user" >
                <button className="drop" onClick={this.handelDropdown.bind(this)}>
                  <img className="userImage" src="./images/user.png" />
                  <text style={{ fontSize: "10" }}>Bill</text>
                  <span className="glyphicon glyphicon-triangle-bottom"></span>
                </button>
              </li>
            </span>
        </ul>

          <DropDownMenuItem visibility={this.state.visibility} />

      </div>

        );
  }
}
