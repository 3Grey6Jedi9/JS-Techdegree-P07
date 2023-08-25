import React from 'react';
import { Link } from "react-router-dom"; // Import Link

const SearchForm = () => {
    return (
        <form className="search-form">
            <input type="search" name="search" placeholder="Search" required />
            {/* Use a <button> element for the button appearance */}
            <button type="submit" className="search-button">
            <Link to="/search">
                {/* SVG icon */}
            </Link>
            </button>
        </form>
    );
};


export default SearchForm;
