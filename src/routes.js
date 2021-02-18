import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import pasReset from './pages/PasswordReset';
import Publish from './pages/Publish';
import MyAccount from './pages/MyAccount';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Entrar" component={Login} />
                <Route path="/Registrar" component={Register} />
                <Route path="/PasswordReset" component={pasReset} />
                <Route path="/Publicar" component={Publish} />
                <Route path="/MinhaConta" component={MyAccount} />
            </Switch>
        </BrowserRouter>

    );
}