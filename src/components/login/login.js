import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { Alert } from '@material-ui/lab';
import AuthDataService from '../../services/auth.service';
import './_login.scss';

function Login(props) {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useAuth();

    const postLogin = () => {
        AuthDataService.login({
            email,
            password
        }).then(result => {
            setAuthTokens(result.val());
            setLoggedIn(true);
        }).catch(() => {
            setIsError(true);
        });
    };

    if (isLoggedIn) {
        return <Redirect to='/' />;
    }

    return (
        <form className="login" autoComplete="none">
            <TextField type="text" label="E-mail" autoComplete="none"
                value={email}
                onChange={e => { setEmail(e.target.value); }} />
            <TextField type="password" label="Password" autoComplete="none"
                value={password}
                onChange={e => { setPassword(e.target.value); }} />
            <Link to="/forgot-password">Esqueceu a senha?</Link>
            <Button variant="contained" color="primary" onClick={postLogin}>Login</Button>
            <Link className="center" to="/sign-up">Ainda não possui uma conta? Cadastre-se!</Link>
            {isError && <Alert severity="warning">E-mail ou senha incorreta!</Alert>}
        </form>
    )
}

export default Login;