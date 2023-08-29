import React, {useEffect, useState} from "react";
import SearchForm from "./components/SearchForm.jsx";
import Nav from "./components/Nav.jsx";
import PhotoContainer from "./components/PhotoContainer.jsx";
import './index.css';
import apiKey from "./assets/config.js";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Cats from "./components/Cats.jsx";
import Dogs from "./components/Dogs.jsx"; // Make sure this import is correct
import Home from "./components/Home.jsx";
import Computers from "./components/Computers.jsx";
import SearchResults from "./components/SearchResults.jsx";
import NotFound from "./components/NotFound.jsx";
import axios from "axios";


let tags = "sunsets";
let perPage = 24;
const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=${perPage}&format=json&nojsoncallback=1`;



const App = () => {

    const [fetchedData, setFetchedData] = useState(null);


    useEffect(() => {

        // Fetching data here using axios
        axios.get(apiUrl) // Sending a GET request
            .then(response => {
                // This block of code will run when the request is succesful
                console.log(response.data); // Accessing the parsed JSON data
                setFetchedData(response.data);
                if (fetchedData) {
        console.log("Farm value:", fetchedData.photos.photo[0].farm);
    } // I need to give it time to fetche the data
            })
            .catch(error => {
                // This block of code runs when there's an error
                console.error('Error fetching data:', error);

            });

    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <Router>
            <div className="container">
                <SearchForm />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cats" element={<Cats />} />
                    <Route path="/dogs" element={<Dogs />} /> {/* Use element prop */}
                    <Route path="/computers" element={<Computers />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;








