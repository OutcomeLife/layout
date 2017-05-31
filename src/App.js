import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer } from 'layout';
// import Keycloak from 'keycloak-js';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from "./actions/UserAction";

class App extends Component {

	constructor() {
		super();
		this.state={
			initialised: false
		}
		// this._getContent = this._getContent.bind(this);
		this._account = this._account.bind(this);
    this._logout = this._logout.bind(this);

	}



  _account() {
  this.props.user.keycloak.accountManagement();
  }

  _logout() {

		if(process.env.NODE_ENV === "development") {
   this.props.user.keycloak.logout({ redirectUri: "http://localhost:3000/" });
  }
	else {
		 this.props.user.keycloak.logout({ redirectUri: "https://genny.outcome-hub.com/" });
	}

	}
componentWillMount() {
	this.props.actions.UserActions.config();
}

componentWillReceiveProps(props) {
	if(Object.keys(props.user.config).length != 0 && (this.state.initialised === false)) {
		this.setState({
			initialised: true
		})
		props.actions.UserActions.init(props.user.config);
	}
}

	render() {
		var { keycloak, user, logo } = this.props.user;
		console.log("user", user);
	
		const dropdownListItem = [
      {
        name: "account",
        onClick: this._account,
        icon: "settings"
      },
      {
        name: "logout",
        onClick: this._logout,
        icon: "exit_to_app"
      }
    ]
		return (
			<div className="default">
				<Header logo={logo} user={user} dropdownListItem={dropdownListItem} />
				<Body >
					<Sidebar>

					</Sidebar>
					<Content>
						<button onClick={this._getContent}>Get Content </button>
					</Content>
				</Body>
			<Footer >
					{/*Version No:{this.state.config.REACT_APP_VERSION_NUMBER} ||| Build Date: {this.state.config.REACT_APP_BUILD_DATE}*/}
				</Footer>
			</div>
		);
	}

}

const mapStateToProps = (store, props) => {
    return {
       user: store.user,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      actions: {
         UserActions: bindActionCreators(UserActions, dispatch),
      }
    };
      
    
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

