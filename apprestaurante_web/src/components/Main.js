import React from 'react';
import Home from './home/Home';
import CadastroCliente from './cliente/CadastroCliente';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro-cliente" component={CadastroCliente} />
        </Switch>
    </main>
)

export default Main;