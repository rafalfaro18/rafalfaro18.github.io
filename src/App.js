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

    window.foo = changeLanguage;
    
    return (
      <div className="App h-100">
        <Header/>
        <Profile/>
        <Experience/>
        <Abilities/>
        <Projects/>
        <Footer/>
      </div>
    );
  }

  export default withNamespaces()(App);
