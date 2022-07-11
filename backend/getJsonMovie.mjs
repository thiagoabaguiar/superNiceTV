import axios from 'axios';
import accessTMDb from './api.mjs'

const imgURL = accessTMDb.IMG_URL

const getJsonMovie = async (movieURL) => {

    let movie = {
        title: '',
        overview: '',
        year: 0,
        poster: '',
        rating: 0,
        status: 'NOT_OK'
    }

    try {

        let result = await axios.get(movieURL)

        movie.title = result.data.title
        movie.overview = result.data.overview
        movie.year = Number((result.data.release_date.split('-', 3)).splice(0, 1))
        movie.poster = `${imgURL}${result.data.poster_path}`
        movie.rating = result.data.vote_average
        movie.status = 'OK'

        if (result.data.poster_path === null){

            movie.poster = './assets/unknown.jpg'

        }
        
        return movie

    } catch (error) {
        
        return movie

    }

}

export default getJsonMovie