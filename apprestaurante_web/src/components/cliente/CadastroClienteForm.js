import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { Row, Button } from 'react-materialize';
import { renderInputField } from '../../forms/renderInputField';
import { validate } from './CadastroClienteValidate';

let CadastroClienteForm = props => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} autoComplete="off">

            <Row>

                <Field
                    name="nome"
                    type="text"
                    label="Nome do Cliente"
                    component={renderInputField}
                />

                <Field
                    name="email"
                    type="email"
                    label="Endereço de email"
                    component={renderInputField}
                />

                <Field
                    name="telefone"
                    type="text"
                    label="Telefone de Contato"
                    component={renderInputField}
                />

                <Field
                    name="senha"
                    type="password"
                    label="Senha de Acesso"
                    component={renderInputField}
                />

                <Field
                    name="senhaConfirmacao"
                    type="password"
                    label="Confirme sua Senha"
                    component={renderInputField}
                />

                <Button
                    type="submit"
                    waves="light"
                    className="right deep-orange"
                >
                    Realizar Cadastro
                </Button>

            </Row>

        </form>
    )
}
const afterSubmit = (result, dispatch) => {
    dispatch(reset('cadastroCliente'))
}
CadastroClienteForm = reduxForm({
    form: 'cadastroCliente',
    onSubmitSuccess: afterSubmit,
    validate //associando o validador
})(CadastroClienteForm);

export default CadastroClienteForm;