import React, { useState } from 'react'
import { Data } from './Data'
import Movie_list from './components/Movie_list'
import NavBAr from './components/NavBAr'
import AddMovie from './components/AddMovie'

const App = () => {
// movies contain all movies in Data.js
// sending movies as props to Movie_list component
const [movies, setMovies] = useState(Data)

// addMovie get newMovie value and update movies with the new movie
const addMovie=(newMovie)=>{
  setMovies([...movies,newMovie])
}
  return (
    <div>
    <NavBAr/>
    <Movie_list aflem={movies} />
    <AddMovie addMovie={addMovie} />
    </div>
  )
}

export default App