
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
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> Costa Rica</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <strong>Universidad Nacional</strong>
                </div>
                <div className="col-md-5 offset-md-1">
                    <strong>Bachelor - Computer Science</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <p>Feb 2014 - Nov 2014</p>
                </div>
                <div className="col-md-5 offset-md-1">
                    <p>Education was mainly theoretical. However I also did a project for a private school called 'Kid's Land' that involved creating a website with Joomla and a virtual classroom with Moodle. I learned C#, Visual Basic, Python, Linux Servers Administration, Web Development and Educational Applications design.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> Costa Rica</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <strong>Universidad Nacional</strong>
                </div>
                <div className="col-md-5 offset-md-1">
                    <strong>Diploma - Computer Science</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-2">
                    <p>Feb 2010 - Nov 2013</p>
                </div>
                <div className="col-md-5 offset-md-1">
                    <p>Education was mainly C++ based programming but I also learned about HTML, CSS, PHP, MVC, UML, Java, Networking, Database Administration, Linux, Tech Support, Object Oriented Programming, English, Calculus, Linear Algebra, Probability and Statistics, Discrete Mathematics and more.</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> Costa Rica</p>
                </div>
            </div>
        </div>
        );
    }
}

export default Experience;