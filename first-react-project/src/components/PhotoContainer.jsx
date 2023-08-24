// This component will manage the photo results and handle state

import React, {useState} from "react";
import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";

const PhotoContainer = () => {

    const photoUrls = []; // URLs of images here


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


