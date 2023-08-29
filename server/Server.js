const express =require("express")
require('dotenv').config
const mongoose= require('mongoose')

const app=express()


const DBconnect=async()=>{

   try {
    
       const  conn = await  mongoose.connect('mongodb+srv://jackson:iEicc8epafm76w5B@cluster0.1gol8zx.mongodb.net/?retryWrites=true&w=majority',{

        useNewUrlParser: true,
        useUnifiedTopology: true,
       

       })
      
       console.log(`Mongodb connected ${conn.connection.host}`)

   } catch (error) {
      
    console.log(`connection errror ${error.message}`)

    process.exit(1)


   }

}


DBconnect()

app.get("/",(req,res)=>{

    res.send("jackson")
   
   })
  
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server is runnning on port ${PORT}` ))
