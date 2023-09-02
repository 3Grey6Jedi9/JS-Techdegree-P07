import React from "react";
import PhotoContainer from "./PhotoContainer.jsx";

const Dogs = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <PhotoContainer category="dogs" />
        </div>
    );
};

export default Dogs;



