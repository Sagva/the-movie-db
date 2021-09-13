import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMoviesByGenre } from '../serveces/API'
import MovieByGenreCard from '../components/MovieByGenreCard'
import PaginationComponent from '../components/PaginationComponent'

const MoviesByGenrePage = () => {
    const { id } = useParams()

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
                    <h2 className='my-4'>Movies By Genre </h2>
                    <div>
                        {data.results.map((movie, i) => <MovieByGenreCard key={i} movie={movie} />)}
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