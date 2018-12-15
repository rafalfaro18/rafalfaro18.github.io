import React from 'react';
import { withNamespaces } from 'react-i18next';

const hrStyle = {
    borderColor: '#000'
};

const profileImage = require('./assets/img/rafael_alfaro.jpg');

function Profile({ t }) {
      return (
        <div className="pt-4 pb-4 container-fluid rar-profile-component">
          <div className="text-center row">
            <h2 className="w-100">{t('ProfileTitle')}</h2>
            <p className="w-100">I'm a Web Systems Engineer</p>
          </div>
          <div className="row">
            <div className="col-8 offset-2">
              <hr style={hrStyle} className="w-100"/>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-3 offset-md-2 col-sm-12 text-center">
              <img alt="" className="img-fluid rounded-circle" src={profileImage} />
            </div>
            <div className="text-center col-md-5">
              <h4 className="w-100">About Me</h4>
              <p className="w-100">I’m a web systems engineer and WordPress Enthusiast. I’m Costa Rican but I’m also fluent in english. I’m not the typical geek, i’m outgoing and very social. However I do love video games but also traveling, craft beer and all sorts of food. I like beeing part of interesting and challenging projects that bring out the best of me and my abilities as an engineer.</p>
            </div>
          </div>
          <div className="row">
            <div className="text-center mx-auto mb-4">
              <a className="btn btn-info" rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1nmJ-xjhzjXZ5o7FGsLGMZmVV-dihPPN63EVRm9uvciI/export?format=pdf">Download Resume</a>
            </div>
          </div>  
        </div>
      );
    }
  
  export default withNamespaces()(Profile);