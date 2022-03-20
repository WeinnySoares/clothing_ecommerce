import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Vitrine      from './pages/vitrine';
import Manager      from './pages/manager';
import Registration from './pages/registration';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Vitrine}/>
                <Route path="/manager" component={Manager}/>
                <Route path="/registration" component={Registration}/>
            </Switch>
        </BrowserRouter>
    );
}