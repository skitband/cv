import React from 'react';
import Loader from './app/components/loader';
import Menu from './app/components/menu';
import Home from './app/components/home';
import Resume from './app/components/resume';
import Skills from './app/components/skills';
import Portfolio from './app/components/portfolio';
import Contact from './app/components/contact';
import VisitorCounter from './visitorCounter';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Loader />
      <Router>
        {/* <div className="vcard-profile-description-ft-item" style={{float:'right', marginTop: '10px', marginRight: '15px', color: '#ffffff'}}> <span id="counter-text"> </span> </div> */}
        <VisitorCounter />
        <section id="body">
          <div className="container">
            <Menu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
        </section>
      </Router>
      
    </div>
  );
}

export default App;
