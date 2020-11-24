import './index.scss';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/header/header';
import Home from './pages/home';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import ForgotPassword from './components/forgot-password/forgot-password';

ReactDOM.render((
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
  </BrowserRouter>
), document.getElementById('root'));

reportWebVitals();
