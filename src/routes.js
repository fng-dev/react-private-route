import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoute';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello World</h1>}></Route>
            <PrivateRoutes exact path='/app' component={() => <h1>Route Logado!</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
