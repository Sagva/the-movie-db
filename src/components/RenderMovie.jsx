import MovieList from "./MovieList"

const RenderMovie = (props) => {
    const { movieList, errorMessage } = props
    if (movieList) {
        return (
            <MovieList movieList={movieList} />
        )
    } else if (errorMessage) {
        return (
            <div className="container my-3">Some error has occurred {errorMessage} </div>
        )
    }
    return (
        <div className="container my-3">Loading... </div>
    )
}

export default RenderMovie
