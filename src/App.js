import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Feature from './components/Feature';
import Works from './components/Works';
import Benefits from  './components/Benefits';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Feature resumeData={resumeData}/>
        <Works resumeData={resumeData}/>
        <Benefits resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;