import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return ( 
        <div>
            {movies.map((movie, i) => {
                return <MovieCard key={i} movieData={movie}/>
            }) }
        </div>
    );
}
 
export default MovieList;