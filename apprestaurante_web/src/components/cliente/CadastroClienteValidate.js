export const validate = values => {

    const errors = {};

    if(!values.nome){
        errors.nome = 'Por favor, informe o seu nome.';
    }

    if(!values.email){
        errors.email = 'Por favor, informe o seu email.';
    }
    
    if(!values.telefone){
        errors.telefone = 'Por favor, informe o seu telefone.';
    }

    if(!values.senha){
        errors.senha = 'Por favor, informe a sua senha.';
    }

    if(!values.senhaConfirmacao){
        errors.senhaConfirmacao = 'Por favor, confirme a sua senha.';
    }

    if(values.senha != values.senhaConfirmacao){
        errors.senhaConfirmacao = 'Senhas não conferem.';
    }

    return errors;
}