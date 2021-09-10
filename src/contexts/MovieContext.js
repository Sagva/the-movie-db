import {createContext, useState, useEffect} from 'react'
import { useQuery } from 'react-query';
import {getLatestMovies, getPopularMovies, gettTopRatedMovies} from '../serveces/API'
import {addPosterLink} from '../utilities/addPosterLink'
export const MovieContext = createContext()

const MovieContextProvider = (props) => {

    const [latestMovies, setLatestMovies] = useState(null)
    const [popularMovies, setPopularMovies] = useState(null)
    const [topRatedMovies, setTopRatedMovies] = useState(null)

    const {data:latest, isError:errorLatest } = useQuery('latestMovies', getLatestMovies)
    const {data:popular, isError:errorPopular} = useQuery('popularMovies', getPopularMovies)
    const {data:topRated, isError:errorTopRated} = useQuery('topRated', gettTopRatedMovies)

       
    useEffect(()=> {
        if(latest) {
            setLatestMovies(addPosterLink(latest.results))
        }
        if(popular) {
            setPopularMovies(addPosterLink(popular.results))
        }
        if(topRated) {
            setTopRatedMovies(addPosterLink(topRated.results))
        }
    }, [latest, popular, topRated])


    const values = {
        latestMovies,
        popularMovies,
        topRatedMovies,
        errorLatest,
        errorPopular,
        errorTopRated
    }

    return ( 
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;