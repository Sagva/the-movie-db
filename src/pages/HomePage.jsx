import React, {useEffect} from 'react';
import MovieList from '../components/MovieList';
import { useQuery } from 'react-query';
import {getLatestMovies} from '../serveces/API'

const HomePage = () => {
    const {data, isLoading, error} = useQuery('latestMovies', getLatestMovies)

    useEffect(()=> {
        console.log(`data`, data)
    }, [data])

    if(isLoading) {return(<div className="container">Loading...</div>  )}
    if(error) {return(<div className="container">Some error has occurred {error} </div>)}


    if(data) {
        return(<div>
            <h1>Home page</h1>
            
             <MovieList movies={data.results}/> 
        </div>  )
    }

    
}
 
export default HomePage;