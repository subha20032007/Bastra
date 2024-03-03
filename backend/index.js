const express=require("express")
const dotenv=require("dotenv")
const app=express()
dotenv.config()
app.get('/',(req,res)=>{
    res.send('WelCome to backend')
})

app.listen(process.env.PORT,()=>{
    console.log(`Port Run On ${process.env.PORT}`)
})
//12345678