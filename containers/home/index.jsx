import React from 'react'
import movies from "@/mocks/movies.json"
import FeaturedMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import genres from "@/mocks/genres.json"
import MoviesSection from '@/components/movies-section'

const HomeContainer = () => {

  return (
    <div>
      <FeaturedMovie movie={movies.results[0]} />
      <Categories categories={genres.genres.slice(0,5)}/>
      <MoviesSection title={"Popular Films"} movies={movies.results.slice(1,7)} />
    </div>
  )
}

export default HomeContainer