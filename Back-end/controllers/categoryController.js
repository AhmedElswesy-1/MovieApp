const categoryModel=require('../models/categoryModel')

const AddCategory=async(req,res)=>{
    const categoryData= {
        title:req.body.title}
    const category=categoryModel(categoryData)
   await category.save((err,savedCategory)=>{
        if(!err) return res.json(savedCategory)
        res.status(500).json({msg:"DB ERROR"})
    })
}
const GetAllCategories=async(req,res)=>{
  await  categoryModel.find({},(err,Category)=>{
        if(!err) return res.json(Category)
        res.status(500).json({msg:"DB ERROR"})
    })
}
const GetOneCategory=async (req,res)=>{
    const {id}=req.params
  await  categoryModel.findById(id,(err,Category)=>{
        if(!err) return res.json(Category)
        res.status(500).json({msg:"DB ERROR"})
    })
}
const EditCategory=async (req,res)=>{
    const {id}=req.params
    const data=req.body
  await  categoryModel.updateOne({"_id":id},data,(err,Category)=>{
        if(!err) return res.json(Category)
        res.status(500).json({msg:"DB ERROR"})
    })
}
const DeleteCategory=async (req,res)=>{
    const {id}=req.params
    categoryModel.deleteOne({"_id":id},(err,Category)=>{
        if(!err) return res.json(Category)
        res.status(500).json({msg:"DB ERROR"})
    })
}

module.exports={AddCategory,GetAllCategories,GetOneCategory,EditCategory,DeleteCategory}