import React, {Component} from 'react';

const section_color = '#495054';

const divStyle = {
    backgroundColor: section_color
};

class Footer extends Component {
    render(){
        return (
        <div className="container-fluid rar-footer-component" style={divStyle}>
            <p>This is the footer section</p>
        </div>
        );
    }
}

export default Footer;