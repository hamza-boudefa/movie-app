import React from 'react'
import Movies from './Movies'

const Movie_list = ({aflem}) => {
  return (
    <div id='movies' style={{display:'flex' , flexWrap:"wrap" , justifyContent:'space-evenly'}} >
    {aflem.map(film=> <Movies film={film} />  )}
    </div>
  )
}

export default Movie_list