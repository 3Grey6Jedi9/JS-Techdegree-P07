import React from "react";
import { Link } from "react-router-dom"; // Importing Link



// The app should display 3 random topics (so when fetching get 3 randomly) and apply that to the code

// When I click on any of those topics I should go to a page full of pictures of that topic



const Nav = ({setTags}) => {

    // Generate 3 random topics for navigation

    const topics = ["cats", "dogs", "computers"];
    const randomTopics = topics.sort(() => 0.5 - Math.random()).slice(0,3);

    return (

    <nav className="main-nav">

     <ul>

         {randomTopics.map((topic, index) => (
                    <li key={index}>
                        <Link to={`/${topic}`} onClick={() => setTags(topic)}>
                            {topic.charAt(0).toUpperCase() + topic.slice(1)}
                        </Link>
                    </li>
                ))}

     </ul>

    </nav>

    )
}


export default Nav;

