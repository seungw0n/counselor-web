import React, { Fragment } from 'react';

import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/banner/banner';
import AIConsulting from './components/AIConsulting/AIConsulting'
import Footer from './components/Footer/Footer'
// import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  return (
    <Router>
      <Fragment>
        <NavBar/>
        <Banner/>
        <AIConsulting/>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
