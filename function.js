// save in storage
const setMovieInStorage = (allMovie) => {
    localStorage.setItem('movies', JSON.stringify(allMovie))
}

// get from storage
const getMoviesList = () => {
    let moviesFromStorge = localStorage.getItem('movies')
    if (moviesFromStorge !== null) {
        return JSON.parse(moviesFromStorge)
    } else {
        return []
    }
}

const deleteMovie = (id) => {
    console.log('after click')
    const deleted = allMovie.filter((movie) => {
        if (movie.id !== id) {
            // console.log(movie)
            return movie
        }
    })
    setMovieInStorage(deleted)
    getMoviesList()
    allMovieContainer.innerHTML = ''
    renderMovies(deleted)
}