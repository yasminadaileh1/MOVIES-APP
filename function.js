// save in storage
const setMovieInStorage = (allMovie) => {
    localStorage.setItem('movies', JSON.stringify(allMovie))
}


// get from storage
const getMoviesList = () => {
    let moviesFromStorge = localStorage.getItem('movies')
    if (moviesFromStorge !== null) {
        // console.log(moviesFromStorge)
        return JSON.parse(moviesFromStorge)
    } else {
        return []
    }
}

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
    });

}