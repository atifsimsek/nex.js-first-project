import MovieContainer from '@/containers/movie'
import { notFound } from "next/navigation"
import {getMovie} from '@/services/movie';





const MoviePage = async ({ params, searchParams }) => {
    const { id } = params
    const movie = await getMovie(id)
    // const selectedMovie = movies.results.find(movie => movie.id.toString() === id)

    if (!movie) {
        notFound()
    }

    if (searchParams.error === "true") {
        throw new Error("Error Happened")
    }

    return (
        <MovieContainer movie={movie} />
    )
}

export default MoviePage