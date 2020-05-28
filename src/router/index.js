import React from 'react';
import {HashRouter,Route,Switch,hashHistory} from 'react-router-dom';
import { Ocean } from "../page/Ocean.js";
import { Test } from "../page/Test.js";
import { Bing } from "../page/Bing.js"

// import { Tabbar } from '../component/index.js';

const MyRouter = ()=>(
    <HashRouter history={hashHistory}>
        <Switch>
            <Route exact path='/' component={Ocean}></Route>
            <Route exact path='/test' component={Test}></Route>
             <Route exact path='/bing' component={Bing}></Route>
        </Switch>
    </HashRouter>
);

export { MyRouter }