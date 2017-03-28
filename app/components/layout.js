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
    var list = [{
      id: "1",
      text: "Text",
      logo: "logo"
    },
    {
      id: "2",
      text: "Text2",
      logo: "logo2"
    }
    ];
    return list
  }

  render() {


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
        <Body bodyClass={bodyClass}>
          Hello World
        </Body>
        <Footer content='some text' footerClass={footerClass} />
      </div>
    );
  }
}
