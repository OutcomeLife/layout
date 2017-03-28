import React, {Component} from 'react';

export default class DropDownMenuItem extends Component {

renderProfile() {
  alert("please fetch api");
}

  render () {
    var {visibility} = this.props;
    return (
        <div style={{ visibility:visibility}} className="DropDownMenuItem">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>

    );
  }
}
