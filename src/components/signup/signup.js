import React from 'react';
import { TextField } from '@material-ui/core';

class SignUp extends React.Component {
    render() {
        return (
            <form>
                <TextField type="text" label="E-mail" />
                <TextField type="password" label="Password" />
            </form>
        )
    }
}

export default SignUp;