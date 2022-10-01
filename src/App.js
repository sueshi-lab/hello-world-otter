import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Navbar from './Component/Landing/Navbar.js'
import Landing from './Component/Landing/Landing.js';
import What from './Component/What/What.js';
import Who from './Component/Who/Who.js';
import Where from './Component/Where/Where.js';
import When from './Component/When/When.js';
import Faqs from './Component/FAQs/Faqs.js';
import Contact from './Component/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <div>
        
        <Landing/>
        <What/>
        <Who/>
        <Where/>
        <When/>
        <Faqs/>
        <Contact/>
        <Navbar/>
      </div>
    );
  }
}

export default App;