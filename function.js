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
    const deleted = allMovie.filter((movie) => {
        if (movie.id !== id) {
            console.log(movie)
            return movie
        }
    })
    setMovieInStorage(deleted)
    allMovie = getMoviesList()
    allMovieContainer.innerHTML = ''
    renderMovies(allMovie)
}