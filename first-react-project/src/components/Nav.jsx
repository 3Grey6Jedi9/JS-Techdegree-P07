//Here I define the 3 defaults tags

import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ setTags }) => {
    const initialTags = ["cats", "dogs", "computers"];

    return (
        <nav className="main-nav">
            <ul>
                {initialTags.map((tag, index) => (
                    <li key={index}>
                        <Link to={`/${tag}`} onClick={() => setTags(tag)}> {/*Creating the links*/}
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;


