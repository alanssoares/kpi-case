import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './_login.scss';

class Login extends React.Component {
    render() {
        return (
            <form className="login" autoComplete="none">
                <TextField type="text" label="E-mail" />
                <TextField type="password" label="Password" />
                <Link to="/forgot-password">Esqueceu a senha?</Link>
                <Button variant="contained" color="primary">Login</Button>
                <Link className="center" to="/sign-up">Ainda não possui uma conta? Cadastre-se!</Link>
            </form>
        )
    }
}

export default Login;