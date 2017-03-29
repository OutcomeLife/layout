import React, { Component } from 'react';

export default class Layout extends Component {
  getUser() {
    var user = {
      id: "1",
      username: "pkandel",
      email: "a@a.com"
    };
    return user;
  }

  getList() {
    var list = [
    {
      id: "2",
      text: "body2",
      logo: "logo2"
    },
      {
      id: "3",
      text: "body3",
      logo: "logo2"
    }
    ];
    return list
  }

  render() {
    console.log(this.props);

    var logo = 'company logo';
    var headerClass = 'navbar navbar-default';
    var sidebarClass = 'sidebar';
    var bodyClass = 'bodyClass';
    var footerClass = 'footerClass';
    const themeClass = 'jobby';

    return (
      <div className={`row ${themeClass}`}>
        
        <h2>Layout</h2>
            {this.props.children}
      </div>
    );
  }
}
