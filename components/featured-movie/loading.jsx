import Loading from '../loading'
import styles from './featuredMovie.module.css'

const FeaturedMovieLoading = () => {
  return (
    <div style={{height:278}} className={styles.movieWrapper}>
        <Loading/>
    </div>
  )
}

export default FeaturedMovieLoading