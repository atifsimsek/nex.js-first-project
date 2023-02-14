import CategoriesLoading from '@/components/categories/loading'
import FeaturedMovieLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'


const loading = () => {
  return (
    <div>
      <FeaturedMovieLoading/>
      <CategoriesLoading/>
      <MoviesSectionLoading/>
      <MoviesSectionLoading/>
    </div>
  )
}

export default loading