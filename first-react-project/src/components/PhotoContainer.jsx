// This component will manage the photo results and handle state

import React, {useState} from "react";
import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";


let photoUrls = [];

const PhotoContainer = ({fetchedData}) => {

    const PhotoContainer = ({fetchedData}) => {

         photoUrls = fetchedData.photos.photo.map(photo => {
            const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return url;

        });

    }


//Using state to track if there are results

    const [resultsFound, setResultsFound] = useState(photoUrls.length > 0);

    return (

        <div className="photo-container">

            <h2>Results</h2>
            <ul>
                {photoUrls.map((url,index)=> (

                   <Photo key={index} imageUrl={url} />

                ))}

                {!resultsFound && <NotFound/>}

            </ul>

        </div>

    );

};



export default PhotoContainer;


