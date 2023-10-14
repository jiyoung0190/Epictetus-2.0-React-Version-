import React from 'react';
const SearchBar = () => {
return (
        <div className="search-container">
            <form className="search-bar" action="">
                <img className="magnifier" src="../../images/search.svg" alt="search_img" />
                <input className="search-placeholder" type="text" placeholder="Search" />
            </form>
        </div>
    );
};
export default SearchBar;


