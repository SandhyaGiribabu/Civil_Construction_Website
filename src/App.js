import React from 'react';
import Landing from './components/Landing'; // Import the LandingPage compone
import Aboutus from './components/Aboutus'; // Import the LandingPage compone
import Footer from './components/Footer'; // Import the LandingPage compone
import Services from './components/Services'; // Import the LandingPage compone
import Contact from './components/Contact'; // Import the LandingPage compone
import Aboutprop from './components/Aboutprop'; // Import the LandingPage compone

import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Landing/>
      <Aboutus/>
      <Aboutprop/>
      <Services/>
      
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;