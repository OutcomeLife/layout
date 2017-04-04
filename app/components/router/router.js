import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, IndexRoute, hashHistory } from 'react-router';
import { Layout } from '../';
import Body1 from '../dummy/body1.js';
import Body2 from '../dummy/body2.js';
import Body3 from '../dummy/body3.js';
export default class Rout extends Component {
	render() {

		return (
				<Switch>
					<Route exact path="/" component={Body1} />
					<Route path="/body2" component={Body2} />
					<Route path="/body3" component={Body3} />
				</Switch>


		);
	}
}