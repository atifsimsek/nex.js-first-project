import HomeContainer from '@/containers/home'
import {
    getTopRatedMovies,
    getPopularMovies,
    getCategories,
    getSingleCategory
} from '@/services/movie';


const HomePage = async ({ params }) => {

    let selectedCategroy;

    const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories }] =
        await Promise.all([getTopRatedMovies(), getPopularMovies(), getCategories()])


    if (params.category?.length > 0) {
        const { results } = await getSingleCategory(params.category[0])
        selectedCategroy = results
    }
    return (
        <>
            <HomeContainer
                popularMovies={popularMovies}
                topRatedMovies={topRatedMovies}
                categories={categories}
                selectedCategory={{
                    id: params.category?.[0] || "",
                    movies: selectedCategroy ? selectedCategroy.slice(0, 7) : []
                }} />
        </>
    )
}

export default HomePage