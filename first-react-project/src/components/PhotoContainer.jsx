import React, { useState, useEffect } from "react";
import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";

const PhotoContainer = ({ fetchedData }) => {
    const [photoUrls, setPhotoUrls] = useState([]);
    const [photoIds, setIds] = useState([]);

    useEffect(() => {
        const urls = fetchedData.photos.photo.map(photo => {
            return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        });

        const ids = fetchedData.photos.photo.map(photo => photo.id)

        setPhotoUrls(urls);
        setIds(ids);
    }, [fetchedData]);

    const resultsFound = photoUrls.length > 0;

    return (
        <div className="photo-container">
            <h2>Results</h2>
            {console.log(resultsFound)}
            {console.log(photoUrls.length)}
            
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



