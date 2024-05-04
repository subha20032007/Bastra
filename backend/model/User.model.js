const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
name:{
    type:String,
    require:true,
    trim:true
},
email:{
    type:String,
   require:true,
    unique:true      
},
password:{
    type:String,
    require:true,
},
phone:{
    type:String,
    require:true,
},
address:{
    type:String,
    require:true,
}

})

const userModel=mongoose.model("user",userSchema)

module.exports={
    userModel
}
//array,stack,linked list