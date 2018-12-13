
import React, {Component} from 'react';

const section_color = '#cad2c5';

const divStyle = {
    backgroundColor: section_color
};

const hrStyle = {
    borderColor: '#fff'
};

class Projects extends Component {
    render(){
        return (
        <div className="container-fluid rar-projects-component" style={divStyle}>
            <div className="text-center row">
                <h2 className="w-100">Projects</h2>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <hr style={hrStyle} className="w-100"/>
                </div>
            </div>
        </div>
        );
    }
}

export default Projects;