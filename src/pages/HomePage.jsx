import React, { useContext} from 'react';
import MovieList from '../components/MovieList';
import { MovieContext } from '../contexts/MovieContext';

const HomePage = () => {

    const {movies, error} = useContext(MovieContext)

    let content = 'Loading'

    if (movies) {
        content =
            <div className="container" >
                <h1>Home page</h1>
            
                <MovieList movies={movies}/> 
            </div>
    }
    else if (error) {
        content = <div className="container">Some error has occurred {error} </div>
    }

    return (
        <div className='container'>
            {content}
        </div>
    )

    
}
 
export default HomePage;