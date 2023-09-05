import React, { useState, useEffect } from "react";
import Photo from "./Photo.jsx";
import axios from "axios";
import apiKey from "../assets/config.js";
import { useParams, useLocation } from "react-router-dom";

const PhotoContainer = ({ category}) => { // category is any of the defaults topics, since they are treated in a different way
    const [photoUrls, setPhotoUrls] = useState([]); // Managing photos
    const [photoIds, setIds] = useState([]); // Identifying photos
    const [query, setQuery] = useState(''); // managing queries
    const [message, setmessage] = useState(null); // No data message

    // Getting the search query
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');
    const { query: urlQuery } = useParams();

    const [isLoading, setIsLoading] = useState(false); // Managing loading

// Updating the message and query values and restarting the PhotoUrls and Ids values to avoid conflicts
    useEffect(() => {

        setPhotoUrls([]);
        setIds([]);

        if (category) {
            setQuery(category); // Use category as the query
            setmessage(null);
        } else if (urlQuery) {
            setQuery(urlQuery);
            setmessage('There is not data related to your quest')
        } else if (searchQuery) {
            setQuery(searchQuery);
            setmessage('There is not data related to your quest')
        } else {
            setQuery('');
            setmessage(null);

        }
    }, [urlQuery, searchQuery, category]);


    useEffect(() => { // fetching data using axios and updating the PhotoUrls and the Ids
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

    const resultsFound = photoUrls.length > 0; // It will be used to manage the data not found message


    // Displaying photos
    return (
        <div className="photo-container">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <>

                    {resultsFound ? (
                        <ul>
                            {photoUrls.map((url, index) => (
                                <Photo key={photoIds[index]} imageUrl={url} />
                            ))}
                        </ul>
                    ) : (
                        <h3>{message}</h3>
                    )}
                </>
            )}
        </div>
    );
};

export default PhotoContainer;
















