const express=require('express')
const { AddCategory, GetAllCategories, GetOneCategory, EditCategory, DeleteCategory } = require('../controllers/categoryController')
const router=express.Router()

router.post('/',AddCategory)
router.get('/',GetAllCategories)
router.get('/:id',GetOneCategory)
router.put('/:id',EditCategory)
router.delete('/:id',DeleteCategory)

module.exports=router