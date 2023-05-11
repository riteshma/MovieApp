import React from 'react'
import './App.css'
import axios from 'axios';
import { useState } from 'react';
import MovieComponents from './Components/MovieComponents'
export default function App() 
{

    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updateTimeoutId] = useState();
    const [movieList, updateMovieList] = useState([]);



    const fetchData = async (searchString) => {

        const response = await axios.get('https://api.tvmaze.com/search/shows?q=' + searchString)
        console.log(response.data)
        updateMovieList(response.data)
        console.log(movieList)
    };


const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
};

return (
    <>
        <div className='Header'>
            <div className='AppName'>
                <img className='movieImage' src='/Image/Icon.jpg' alt='' />
                Book Movies
            </div>
            <div className='searchBox'>
                <img className='searchIcon' src='/Image/searchIcon.png' alt='' />
                <input className='searchInput' type='text' placeholder='Search Movie' value={searchQuery} onChange={onTextChange} />
            </div>
        </div>
        <div className='MovieListContainer' >
            {movieList?.length ? movieList.map((movie, index) => (
                <MovieComponents key={index} movie={movie} />
            )) : "No Movie Search"
            }

        </div>
    </>
);
};        
        
    

