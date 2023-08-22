import React from 'react';

import './css/index.css';

import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';


function App() {


    return (

        <div className="container">

            <SearchForm />
            <MainNav />
            <PhotoContainer />

        </div>

    );

}


export default App;

