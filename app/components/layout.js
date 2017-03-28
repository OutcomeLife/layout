import React, {Component} from 'react';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
import Sidebar from './sidebar.js';


export default class Layout extends Component {
renderUser() {
  var user = {
    id: "1",
    username:"pkandel",
    email:"a@a.com"
};
return user;
}

renderList() {
  var list = [{
    id:"1",
    text: "Text",
    logo: "logo"
  },
  {
    id:"2",
  text: "Text2",
  logo: "logo2"
}
];
  return list;
}



  render() {


  var logo = 'company logo';
  var headerClass = 'navbar navbar-default';
  var sidebarClass = 'sidebar';
  var bodyClass = 'bodyClass';
  var footerClass = 'footerClass';

    return (
      <div className="row">
      <Header user={this.renderUser()} logo={logo} headerClass={headerClass}/>
      <Sidebar list={this.renderList()} sidebarClass={sidebarClass}/>
      <Body content="this is body contents" bodyClass={bodyClass}/>
      <Footer content="this is footer contents" footerClass={footerClass}/>
      </div>
    );
  }
}
