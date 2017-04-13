import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer} from './entry';

class App extends Component {
  render(){
    return (
    	<div className="intern">
    	<Header />
    	<Body >
    		<Sidebar>
    		hello 
    		</Sidebar>
    		<Content>
    		content
    		</Content>
    	</Body>
    	<Footer >
    	</Footer>
    	</div>
    );
  }
}

export default App;
