import React from "react";
import { Link } from "react-router-dom"; // Importing Link



// The app should display 3 random topics (so when fetching get 3 randomly) and apply that to the code

// When I click on any of those topics I should go to a page full of pictures of that topic



const Nav = () => {

    return (

    <nav className="main-nav">

     <ul>

         <li><Link to="/cats">Cats</Link></li>
         <li><Link to="/dogs">Dogs</Link></li>
         <li><Link to="/computers">Computers</Link></li>


     </ul>

    </nav>

    )
}


export default Nav;

