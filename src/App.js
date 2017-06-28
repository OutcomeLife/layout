import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer, ButtonThick } from 'genny-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BaseEntity from "./actions/baseEntityActions";
import * as VertxActions from "./actions/vertxAction";
import * as Setup from './actions/setupActions';
import * as Auth from './actions/authActions';
import './style.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			initialised: false,
		};
		this._account = this._account.bind(this);
		this._logout = this._logout.bind(this);
	}


	_account() {
		this.props.Auth.account();
	}

	_logout() {
		this.props.Auth.logout();
	}
	componentWillMount() {
		//  this.props.actions.UserActions.config();


	}

	componentWillReceiveProps(props) {
		// if(Object.keys(props.user.config).length !== 0 && (this.state.initialised === false)) {
		// 	this.setState({
		// 		initialised: true
		// 	})
		// 	props.actions.UserActions.init(props.user.config);
		// }
	}
	componentDidMount() {
		this.props.VertxActions.receiveMessage();
	}

	changeLayout(e, code) {
		this.props.VertxActions.sendEvent(code, code);
	}

	data_message() {
		const { messageFromServer } = this.props.vertx;
		if (messageFromServer !== null) {
			return JSON.parse(messageFromServer).code
		} else {
			return "Layout3";
		}
	}
	cmd_message() {

		const { messageFromServer } = this.props.vertx;
		if(messageFromServer !== null ) {
			if (messageFromServer.cmd_type === 'CMD_LAYOUT') {
				return JSON.parse(messageFromServer).code
			} else if (messageFromServer.cmd_type === 'CMD_REDIRECT') {
				//execute command
				const redirectUrl = messageFromServer.redirect_url;
				this.props.Auth.redirectUrl();
			} else if (messageFromServer.cmd_type === 'CMD_LOGOUT'){
				this.props.Auth.logout();
			} else {
				//erro handling display error react compon
			}
		
		}
	}

	layout() {

		const { user, logo } = this.props.setup;
		const { baseEntities } = this.props.baseEntity;
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
		];

		const baseEntity = baseEntities.map((baseEntity) => {
			const { id, code } = baseEntity;
			return (
				<a key={id} style={{ cursor: "pointer" }} onClick={() => this.props.VertxActions.sendEvent(id, code)} >
					<i className="material-icons arrow" key={id}>keyboard_arrow_right</i> {baseEntity.name}
				</a>
			);
		});

		const layout = this.data_message();
		let theme = "default";
		let themeName = null;
		switch(layout) {
			case "Layout1":
				theme = "default";
				themeName = "Layout 1"
				break;
			case "Layout2":
				theme = "cyan";
				themeName = "Layout 2"
				break;				
			case "Layout3":
				theme = "blue";
				themeName = "Layout 3"
				break;				
			default:
				theme = "default";
				themeName = "Layout 1"
				break;				
		}
			return (
				<div className={theme}>
					<Header logo={logo} user={user} dropdownListItem={dropdownListItem} />
					<Body >
						<Sidebar>
							{themeName}
						{baseEntity}
						</Sidebar>
						<Content>
							<ButtonThick label="Layout 1" code="Layout1" icon="android" onClick={(e) => this.changeLayout(e, "Layout1")} />
							<ButtonThick label="Layout 2" code="Layout2" icon="android" onClick={(e) => this.changeLayout(e, "Layout2")} />
							<ButtonThick label="Layout 3" code="Layout3" icon="android" onClick={(e) => this.changeLayout(e, "Layout3")} />
							<ButtonThick label="Random Button" code="Random" icon="android" onClick={(e) => this.changeLayout(e, "Random ")} />

						</Content>
					</Body>
					<Footer >
						<h1> {themeName} </h1>
					</Footer>
				</div>);
	}

	render() {
		return (
			<div>
				{this.layout()}
				{this.cmd_message()}
			</div>
		);
	}
}

const mapStateToProps = (store, props) => {
	return {
		baseEntity: store.baseEntity,
		vertx: store.vertx,
		setup: store.setup,
		auth: store.auth
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		BaseEntity: bindActionCreators(BaseEntity, dispatch),
		VertxActions: bindActionCreators(VertxActions, dispatch),
		Setup: bindActionCreators(Setup, dispatch),
		Auth: bindActionCreators(Auth, dispatch)
	};


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
