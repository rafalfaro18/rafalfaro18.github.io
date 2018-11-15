import React, { Component } from 'react';

const imgMyimageexample = require('./assets/img/ilya-pavlov-87438.jpg');
const divStyle = {
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center'
};

const hrPaddingX = 35;

const hrStyle = {
  borderColor: 'white',
  marginLeft: `${hrPaddingX}%`,
  marginRight: `${hrPaddingX}%`,
};

const overlayStyle = {
  backgroundColor : '#00000096'
};

class Header extends Component {
    render() {
      return (
        <div className="container-fluid p-0 h-100 rar-header-component" style={divStyle}>
          <div className="rar-bg-overlay h-100 d-flex" style={overlayStyle}>
            <div className="jumbotron jumbotron-fluid bg-transparent my-auto w-100">
              <h1 className="display-4 text-white text-center">
                Rafael Alfaro
                <hr style={hrStyle}/>
                Resume
              </h1>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Header;