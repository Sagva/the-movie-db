import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie'

const api_key = '2b3804bacf762b1be2ea916839739bf9'

//https://api.themoviedb.org/3/movie/now_playing?api_key=2b3804bacf762b1be2ea916839739bf9&language=en-US&page=1

//https://api.themoviedb.org/3/movie/popular?api_key=2b3804bacf762b1be2ea916839739bf9&region=SE&language=en-US&page=1

//https://api.themoviedb.org/3/movie/top_rated?api_key=2b3804bacf762b1be2ea916839739bf9&language=en-US&region=SE&page=1

export const getLatestMovies = async() => {
    const response = await axios.get(`now_playing?api_key=${api_key}&language=en-US&page=1`)
    return response.data
}

export default {
    getLatestMovies
}