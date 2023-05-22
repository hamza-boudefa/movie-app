import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {
  return (
    <div style={{display:"flex", flexWrap:'wrap'}}>
    {/*  useing map function to iterate over each movie in array of object in the movies
    and passing every single movie as props to movie card component */}
   {movies.map((movies)=> <Movie movies={movies} />)}
    </div>
  )
}

export default MovieList