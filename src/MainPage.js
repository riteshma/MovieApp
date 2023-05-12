import React from 'react'
import './App.css'
import axios from 'axios';
import { useState } from 'react';
import MovieComponents from './Components/MovieComponents'
import MovieInfoComponent from './Components/MovieInfoComponent';
export const API_KEY = "a9118a3a";
export default function MainPage() {


    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updateTimeoutId] = useState();
    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();

    const fetchData = async (searchString) => {

        const response = await axios.get("https://www.omdbapi.com/?s=" + searchString + "&apikey=" + API_KEY);
        console.log(response.data)
        updateMovieList(response.data.Search)
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
                    <input className='searchInput' type='text' placeholder='Search Movie Here' value={searchQuery} onChange={onTextChange} />
                </div>
            </div>
            {selectedMovie && ( <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>)}
            <div className='MovieListContainer' >
                {movieList?.length ? movieList.map((movie, index) => (
                    <MovieComponents
                        key={index}
                        movie={movie}
                        onMovieSelect={onMovieSelect}
                    />
                )) : 
                <img className='bollywood' src='Image/bollywood.jpg'></img>
               
                
                }

            </div>
        </>
    );
};



