import React from 'react'
import Movies from './Movies'

const Movie_list = ({aflem}) => {
  return (
    <div id='movies' style={{display:'flex' , flexWrap:"wrap" , justifyContent:'space-evenly'}} >
      {/*  useing map function to iterate over each movie in array of object in the movies
    and passing every single movie as props to movie card component */}
    {aflem.map(film=> <Movies film={film} />  )}
    </div>
  )
}

export default Movie_list