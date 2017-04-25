import React, { Component } from 'react';
import './header.css';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Header extends Component {


  renderSidebar() {
    var element = document.getElementById('sidebar'),
    style = window.getComputedStyle(element),
    width = style.getPropertyValue('width');
    var sidebarWidht = width.slice(0, -2);

    if( sidebarWidht > 0 ) {
    document.getElementById('sidebar').style.width = "0";
    document.getElementById('content').style.marginLeft = "0";
  }
  else {
     document.getElementById('sidebar').style.width = "200px";
    document.getElementById('content').style.marginLeft = "200px";
  }

}


  _logout (e) {

     //for production
      this.props.keycloak.logout({redirectUri:"https://genny.outcome-hub.com/"});
    //for local development
    // this.props.keycloak.logout({redirectUri:"http://localhost:3000/"});
    this.props.keycloak.loadUserProfile().success((user) => console.log(user));
     e.preventDefault();
    
  }


  render() {
    var { user, logo,keycloak } = this.props;
    if (user === undefined) {
      user = {
        image: './Images/user.png',
        name: 'sam'
      }
    }
    if (logo === undefined) {
      logo = "logo"
    }

    return (

      <div className="navbar">
        <i className="navbar-brand material-icons" onClick={this.renderSidebar.bind(this)}>menu</i>
        <a className="navbar-brand" href="#">{logo}</a>

        <ul className="nav navbar-nav navbar-right" >
    
            <DropdownButton className="badge1" data-badge="6" title={<i  className="material-icons" >mail_outline</i>} style={{height:"40px",marginTop: "-4px",background:"none", border:"none"}} id="1" >
            <MenuItem  href="email">Email</MenuItem>

            </DropdownButton>

            <DropdownButton  className="badge2" data-badge="6" title={<i  className="material-icons" >notifications_none</i>} style={{marginTop:"-4px",height:"40px",background:"none", border:"none"}} id="2" > 
            <MenuItem  href="notification">Notification</MenuItem>

            </DropdownButton>

      <span className="userProfile">
        <li className="user" >
          <DropdownButton  className="drop"  title={ <div className="displayUser"><img className="userImage" src={user.image} alt="user profile" /><text style={{ fontSize: "15px" }}>{user.name}</text><span className="glyphicon glyphicon-triangle-bottom"></span></div>} style={{marginTop:"-4px",height:"40px",background:"none", border:"none"}} id="3">

              <MenuItem href="profile">
              profile
              <i className="material-icons" style={{ fontSize: "18px", float: "right",paddingRight: "5px" }}>person_outline</i>
              </MenuItem>
              <span className="divider"></span>
            <MenuItem href="setting">
              setting
              <i className="material-icons" style={{ fontSize: "18px", float: "right",paddingRight: "5px" }}>settings</i>
              </MenuItem>
              <span className="divider"></span>
                 <MenuItem href="logout" onClick={this._logout.bind(this)}>      
              logout
              <i className="material-icons" style={{ fontSize: "18px", float: "right",paddingRight: "5px" }}>exit_to_app</i>
              </MenuItem>

            </DropdownButton>

        </li>
      </span>
        </ul >

      </div >

    );
  }
}
