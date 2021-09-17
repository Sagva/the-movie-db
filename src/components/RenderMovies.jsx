import React from "react"
import MovieList from "./MovieList"

const RenderMovies = (props) => {
    const { movieList, errorMessage } = props
    if (movieList && movieList.length > 0) {
        return (
            <MovieList movieList={movieList} />
        )
    } else if (movieList && movieList.length === 0) {
        return (
           <div className='warning'>Sorry, no movies found</div>
        )
    }
    else if (errorMessage) {
        return (
            <div className="container my-3">Some error has occurred {errorMessage} </div>
        )
    }
    return (
        <div className="container my-3">Loading... </div>
    )
}

export default RenderMovies
