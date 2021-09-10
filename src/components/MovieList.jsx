import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return ( 
        <div className='d-flex flex-wrap justify-content-center'>
            
            {movies.map((movie, i) => {
                return <MovieCard key={i} movieData={movie}/>
            }) }
        </div>
    );
}
 
export default MovieList;