import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/",{
    dbName: "partik22",
}).then(()=>console.log("connect")).catch((e)=>console.log(e));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const User = mongoose.model("User",userSchema)

 const app = express();
 app.use(express.json());

 app.get("/",(req,res)=>{
    res.send("done")
 })

 app.post("/user/all",async(req,res)=>{
  const {name,email,password} = req.body;

   await User.create({
    name,email,password,
   })  

   res.json({
    succes :"true",
    done:"hwuh"
   })
 })
   
 app.get("/user/get",async(req,res)=>{

    const user = await User.find({})
    console.log(req.query)
    res.json({
        succes :"true",
        user,
       })
     })


     app.get("/userid", async(req,res)=>{
        const {id} = req.body
          
        const user = await User.findById(id)
     
        res.json({
            user,
        })

     })



 app.listen(5000,()=>{
    console.log("done")
 })