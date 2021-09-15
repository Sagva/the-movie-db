import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre, getAllGenres } from '../serveces/API'
import MovieCardWithDetails from '../components/MovieCardWithDetails'
import PaginationComponent from '../components/PaginationComponent'
import {findGengeName} from '../utilities/findGenreAName'

const MoviesByGenrePage = () => {
    const { id } = useParams() //genre's id
    const { data: genres} = useQuery([`genresList`], getAllGenres)
    const [genreName, setGenreName] = useState(null)
    
    useEffect(() => {
        if(genres) {
            setGenreName(findGengeName(genres, id))
        }
    }, [genres, id]);

    const [currentPage, setCurrentPage] = useState(1)
    
    const { data, isError } = useQuery([`moviesByGenre-${id}`, { id, currentPage }], () => getMoviesByGenre(id, currentPage))
    

    const paginationValues = {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
        totalPages: data?.total_pages
    }
    
    const renderMovieList = () => {
        if (data) {
            return (
                <div>
                    <h2 className='my-4 text-center'>Top 20 {genreName} Movies </h2>
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
        <div className='container'>
            {renderMovieList()}
        </div>
    );
}

export default MoviesByGenrePage;