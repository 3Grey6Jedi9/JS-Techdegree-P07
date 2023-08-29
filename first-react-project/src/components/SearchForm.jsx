import React, { useState } from 'react';

const SearchForm = ({ setTags }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Update tags and trigger data fetching with new tag
        setTags(searchQuery);
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

