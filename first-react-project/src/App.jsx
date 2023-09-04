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
    const [tags, setTags] = useState(null);
    const [fetchedData, setFetchedData] = useState(null);
    const [isDataEmpty, setIsDataEmpty] = useState(false);

    const fetchData = async () => {
        try {
            const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=${perPage}&format=json&nojsoncallback=1`;
            const response = await axios.get(apiUrl);
            const newData = response.data;
            setFetchedData(newData);
            setIsDataEmpty(newData.photos.photo.length === 0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [tags]);

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
                    {fetchedData && isDataEmpty ? ( // Render Not Found based on isDataEmpty
                        <Route path="*" element={<NotFound />} />
                    ) : null}
                </Routes>
                {fetchedData && <PhotoContainer fetchedData={fetchedData} location={location} isDataEmpty={isDataEmpty} />}
            </div>
        </Router>
    );
};




export default App;








