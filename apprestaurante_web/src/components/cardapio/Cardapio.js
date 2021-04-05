import React from 'react';
import { Row, Card } from 'react-materialize';
import Col from 'react-materialize/lib/Col';
import * as services from '../../services/restauranteServices';

class Cardapio extends React.Component {

    constructor(props) {
        super(props);

        this.state = { cardapio: [] };
    }

    componentDidMount() {
        services.getCardapio()
            .then(
                data => {
                    this.setState({ cardapio: data });
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            );
    }

    render() {
        console.log(this.state.cardapio);
        return (
            <Card>
                <Row>
                    <h4><strong>Conheça nosso cardápio</strong></h4>
                </Row>
                {
                    this.state.cardapio.map(
                        function (item, i) {
                            return (
                                <Row key={i}>
                                    <Col m={2}>
                                        <img src={services.getApiUrl() + item.foto} className="responsive-img" />
                                    </Col>
                                    <Col m={10}>
                                        <h5><strong>{item.nome}</strong></h5>
                                        <p>{item.descricao}</p>
                                        <h5>{item.preco}</h5>
                                    </Col>                                    
                                </Row>
                            )
                        }
                    )
                }
            </Card>
        )
    }

}

export default Cardapio;