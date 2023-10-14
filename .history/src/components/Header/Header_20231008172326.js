import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const Header = () => {
return (
    <header>
        <Logo />
        <Navigation />
        <SearchBar />
    </header>
    );
};
export default Header;