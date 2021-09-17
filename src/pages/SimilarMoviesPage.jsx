import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { addPosterLink } from '../utilities/addPosterLink' //help function that add link to poster to gotten movie
import { getSimilarMovies } from '../serveces/API'
import RenderMovies from '../components/RenderMovies';
import useLocationAndQueryParams from '../hooks/useLocalionAndQueryParams';
import PaginationComponent from '../components/PaginationComponent';

const SimilarMoviesPage = () => {
    const history = useHistory()//to get props that was passed through Link
    const movieTitle = history.location.state.movieTitle
    const { id } = useParams()
    const [similarMovies, setSimilarMovies] = useState(null)
    const { currentPage, setCurrentPage } = useLocationAndQueryParams() //adds '?page=' and synchronizes current page and url page

    //get data from API
    const { data, isError } = useQuery([`similar`, { currentPage, id }], () => getSimilarMovies(currentPage, id))

    useEffect(() => {//as soon as we got data from API add to each movie a link to poster and set it to the state
        if (data) {
            setSimilarMovies(addPosterLink(data.results)) //turns the path to poster link to actual link
        }
    }, [data])

    const paginationValues = {
        currentPage: currentPage,//for rendering number of the page the user is it on
        setCurrentPage: setCurrentPage, //for changing number of page when the user preses button 'next' or 'previous' in the pagination
        totalPages: data?.total_pages //for blocking button 'next' when the user is on the last page
    }

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Movies Similar to '{movieTitle}'</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovies movieList={similarMovies} errorMessage={isError} />
            {similarMovies && similarMovies.length > 0 && <PaginationComponent values={paginationValues} />}
        </div>
    )


}

export default SimilarMoviesPage;