import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies && <div className='bg-black'>
    <div className='-mt-36 relative z-10'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated "} movies={movies.nowTopRatedMovies }/>
    <MovieList title={"Popular "} movies={movies.nowPopularMovies}/>
    <MovieList title={"Upcoming "} movies={movies.nowUpComingMovies}/>
    <MovieList title={"Tollywood "} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer