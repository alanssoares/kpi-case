import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/home';
import Login from '../login/login';
import SignUp from '../signup/signup';
import ForgotPassword from '../forgot-password/forgot-password';
import { AuthContext } from '../../context/auth';

function App(props) {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    };

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </AuthContext.Provider>
    )
}

export default App;