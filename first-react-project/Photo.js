// Stateless Component


import React from 'react';


function Photo({ src }) {


    return (

        <li>

            <img src={ src } alt="" />

        </li>

    );
}



export default Photo