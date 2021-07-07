import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Containers */
import Homepage from './pages/homepage';


const App = () => (
    <Switch>
        <Route path={'/'} component={Homepage} />
    </Switch>
);

export default App;
