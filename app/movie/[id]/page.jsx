import MovieContainer from '@/containers/movie'
import movies from "@/mocks/movies.json"
import { notFound } from "next/navigation"
import { resolve } from 'styled-jsx/css'

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const MoviePage = async ({ params, searchParams }) => {

    await delay(2000)
    const { id } = params
    const selectedMovie = movies.results.find(movie => movie.id.toString() === id)

    if (!selectedMovie) {
        notFound()
    }

    if (searchParams.error === "true") {
        throw new Error("Error Happened")
    }

    return (
        <MovieContainer movie={selectedMovie} />
    )
}

export default MoviePage