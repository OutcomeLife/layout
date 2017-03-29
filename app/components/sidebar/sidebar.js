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
      <div className="col-sm-3 col-md-3 col-lg-2 sidebar" >
        <div className="navbar-nav">
          {/*<NavLink to='/' activeClassName="active" exact>Index </NavLink>
          <NavLink to='/body1' activeClassName="active" exact>Page 1 </NavLink>*/}
          {renderList}
        </div>
      </div>

    );
  }
}
