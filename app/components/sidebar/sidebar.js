import React, { Component } from 'react';
import './sidebar.scss';
import { Link } from 'react-router';
import Rout from '../router/router.js';


export default class Sidebar extends Component {


  render() {
    var { list } = this.props;
    console.log('list', list);
    const renderList = list.map((item) => {
      return <Link to={item.text} >{item.text}</Link>
    });
    return (
      <div className="col-sm-3 col-md-3 col-lg-2 sidebar" >
        <div className="navbar-nav">
          <Link to='/'>Index </Link>
          {renderList}
        </div>
      </div>

    );
  }
}
