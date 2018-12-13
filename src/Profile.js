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
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <img alt="" className="img-fluid rounded-circle" src={profileImage} />
            </div>
            <div className="text-center col-md-5">
              <h4 className="w-100">About Me</h4>
              <p className="w-100">I’m a web systems engineer and WordPress Enthusiast. I’m Costa Rican but I’m also fluent in english. I’m not the typical geek, i’m outgoing and very social. However I do love video games but also traveling, craft beer and all sorts of food. I like beeing part of interesting and challenging projects that bring out the best of me and my abilities as an engineer.</p>
            </div>
          </div>  
        </div>
      );
    }
  }
  
  export default Profile;