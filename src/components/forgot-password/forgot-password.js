import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './_forgot-password.scss';

class ForgotPassword extends React.Component {
    render() {
        return (
            <form className="forgot-password" autoComplete="none">
                <TextField type="text" label="E-mail" />
                <Button variant="contained" color="primary">Enviar</Button>
            </form>
        )
    }
}

export default ForgotPassword;