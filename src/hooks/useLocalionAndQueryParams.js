import React, { useState, useEffect } from 'react';
import { useQueryParam, NumberParam } from 'use-query-params';
import { useLocation } from 'react-router-dom';

const useLocationAndQueryParams = () => {
    //for working back-button in the browser together with paginating
    let location = useLocation() // for looking after changing of url
    const [pageParam, setPageParam] = useQueryParam('page', NumberParam);//ads '?page=' to url, undefined in the beginig
    const [currentPage, setCurrentPage] = useState(1)

    
    useEffect(() => {//every time when the pageParam is changing (when user types url (and a page number) by hand), check if pageParam is the same as currentPage. If not make current page equal to pageParam 
        if(pageParam && currentPage !== pageParam) { 
            setCurrentPage(pageParam)
        }
    }, [pageParam]);

    useEffect(() => {//every time when the currentPage is changing (when butten "Next" in PaginationComponent is clicked), check if currentPage is the same as pageParam. If not make pageParam equal to currentPage 
        if(currentPage && currentPage !== pageParam) {
            setPageParam(currentPage)
        } 
    }, [currentPage]);
    
    useEffect(() => {//first rendering of page  
        if(!pageParam) { //if pageParam is undefined then set it to 1
            setPageParam(1)
        } else {//if user types url (and a page number) by hand, then we get 'page' from url and set it as a pageParam 
            setPageParam(parseInt(location.search.match(/([\d]+)/g)))
        }
    }, []);

    return {
        currentPage,
        setCurrentPage
    }
}
 
export default useLocationAndQueryParams;