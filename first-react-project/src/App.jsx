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
import NotFound from "./components/NotFound.jsx";
import axios from "axios";


let tags = "cats"; // the firt 2 calls are not detected
const perPage = 24;



const App = () => {

    const [tags, setTags] = useState(null)
    const [fetchedData, setFetchedData] = useState(null);


    useEffect(() => {

        const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=${perPage}&format=json&nojsoncallback=1`;


        // Fetching data here using axios
        axios.get(apiUrl) // Sending a GET request
            .then(response => {
                // This block of code will run when the request is succesful
                console.log(response.data); // Accessing the parsed JSON data
                setFetchedData(response.data);
                console.log(fetchedData)

            })
            .catch(error => {
                // This block of code runs when there's an error
                console.error('Error fetching data:', error);

            });

    }, [tags]); // Updates when tags changes

    return (
        <Router>
            <div className="container">
                <SearchForm setTags={setTags} /> {/*Passing setTags as a prop*/}
                <Nav setTags={setTags} /> {/* Pass setTags as a prop */}
                <Routes>
                    <Route path="/" element={<Home title="Home Page" />} />
                    <Route path="/cats" element={<Cats title="Cats Page" />} />
                    <Route path="/dogs" element={<Dogs title="Dogs Page" />} /> {/* Use element prop */}
                    <Route path="/computers" element={<Computers title="Computers Page" />} />
                    <Route path="/search/:query" element={<PhotoContainer location={location}/>}/>
                    {!fetchedData &&
                        <Route path="*" element={<NotFound title="404 ERROR"/>}/>
                    }
                </Routes>
                {fetchedData && <PhotoContainer fetchedData={fetchedData} location={location} />}
            </div>
        </Router>
    );
};





export default App;








