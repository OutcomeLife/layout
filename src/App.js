import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, ButtonThick } from 'genny-components';
import { VerticleLayout} from './components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BaseEntity from "./actions/baseEntityActions";
import * as VertxActions from "./actions/vertxAction";
import * as SetupActions from './actions/setupActions';
import * as AuthActions from './actions/authActions';
import * as eventType from './utils/eventType';
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
	componentWillMount() {
		//console.log("started connection");
		//this.props.VertxActions.receiveMessage();
	}
	componentWillReceiveProps(props) {
		props.VertxActions.receiveMessage();
		// props.VertxActions.sendInitialEvent("token");
	}
	componentDidMount() {	
		this.props.SetupActions.config();
		this.props.SetupActions.init(this.props.setup.config);
		// this.props.VertxActions.sendInitialEvent("token");				
	}

	send_event(e,id, code, evtType) {
		this.props.VertxActions.sendEvent(id, code, evtType);
	}
	//this returns a data required for the layout
	receive_data_message() {
		return (<div> <VerticleLayout asks={this.props.vertx.data} onChange={this.props.VertxActions.sendAnswer} /> </div>);
	}
	//this is for getting event from the server
	evt_message() {

	}
	//this returns a layout name
	receive_cmd_message() {
		let { cmd } = this.props.vertx;
		if(cmd !== null ) {
			if (cmd.cmd_type === 'CMD_LAYOUT') {
				return cmd.code;
			} else if (cmd.cmd_type === 'CMD_REDIRECT') {
				const redirectUrl = cmd.redirect_url;
				this.props.AuthActions.redirectUrl(redirectUrl);
			} else if (cmd.cmd_type === 'CMD_LOGOUT'){
				this.props.AuthActions.logout();
			} else {
				//erro handling display error react compon
			}
		
		}
	}
// This will combine data and layout to render in the browser
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
		const layout = this.receive_cmd_message();
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
				theme = "cyan";
				themeName = "Layout 2"
				break;				
		}
		let contentStyle = {
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
						<Content style={contentStyle}>
							<ButtonThick label="Layout 1" code="Layout1" icon="android" onClick={(e) => this.send_event(e, 1, "Layout1", eventType.BUTTON_CLICK)} />
							<ButtonThick label="Layout 2" code="Layout2" icon="android" onClick={(e) => this.send_event(e, 2,  "Layout2", eventType.BUTTON_CLICK)} />
							<ButtonThick label="Layout 3" code="Layout3" icon="android" onClick={(e) => this.send_event(e, 3, "Layout3", eventType.BUTTON_CLICK)} />
							<ButtonThick label="Random Button" code="Random" icon="android" onClick={(e) => this.send_event(e, 4, "Random ", eventType.BUTTON_CLICK)} />
							<ButtonThick label="Redirect Button" code="Redirect" icon="android" onClick={(e) => this.send_event(e, 5 , "Redirect ", eventType.BUTTON_CLICK)} />
							{this.receive_cmd_message()}
						</Content>
					</Body>
				</div>);
	}

	render() {
		return (
			<div> 
				{this.layout()} 
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
