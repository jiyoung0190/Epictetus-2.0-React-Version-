import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
return (
    <header>
        <Link to="#" className="logo">
            <img className="logo-img" src="../images/Logo.svg" alt="logo_img" />
            <h1 className="website-name">Epictetus</h1>
        </Link>
        <nav>
            <ul>
            <li><Link to="#">UI Design</Link></li>
            <li><Link to="#">Front-end</Link></li>
            <li><Link to="#">Back-end</Link></li>
            <li><Link to="#">Lainnya</Link></li>
            </ul>
        </nav>
        <div className="search-container">
            <form className="search-bar" action="">
                <img className="magnifier" src="../../images/search.svg" alt="search_img" />
                <input className="search-placeholder" type="text" placeholder="Search" />
            </form>
        </div>
    </header>
    );
};
export default Header;