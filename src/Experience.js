
import React, {Component} from 'react';

const section_color = '#cad2c5';

const divStyle = {
    backgroundColor: section_color
};

const hrStyle = {
    borderColor: '#fff'
};

class Experience extends Component {
    render(){
        return (
        <div className="pt-4 pb-4 container-fluid rar-experience-component" style={divStyle}>
            <div className="text-center row">
                <h2 className="w-100">Experiences</h2>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <hr style={hrStyle} className="w-100"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <h4>Education</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <strong>Universidad Nacional</strong>
                </div>
                <div className="col-md-5 offset-md-1">
                    <strong>Licentiate - Computer Science (Specialization: Web Systems)</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <p>Feb 2015 - Jun 2016</p>
                </div>
                <div className="col-md-5 offset-md-1">
                    <p>Education was web development focused with PHP, HTML, CSS, Javascipt, Ajax, Apache, MySQL, jQuery. During this time in university I specialized in web development. Here I did my thesis project: 'PIEUNA' a Joomla based social network for Universidad Nacional alumni. I also learned about Project Management and Research Design.</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Experience;