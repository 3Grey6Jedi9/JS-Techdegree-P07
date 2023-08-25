import React from "react";
import SearchForm from "./components/SearchForm.jsx";
import Nav from "./components/Nav.jsx";
import PhotoContainer from "./components/PhotoContainer.jsx";
import './index.css';
import apiKey from "./assets/config.js";


const apiKey = apiKey;


const App = () => {


    return (

      <div className="container">

        <SearchForm />
          <Nav />
          <PhotoContainer />

      </div>

    );

};



export default App;


