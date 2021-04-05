import React from 'react';
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar className="deep-orange darken-4">
            <li><NavLink to="/">Página inicial</NavLink></li>
            <li><NavLink to="cadastro-cliente">Cadastro de Clientes</NavLink></li>
        </Navbar>
    </Row>
);

export default Header;