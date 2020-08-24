import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SuitAPI from './pages/suitAPI';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SuitAPI} />  
        </Switch>
    </BrowserRouter>
)

export default Routes;