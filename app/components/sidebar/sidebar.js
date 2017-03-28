import React, { Component } from 'react';
import './sidebar.scss';


export default class Sidebar extends Component {

  renderList() {

    return list.map((item) => {
      return <li>item.text</li>
    });
  }
  render() {
    var { list } = this.props;

    const renderList = list.map((item) => {
      return <a href="#" key={item.id}>{item.text}</a>
    });
    return (
      <div className="col-sm-3 col-md-3 col-lg-2 sidebar" >
        <div className="navbar-nav">
          {renderList}
        </div>
      </div>

    );
  }
}
