import express from 'express'
import accessTMDb from './api.mjs'
import getJsonMovie from './getJsonMovie.mjs'
import cors from 'cors'

const app = express()
const apiKey = accessTMDb.API_KEY
const baseURL = accessTMDb.BASE_URL

const language = accessTMDb.language

// Enable CORS
app.use(cors())

// Server up
const PORT = 3000
app.listen(PORT, () => console.log('Server UP'))

// Routes (backend admite apenas GET com o ID do filme sendo informado pelo frontend)
app.get('/:id', async (req, res) => {

    const id = req.params.id
    const movieURL = `${baseURL}${id}?${apiKey}&${language}`
    const movieJson = await getJsonMovie(movieURL)

    if (movieJson.status === 'NOT_OK') {

        movieJson.title = 'Ops...'
        movieJson.overview = 'Hoje não é dia de estudar... Bora CODAR!'
        movieJson.year = 1900
        movieJson.poster = './assets/estudar.jpeg'
        movieJson.rating = 0
    
    }

    res.send(movieJson)

}
)