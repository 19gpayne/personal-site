import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Containers */
import Homepage from './pages/homepage';
import About from './pages/about';


const App = () => (
    <Switch>
        <Route exact path="/">
            <Homepage/>
        </Route>    
        <Route path="/about">
            <About/>
        </Route>   
    </Switch>
);

export default App;
