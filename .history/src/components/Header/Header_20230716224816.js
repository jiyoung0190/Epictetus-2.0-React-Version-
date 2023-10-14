import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
return (
    <header>
        <Link to="#" className="logo">
            <img className="logo-img" src="../images/Logo.svg" alt="logo_img" />
            <h1 className="website-name">Epictetus</h1>
        </Link>
    </header>
    );
};
export default Header;