
import React, {Component} from 'react';

const section_color = '#cad2c5';

const divStyle = {
    backgroundColor: section_color
};

class Projects extends Component {
    render(){
        return (
        <div className="container-fluid rar-projects-component" style={divStyle}>
            <p>This is the projects section</p>
            <br/>
        </div>
        );
    }
}

export default Projects;