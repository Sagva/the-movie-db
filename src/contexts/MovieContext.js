import {createContext, useState, useEffect} from 'react'
import { useQuery } from 'react-query';
import {getLatestMovies, getPopularMovies, getTopRatedMovies, getSearchedMovies} from '../serveces/API'
import {addPosterLink} from '../utilities/addPosterLink'

export const MovieContext = createContext()

const MovieContextProvider = (props) => {
    const [search, setSearch] = useState(null)
    
    const [latestMovies, setLatestMovies] = useState(null)
    const [popularMovies, setPopularMovies] = useState(null)
    const [topRatedMovies, setTopRatedMovies] = useState(null)
    const [searchedMovies, setSearchedMovies] = useState(null)

    const {data:latest, isError:errorLatest } = useQuery('latestMovies', getLatestMovies)
    const {data:popular, isError:errorPopular} = useQuery('popularMovies', getPopularMovies)
    const {data:topRated, isError:errorTopRated} = useQuery('topRated', getTopRatedMovies)
    const {data:searched, isError:errorSearched} = useQuery(['searched', { search }], () => getSearchedMovies(search))


    useEffect(()=> {
        console.log(`search`,search);
        
    }, [search])

    useEffect(()=> {
        console.log(`searchedMovies`,searchedMovies);
       
    }, [searchedMovies])

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
        if(searched) {
            setSearchedMovies(addPosterLink(searched.results))
            
        }
        
    }, [latest, popular, topRated, searched])


    const values = {
        latestMovies,
        popularMovies,
        topRatedMovies,
        errorLatest,
        errorPopular,
        errorTopRated,
        setSearch,
        searchedMovies,
        errorSearched
    }

    return ( 
        <MovieContext.Provider value={values}>
            {props.children}
        </MovieContext.Provider>
     );
}
 
export default MovieContextProvider;