import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundRedirect = () => {
    const navigate = useNavigate();

    // Check if the current path doesn't match specific paths
    const currentPath = window.location.pathname;
    const isInvalidPath = !currentPath.startsWith("/search") &&
        currentPath !== "/" &&
        currentPath !== "/cats" &&
        currentPath !== "/dogs" &&
        currentPath !== "/computers" &&
        currentPath !== "/not-found"; // Add this check

    // If it's an invalid path, navigate to the /not-found page
    if (isInvalidPath) {
        navigate("/not-found");
    }

    // Return a message for invalid paths
    return null;
};

export default NotFoundRedirect;
