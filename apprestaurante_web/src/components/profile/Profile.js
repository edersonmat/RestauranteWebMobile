import React from 'react';
import { Row, Card } from 'react-materialize';
import * as services from '../../services/restauranteServices';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = { foto: '', nome: '' };
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
                    <img src={services.getApiUrl() + this.state.foto} className="responsive-img" />
                </Row>
                <Row>
                    <h5 className="deep-orange darken-4 white-text">{this.state.nome}</h5>
                </Row>
            </Card>
        )
    }
}

export default Profile;