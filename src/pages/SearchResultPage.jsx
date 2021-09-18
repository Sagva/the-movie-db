
import React, { useContext, useEffect, useState } from 'react';
import { getSearchedMovies } from '../serveces/API'
import { useQuery } from 'react-query';
import { SearchContext } from '../contexts/SearchContext';
import RenderMovies from '../components/RenderMovies';
import { addPosterLink } from '../utilities/addPosterLink'
import PaginationComponent from '../components/PaginationComponent';
import useLocationAndQueryParams from '../hooks/useLocalionAndQueryParams';

const SearchResultPage = () => {
    const { searchValue } = useContext(SearchContext) //get query value from user (from navigation -> context -> this file)

    const { currentPage, setCurrentPage, setQueryParam } = useLocationAndQueryParams() //adds  '?page=' and '&query=', and synchronizes current page and url page
    const [searchedMovies, setSearchedMovies] = useState(null)

    //send page and query to API, get data back
    const { data, isError } = useQuery([`searchedMovies`, { currentPage, searchValue }], () => getSearchedMovies(currentPage, searchValue))

    //put gotten data to state
    useEffect(() => {
        if (data) {
            setSearchedMovies(addPosterLink(data.results))
        }
    }, [data])

    //when new query comes from user, add to url 'query=usersQuery'
    useEffect(() => {
        setQueryParam(searchValue)
    }, [searchValue]);

    const paginationValues = {
        currentPage: currentPage,//for rendering number of the page the user is it on
        setCurrentPage: setCurrentPage, //for changing number of page when the user preses button 'next' or 'previous' in the pagination
        totalPages: data?.total_pages //for blocking button 'next' when the user is on the last page
    }

    return (
        <div className='container'>
            <h2 className='my-2 ms-2'>Search Result {searchValue && <span>for "{searchValue}"</span>}</h2>
            {/* Rendermovie returns either MovieList or error message or loading message*/}
            <RenderMovies movieList={searchedMovies} errorMessage={isError} />
            {searchedMovies && searchedMovies.length > 0 && <PaginationComponent values={paginationValues} />}
        </div>
    )
}

export default SearchResultPage;