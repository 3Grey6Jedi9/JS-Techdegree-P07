import React from "react";
import PhotoContainer from "./PhotoContainer.jsx";

const Dogs = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <PhotoContainer category="dogs" /> {/* Displaying dogs-related photos */}
        </div>
    );
};

export default Dogs;



