

export const addPosterLink = (arr) => {
    const moviesWithPosters = arr.map((movie) => {
        movie.posterLink = `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
        return movie
    })
    return moviesWithPosters
}