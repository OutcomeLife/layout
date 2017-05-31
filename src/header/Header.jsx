import React, { Component } from 'react';
import './header.css';
import Dropdown from './dropdown';

export default class Header extends Component {

  constructor() {
    super();
    this.state = ({
      showSidebar: true
    });

    this._renderSidebar = this._renderSidebar.bind(this);
  }

  _renderSidebar() {
    const { showSidebar } = this.state;
    if (showSidebar === true) {
      document.getElementById('sidebar').style.width = "0";
      document.getElementById('content').style.marginLeft = "0";
      this.setState({ showSidebar: false });
    }
    else {
      document.getElementById('sidebar').style.width = "200px";
      document.getElementById('content').style.marginLeft = "200px";
      this.setState({ showSidebar: true });
    }
  }


  render() {
    var { user, logo, dropdownListItem} = this.props;
    (user === undefined) ? user = { image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png', name: 'prakash' } : user;
    (logo === undefined) ? logo = "logo" : logo;

    return (

      <div className="navbar">
        <div className="navbar-brand" >
          <table className="navbar-brand">
            <tbody>
            <tr>
              <td> <i className="material-icons" onClick={this._renderSidebar}> menu</i></td>
              <td> <a className="logo">{logo}</a></td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="navbar-right" >
          <Dropdown user={user} dropdownListItem={dropdownListItem} />
        </div>
      </div >


    );
  }
}
