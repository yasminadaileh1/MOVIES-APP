let allMovie = getMoviesList()
let allMovieContainer = document.getElementById('allMoviesContainer')

function Movie(title, releasedYear, watched) {
    this.title = title,
        this.releasedYear = releasedYear,
        this.watched = watched
}



document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()
    allMovie.push(new Movie(e.target.title.value, e.target.releasedYear.value, e.target.watched.checked))
    setMovieInStorage(allMovie)
    allMovieContainer.innerHTML = ''
    renderMovies(allMovie)
})

renderMovies(allMovie)