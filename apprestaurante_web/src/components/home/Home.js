import React from 'react';
import { Row, Col } from 'react-materialize';
import Profile from '../profile/Profile';
import QuemSomos from '../quemsomos/QuemSomos';
import Cardapio from '../cardapio/Cardapio';

const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <Profile />
            <QuemSomos />
        </Col>
        <Col m={9} s={12}>
            <Cardapio />
        </Col>
    </Row>
);

export default Home;