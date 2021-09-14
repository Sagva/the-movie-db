import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movieList}) => {
    return ( 
        <div className='d-flex flex-wrap justify-content-center justify-content-lg-start'>
            
            { movieList?.map((movie, i) => {
                return (<MovieCard key={i} movieData={movie}/>)
            }) }
        </div>
    );
}
 
export default MovieList;