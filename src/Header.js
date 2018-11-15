import React, { Component } from 'react';

const imgMyimageexample = require('./assets/img/ilya-pavlov-87438.jpg');
const divStyle = {
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center'
};

class Header extends Component {
    render() {
      return (
        <div className="container-fluid h-100 d-flex" style={divStyle}>
          <div className="jumbotron jumbotron-fluid bg-transparent my-auto w-100">
            <h1 className="display-4 text-white text-center">Hello, world!</h1>
          </div>
        </div>
      );
    }
  }
  
  export default Header;