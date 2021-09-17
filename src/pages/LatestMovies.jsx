import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getLatestMovies } from '../serveces/API'
import RenderMovie from '../components/RenderMovie';

const LatestMovies = () => {

    const [latestMovies, setLatestMovies] = useState(null)
    const {data:latest, isError:errorLatest } = useQuery('latestMovies', getLatestMovies)

    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if(latest) {
            setLatestMovies(addPosterLink(latest.results))
        }
    }, [latest])

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Latest Movies</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovie movieList={latestMovies} errorMessage={errorLatest} />
        </div>
    )


}

export default LatestMovies;