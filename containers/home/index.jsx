import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  categories= [],
  selectedCategory
}) => {

  const category = categories.find((genre) => genre.id.toString() === selectedCategory.id)

  return (
    <>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies?.length > 0 && <MoviesSection title={`${category.name}`} movies={selectedCategory.movies} />}
      <MoviesSection title={"Popular Films"} movies={topRatedMovies.slice(0, 7)} />
      <MoviesSection title={"Your Favorites"} movies={popularMovies.slice(0, 9)} />
    </>
  )
}

export default HomeContainer