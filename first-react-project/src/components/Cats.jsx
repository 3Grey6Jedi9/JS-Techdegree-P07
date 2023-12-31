import React from "react";
import PhotoContainer from "./PhotoContainer.jsx";

const Cats = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <PhotoContainer category="cats" /> {/* Displaying cat-related photos */}
        </div>
    );
};

export default Cats;





