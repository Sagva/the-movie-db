import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const api_key = '2b3804bacf762b1be2ea916839739bf9'

export const getLatestMovies = async() => {
    // https://api.themoviedb.org/3/movie/now_playing?api_key=2b3804bacf762b1be2ea916839739bf9&language=en-US&page=1
    const response = await axios.get(`movie/now_playing?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getPopularMovies = async() => {
    const response = await axios.get(`movie/popular?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getTopRatedMovies = async() => {
    const response = await axios.get(`movie/top_rated?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}
export const getMovieById = async(movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${api_key}&append_to_response=credits`)
    return response.data
}
export const getActorById = async(actorId) => {
    const response = await axios.get(`person/${actorId}?api_key=${api_key}&language=en-US&append_to_response=credits`)
    return response.data
}
export const getAllGenres = async() => {
    const response = await axios.get(`genre/movie/list?api_key=${api_key}&language=en-US`)
    return response.data.genres
}
export const getMoviesByGenre = async(genreId, page) => {
    const response = await axios.get(`discover/movie?api_key=${api_key}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`)
    return response.data
}

//search https://api.themoviedb.org/3/search/movie?api_key=2b3804bacf762b1be2ea916839739bf9&query=fight club
export const getSearchedMovies = async(query) => {
    if(query) {
        const response = await axios.get(`search/movie?api_key=${api_key}&query=${query}&page=1`)
        console.log(`inside getSearchedMovies response.data`, response.data)
        return response.data
    }
}