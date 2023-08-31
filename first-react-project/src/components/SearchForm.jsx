import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const SearchForm = ({ setTags }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        // Updating tags and triggering data fetching with new tag
        setTags(searchQuery);
        navigate(`/search?q=${searchQuery}`);
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input
                type="text"
                name="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
            />

            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchForm;

