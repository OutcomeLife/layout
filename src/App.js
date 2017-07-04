import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, ButtonThick } from 'genny-components';
import { VerticleLayout} from './components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BaseEntity from "./actions/baseEntityActions";
import * as VertxActions from "./actions/vertxAction";
import * as SetupActions from './actions/setupActions';
import * as AuthActions from './actions/authActions';
import './style.css';

class App extends Component {

	constructor() {
		super();
		this._account = this._account.bind(this);
		this._logout = this._logout.bind(this);
	}


	_account() {
		this.props.AuthActions.account();
	}

	_logout() {
		this.props.AuthActions.logout();
	}

	componentDidMount() {
		this.props.VertxActions.receiveMessage();
		this.props.SetupActions.config();
		this.props.SetupActions.init(this.props.setup.config);
	}

	changeLayout(e, code) {
		this.props.VertxActions.sendEvent("1234", code);
	}

	data_message() {
		const { messageFromServer } = this.props.vertx;
		if (messageFromServer !== null) {
		 	return messageFromServer.code
		} else {
			return "Layout3";
		}
	}
	cmd_message() {

		let { messageFromServer } = this.props.vertx;
	
		if(messageFromServer !== null ) {
			if (messageFromServer.cmd_type === 'CMD_LAYOUT') {
				return messageFromServer.code
			} else if (messageFromServer.cmd_type === 'CMD_REDIRECT') {
				//execute command
				//const redirectUrl = messageFromServer.redirect_url;
				const redirectUrl = messageFromServer.code;		
				this.props.AuthActions.redirectUrl(redirectUrl);
			} else if (messageFromServer.cmd_type === 'CMD_LOGOUT'){
				const redirectUrl = messageFromServer.code;
				this.props.AuthActions.redirectUrl(redirectUrl);
				//this.props.AuthActions.logout();
			} else {
				//erro handling display error react compon
			}
		
		}
	}

	verticle_layout() {
		return (<div> <VerticleLayout asks={this.props.vertx.messageFromServer} onChange={this.props.VertxActions.sendAnswer}/> </div>);
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
		let content = {
			backgroundColor: "white",
		}
			return (
				<div className={theme}>
					<Header logo={logo} user={user} dropdownListItem={dropdownListItem} />
					<Body >
						<Sidebar>
							{themeName}
						{baseEntity}
						</Sidebar>
						<Content style={content}>
							<ButtonThick label="Layout 1" code="Layout1" icon="android" onClick={(e) => this.changeLayout(e, "Layout1")} />
							<ButtonThick label="Layout 2" code="Layout2" icon="android" onClick={(e) => this.changeLayout(e, "Layout2")} />
							<ButtonThick label="Layout 3" code="Layout3" icon="android" onClick={(e) => this.changeLayout(e, "Layout3")} />
							<ButtonThick label="Random Button" code="Random" icon="android" onClick={(e) => this.changeLayout(e, "Random ")} />
							<ButtonThick label="Redirect Button" code="Redirect" icon="android" onClick={(e) => this.changeLayout(e, "Redirect ")} />
							{this.verticle_layout()}
 
						</Content>
					</Body>
					{/*<Footer >
						<h1> {themeName} </h1>
					</Footer>*/}
				</div>);
	}

	render() {
		return (
			<div> 
				{/*<ERROR />*/}
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
		SetupActions: bindActionCreators(SetupActions, dispatch),
		AuthActions: bindActionCreators(AuthActions, dispatch)
	};


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
