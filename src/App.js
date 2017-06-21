import React, { Component } from 'react';
import { Header, Body, Sidebar, Content, Footer, Table } from 'genny-components';
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
		// this.props.actions.UserActions.config();
	}

	componentWillReceiveProps(props) {
		// if(Object.keys(props.user.config).length !== 0 && (this.state.initialised === false)) {
		// 	this.setState({
		// 		initialised: true
		// 	})
		// 	props.actions.UserActions.init(props.user.config);
		// }
	}

	message() {
		if (this.props.vertx.messageFromServer !== null) {
			const code = JSON.stringify(this.props.vertx.messageFromServer.data.data[0].code);
			return (code === "\"GRP_CONTACTS\"") ? <Table /> : code;
		}
	}

	render() {

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

		return (
			<div className="default">
				<Header logo={logo} user={user} dropdownListItem={dropdownListItem} />
				<Body >
					<Sidebar>
						{baseEntity}
					</Sidebar>
					<Content>
						{this.message()}
						{JSON.stringify(this.props.setup.config)}
						<button onClick={() => this.props.BaseEntity.load()} >Get Content </button>
						<button onClick={() => this.props.Setup.config()} >Get Config </button>
						
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
