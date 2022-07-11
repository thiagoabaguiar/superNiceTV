let idMin = 1
let idMax = 25784  // 25784 é o ID máx atual do TMDb

function getMovie() {

    const urlBack = 'http://localhost:3000/'
    const portRandom = getNumberRandom(idMin, idMax)
    const url = `${urlBack}${portRandom}`
    const movie = {
        title: '',
        overview: '',
        year: 0,
        poster: '',
        rating: 0
    }

    fetch(url)
        .then(result => result.json())
        .then(data => {
            movie.title = data.title
            movie.overview = data.overview
            movie.year = data.year
            movie.poster = data.poster
            movie.rating = data.rating
            mountFront(movie)
        })
        .catch(err => console.error(err))

}

function getNumberRandom(idMin, idMax) {

    const id = Math.floor(Math.random() * (idMax - idMin + 1)) + idMin;

    return id

}

function mountFront(movie) {

    const mainEl = document.querySelector('main') 
    const footerEl = document.querySelector('footer')
    mainEl.classList.remove('invisible')
    footerEl.classList.add('moved')

    const titleEl = document.getElementById('title')
    const overviewEl = document.getElementById('overview')
    const yearEl = document.getElementById('year')
    const posterEl = document.getElementById('poster')
    const ratingEl = document.getElementById('rating')

    titleEl.innerText = JSON.stringify(movie.title)
    yearEl.innerText = JSON.stringify(movie.year)
    posterEl.src = movie.poster
    ratingEl.innerText = JSON.stringify(movie.rating)

    // limitando qty de caracteres do overview para não transbordar no front    
    let overviewArray = movie.overview.split('')
    let maxCharacters = 700
    if (overviewArray.length > maxCharacters) {
        console.log(overviewArray)
        let newOverviewArray = overviewArray.slice(0, maxCharacters)
        let newOverview = newOverviewArray.join("")
        overviewEl.innerText = newOverview
        console.log(overviewEl.innerText)

    } else {
        overviewEl.innerText = JSON.stringify(movie.overview)
    }

}