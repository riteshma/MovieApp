import React from 'react'

export default function MovieComponents(props) {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <>
      
        <div className='MovieContainer' onClick={() => props.onMovieSelect(imdbID)}>
          <img className='CoverImage' src={Poster} alt='' />
          <div className='MovieName'>{Title}</div>
          <span className='span'>Year: {Year}</span>
          <span className='span' >Type:  {Type} </span>
          <div className='Book'>Book Ticket</div>
        </div>
       
      
    </>
  )
}
