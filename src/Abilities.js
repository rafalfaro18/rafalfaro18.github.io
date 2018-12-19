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
            <p>HTML & HTML5 <Rating count="5"/></p>
            <p>Javascript, Jquery & JSON <Rating count="5"/></p>
            <p>CSS & CSS3 <Rating count="5"/></p>
            <p>Bootstrap <Rating count="5"/></p>
            <p>Joomla <Rating count="5"/></p>
            <p>Node JS <Rating count="4"/></p>
            <p>C++ <Rating count="4"/></p>
            <p>Website Malware Removal <Rating count="4"/></p>
            <p>Java <Rating count="4"/></p>
            <p>C# <Rating count="4"/></p>
          </div>
          <div className="col-md-12 col-lg-4">
            <p>Networking & DevOps <Rating count="4"/></p>
            <p>AWS EC2 <Rating count="4"/></p>
            <p>Game Development <Rating count="4"/></p>
            <p>Test Automation <Rating count="4"/></p>
            <p>SQL Server & MySQL <Rating count="4"/></p>
            <p>Continuous Integration/Delivery <Rating count="3"/></p>
            <p>NoSQL (Mongo, Firebase) <Rating count="3"/></p>
            <p>Photo, Video & Audio Editing <Rating count="3"/></p>
            <p>Scrum <Rating count="3"/></p>
            <p>Laravel <Rating count="3"/></p>
            <p>Drupal <Rating count="3"/></p>
            <p>Visual Basic <Rating count="2"/></p>
            <p>SEO <Rating count="2"/></p>
            <p>.NET <Rating count="1"/></p>
          </div>
        </div>
        <div className="row">
          <div className="text-center mx-auto mt-4 mb-4">
            <a className="btn btn-info" rel="noopener noreferrer" target="_blank" href="https://github.com/rafalfaro18">GitHub Profile</a>
          </div>
        </div> 
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <h4>Languages</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4 offset-lg-2">
            <p>English <Rating count="5"/></p>
            <p>Spanish (Native) <Rating count="5"/></p>
          </div>
          <div className="col-md-12 col-lg-4">
            <p>Costa Rican Sign Language (LESCO) <Rating count="4"/></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <h4>Tools</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4 offset-lg-2">
            <p>Windows & MS Office <Rating count="5" /></p>
            <p>Git & Git Flow <Rating count="5" /></p>
            <p>Lando <Rating count="5" /></p>
            <p>MacOS <Rating count="5" /></p>
            <p>Photoshop & Gimp <Rating count="5" /></p>
            <p>PHPCS <Rating count="5" /></p>
            <p>Docker <Rating count="4" /></p>
            <p>Premiere <Rating count="4" /></p>
            <p>PHP Storm <Rating count="4" /></p>
          </div>
          <div className="col-md-12 col-lg-4">
            <p>Visual Studio & Code <Rating count="4" /></p>
            <p>Jira <Rating count="3" /></p>
            <p>Jenkins <Rating count="3" /></p>
            <p>Selenium <Rating count="3" /></p>
            <p>Puppeteer <Rating count="3" /></p>
            <p>Maya <Rating count="3" /></p>
            <p>Unity <Rating count="3" /></p>
            <p>Illustrator & Inkscape <Rating count="3" /></p>
            <p>Netbeans <Rating count="3" /></p>
          </div>
        </div>
      </div>
    );
  }

  
  export default withNamespaces()(Abilities);