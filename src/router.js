/**
 * Created by luoming on 2018/5/5
 */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'dva/router';
import dynamic from 'dva/dynamic';
function RouterConfig({ history, app }) {
    const Login = dynamic({
        component: () => import('VIEW/Login')
    })
    const Home = dynamic({
        component: () => import('VIEW/Home')
    })
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/"  exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default RouterConfig;
