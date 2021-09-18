import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getTopRatedMovies } from '../serveces/API'
import RenderMovies from '../components/RenderMovies';
import useLocationAndQueryParams from '../hooks/useLocalionAndQueryParams';
import PaginationComponent from '../components/PaginationComponent'

const TopRatedMoviesPage = () => {
    const { currentPage, setCurrentPage } = useLocationAndQueryParams()//custom hook that make possible to go back by using back button in the browser when paginating
    const [topRatedMovies, setTopRatedMovies] = useState(null)
    const { data: topRated, isError: errorTopRated } = useQuery(['topRated', currentPage], () => getTopRatedMovies(currentPage))

    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if (topRated) {
            setTopRatedMovies(addPosterLink(topRated.results)) //turns the path to poster link to actual link
        }
    }, [topRated])

    const paginationValues = {
        currentPage: currentPage,//for rendering number of the page the user is it on
        setCurrentPage: setCurrentPage, //for changing number of page when the user preses button 'next' or 'previous' in the pagination
        totalPages: topRated?.total_pages //for blocking button 'next' when the user is on the last page
    }

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Top-rated Movies</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovies movieList={topRatedMovies} errorMessage={errorTopRated} />
            <PaginationComponent values={paginationValues} />
        </div>
    )


}

export default TopRatedMoviesPage;