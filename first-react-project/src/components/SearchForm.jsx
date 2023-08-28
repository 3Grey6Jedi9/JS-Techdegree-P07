import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom"; // Import Link



const SearchForm = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {

        e.preventDefault();
        // Navigating to search results page with search query as parameter

        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;

    };

    return (

    <form className="search-form" onSubmit={handleSearch}>
       <input
           type="text"
           name="search"
           placeholder="Search"
           value = {searchQuery}
           onChange={(e)=> setSearchQuery(e.target.value)}
           required
           />

        <button type="submit" className="search-button">

            Search

        </button>


    </form>

    );

};



export default SearchForm;
