import React, { Component } from 'react';
import './sidebar.scss';
import { NavLink, Link } from 'react-router-dom';
import Rout from '../router/router.js';


export default class Sidebar extends Component {


  render() {
    var { list } = this.props;

    const renderList = list.map((item) => {
      return <Link to={item.text} >{item.text}</Link>
    });
    return (
      <div className="sidebar" >
        <div className="navbar-nav">
          {renderList}
        </div>
      </div>

    );
  }
}
