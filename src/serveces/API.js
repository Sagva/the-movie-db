import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie'

const api_key = '2b3804bacf762b1be2ea916839739bf9'

export const getLatestMovies = async() => {
    const response = await axios.get(`now_playing?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getPopularMovies = async() => {
    const response = await axios.get(`popular?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getTopRatedMovies = async() => {
    const response = await axios.get(`top_rated?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getMovieById = async(movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=credits`)
    return response.data
}

export default {
    getLatestMovies,
    getPopularMovies,
    getTopRatedMovies,
    getMovieById
}