import React from 'react';
import { TextField } from '@material-ui/core';

class Login extends React.Component {
    render() {
        return (
            <form id="login">
                <div>
                    <TextField type="text" label="E-mail" />
                    <TextField type="password" label="Password" />
                </div>
            </form>
        )
    }
}

export default Login;