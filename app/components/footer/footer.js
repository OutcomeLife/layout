import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {

  render() {


    return (
      <div className="footer col-xs-12 col-sm-12 col-md-12 col-lg-12">
        {this.props.content}
      </div>

    );
  }
}
