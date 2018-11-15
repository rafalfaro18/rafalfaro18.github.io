import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Experience from './Experience';
import Abilities from './Abilities';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
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
}

export default App;
