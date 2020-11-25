import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useAuth } from '../../context/auth';
import { Redirect } from 'react-router-dom';
import UserService from '../../services/user.service';
import './_signup.scss';

function SignUp() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    const postSignUp = () => {
        UserService.create({
            firstName,
            lastName,
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
        return <Redirect to="/" />;
    }

    return (
        <div>
            <form className="sign-up" autoComplete="none">
                <TextField type="text" label="Nome" autoComplete="none"
                    value={firstName}
                    onChange={e => { setFirstName(e.target.value); }}
                />
                <TextField type="text" label="Sobrenome" autoComplete="none"
                    value={lastName}
                    onChange={e => { setLastName(e.target.value); }}
                />
                <TextField type="text" label="E-mail" autoComplete="none"
                    value={email}
                    onChange={e => { setEmail(e.target.value); }}
                />
                <TextField type="password" label="Password" autoComplete="none"
                    value={password}
                    onChange={e => { setPassword(e.target.value); }} />
                <Button variant="contained" color="primary" onClick={postSignUp}>Cadastrar</Button>

                {isError && <Alert severity="warning">Complete the required fields!</Alert>}
            </form>
        </div>
    )
}

export default SignUp;