import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundRedirect = () => {
    const navigate = useNavigate();

    // Checking if the current path doesn't match specific paths
    const currentPath = window.location.pathname;
    const isInvalidPath = !currentPath.startsWith("/search") &&
        currentPath !== "/" &&
        currentPath !== "/cats" &&
        currentPath !== "/dogs" &&
        currentPath !== "/computers" &&
        currentPath !== "/not-found";

    // If it's an invalid path, we'll navigate to the /not-found page
    if (isInvalidPath) {
        navigate("/not-found");
    }

    // I will return null because the goal of this file is to manage the wrong route not to display any message
    return null;
};

export default NotFoundRedirect;
