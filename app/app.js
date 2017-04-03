import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import './styles/app.scss';
import { Routes } from './components';
import { Body, Footer, Header, Sidebar } from './components';

class App extends Component {
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
            <div className="app">
                <Header user={this.getUser()} logo={logo} headerClass={headerClass} />
                <div id="main" className="main">
                <Sidebar list={this.getList()} sidebarClass={sidebarClass} />

                <div className="rightPane2">
                    <Routes />
                </div>

                </div>
                <Footer content='some text' footerClass={footerClass} />
            </div>
        );
    }
}

export default App;
