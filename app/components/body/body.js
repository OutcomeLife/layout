import React, { Component } from 'react';
import './body.scss';
export default class Body extends Component {

  render() {


    return (
      <div className="col-sm-9 col-md-9 col-lg-10">
        {this.props.children}
      </div>

    );
  }
}
