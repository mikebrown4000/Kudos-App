import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
return(
    <nav className="main-nav">
        <div className="nav-title">KUDOS</div>
        <div onClick={props.handleLogout} className="logout-button">Logout</div>
    </nav>
)
}

export default Header;
