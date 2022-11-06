const express=require('express')
const { AddMovie, GetAllMovies, GetMovieById, GetMovieByCategory, GetMovieByTitle, GetMovieByRate, EditMovie, DeleteMovie } = require('../controllers/moviesController')

const router=express.Router()



router.post('/',AddMovie)
router.get('/',GetAllMovies)
router.get('/:id',GetMovieById)
router.get('/category/:category',GetMovieByCategory)
router.get('/title/:title',GetMovieByTitle)
router.get('/rate/:rate',GetMovieByRate)
router.put('/:id',EditMovie)
router.delete('/:id',DeleteMovie)

module.exports=router