const express=require("express")
const app=express()
const  dotenv=require('dotenv')
dotenv.config()
const Port=process.env.PORT||9090

app.get('/',(req,res)=>{
    res.send('WelCome to backend')
})

app.listen(Port,()=>{
    try{
        
    console.log(`Port Run On ${Port}`)
   
     } catch(err){
        console.log(err)
    }
})
