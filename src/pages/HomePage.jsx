import React, { useContext } from 'react';
import MovieList from '../components/MovieList';
import { MovieContext } from '../contexts/MovieContext';

const HomePage = () => {

    const { latestMovies, popularMovies, topRatedMovies, errorLatest, errorPopular, errorTopRated } = useContext(MovieContext)

    const renderMovie = (movieList, errorMessage) => {
        if (movieList) {
            return (
                <MovieList movies={movieList} />
            )
        } else if (errorMessage) {
            return (
                <div className="container">Some error has occurred {errorMessage} </div>
            )
        }
        return (
            <div className="container">Loading... </div>
        )
    }



    return (
        <div className='container'>
            <h1>Home page</h1>

            <h2>Latest Movies</h2>
            {renderMovie(latestMovies, errorLatest)}

            <h2>Popular Movies</h2>
            {renderMovie(popularMovies, errorPopular)}

            <h2>Top-rated Movies</h2>
            {renderMovie(topRatedMovies, errorTopRated)}
        </div>
    )


}

export default HomePage;