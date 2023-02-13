import styles from './moviesSection.module.css'
import Image from "next/image"
import Link from "next/link"

const MoviesSection = ({ title, movies }) => {

    const filteredMovies = movies.filter(movie => movies[5] !== movie)

    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.movies}>
                {filteredMovies.map((movie) => {
                   return (
                        <div className={styles.movie} key={movie.id}>
                            <Link href={`/movie/${movie.id}`}>
                                <Image
                                    fill
                                    unoptimized
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                >
                                </Image>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesSection