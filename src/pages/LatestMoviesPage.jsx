import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getLatestMovies } from '../serveces/API'
import RenderMovies from '../components/RenderMovies';
import useLocationAndQueryParams from '../hooks/useLocalionAndQueryParams';
import PaginationComponent from '../components/PaginationComponent'

const LatestMoviesPage = () => {
    const { currentPage, setCurrentPage } = useLocationAndQueryParams()//custom hook that make possible to go back by using back button in the browser when paginating
    const [latestMovies, setLatestMovies] = useState(null)
    const { data: latest, isError: errorLatest } = useQuery(['latestMovies', currentPage], () => getLatestMovies(currentPage))


    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if (latest) {
            setLatestMovies(addPosterLink(latest.results))
        }
    }, [latest])

    const paginationValues = {
        currentPage: currentPage,//for rendering number of the page the user is it on
        setCurrentPage: setCurrentPage, //for changing number of page when the user preses button 'next' or 'previous' in the pagination
        totalPages: latest?.total_pages //for blocking button 'next' when the user is on the last page
    }

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Latest Movies</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovies movieList={latestMovies} errorMessage={errorLatest} />
            <PaginationComponent values={paginationValues} />
        </div>
    )


}

export default LatestMoviesPage;