import React from 'react';
import Loader from './app/components/loader';
import Menu from './app/components/menu';
import Home from './app/components/home';
import Resume from './app/components/resume';
import Skills from './app/components/skills';
import Portfolio from './app/components/portfolio';
import Contact from './app/components/contact';
import VisitorCounter from './visitorCounter';
import PageNotFound from './404';

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
        <VisitorCounter />
        <section id="body">
          <div className="container">
            <Switch>
              <Route path={["/", "/cv"]} exact>
                <Menu />
                <Home />
              </Route>
              <Route path="/cv/resume" exact>
                <Menu />
                <Resume />
              </Route>
              <Route path="/cv/skills" exact>
                <Menu />
                <Skills />
              </Route>
              <Route path="/cv/portfolio" exact>
                <Menu />
                <Portfolio />
              </Route>
              <Route path="/cv/contact" exact>
                <Menu />
                <Contact />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
      
    </div>
  );
}

export default App;
