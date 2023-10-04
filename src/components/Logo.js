import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
return (
        <Link to="#" className="logo">
            <img className="logo-img" src="../images/Logo.svg" alt="logo_img" />
            <div className="website-name">Epictetus</div>
        </Link>
    )
};
export default Logo;