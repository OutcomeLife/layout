import React, {Component} from 'react';
import './Profile.css';
import Keycloak from 'keycloak-js';


class Profile extends Component{
  constructor(props){
    super(props)

  }


renderUser= ()=>{
    console.log("Hi there");
    const kc = Keycloak(process.env.REACT_APP_KEYCLOAK_JSON_FILE);
    kc.loadUserInfo().success((user)=>{
      console.log(user);
    }).error(function(er){
      console.log(err);
    })

  }
    render(){
      return(
        <div className="col-md-4 col-md-offset-3 profile">
          <h3 className="profile-h3">NISCHAL GAUTAM</h3>

          <div className="col-md-12 profile-inner">

            <form>
              <div className="input-sep col-md-12">
                <div className="col-md-4">
                  {this.renderUser()}
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control"/>
                </div>
              </div>

              <div className="input-sep col-md-12">
                <div className="col-md-4">
                  Last Name:
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control"/>
                </div>
              </div>

              <div className="input-sep col-md-12">
                <div className="col-md-4">
                  Password:
                </div>
                <div className="col-md-8">
                  <input type="password" className="form-control" placeholder="Type new password"/>
                </div>
              </div>

              <div className="col-md-12"> <input type="submit" className="btn btn-primary btn-block profile-btn" value="SUBMIT"/>  </div>
              </form>

          </div>
        </div>

      )
    }


}



export default Profile;
