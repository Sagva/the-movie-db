import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre, getAllGenres } from '../serveces/API'
import MovieCardWithDetails from '../components/MovieCardWithDetails'
import PaginationComponent from '../components/PaginationComponent'
import {findGengeName} from '../utilities/findGenreAName'
import { useQueryParam, NumberParam } from 'use-query-params';
    

const MoviesByGenrePage = () => {
    let location = useLocation(); 
    const [pageParam, setPageParam] = useQueryParam('page', NumberParam);
    const [currentPage, setCurrentPage] = useState(1)
    

    useEffect(() => {
        if(pageParam && currentPage !== pageParam) {
            setCurrentPage(pageParam)
        }
    }, [pageParam]);

    useEffect(() => {
        if(currentPage && currentPage !== pageParam) {
            setPageParam(currentPage)
        } 
    }, [currentPage]);

      
    useEffect(() => {
        if(!pageParam) {
            setPageParam(1)
        } else {
            setPageParam(parseInt(location.search.match(/([\d]+)/g)))
        }
         
    }, []);

    const { id } = useParams() //genre's id
    const { data: genres} = useQuery([`genresList`], getAllGenres)
    const [genreName, setGenreName] = useState(null)
    
    useEffect(() => {
        if(genres) {
            setGenreName(findGengeName(genres, id))
        }
    }, [genres, id]);

    
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
        <div className='container'>
            {renderMovieList()}
        </div>
    );
}

export default MoviesByGenrePage;