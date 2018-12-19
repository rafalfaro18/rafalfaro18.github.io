import React from 'react';
import './App.css';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Header from './Header';
import Profile from './Profile';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import Footer from './Footer';

  function App({ t }) {
    
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    const langStyle = {
      position : "fixed",
      top : "0",
      backgroundColor: "rgba(0,0,0,0.4)"
    };

    const langBtnStyle = {
      backgroundColor : "transparent",
      color: "#fff",
      border: "1px solid #fff"
    };
    
    return (
      <div className="App h-100">
        <Header/>
        <Profile/>
        <Experience/>
        <Abilities/>
        <Projects/>
        <Footer/>
        <div style={langStyle} className="lang-switcher">
          <button style={langBtnStyle} onClick={() => changeLanguage('es')}>es</button>
          <button style={langBtnStyle} onClick={() => changeLanguage('en')}>en</button>
        </div>
      </div>
    );
  }

  export default withNamespaces()(App);
