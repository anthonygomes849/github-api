import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/index';
import Users from './pages/Users/index';


export default function Routes(){
        return(
         <BrowserRouter>
            <Switch>

                <Route path="/detail" exact component={Main}></Route>
                <Route  path="/users"  exact component={Users}>
                </Route>
            </Switch>
         </BrowserRouter>
        );
   
}