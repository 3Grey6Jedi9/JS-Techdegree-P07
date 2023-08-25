import React from "react";
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


const App = () => {
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








