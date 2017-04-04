import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Routes } from '../';
import { Content, Footer, Header, Sidebar } from '../';

import './layout.scss';

class Layout extends Component {
  // dummy data to test
  //This information comes from the backend
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
  // dummy data to test End
  //This information comes from the backend End

  render() {

    var logo = 'company logo';
    //This will come from preference setting of theme
    const themeClass = 'intern';

    return (
       // {/* we can pass the different theme according to the user choice and define different stylesheet */}
      // {/* according to the theme  */}
       
      <div className={`body ${themeClass}`}>
        <Header user={this.getUser()} logo={logo} />
        <div id="main" className="main">
          <Sidebar list={this.getList()} />

          <div className="content">
            <Routes />
          </div>

        </div>
        <Footer>
          Outcome-Hub
        </Footer>
      </div>
    );
  }
}

export default Layout;
