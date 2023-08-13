import React from 'react';
// import axios from 'axios';
// I used axios when my api call was in my useEffect and when my api call helper function was in here
import { getStarships } from '../services/sw-api';

// from looking at the api, I know that I'm going to get an array of ships
// even if I get the array from the api call, I'm going to want to access that here,
// so, I should create a state.  
// Because I'm going to make the api call once to get the starships, that sounds like I should have
// a useEffect that only runs on mount
import { useState, useEffect } from 'react';

const Starships = () => {
// create my starships state
    const [starships, setStarships] = useState([]);
    const [numShips, setNumShips] = useState(0);
    // const url = "https://swapi.dev/api/starships/";
    // this was left over from when my helper function was in this file

    // useEffect to get the starships
    // run only on mount []
    // in the past, we have done the api fetch in here, but now we need to use the helper function
    // that implies that 
    // (A) my helper function needs to return my data in the array form that I am looking for
    // (B) i need to import that function here so that I can use it
    // (C) the function returns the array that I will use to set my state



  
    // const getStarships = async () => {
    //     try {
    //         const url = 'https://swapi.dev/api/starships/';
    //         console.log(url)
    //         const response = await axios.get(url);
    //         console.log(response.data)
    //         return response.data;
    //     }
    //     catch (err) {
    //         console.error(err.message);
    //     }
    // }


// const getStarships = async () => {
//     console.log('in getStarships')
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//     return data; 
// }



// why am i doing what i'm doing here? 
// because if i don't, i get a promise and not my data
// i'm calling an async function and i need the promise to be fulfilled before I can 
// set my state variables with the data
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    useEffect(() => {
        getStarships().then((data => {
            setNumShips(data.count);
            setStarships(data.results);
        }));
    }, [])


    return (
        <div>
            <h1>Star Wars Starships</h1>

            <h3>Plan to display my cards here</h3>
            <p> {numShips || 'waiting...'}  </p>
            <ol>
                {   starships && 
                    starships.map((ship) => {
                        return <li>{ship.name}</li>
                    })
                }
            </ol>
        </div>
    );
}

export default Starships;
