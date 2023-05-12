import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../MainPage';


export default function MovieInfoComponent(props){
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios.get("https://www.omdbapi.com/?i="+selectedMovie+"&apikey="+API_KEY).then((response) => {
    console.log(response.data)  
    setMovieInfo(response.data)});
  }, [selectedMovie]);
  
 
  return (
    <>
      <div className='container' >
        <img className='coverImage' src={movieInfo?.Poster} />
        <div className='infoColoumn'>
          <div className='movieName' >{movieInfo?.Type} : {movieInfo?.Title}</div>
          <div className='movieName' >IMDB Rating : <span className='span1' >{movieInfo?.imdbRating}</span></div>
          <div className='movieName' >Year: <span className='span1' >{movieInfo?.Year}</span></div>
          <div className='movieName' >Language : <span className='span1' >{movieInfo?.Language}</span></div>
          <div className='movieName' >Runtime : <span className='span1' >{movieInfo?.Runtime}</span></div>
          <div className='movieName' >Released: <span className='span1' >{movieInfo?.Released}</span></div>
          <div className='movieName' >Genre: <span className='span1' >{movieInfo?.Genre}</span></div>
          <div className='movieName' >Director: <span className='span1' >{movieInfo?.Director}</span></div>
          <div className='movieName' >Actors: <span className='span1' >{movieInfo?.Actors}</span></div>
          <div className='movieName' >Plot: <span className='span1' >{movieInfo?.Plot}</span></div>
        </div>
        <div className='close' onClick={()=>props.onMovieSelect()} >X</div>
        <div className='book'>
        <h1 className='tickets'>Tickets</h1>
        <tabel>
        <tr>
        <td><button>8:00 AM</button></td>
        <td><button>11:00 AM</button></td>
        <td><button>1:00 PM</button></td>
        </tr>
        <tr>
        <td><button>3:00 PM</button></td>
        <td><button>5:00 PM</button></td>
        <td><button>8:00 PM</button></td>
        </tr>
        </tabel>
        <div></div>
        </div>
      </div>
    </>
  )
}
