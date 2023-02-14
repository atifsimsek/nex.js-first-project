import Movies from '@/mocks/movies.json'
import HomeContainer from '@/containers/home'
async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}


const HomePage = async ({ params }) => {
    await delay(2000)
    let selectedCategroy;

    if (params.category?.length > 0) {
        selectedCategroy = true
    }
    return (
        <>
            <HomeContainer selectedCategory={{
                id: params.category?.[0] || "",
                movies: selectedCategroy ? Movies.results.slice(0, 7) : []
            }} />
        </>
    )
}

export default HomePage