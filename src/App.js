import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer} from './entry';

class App extends Component {
  constructor() {
    super();
}

  render(){

    return (
    	<div className="intern">
    	<Header />
    	<Body >
    		<Sidebar>

					<a href="#" >Roles </a>

					<a href="#" >Message </a>

					<a href="#" >Contact </a>

					<a href="#" >Admin </a>


    		</Sidebar>
    		<Content>
    		content
    		</Content>
    	</Body>*/}
    	<Footer >
        Version No:{process.env.REACT_APP_VERSION_NUMBER} ||| Build Date: {process.env.REACT_APP_BUILD_DATE}
    	</Footer>
    	</div>
    );
    }
  }

export default App;
