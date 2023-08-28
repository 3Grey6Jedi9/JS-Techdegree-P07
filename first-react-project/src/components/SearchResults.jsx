import React, {useEffect, useState} from "react";
import PhotoContainer from "./PhotoContainer";
import axios from 'axios';




const SearchResult = ({location}) => {

    const searchQuery = new URLSearchParams(location.search).get('q');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {

    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=${perPage}&format=json&nojsoncallback=1`;

    axios.get(apiUrl)
        .then((response) => {

            setSearchResults(response.data.photos);

        })
        .catch((error) => {

            console.error('Error fetching search results:', error);

        });

    }, [searchQuery]);

    return (

        <div className="search-results">

        <h2>Search Results for: {searchQuery}</h2>
            <ul>
                {searchResults.map((photo)=> (

                    <li key={photo.id}>

                        <img src={photo.url} alt={photo.title}/>

                    </li>

                ))}

            </ul>

        </div>

    );

};



export default SearchResult;



