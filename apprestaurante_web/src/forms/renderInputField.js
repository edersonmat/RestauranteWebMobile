import React from 'react';
import { Row, Input } from 'react-materialize';

export const renderInputField = ({

    //parametros de entrada..
    type, //tipo do campo (text, email, password, etc)
    label, //rotulo do campo
    input, //propriedades HTML do campo
    meta: { //exibir os erros de validação dos campos
        touched, error
    }
}) => (
    <Row>
        <Input
            type={type}
            label={label}
            {...input}
            s={12}
        />
        {
            touched && (
                error && 
                <span class="red-text text-darken-4 helper-text">{error}</span>
            )
        }
    </Row>
);