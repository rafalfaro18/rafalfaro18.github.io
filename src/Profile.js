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
            <p className="w-100">{t('Profession')}</p>
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
              <h4 className="w-100">{t('About me')}</h4>
              <p className="w-100">{t('my description')}</p>
              <div className="text-center mx-auto mt-4">
                <a className="btn btn-info" rel="noopener noreferrer" target="_blank" href={t('ResumeURL')}>{t('Download resume')}</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
  export default withNamespaces()(Profile);