import React, { Component } from 'react';
import Rating from './Rating';

const hrStyle = {
  borderColor: '#000'
};

class Abilities extends Component {
    render() {
      return (
        <div className="pt-4 pb-4 container-fluid rar-abilities-component">
          <div className="text-center row">
            <h2 className="w-100">Abilities</h2>
          </div>
          <div className="row">
            <div className="col-8 offset-2">
                <hr style={hrStyle} className="w-100"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 offset-md-2">
              <h4>Skills</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <p>Linux <Rating count="5"/></p>
              <p>Web Development <Rating count="5"/></p>
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
            <div className="col-md-4">
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
        </div>
      );
    }
  }
  
  export default Abilities;