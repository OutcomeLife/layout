import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from '../layout.js';
import Body1 from '../body1.js';
import Body2 from '../body2.js';
import Body3 from '../body3.js';
export default class Rout extends Component {
	render() {
		console.log("something");
		return (
			<Router >
			    <Route path="/" component={Layout}>
				      {/*<IndexRoute component={Body1} />
				      <Route path="body2" component={Body2} />
				      <Route path="body3" component={Body3} />*/}
    			</Route>
  			</Router>
  );
	}
}