const API_KEY = '852dfc00';
const API = 'http://www.omdbapi.com/';

export const getMovieByTitle = (title, callback) => {
    const url = `${API}?t=${title}&apikey=${API_KEY}`;

    fetch(url)
        .then(res => res.json())
        .then(callback)
}