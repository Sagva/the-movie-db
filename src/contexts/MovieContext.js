import {createContext, useState, useEffect} from 'react'
import { useQuery } from 'react-query';
import {getLatestMovies} from '../serveces/API'

export const MovieContext = createContext()

const MovieContextProvider = (props) => {

    const [movies, setMovies] = useState(null)
    const {data, error} = useQuery('latestMovies', getLatestMovies)

    
    useEffect(()=> {
        if(data) {
            const moviesWithPosters = data.results.map((movie) => {
                movie.posterLink = `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
                return movie
            })
            setMovies(moviesWithPosters)
        }
    }, [data])


    const values = {
        movies,
        
        error
    }

    return ( 
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;