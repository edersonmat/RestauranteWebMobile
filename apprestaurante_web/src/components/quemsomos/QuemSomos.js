import React from 'react';
import { Row, Card } from 'react-materialize';
import * as services from '../../services/restauranteServices';

class QuemSomos extends React.Component {

    constructor(props) {
        super(props);

        this.state = { descricao: '' };
    }

    componentDidMount() {
        services.getRestaurante()
            .then(
                data => {
                    this.setState({ ...data });
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            );
    }

    render() {
        return (
            <Card>
                <Row>
                    <h5>Quem Somos</h5>
                </Row>
                <Row>
                    <p>{this.state.descricao}</p>
                </Row>
            </Card>
        )
    }

}

export default QuemSomos;