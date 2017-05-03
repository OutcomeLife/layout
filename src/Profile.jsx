import React, { Component } from "react";
import "./Profile.css";
import axios from "axios";
const BASE_URL = "localhost:3000/admin/realms/genny2/users/";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      data: null,
      error: null,
      firstName: "",
      lastName: "",
      image: "../images/7.jpg"
    };
    // Binding methods to current class
    this.renderUser = this._renderUser.bind(this);
    this.submitUser = this._submitUser.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () =>
        window.kc
          .loadUserInfo()
          .success(user => {
            this.setState({ data: user, fetching: false });
          })
          .error(error => this.setState({ error })),
      1000
    );
    console.log(this.state.data);
  }

  _submitUser() {
    console.log("Submit user reached");
    axios.put(BASE_URL + this.state.sub);
  }

  _renderUser() {
    console.log("function reached");
    console.log(window.kc);
  }

  render() {
    const { fetching, error, data } = this.state;
    return (
      <div className="col-md-5 col-md-offset-3 profile">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <img
          src={this.state.image}
          className="profile-image col-md-offset-5"
          alt="hello"
        />
        <h3 className="profile-h3">NISCHAL GAUTAM</h3>

        <div className="col-md-12 profile-inner">
          {fetching
            ? <p>Loading...</p>
            : error
                ? <p>Error</p>
                : !data
                    ? <p>No data</p>
                    : <form>
                        <div className="input-sep col-md-12">
                          <div className="col-md-4">
                            First Name: {this.renderUser()}
                          </div>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={this.state.data.given_name}
                              onChange={e =>
                                this.setState({
                                  ...data,
                                  given_name: e.target.value
                                })}
                            />
                          </div>
                        </div>
                        <div className="input-sep col-md-12">
                          <div className="col-md-4">
                            Last Name:
                          </div>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={this.state.data.family_name}
                              onChange={e =>
                                this.setState({
                                  ...data,
                                  family_name: e.target.value
                                })}
                            />
                          </div>
                        </div>
                        <div className="input-sep col-md-12">
                          <div className="col-md-4">
                            Email:
                          </div>
                          <div className="col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={this.state.data.email}
                              onChange={e =>
                                this.setState({
                                  ...data,
                                  email: e.target.value
                                })}
                            />
                          </div>
                        </div>

                        <div className="input-sep col-md-12">
                          <div className="col-md-4">
                            Password:
                          </div>
                          <div className="col-md-8">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Type new password"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          {" "}
                          <input
                            type="submit"
                            className="btn btn-primary btn-block profile-btn"
                            value="SUBMIT"
                            onSubmit={this.submitUser}
                          />
                          {" "}
                        </div>
                      </form>}
        </div>
      </div>
    );
  }
}

export default Profile;
