import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre, getAllGenres } from '../serveces/API'
import MovieCardWithDetails from '../components/MovieCardWithDetails'
import PaginationComponent from '../components/PaginationComponent'
import {findGengeName} from '../utilities/findGenresName'
import useLocationAndQueryParams from '../hooks/useLocalionAndQueryParams';
    

const MoviesByGenrePage = () => {

    const {currentPage, setCurrentPage} = useLocationAndQueryParams()//custom hook that make possible to go back by using back button in the browser when paginating

      
    //for making query to API and rendering the result
    const { id } = useParams() //get genre's id
    const { data: genres} = useQuery([`genresList`], getAllGenres)//query to get all genres names from API
    const [genreName, setGenreName] = useState(null)
    
    useEffect(() => {//as soon as all genres names and chosen genre Id are gotten, find name of chosen genre and set it to the state (so we can render on the page genre's name)
        if(genres) {
            setGenreName(findGengeName(genres, id)) //in the help function uses filter method
        }
    }, [genres, id]);
    
    //make query to get movies by genre's id from API, with current page
    const { data, isError } = useQuery([`moviesByGenre-${id}`, { id, currentPage }], () => getMoviesByGenre(id, currentPage))
    

    const paginationValues = {
        currentPage: currentPage,//for rendering number of the page the user is it on
        setCurrentPage: setCurrentPage, //for changing number of page when the user preses button 'next' or 'previous' in the pagination
        totalPages: data?.total_pages //for blocking button 'next' when the user is on the last page
    }
    
    const renderMovieList = () => {
        if (data) {
            return (
                <div>
                    <h2 className='my-4 text-center'>{genreName} Movies </h2>
                    <div>
                        {data.results.map((movie, i) => <MovieCardWithDetails key={i} movie={movie} />)}
                    </div>
                    <PaginationComponent values={paginationValues} />
                </div>

            )
        } else if (isError) {
            return (
                <div className="container">Some error has occurred </div>
            )
        }
        return (
            <div className="container">Loading... </div>
        )
    }

    return (
        <div className='container mb-5'>
            {renderMovieList()}
        </div>
    );
}

export default MoviesByGenrePage;