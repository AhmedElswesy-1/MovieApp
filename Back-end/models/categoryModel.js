const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    title:String
})


const categoryModel=mongoose.model('category',categorySchema)

module.exports=categoryModel