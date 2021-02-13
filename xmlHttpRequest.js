const request = new XMLHttpRequest()
let randomMovie = document.getElementById('randomMovie')


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        let i = getRandomInt(0, 2)
        console.log(data.Search[i])
        console.log(i)
        let title = document.createElement('h3')
        title.textContent = data.Search[i].Title
        randomMovie.appendChild(title)
        let year = document.createElement('p')
        year.textContent = data.Search[i].Year
        randomMovie.appendChild(year)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json')
request.setRequestHeader("x-rapidapi-key", "f12f47786amsh21cc851878e29cdp105166jsnb6a88f70262f");
request.setRequestHeader("x-rapidapi-host", "movie-database-imdb-alternative.p.rapidapi.com");
request.send()

let backToHome = document.createElement('BUTTON')
backToHome.textContent = 'Back'
randomMovie.appendChild(backToHome)
backToHome.addEventListener('click', (e) => {
    location.assign(`/index.html`)
})