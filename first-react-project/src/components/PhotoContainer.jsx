import React, { useState, useEffect } from "react";
import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";
import axios from "axios";
import apiKey from "../assets/config.js"; // Make sure to import apiKey
import { useParams, useLocation } from "react-router-dom";

const PhotoContainer = () => {
    const [photoUrls, setPhotoUrls] = useState([]);
    const [photoIds, setIds] = useState([]);

    const searchQuery = new URLSearchParams(useLocation().search).get('q');
    const { query } = useParams();

    useEffect(() => {
        if (query) {
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
                });
        } else if (searchQuery) {
            const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`;

            axios.get(apiUrl)
                .then((response) => {
                    if (response.data.photos && response.data.photos.photo) {
                        const urls = response.data.photos.photo.map(photo => {
                            return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                        });

                        const ids = response.data.photos.photo.map(photo => photo.id);

                        setPhotoUrls(urls);
                        setIds(ids);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                });
        }
    }, [query, searchQuery]);

    const resultsFound = photoUrls.length > 0;

    return (
        <div className="photo-container">
            <h2>Search Results for: {query}</h2>


            <ul>
                {photoUrls.map((url, index) => (
                    <Photo key={photoIds[index]} imageUrl={url} />
                ))}

                {!resultsFound && <NotFound />}
            </ul>
        </div>
    );
};

export default PhotoContainer;





