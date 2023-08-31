import React, { useState, useEffect } from "react";
import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";
import axios from "axios";
import apiKey from "../assets/config.js"; // Make sure to import apiKey

const PhotoContainer = ({ fetchedData, location }) => {
    const [photoUrls, setPhotoUrls] = useState([]);
    const [photoIds, setIds] = useState([]);

    const searchQuery = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        if (fetchedData && fetchedData.photos && fetchedData.photos.photo) {
            const urls = fetchedData.photos.photo.map(photo => {
                return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            });

            const ids = fetchedData.photos.photo.map(photo => photo.id);

            setPhotoUrls(urls);
            setIds(ids);
        }
    }, [fetchedData]);

    useEffect(() => {
        if (searchQuery) {
            const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`;

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
        }
    }, [searchQuery]);

    const resultsFound = photoUrls.length > 0;

    return (
        <div className="photo-container">
            <h2>{searchQuery ? `Search Results for: ${searchQuery}` : 'Results'}</h2>

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




