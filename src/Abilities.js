import React from 'react';
import { withNamespaces } from 'react-i18next';
import Rating from './Rating';

const hrStyle = {
  borderColor: '#000'
};


  function Abilities({ t }) {
    return (
      <div className="pt-4 pb-4 container-fluid rar-abilities-component">
        <div className="text-center row">
          <h2 className="w-100">{t('Abilities')}</h2>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
              <hr style={hrStyle} className="w-100"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <h4>{t('Skills')}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4 offset-lg-2">
            <p>Linux <Rating count="5"/></p>
            <p>{t('Web Development')} <Rating count="5"/></p>
            <p>PHP <Rating count="5"/></p>
            <p>WordPress <Rating count="5"/></p>
            <p>HTML {t('&')} HTML5 <Rating count="5"/></p>
            <p>Javascript, Jquery {t('&')} JSON <Rating count="5"/></p>
            <p>CSS {t('&')} CSS3 <Rating count="5"/></p>
            <p>Bootstrap <Rating count="5"/></p>
            <p>Joomla <Rating count="5"/></p>
            <p>Node JS <Rating count="4"/></p>
            <p>C++ <Rating count="4"/></p>
            <p>{t('Website Malware Removal')} <Rating count="4"/></p>
            <p>Java <Rating count="4"/></p>
            <p>C# <Rating count="4"/></p>
            <p>{t('Networking')} {t('&')} DevOps <Rating count="4"/></p>
          </div>
          <div className="col-md-12 col-lg-4">
            <p>AWS EC2 <Rating count="4"/></p>
            <p>{t('Test Automation')} <Rating count="4"/></p>
            <p>SQL Server {t('&')} MySQL <Rating count="4"/></p>
            <p>React <Rating count="4"/></p>
            <p>{t('Continuous Integration/Delivery')} <Rating count="3"/></p>
            <p>NoSQL (Mongo, Firebase) <Rating count="3"/></p>
            <p>{t('Photo, Video & Audio Editing')} <Rating count="3"/></p>
            <p>Scrum <Rating count="3"/></p>
            <p>Laravel <Rating count="3"/></p>
            <p>Drupal <Rating count="3"/></p>
            <p>{t('Game Development')} <Rating count="3"/></p>
            <p>Visual Basic <Rating count="2"/></p>
            <p>SEO <Rating count="2"/></p>
            <p>Angular <Rating count="2"/></p>
            <p>Python <Rating count="2"/></p>
          </div>
        </div>
        <div className="row">
          <div className="text-center mx-auto mt-4 mb-4">
            <a className="btn btn-info" rel="noopener noreferrer" target="_blank" href="https://github.com/rafalfaro18">{t('GitHub Profile')}</a>
          </div>
        </div> 
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <h4>{t('Languages')}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4 offset-lg-2">
            <p>{t('English')} <Rating count="5"/></p>
            <p>{t('Spanish')} ({t('Native')}) <Rating count="5"/></p>
          </div>
          <div className="col-md-12 col-lg-4">
            <p>{t('Costa Rican Sign Language')} (LESCO) <Rating count="4"/></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <h4>{t('Tools')}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4 offset-lg-2">
            <p>Windows {t('&')} MS Office <Rating count="5" /></p>
            <p>Git {t('&')} Git Flow <Rating count="5" /></p>
            <p>SourceTree <Rating count="5" /></p>
            <p>MacOS <Rating count="5" /></p>
            <p>Photoshop {t('&')} Gimp <Rating count="5" /></p>
            <p>PHPCS <Rating count="5" /></p>
            <p>AWS <Rating count="4" /></p>
            <p>Docker - Kubernetes <Rating count="4" /></p>
            <p>Premiere <Rating count="4" /></p>
          </div>
          <div className="col-md-12 col-lg-4">
            <p>Visual Studio {t('&')} Code <Rating count="4" /></p>
            <p>Jira <Rating count="3" /></p>
            <p>Jenkins <Rating count="3" /></p>
            <p>Selenium <Rating count="3" /></p>
            <p>Puppeteer <Rating count="3" /></p>
            <p>{t('Illustrator & Inkscape')} <Rating count="3" /></p>
            <p>Unity <Rating count="3" /></p>
            <p>Unreal Engine <Rating count="3" /></p>
            <p>Blender <Rating count="2" /></p>
          </div>
        </div>
      </div>
    );
  }

  
  export default withNamespaces()(Abilities);
