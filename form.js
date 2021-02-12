document.getElementById('form').addEventListener('submit', function(e) {
    const id = uuidv4()
    e.preventDefault()
    allMovie.push(new Movie(id, e.target.title.value, e.target.releasedYear.value, e.target.watched.checked))
    setMovieInStorage(allMovie)
    allMovieContainer.innerHTML = ''
    renderMovies(allMovie)
})

let editButton
    // render movies in the page
const renderMovies = (allMovie) => {
    allMovie.forEach(movie => {
        let title = document.createElement('h4');
        title.textContent = `Movie Title: ${movie.title}`
        let year = document.createElement('p');
        year.textContent = ` Released Year: ${movie.releasedYear}`
        let watched = document.createElement('p');
        if (movie.watched) {
            watched.textContent = 'You Have Watched it'
        } else {
            watched.textContent = 'You Haven\'t Watched it Yet'
        }
        let movieContainer = document.createElement('div');
        allMovieContainer.appendChild(movieContainer);
        movieContainer.appendChild(title);
        movieContainer.appendChild(year);
        movieContainer.appendChild(watched);
        editButton = document.createElement('button')
        editButton.setAttribute('class', 'edit')
        editButton.textContent = 'Edit'
        movieContainer.appendChild(editButton)
        editButton.addEventListener('click', (e) => {
            e.preventDefault()
            location.assign(`/edit.html#${movie.id}`)
            renderOneMovie(movie.id)
        })
        deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'delete')
        deleteButton.textContent = 'delete'
        movieContainer.appendChild(deleteButton)
        deleteButton.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('deleted')
            deleteMovie(movie.id)

        })
    });
}

renderMovies(allMovie)