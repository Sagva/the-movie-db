import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getPopularMovies } from '../serveces/API'
import RenderMovies from '../components/RenderMovies';

const PopularMoviesPage = () => {

    const [popularMovies, setPopularMovies] = useState(null)
    const {data:popular, isError:errorPopular} = useQuery('popularMovies', getPopularMovies)

    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if(popular) {
            setPopularMovies(addPosterLink(popular.results))
        }
    }, [popular])

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Popular Movies</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovies movieList={popularMovies} errorMessage={errorPopular} />
        </div>
    )


}

export default PopularMoviesPage;