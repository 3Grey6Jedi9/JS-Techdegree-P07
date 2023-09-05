import React from "react";
import PhotoContainer from "./PhotoContainer.jsx";

const Computers = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <PhotoContainer category="computers" /> {/* Displaying computer-related photos */}
        </div>
    );
};

export default Computers;



