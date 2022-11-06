const UserModel=require('../models/usersModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const RegisterUser=async(req,res)=>{
    try{
        const {name,email,Birthday,password}=req.body
        if(!(name&&email&&Birthday&&password)){
            res.status(400).send("All Data is required ")
        }
        const oldUser=await UserModel.findOne({email});
        if (oldUser) {
            return res.status(409).send("User Already Exist . Please Login");
          }
        encryptedPassword=await bcrypt.hash(password,10);
        const user=await UserModel.create({
            name,email:email.toLowerCase(),Birthday,password:encryptedPassword
        });
        const token=jwt.sign({user_id:user._id,email,Birthday}, process.env.TOKEN_KEY,{expiresIn:"3d"});
        user.token=token
        res.status(201).json(user);
    }catch(err){
        console.log(`this is an error ${err}`);
    }
}
const LoginUser=async(req,res)=>{
    
    try{
        const {email,password}=req.body;
        if(!(email&&password)){
            res.status(400).send("all is required")
        }
        const user=await UserModel.findOne({email})
        if(user&&(await bcrypt.compare(password,user.password))){
            const token =jwt.sign(
                {user_id:user._id,email},process.env.TOKEN_KEY,{expiresIn:"3d"}
            )
            user.token=token
            res.status(200).json(user);
        }
        res.status(400).send("invalid")

    }catch(err){
        console.log(`this is an error ${err}`);
    }
}


const AddUser=async (req,res)=>{
    const userData={
        name:req.body.name,
        email:req.body.email,
        Birthday:req.body.Birthday,
        password:req.body.password
    }
    const user=await new UserModel(userData)
    user.save((err,savedUser)=>{
        console.log(savedUser);
        if(!err) return res.json(savedUser)
        console.log(err);
        res.status(500).json({msg:'DB Error'})
    })  
}
const GetAllUsers=async(req,res)=>{
   await UserModel.find({},(err,users)=>{
        if(!err) return res.json(users)
        res.status(500).json({msg:"DB Error"})
    })
}
const GetUser=async(req,res)=>{
    const {id}=req.params
   await UserModel.findById(id,(err,user)=>{
        if(!err) return res.json(user)
        res.status(500).json({msg:'DB Error'})
    })
}
const EditUser=async(req,res)=>{
    const {id}=req.params
    const data=req.body
   await UserModel.updateOne({"_id":id},data,(err,user)=>{
        if(!err) return res.json(user)
        console.log(err);
        res.status(500).json({msg:'Database ERROR'})
    })
}
const DeleteUser=async(req,res)=>{
    const {id}=req.params
   await UserModel.deleteOne({"_id":id},(err,user)=>{
        if(!err) return res.json(user)
        res.status(500).json({msg:'DB error'})
    })
}
module.exports={RegisterUser,LoginUser,AddUser,GetAllUsers,GetUser,EditUser,DeleteUser}