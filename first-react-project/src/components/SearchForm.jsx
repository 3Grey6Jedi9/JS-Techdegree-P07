import React from 'react';

const SearchForm = () => {

    return (

        <form className="search-form">

        <input type="search" name="search" placeholder="Search" required />
            <button type="submit" className="search-button">

                {/* SGV icon */}
            </button>

        </form>

    );

};


export default SearchForm;