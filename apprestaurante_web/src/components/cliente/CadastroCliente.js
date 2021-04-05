import React from 'react';
import Profile from '../profile/Profile';
import { Row, Col, Card } from 'react-materialize';
import CadastroClienteForm from './CadastroClienteForm';
import * as services from '../../services/restauranteServices'; 

class CadastroCliente extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            mensagemSucesso: '', 
            mensagemErro: ''
        }
    }
    handleSubmit = (values) =>{
        this.setState({ mensagemSucesso : '', mensagemErro : '' });

        services.postCliente(values)
            .then(
                data => {
                    this.setState({mensagemSucesso: data.message});
                }
            )
            .catch(
                e => {
                    var error = e.response;
                    switch(error.status){
                        case 400 : 
                        this.setState({mensagemErro:'Ocorreram Erros de Validação no preenchimento'});
                        break;
                        case 500 : 
                        this.setState({mensagemErro: error.data.message})
                    }
                }
            )
    }
    render(){
        return(
            <Row>
                <Col m={3} s={12}>
                    <Profile/>
                </Col>
                <Col m={9} s={12}>
                    <Card>
                        <h4><strong>Cadastro de Cliente</strong></h4>
                        <p>
                            <strong className="green-text text-darken-3">
                                {this.state.mensagemSucesso}
                            </strong>
                            <strong className="red-text text-darken-3">
                                {this.state.mensagemErro}
                            </strong>
                        </p>
                        
                        <CadastroClienteForm
                            onSubmit={this.handleSubmit}
                        />
                        
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default CadastroCliente;