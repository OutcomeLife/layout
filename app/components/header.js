import React, {Component} from 'react';
import DropDownMenuItem from './dropdownMenuItem.js';

export default class Header extends Component {

constructor(props) {
  super(props);
  this.state = {visibility: "hidden"};

}
handelDropdown() {
  if(this.state.visibility == "hidden") {
    this.setState({visibility:"visible"});
  }
  else {
    this.setState({visibility: "hidden"});
  }
}


  render() {
    var {user,logo,headerClass} = this.props;

    return (
      <div>
          <nav className={headerClass}>
              <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="#">nav header</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="user" >
                      <button className="drop" onClick={this.handelDropdown.bind(this)}>
                      <img className="userImage" src="./images/user.png" />
                      Bill
                      <span className="glyphicon glyphicon-triangle-bottom"></span>
                      </button>
                    </li>
                </ul>
            </div>
        </nav>
            <DropDownMenuItem visibility={this.state.visibility}/>

      </div>

    );
  }
}
