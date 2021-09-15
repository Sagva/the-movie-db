import React, { useContext, useEffect } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import MovieCardWithDetails from '../components/MovieCardWithDetails';

const HistoryPage = () => {

    const { lastShownMovies } = useContext(HistoryContext)
    
    let content = ''

    if(lastShownMovies) {
        content =
        <div>
            <div>
                <h2 className='my-4 ms-3'>Last 10 visited movies</h2>
                <ol>
                    {lastShownMovies && lastShownMovies.map((movie, i) => (
                        <li className='text-start' key={i} >
                          <MovieCardWithDetails movie={movie}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    }
    return (
        <div className='container'>
            {lastShownMovies.length > 0  ? (content) : (<h2 className='my-4' >There is no history yet</h2>)}
        </div>
    )


}

export default HistoryPage;