import React from "react";
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/services';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/ContactUs';
import Team from './pages/Team';
import './components/style.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return ( 
    <div>
      <Router>
        <Header/>
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/services">
                <Service/>
              </Route>
              <Route path="/portfolio">
                <Portfolio/>
              </Route>
              <Route path="/teams">
                <Team/>
              </Route>
              <Route path="/contact">
                <Contacts/>
              </Route>
          </Switch>
          <div className="spacer"></div>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
