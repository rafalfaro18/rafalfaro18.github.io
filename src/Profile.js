import React, { Component } from 'react';

const hrStyle = {
    borderColor: '#000'
};

const profileImage = require('./assets/img/rafael_alfaro.jpg');

class Profile extends Component {
    render() {
      return (
        <div className="container-fluid rar-profile-component">
          <div className="text-center row">
            <h2 className="w-100">Profile</h2>
            <p className="w-100">I'm a Web Systems Engineer</p>
          </div>
          <div className="row">
            <div className="col-8 offset-2">
                <hr style={hrStyle} className="w-100"/>
            </div>
          </div>  
        </div>
      );
    }
  }
  
  export default Profile;