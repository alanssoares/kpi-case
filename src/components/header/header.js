import React from 'react'
import Login from '../login/login';
import SignUp from '../signup/signup';
import Home from '../../pages/home';
import {Link, Route } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/sign-up">Sign up</Link></li>
                </ul>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />
            </div>
        )
    }
}

export default Header;