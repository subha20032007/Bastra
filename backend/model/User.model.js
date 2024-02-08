const mongoose=require("mongoose")

const userSchema=mongoose.schema({
name:String,
age:Number,
email:String,
pass:String
})

const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}