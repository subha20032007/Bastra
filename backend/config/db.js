const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const connection=async()=>{
    try{
       const con=await mongoose.connect(process.env.Url)
       console.log(`Mongodb Connected to ${con.connection.host}`)
    }catch(err){
        console.log(`err in mongodb ${err}`)
    }
}
module.exports={
    connection
}