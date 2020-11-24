import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './_signup.scss';

class SignUp extends React.Component {
    render() {
        return (
            <form className="sign-up" autoComplete="none">
                <TextField type="text" label="Nome" />
                <TextField type="text" label="Sobrenome" />
                <TextField type="text" label="E-mail" />
                <TextField type="password" label="Password" />
                <Button variant="contained" color="primary">Cadastrar</Button>
            </form>
        )
    }
}

export default SignUp;