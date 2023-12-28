import axios from 'axios';


const baseURL = "https://api.themoviedb.org/3";
const KEY = "b8999c34735e65003074ef0d1b66827f";

async function getMovies() {
    const url = `${baseURL}/trending/movie/day?api_key=${KEY}`
    const {data} = await axios.get(url);
    return data.results;
};

async function getSearchMovies( query) {
    const url = `${baseURL}/search/movie?api_key=${KEY}&query=${query}`
    const {data} = await axios.get(url);
    return data.results;
};

async function getMovieDetails(movieId) {
    const url = `${baseURL}/movie/${movieId}?api_key=${KEY}`
    const {data} = await axios.get(url);
    return data;
};

async function getMovieCast(movieId) {
    const url = `${baseURL}/movie/${movieId}/credits?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

async function getMovieReviews(movieId) {
    const url = `${baseURL}/movie/${movieId}/reviews?api_key=${KEY}`
    const response = await axios.get(url);
    return response.data;
};

export {getMovies, getSearchMovies, getMovieDetails, getMovieCast, getMovieReviews}