import React, { Component } from 'react';

const hrStyle = {
    borderColor: '#000'
};

class Profile extends Component {
    render() {
      return (
        <div className="container-fluid rar-profile-component">
          <div className="text-center row">
            <h2 className="w-100">Profile</h2>
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