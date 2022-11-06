const express=require('express');
const mongoose=require('mongoose')
require('dotenv').config();
const userMiddleware=require('./middlewares/usersMiddlewares')
const usersRouter=require('./routes/usersRoutes')
const movieRouter=require('./routes/movieRoutes')
const categoryRouter=require('./routes/categoryRoutes')
const PORT=process.env.PORT||3005
const URL='mongodb://127.0.0.1:27017/quit'
const app=express()

app.use(['/users','/movie','category'],userMiddleware)
app.use(express.json())
app.use(['/users','/user'],usersRouter)
app.use(['/movie','/movies'],movieRouter)
app.use('/category',categoryRouter)




mongoose.connect(URL,(err)=>{
    if(!err) return console.log(`Database Connected Succesfully`);
    console.log(err);
})
app.listen(PORT,(err)=>{
    if(!err) return console.log(`server starts at ${PORT} `);
})