import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/* Containers */
import Homepage from './pages/homepage';
import About from './pages/about';
import Projects from './pages/projects';
import Resume from './pages/resume'
import Contact from './pages/contact';


const App = () => (
    <Switch>
        <Route exact path="/">
            <Homepage/>
        </Route>    
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/resume">
            <Resume/>
        </Route> 
        <Route path="/projects">
            <Projects/>
        </Route> 
        <Route path="/contact">
            <Contact/>
        </Route>  
        <Route path="*">
            <Redirect to="/" />
        </Route>   
    </Switch>
);

export default App;
