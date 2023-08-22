import React from 'react';
import Photo from './Photo';


function PhotoContainer(){

    // Mock data for photos

    const photos = [

        // List of photo URLs
    ];

    return (

    <div className="photo-container">

        <h2>Results</h2>
        <ul>

            {photos.length > 0 ? (photos.map((photo, index) => (


                <Photo key={index} src={photo} />

            ))
            ) : (

                <li className="not-found">

                    <h3>No Results Found</h3>
                    <p>Your search did not return any results. Please try again.</p>
                </li>

            )}

            }

        </ul>

    </div>

    )
}


export default PhotoContainer;

