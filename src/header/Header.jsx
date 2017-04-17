import React, { Component } from 'react';
import './header.css';
import autoBind from 'react-autobind';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Header extends Component {

  constructor(props) {
    super(props);

    autoBind(this);

  }
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
  


  render() {
    var { user, logo } = this.props;
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
          <button className="badge1" data-badge="6" >
            <DropdownButton title={<i  className="material-icons" >mail_outline</i>} style={{height:"40px",marginTop: "-4px",background:"none", border:"none"}}>
            <MenuItem  href="#books">Email</MenuItem>
        
            </DropdownButton>
        </button>
          <button className="badge2" data-badge="6" >
            <DropdownButton title={<i  className="material-icons" >notifications_none</i>} style={{marginTop:"-4px",height:"40px",background:"none", border:"none"}}>
            <MenuItem  href="#books">Notification</MenuItem>
          
            </DropdownButton>
        </button>

      <span className="userProfile">
        <li className="user" >
          <button className="drop" >
          <DropdownButton title={ <div className="displayUser"><img className="userImage" src={user.image} alt="user profile" /><text style={{ fontSize: "15px" }}>{user.name}</text><span className="glyphicon glyphicon-triangle-bottom"></span></div>} style={{marginTop:"-4px",height:"40px",background:"none", border:"none"}}>
              
              <MenuItem href="#podcasts">
              profile
              <i className="material-icons" style={{ fontSize: "18px", float: "right",paddingRight: "5px" }}>person_outline</i>   
              </MenuItem>
              <span className="divider"></span>
            <MenuItem href="#podcasts">
              setting
              <i className="material-icons" style={{ fontSize: "18px", float: "right",paddingRight: "5px" }}>settings</i>   
              </MenuItem>
              <span className="divider"></span>
                 <MenuItem href="#podcasts" onClick={() => {alert("please implement logout")}}>
              logout
              <i className="material-icons" style={{ fontSize: "18px", float: "right",paddingRight: "5px" }}>exit_to_app</i>   
              </MenuItem>
              
            </DropdownButton>
          </button>
        </li>
      </span>
        </ul >

      </div >

    );
  }
}
