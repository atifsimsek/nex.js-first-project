import React from 'react'
import movies from "@/mocks/movies.json"
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import genres from "@/mocks/genres.json"
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({ selectedCategory }) => {

  const category = genres.genres.find((genre) => genre.id.toString() === selectedCategory.id)

  return (
    <>
      <FeaturedMovie movie={movies.results[0]} />
      <Categories categories={genres.genres.slice(0, 5)} />
      {selectedCategory.movies?.length > 0 && <MoviesSection title={`${category.name}`} movies={selectedCategory.movies} />}
      <MoviesSection title={"Popular Films"} movies={movies.results.slice(0, 7)} />
      <MoviesSection title={"Your Favorites"} movies={movies.results.slice(0, 9)} />
    </>
  )
}

export default HomeContainer