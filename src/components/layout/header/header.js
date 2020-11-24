import './_header.scss';
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.svg';

function Header() {
    return (
        <div className="header">
            <nav className="nav">
                <ul className="nav-menu">
                    <li><Link to="/"><img alt="logo" src={logo}></img></Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;