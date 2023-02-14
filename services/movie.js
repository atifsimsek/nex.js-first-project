const fetchMovieApi = async (pathname, query = "") => {

    const API_URL = "https://api.themoviedb.org/3"
    try {

        const res = await fetch(`${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`);
        return res.json()

    } catch (error) {
        throw new Error(error)
    }

}




const getTopRatedMovies = async () => {
    return fetchMovieApi("/movie/top_rated")
}

const getPopularMovies = async () => {
    return fetchMovieApi("/movie/popular")
}


const getCategories = async () => {
    return fetchMovieApi("/genre/movie/list")
}

const getSingleCategory = async (genreId) => {
    return fetchMovieApi("/discover/movie", `with_genres=${genreId}`)
}


const getMovie = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`)
}


export {
    getTopRatedMovies,
    getPopularMovies,
    getCategories,
    getSingleCategory,
    getMovie
}