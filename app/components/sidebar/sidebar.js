import React, { Component } from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import Rout from '../router/router.js';


export default class Sidebar extends Component {


  render() {
    var { list } = this.props;

    // const renderList = list.map((item) => {
    //   return <Link activeStyle={{color:'red'}} to={item.text} >{item.text}</Link>
    // });
    return (
      <div className="sidebar" >
        {/*{renderList}*/}
        <NavLink exact activeClassName="active" to='/'>Role
        
            <i className="material-icons">person_outline</i>

        </NavLink>
          <span className="divider"></span>
        <NavLink activeClassName='active' to='/body2'>Message

            <i className="material-icons" >message</i>

        </NavLink>
          <span className="divider"></span>
        <NavLink activeClassName='active' to='/body3'>Contact

            <i className="material-icons">contact_phone</i>

        </NavLink>
          <span className="divider"></span>
        <NavLink activeClassName='active' to='/body4'>Admin

            <i className="material-icons">people_outline</i>

        </NavLink>
          <span className="divider"></span>

      </div>

    );
  }
}
