
import React from 'react';
import { withNamespaces } from 'react-i18next';

const section_color = '#cad2c5';

const divStyle = {
    backgroundColor: section_color
};

const hrStyle = {
    borderColor: '#fff'
};


function Experience({ t }){
    return (
    <div className="pt-4 pb-4 container-fluid rar-experience-component" style={divStyle}>
        <div className="text-center row">
            <h2 className="w-100">{t('Experiences')}</h2>
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
        <div className="row">
            <div className="col-8 offset-2">
                <hr style={hrStyle} className="w-100"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 offset-md-2">
                <h4>Careers</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 offset-md-2">
                <strong>The Hangar Interactive</strong>
            </div>
            <div className="col-md-5 offset-md-1">
                <strong>Full-time - Back-end Developer</strong>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 offset-md-2">
                <p>Oct 2017 - Oct 2018</p>
            </div>
            <div className="col-md-5 offset-md-1">
                <p>I worked as a Back-end Developer in projects like Marriott-Hotels.com, GBC-Education.org and more. Mostly using technologies such as Laravel, WordPress, SASS, Javascript, Node, Gulp, Bower, PHP, Lando, Docker, Pantheon, WP-Engine, Jenkins and more. I also was introduced to working with Git Flow, coding standards and code reviews.</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> Costa Rica | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg> <a alt="" target="_blank" rel="noopener noreferrer" href="http://thehangar.cr">http://thehangar.cr</a></p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 offset-md-2">
                <strong>Profimercadeo</strong>
            </div>
            <div className="col-md-5 offset-md-1">
                <strong>Full-time - Senior Web Master</strong>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 offset-md-2">
                <p>Feb 2016 - Sep 2017</p>
            </div>
            <div className="col-md-5 offset-md-1">
                <p>I learned a lot of website security and monitoring, malware removal, SEO optimization, website development with CMS Joomla and WordPress plugin and theme development from scratch, Linux Server Management, Bash Scripting, WHM/Cpanel and more. I implemented usage of git for collaborative development.</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg> Costa Rica | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg> <a alt="" target="_blank" rel="noopener noreferrer" href="https://profimercadeo.com/">https://profimercadeo.com/</a></p>
            </div>
        </div>
    </div>
    );
}


export default withNamespaces()(Experience);