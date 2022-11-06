const mongoose=require('mongoose')

const movieSchema =new mongoose.Schema({
    title:{type:String,minLength:2,unique:true},
    category:{type:String,required:true},
    rate:{type:Boolean,required:true},
    description:{type:String},
    image:{type:String}
})


const movieModel=mongoose.model('movie',movieSchema)

module.exports=movieModel

