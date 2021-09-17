import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/'

const api_key = '2b3804bacf762b1be2ea916839739bf9'

export const getLatestMovies = async() => {
    // https://api.themoviedb.org/3/movie/now_playing?api_key=2b3804bacf762b1be2ea916839739bf9&language=en-US&page=1
    const response = await axios.get(`/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getPopularMovies = async() => {
    const response = await axios.get(`3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getTopRatedMovies = async() => {
    const response = await axios.get(`3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getMovieById = async(movieId) => {
    const response = await axios.get(`/3/movie/${movieId}?api_key=${api_key}&append_to_response=credits`)
    return response.data
}
export const getActorById = async(actorId) => {
    const response = await axios.get(`/3/person/${actorId}?api_key=${api_key}&language=en-US&append_to_response=credits`)
    return response.data
}
export const getAllGenres = async() => {
    const response = await axios.get(`3/genre/movie/list?api_key=${api_key}&language=en-US`)
    return response.data.genres
}
export const getMoviesByGenre = async(genreId, page) => {
    const response = await axios.get(`/3/discover/movie?api_key=${api_key}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`)
    return response.data
}


export const getSearchedMovies = async ( page, query ) => {
    console.log(`page`, page)
    console.log(`query`, query)
    const response = await axios.get(`3/search/movie?api_key=${api_key}&query=${query}&page=${page}`)
    return response.data
}