const idFromHash = location.hash.substring(1)
let oneMovieContainer = document.getElementById('editMove')
    // let form = document.createElement('form');
let saveButton = document.createElement('BUTTON')

const findOneMovie = (idFromHash) => {
    console.log(idFromHash)
    const movieFind = allMovie.find((movie) => {
        if (movie.id === idFromHash) {
            return movie
        }
    })
    console.log(movieFind)
    let titled = document.createElement('input');
    titled.setAttribute("name", "editedTile")
    titled.value = movieFind.title
    let year = document.createElement('input');
    year.setAttribute("name", "editedYear")
    year.value = movieFind.releasedYear
    let label = document.createElement("LABEL")
    labelText = document.createTextNode("watched")
    label.appendChild(labelText)
    let watched = document.createElement('input');
    watched.setAttribute("name", "editedWatch")
    watched.setAttribute("type", "checkbox")
    console.log(movieFind.watched)
    if (movieFind.watched) {
        watched.checked = true
    }
    label.appendChild(watched)
    oneMovieContainer.appendChild(titled);
    oneMovieContainer.appendChild(year);
    oneMovieContainer.appendChild(label);
    oneMovieContainer.appendChild(saveButton)
    console.log('done')
}

findOneMovie(idFromHash)

oneMovieContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    const editedMovie = allMovie.filter((movie) => {
        if (movie.id === idFromHash) {
            movie.id = movie.id;
            movie.title = e.target.editedTile.value
            movie.releasedYear = e.target.editedYear.value
            movie.watched = e.target.editedWatch.checked
            if (movie.watched) {
                console.log(true)
            } else {
                console.log(false)
            }
            console.log(e.target.editedWatch.checked)
        }
        return movie
    })
    setMovieInStorage(allMovie)
    location.assign(`/index.html`)
    allMovieContainer.innerHTML = ''
    renderMovies(allMovie)
})