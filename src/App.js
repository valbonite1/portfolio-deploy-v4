import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Pages/HeroSection';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import Project from './components/Pages/Project';
import Contact from './components/Pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route render={({location}) => (
          <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            className="fade"
          >
            <Switch>
              <Route path="/portfolio-deploy-v3" exact component={HeroSection} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/project" component={Project} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} />
        
      </div>
    </Router>
  );
}

export default App;
