const express=require('express')
const router=express.Router()
const {AddUser,GetAllUsers,GetUser,EditUser,DeleteUser,RegisterUser,LoginUser}=require('../controllers/userController')
const auth=require('../middlewares/auth')
router.post('/register',RegisterUser)
router.post('/login',LoginUser)
router.post("/**",auth,(req,res)=>{
    res.status(200).send("HI MERN STACK")
})
router.post("/",AddUser)
router.get('/',GetAllUsers)
router.get("/:id",GetUser)
router.put("/:id",EditUser)
router.delete("/:id",DeleteUser)




module.exports=router


