let allMovie = getMoviesList()
let allMovieContainer = document.getElementById('allMoviesContainer')

function Movie(id, title, releasedYear, watched) {
    this.id = id
    this.title = title,
        this.releasedYear = releasedYear,
        this.watched = watched
}