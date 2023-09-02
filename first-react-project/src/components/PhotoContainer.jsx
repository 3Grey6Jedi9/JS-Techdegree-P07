import React, { useState, useEffect } from "react";
import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";
import axios from "axios";
import apiKey from "../assets/config.js";
import { useParams, useLocation } from "react-router-dom";

const PhotoContainer = ({ category }) => { // Accept category as a prop
    const [photoUrls, setPhotoUrls] = useState([]);
    const [photoIds, setIds] = useState([]);
    const [query, setQuery] = useState('');

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');
    const { query: urlQuery } = useParams();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (urlQuery) {
            setQuery(urlQuery);
        } else if (searchQuery) {
            setQuery(searchQuery);
        } else if (category) { // Use the category prop if provided
            setQuery(category);
        } else {
            setQuery('');
        }
    }, [urlQuery, searchQuery, category]);

    useEffect(() => {
        if (query) {
            setIsLoading(true);

            const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

            axios.get(apiUrl)
                .then((response) => {
                    if (response.data.photos && response.data.photos.photo) {
                        const searchUrls = response.data.photos.photo.map(photo => {
                            return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                        });

                        const searchIds = response.data.photos.photo.map(photo => photo.id);

                        setPhotoUrls(searchUrls);
                        setIds(searchIds);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [query]);

    const resultsFound = photoUrls.length > 0;


    return (
        <div className="photo-container">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    {category === "cats" ? (
                        <h2>Photos of Cats</h2>
                    ) : category === "dogs" ? (
                        <h2>Photos of Dogs</h2>
                    ) : category === "computers" ? (
                        <h2>Photos of Computers</h2>
                    ) : (
                        <h2>Search Results for: {query}</h2>
                    )}
                    <ul>
                        {photoUrls.map((url, index) => (
                            <Photo key={photoIds[index]} imageUrl={url} />
                        ))}

                        {!resultsFound && <NotFound />}
                    </ul>
                </>
            )}
        </div>
    );
};

export default PhotoContainer;
















