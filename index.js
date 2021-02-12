let allMovie = getMoviesList()
let allMovieContainer = document.getElementById('allMoviesContainer')

function Movie(id, title, releasedYear, watched) {
    this.id = id
    this.title = title,
        this.releasedYear = releasedYear,
        this.watched = watched
}

// document.getElementById('form').addEventListener('submit', function(e) {
//     const id = uuidv4()
//     e.preventDefault()
//     allMovie.push(new Movie(id, e.target.title.value, e.target.releasedYear.value, e.target.watched.checked))
//     setMovieInStorage(allMovie)
//     allMovieContainer.innerHTML = ''
//     renderMovies(allMovie)
// })