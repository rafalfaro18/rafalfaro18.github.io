import React, { Component } from 'react';

const imgMyimageexample = require('./assets/img/ilya-pavlov-87438.jpg');
const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center'
};

class Header extends Component {
    render() {
      return (
        <div className="cComponent" style={divStyle} >
        </div>
      );
    }
  }
  
  export default Header;