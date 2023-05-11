import React from 'react'

export default function MovieComponents(props) {
   const {name,premiered,genres,language} = props.movie;
   
  return (
    <>
    <div className='MovieContainer'> 
    <img className='CoverImage' src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"  alt=''/>
    <div className='MovieName'>{name}</div>
     <span className='span'>premiered: {premiered}</span>
     <span className='span' >genres: {genres} </span>
     <span className='span' >language: {language}</span>
    
    </div>
    </>
  )
}
