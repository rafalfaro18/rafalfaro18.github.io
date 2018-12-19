
import React from 'react';
import { withNamespaces } from 'react-i18next';

const section_color = '#cad2c5';

const divStyle = {
    backgroundColor: section_color
};

const hrStyle = {
    borderColor: '#fff'
};

const imgMyProject1 = require('./assets/img/marriott-hotels.marriott.com_marriott-hotels-ted.jpg');
const imgMyProject2 = require('./assets/img/www.enchanting-costarica.com.jpg');
const imgMyProject3 = require('./assets/img/www.stayincostarica.com.jpg');
const imgMyProject4 = require('./assets/img/www.tabacon.com.jpg');

    function Projects({ t }){
        return (
        <div className="pt-4 pb-4 container-fluid rar-projects-component" style={divStyle}>
            <div className="text-center row">
                <h2 className="w-100">{t('Projects')}</h2>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <hr style={hrStyle} className="w-100"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-2 mt-2 pb-2">
                    <img alt="" className="img-fluid" src={imgMyProject1} />
                </div>
                <div className="col-md-4 mt-2 pb-2">
                    <img alt="" className="img-fluid" src={imgMyProject2} />
                </div>
                <div className="col-md-4 offset-md-2 mt-2 pb-2">
                    <img alt="" className="img-fluid" src={imgMyProject3} />
                </div>
                <div className="col-md-4 mt-2 pb-2">
                    <img alt="" className="img-fluid" src={imgMyProject4} />
                </div>
            </div>
        </div>
        );
    }

export default withNamespaces()(Projects);
