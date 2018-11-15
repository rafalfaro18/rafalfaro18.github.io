
import React, {Component} from 'react';

const section_color = '#cad2c5';

const divStyle = {
    backgroundColor: section_color
};

class Experience extends Component {
    render(){
        return (
        <div className="container-fluid rar-experience-component" style={divStyle}>
            <p>This is the experience section</p>
            <br/>
        </div>
        );
    }
}

export default Experience;