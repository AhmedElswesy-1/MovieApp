const movieModel = require('../models/movieModel')

AddMovie=async (req,res)=>{
    const movieData={
        title:req.body.title,
        category:req.body.category,
        rate:req.body.rate,
        description:req.body.description,
        image:req.body.image
    }
    const movie=new movieModel(movieData)
   await movie.save((err,movieSaved)=>{
        if(!err) return res.json(movieSaved)
        res.status(500).json({msg:'DB ERROR'})
    })
}
GetAllMovies=async (req,res)=>{
   await movieModel.find({},(err,movies)=>{
        if(!err) return res.json(movies)
        res.status(500).json({msg:"DB ERROR"})
    })
}
GetMovieById=async(req,res)=>{
    const {id}=req.params
   await movieModel.findById(id,(err,movie)=>{
        if(!err) return res.json(movie)
        res.status(500).json({msg:"DB ERROR"})
    })
}
GetMovieByCategory=async(req,res)=>{
    const {category}=req.params
  await  movieModel.find({category},(err,movie)=>{
        if(!err) return res.json(movie)
        console.log(err);
        res.status(500).json({msg:"There is An Errror "})
    })
}
GetMovieByTitle=async(req,res)=>{
    const {title}=req.params
   await movieModel.find({title},(err,movie)=>{ 
        if(!err) return res.json(movie)
        console.log(err);
        res.status(505).json({msg:"DB ERROR in getting by title"})
    })
}
GetMovieByRate=async(req,res)=>{
    const {rate}=req.params
   await movieModel.find({rate},(err,movie)=>{ 
        if(!err) return res.json(movie)
        console.log(err);
        res.status(505).json({msg:"DB ERROR in getting by title"})
    })
}
EditMovie=async(req,res)=>{
    const {id}=req.params
    const data=req.body
   await movieModel.updateOne({"_id":id},data,(err,movie)=>{
        if(!err) return res.json(movie)
        res.status(500).json({meg:"DB ERROR"})
    })
}
DeleteMovie=async (req,res)=>{
    const {id}=req.params
  await  movieModel.deleteOne({"_id":id},(err,movie)=>{
        if(!err) return res.json(movie)
        res.status(500).json({meg:"DB ERROR"})
    })
}
module.exports={GetAllMovies,GetMovieByCategory,
    GetMovieById,GetMovieByRate,GetMovieByTitle,AddMovie,DeleteMovie,EditMovie}