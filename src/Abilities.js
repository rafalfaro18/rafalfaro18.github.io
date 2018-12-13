import React, { Component } from 'react';

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
          <div className="text-center row">
            <p className="w-100">Coming Soon...</p>
          </div>
        </div>
      );
    }
  }
  
  export default Abilities;