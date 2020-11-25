import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import UserDataService from '../../services/user.service';
import './_forgot-password.scss';

function ForgotPassword() {

    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState('');

    const postForgotPassword = () => {
        UserDataService.forgotPassword({
            email,
        }).then(() => {
            <Redirect to='/' />;
        }).catch(() => {
            setIsError(true);
        });
    };

    return (
        <form className="forgot-password" autoComplete="none">
            <TextField type="text" label="E-mail" autoComplete="none"
            value={email}
            onChange={e => { setEmail(e.target.value); }} />
            <Button variant="contained" color="primary" onClick={postForgotPassword}>Enviar</Button>
            {isError && <Alert severity="warning">E-mail ou senha incorreta!</Alert>}
        </form>
    )
}

export default ForgotPassword;