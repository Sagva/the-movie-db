import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getTopRatedMovies } from '../serveces/API'
import RenderMovies from '../components/RenderMovies';

const TopRatedMoviesPage = () => {

    const [topRatedMovies, setTopRatedMovies] = useState(null)
    const { data: topRated, isError: errorTopRated } = useQuery('topRated', getTopRatedMovies)

    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if (topRated) {
            setTopRatedMovies(addPosterLink(topRated.results)) //turns the path to poster link to actual link
        }
    }, [topRated])

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Top-rated Movies</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovies movieList={topRatedMovies} errorMessage={errorTopRated} />
        </div>
    )


}

export default TopRatedMoviesPage;