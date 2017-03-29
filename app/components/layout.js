import React, { Component } from 'react';
import { Body, Footer, Header, Sidebar } from './';




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
        <Header user={this.getUser()} logo={logo} headerClass={headerClass} />
        <Sidebar list={this.getList()} sidebarClass={sidebarClass} />
            {this.props.children}
        <Footer content='some text' footerClass={footerClass} />
      </div>
    );
  }
}
