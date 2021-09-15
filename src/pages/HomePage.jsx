import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieList from '../components/MovieList';
import Search from '../components/Search';

const HomePage = () => {

    
    const { 
        latestMovies,
        popularMovies,
        topRatedMovies,
        searchedMovies,
        errorLatest,
        errorPopular,
        errorTopRated,
        errorSearched
    } = useContext(MovieContext)
    

    const renderMovie = (movieList, errorMessage) => {
        if (movieList) {
            return (
                <MovieList movieList={movieList}/>
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
            <Search/>
            <h2 className='my-3 ms-2'>Search result</h2>
            {searchedMovies && renderMovie(searchedMovies, errorSearched)}

            <h2 className='my-3 ms-2'>Latest Movies</h2>
            {renderMovie(latestMovies, errorLatest)}
           

            <h2 className='my-3 ms-2'>Popular Movies</h2>
            {renderMovie(popularMovies, errorPopular)}

            <h2 className='my-3 ms-2'>Top-rated Movies</h2>
            {renderMovie(topRatedMovies, errorTopRated)}
        </div>
    )


}

export default HomePage;